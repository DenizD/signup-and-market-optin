
import { useState, useRef } from "react";
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
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ForgotPasswordModal from './ForgotPasswordModal';
import { TranslationKey } from "@/hooks/useTranslations";

interface LoginFormProps {
  language: string;
  t: (key: TranslationKey) => string;
}

const LoginForm = ({ language, t }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const alertRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { ...formData, rememberMe });
    setShowSuccess(true);
    // Focus the success message for screen readers
    setTimeout(() => {
      alertRef.current?.focus();
      setTimeout(() => setShowSuccess(false), 3000);
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getPasswordVisibilityLabel = (isVisible: boolean) => {
    if (language === 'de') {
      return isVisible ? 'Passwort verbergen' : 'Passwort anzeigen';
    } else if (language === 'es') {
      return isVisible ? 'Ocultar contraseña' : 'Mostrar contraseña';
    }
    return isVisible ? 'Hide password' : 'Show password';
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      role="form"
      aria-label={language === 'de' ? 'Anmeldeformular' : language === 'es' ? 'Formulario de inicio de sesión' : 'Login form'}
    >
      {showSuccess && (
        <Alert 
          severity="success"
          ref={alertRef}
          tabIndex={-1}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          {t('loginSuccess')}
        </Alert>
      )}

      <TextField
        fullWidth
        label={t('emailAddress')}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
        required
        aria-describedby="email-helper-text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon 
                icon="envelope" 
                style={{ color: '#37474F', fontSize: '1.2rem' }} 
                aria-hidden="true" 
              />
            </InputAdornment>
          ),
        }}
        helperText={language === 'de' ? 'Geben Sie Ihre E-Mail-Adresse ein' : language === 'es' ? 'Ingrese su dirección de correo electrónico' : 'Enter your email address'}
        FormHelperTextProps={{
          id: 'email-helper-text'
        }}
      />

      <TextField
        fullWidth
        label={t('password')}
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        placeholder={language === 'de' ? 'Ihr Passwort' : language === 'es' ? 'Tu contraseña' : 'Your password'}
        required
        aria-describedby="password-helper-text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon 
                icon="lock" 
                style={{ color: '#37474F', fontSize: '1.2rem' }} 
                aria-hidden="true" 
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
                aria-label={getPasswordVisibilityLabel(showPassword)}
                tabIndex={0}
              >
                <FontAwesomeIcon 
                  icon={showPassword ? "eye-slash" : "eye"} 
                  style={{ color: '#37474F', fontSize: '1.1rem' }} 
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={language === 'de' ? 'Geben Sie Ihr Passwort ein' : language === 'es' ? 'Ingrese su contraseña' : 'Enter your password'}
        FormHelperTextProps={{
          id: 'password-helper-text'
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              size="small"
              inputProps={{
                'aria-describedby': 'remember-me-description'
              }}
            />
          }
          label={t('rememberMe')}
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
        />
        <span id="remember-me-description" className="sr-only">
          {language === 'de' ? 'Merken Sie sich meine Anmeldedaten für zukünftige Besuche' : 
           language === 'es' ? 'Recordar mis datos de inicio de sesión para futuras visitas' : 
           'Remember my login details for future visits'}
        </span>
        
        <Link 
          component="button" 
          type="button" 
          variant="body2" 
          onClick={(e) => {
            e.preventDefault();
            setShowForgotPassword(true);
          }}
          sx={{ 
            color: '#43BEAC',
            '&:hover': { color: '#30A39D' },
            '&:focus': { 
              outline: '2px solid #43BEAC',
              outlineOffset: '2px'
            }
          }}
          aria-describedby="forgot-password-description"
        >
          {t('forgotPassword')}
        </Link>
        <span id="forgot-password-description" className="sr-only">
          {language === 'de' ? 'Öffnet ein Formular zum Zurücksetzen des Passworts' : 
           language === 'es' ? 'Abre un formulario para restablecer la contraseña' : 
           'Opens a form to reset your password'}
        </span>
      </Box>

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ 
          mt: 2, 
          py: 1.5,
          backgroundColor: '#43BEAC',
          '&:hover': { backgroundColor: '#30A39D' },
          '&:focus': { 
            outline: '2px solid #43BEAC',
            outlineOffset: '2px'
          }
        }}
        aria-describedby="login-button-description"
      >
        {t('signIn')}
      </Button>
      <span id="login-button-description" className="sr-only">
        {language === 'de' ? 'Melden Sie sich mit Ihren Anmeldedaten an' : 
         language === 'es' ? 'Inicie sesión con sus credenciales' : 
         'Sign in with your credentials'}
      </span>

      <ForgotPasswordModal 
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        t={t}
      />
    </Box>
  );
};

export default LoginForm;
