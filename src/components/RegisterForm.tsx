
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Link,
  InputAdornment,
  IconButton,
  Alert,
  Typography,
  CircularProgress,
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Person,
  Business,
} from '@mui/icons-material';
import { TranslationKey } from "@/hooks/useTranslations";

interface RegisterFormProps {
  language: string;
  t: (key: TranslationKey) => string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const RegisterForm = ({ language, t }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = language === 'de' ? 'Vorname ist erforderlich' : 
                           language === 'es' ? 'El nombre es requerido' : 
                           'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = language === 'de' ? 'Nachname ist erforderlich' : 
                          language === 'es' ? 'El apellido es requerido' : 
                          'Last name is required';
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = language === 'de' ? 'Passwort muss mindestens 8 Zeichen haben' : 
                          language === 'es' ? 'La contraseña debe tener al menos 8 caracteres' : 
                          'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = language === 'de' ? 'Passwort bestätigen ist erforderlich' : 
                                 language === 'es' ? 'Confirmar contraseña es requerido' : 
                                 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = language === 'de' ? 'Passwörter stimmen nicht überein' : 
                                 language === 'es' ? 'Las contraseñas no coinciden' : 
                                 'Passwords do not match';
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
    console.log("Registration data:", formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);
    }, 2000);
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

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {t('registerSuccess')}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Typography 
            component="label" 
            htmlFor="firstName-input"
            variant="body2" 
            sx={{ 
              display: 'block', 
              mb: 1, 
              fontWeight: 500,
              color: 'text.primary'
            }}
          >
            {t('firstName')} *
          </Typography>
          <TextField
            id="firstName-input"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            error={!!errors.firstName}
            helperText={errors.firstName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Typography 
            component="label" 
            htmlFor="lastName-input"
            variant="body2" 
            sx={{ 
              display: 'block', 
              mb: 1, 
              fontWeight: 500,
              color: 'text.primary'
            }}
          >
            {t('lastName')} *
          </Typography>
          <TextField
            id="lastName-input"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            error={!!errors.lastName}
            helperText={errors.lastName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Box>
        <Typography 
          component="label" 
          htmlFor="company-input"
          variant="body2" 
          sx={{ 
            display: 'block', 
            mb: 1, 
            fontWeight: 500,
            color: 'text.primary'
          }}
        >
          {t('company')}
        </Typography>
        <TextField
          id="company-input"
          fullWidth
          name="company"
          value={formData.company}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Business color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        <Typography 
          component="label" 
          htmlFor="email-register-input"
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
          id="email-register-input"
          fullWidth
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          error={!!errors.email}
          helperText={errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        <Typography 
          component="label" 
          htmlFor="password-register-input"
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
          id="password-register-input"
          fullWidth
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          required
          error={!!errors.password}
          helperText={errors.password || (language === 'de' ? 'Mindestens 8 Zeichen' : language === 'es' ? 'Al menos 8 caracteres' : 'At least 8 characters')}
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
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        <Typography 
          component="label" 
          htmlFor="confirmPassword-input"
          variant="body2" 
          sx={{ 
            display: 'block', 
            mb: 1, 
            fontWeight: 500,
            color: 'text.primary'
          }}
        >
          {t('confirmPassword')} *
        </Typography>
        <TextField
          id="confirmPassword-input"
          fullWidth
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                  aria-label={showConfirmPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
              {language === 'de' ? 'Konto wird erstellt...' : 
               language === 'es' ? 'Creando cuenta...' : 
               'Creating account...'}
            </span>
          </Box>
        ) : (
          t('createAccount')
        )}
      </Button>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
          {language === 'de' && (
            <>
              Mit der Registrierung stimmen Sie unserer{' '}
              <Link href="#" underline="hover" sx={{ color: 'rgb(14, 112, 144)' }}>
                Nutzungsbedingungen
              </Link>
              {' '}&{' '}
              <Link href="#" underline="hover" sx={{ color: 'rgb(14, 112, 144)' }}>
                Datenschutzrichtlinie
              </Link>
              {' '}zu.
            </>
          )}
          {language === 'en' && (
            <>
              By registering, you agree to our{' '}
              <Link href="#" underline="hover" sx={{ color: 'rgb(14, 112, 144)' }}>
                Terms of Service
              </Link>
              {' '}&{' '}
              <Link href="#" underline="hover" sx={{ color: 'rgb(14, 112, 144)' }}>
                Privacy Policy
              </Link>
              .
            </>
          )}
          {language === 'es' && (
            <>
              Al registrarte, aceptas nuestros{' '}
              <Link href="#" underline="hover" sx={{ color: 'rgb(14, 112, 144)' }}>
                Términos de Servicio
              </Link>
              {' '}y{' '}
              <Link href="#" underline="hover" sx={{ color: 'rgb(14, 112, 144)' }}>
                Política de Privacidad
              </Link>
              .
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
