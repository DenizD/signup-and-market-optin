
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
  IconButton,
  Alert,
  Typography,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import ForgotPasswordModal from './ForgotPasswordModal';
import { TranslationKey } from "@/hooks/useTranslations";

interface LoginFormProps {
  language: string;
  t: (key: TranslationKey) => string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm = ({ language, t }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.email) {
      newErrors.email = language === 'de' ? 'E-Mail ist erforderlich' : 
                       language === 'es' ? 'El correo es requerido' : 
                       'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = language === 'de' ? 'Ungültige E-Mail-Adresse' : 
                       language === 'es' ? 'Dirección de correo inválida' : 
                       'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = language === 'de' ? 'Passwort ist erforderlich' : 
                          language === 'es' ? 'La contraseña es requerida' : 
                          'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = language === 'de' ? 'Passwort muss mindestens 6 Zeichen haben' : 
                          language === 'es' ? 'La contraseña debe tener al menos 6 caracteres' : 
                          'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    console.log("Login attempt:", { ...formData, rememberMe });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const getRememberMeTooltip = () => {
    return language === 'de' ? 'Nicht auf öffentlichen Geräten verwenden' :
           language === 'es' ? 'No usar en dispositivos públicos' :
           'Do not use on public devices';
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {t('loginSuccess')}
        </Alert>
      )}

      <Box>
        <Typography 
          component="label" 
          htmlFor="email-input"
          variant="body2" 
          sx={{ 
            display: 'block', 
            mb: 1, 
            fontWeight: 500,
            color: 'text.primary'
          }}
        >
          {t('emailAddress')} *
        </Typography>
        <TextField
          id="email-input"
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          error={!!errors.email}
          helperText={errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-error': {
                '& fieldset': {
                  borderColor: 'error.main',
                },
              },
            },
          }}
        />
      </Box>

      <Box>
        <Typography 
          component="label" 
          htmlFor="password-input"
          variant="body2" 
          sx={{ 
            display: 'block', 
            mb: 1, 
            fontWeight: 500,
            color: 'text.primary'
          }}
        >
          {t('password')} *
        </Typography>
        <TextField
          id="password-input"
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          required
          error={!!errors.password}
          helperText={errors.password}
          aria-describedby={errors.password ? "password-error" : undefined}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  tabIndex={0}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-error': {
                '& fieldset': {
                  borderColor: 'error.main',
                },
              },
            },
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <Tooltip title={getRememberMeTooltip()} arrow placement="top">
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                size="small"
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&.Mui-checked': {
                    color: 'rgb(14, 112, 144)',
                  },
                }}
              />
            }
            label={t('rememberMe')}
            sx={{ 
              '& .MuiFormControlLabel-label': { 
                fontSize: '0.875rem',
                cursor: 'pointer'
              },
              cursor: 'pointer'
            }}
          />
        </Tooltip>
        
        <Link 
          component="button" 
          type="button" 
          variant="body2" 
          onClick={(e) => {
            e.preventDefault();
            setShowForgotPassword(true);
          }}
          sx={{ 
            color: 'rgb(14, 112, 144)',
            '&:hover': { 
              color: 'rgb(10, 90, 115)',
              textDecoration: 'underline'
            },
            padding: '8px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}
          tabIndex={0}
        >
          {t('forgotPassword')}
        </Link>
      </Box>

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        disabled={isLoading}
        sx={{ 
          mt: 2, 
          py: 1.5,
          minHeight: '48px',
          backgroundColor: 'rgb(14, 112, 144)',
          '&:hover': { 
            backgroundColor: 'rgb(10, 90, 115)',
            boxShadow: '0 4px 12px rgba(14, 112, 144, 0.3)'
          },
          '&:disabled': {
            backgroundColor: 'rgba(14, 112, 144, 0.6)',
          },
          boxShadow: '0 2px 8px rgba(14, 112, 144, 0.2)',
          fontWeight: 600,
          fontSize: '1rem'
        }}
      >
        {isLoading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={20} sx={{ color: 'white' }} />
            <span>
              {language === 'de' ? 'Wird angemeldet...' : 
               language === 'es' ? 'Iniciando sesión...' : 
               'Signing in...'}
            </span>
          </Box>
        ) : (
          t('signIn')
        )}
      </Button>

      <ForgotPasswordModal 
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        t={t}
      />
    </Box>
  );
};

export default LoginForm;
