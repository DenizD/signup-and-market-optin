import { useState, useRef } from "react";
import {
  Box,
  Button,
  TextField,
  Link,
  InputAdornment,
  IconButton,
  Alert,
  Typography,
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

const RegisterForm = ({ language, t }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const alertRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setShowError(true);
      setTimeout(() => {
        alertRef.current?.focus();
        setTimeout(() => setShowError(false), 3000);
      }, 100);
      return;
    }

    console.log("Registration data:", formData);
    
    setShowSuccess(true);
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

  const getPasswordVisibilityLabel = (isVisible: boolean, isConfirm: boolean = false) => {
    if (language === 'de') {
      const prefix = isConfirm ? 'Passwort-Bestätigung' : 'Passwort';
      return isVisible ? `${prefix} verbergen` : `${prefix} anzeigen`;
    } else if (language === 'es') {
      const prefix = isConfirm ? 'Confirmación de contraseña' : 'Contraseña';
      return isVisible ? `Ocultar ${prefix.toLowerCase()}` : `Mostrar ${prefix.toLowerCase()}`;
    }
    const prefix = isConfirm ? 'Password confirmation' : 'Password';
    return isVisible ? `Hide ${prefix.toLowerCase()}` : `Show ${prefix.toLowerCase()}`;
  };

  const getPlaceholders = () => {
    if (language === 'de') {
      return {
        firstName: 'Max',
        lastName: 'Mustermann',
        company: 'Musterfirma GmbH',
        email: 'max.mustermann@beispiel.de',
        password: 'Mindestens 8 Zeichen',
        confirmPassword: 'Passwort wiederholen'
      };
    } else if (language === 'es') {
      return {
        firstName: 'Juan',
        lastName: 'Pérez',
        company: 'Empresa Ejemplo S.L.',
        email: 'juan.perez@ejemplo.com',
        password: 'Al menos 8 caracteres',
        confirmPassword: 'Repetir contraseña'
      };
    }
    return {
      firstName: 'John',
      lastName: 'Doe',
      company: 'Example Company Inc.',
      email: 'john.doe@example.com',
      password: 'At least 8 characters',
      confirmPassword: 'Repeat password'
    };
  };

  const placeholders = getPlaceholders();

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      role="form"
      aria-label={language === 'de' ? 'Registrierungsformular' : language === 'es' ? 'Formulario de registro' : 'Registration form'}
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
          {t('registerSuccess')}
        </Alert>
      )}

      {showError && (
        <Alert 
          severity="error"
          ref={alertRef}
          tabIndex={-1}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          {t('passwordMismatch')}
        </Alert>
      )}

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <TextField
          fullWidth
          label={t('firstName')}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder={placeholders.firstName}
          required
          aria-describedby="firstName-helper-text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person color="action" aria-hidden="true" />
              </InputAdornment>
            ),
          }}
          helperText={language === 'de' ? 'Geben Sie Ihren Vornamen ein' : language === 'es' ? 'Ingrese su nombre' : 'Enter your first name'}
          FormHelperTextProps={{
            id: 'firstName-helper-text'
          }}
        />
        <TextField
          fullWidth
          label={t('lastName')}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder={placeholders.lastName}
          required
          aria-describedby="lastName-helper-text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person color="action" aria-hidden="true" />
              </InputAdornment>
            ),
          }}
          helperText={language === 'de' ? 'Geben Sie Ihren Nachnamen ein' : language === 'es' ? 'Ingrese su apellido' : 'Enter your last name'}
          FormHelperTextProps={{
            id: 'lastName-helper-text'
          }}
        />
      </Box>

      <TextField
        fullWidth
        label={t('company')}
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder={placeholders.company}
        aria-describedby="company-helper-text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Business color="action" aria-hidden="true" />
            </InputAdornment>
          ),
        }}
        helperText={language === 'de' ? 'Optional: Geben Sie Ihren Firmennamen ein' : language === 'es' ? 'Opcional: Ingrese el nombre de su empresa' : 'Optional: Enter your company name'}
        FormHelperTextProps={{
          id: 'company-helper-text'
        }}
      />

      <TextField
        fullWidth
        label={t('emailAddress')}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={placeholders.email}
        required
        aria-describedby="email-helper-text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email color="action" aria-hidden="true" />
            </InputAdornment>
          ),
        }}
        helperText={language === 'de' ? 'Geben Sie eine gültige E-Mail-Adresse ein' : language === 'es' ? 'Ingrese una dirección de correo válida' : 'Enter a valid email address'}
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
        placeholder={placeholders.password}
        required
        inputProps={{ 
          minLength: 8,
          'aria-describedby': 'password-helper-text'
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock color="action" aria-hidden="true" />
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
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={language === 'de' ? 'Mindestens 8 Zeichen erforderlich' : language === 'es' ? 'Se requieren al menos 8 caracteres' : 'At least 8 characters required'}
        FormHelperTextProps={{
          id: 'password-helper-text'
        }}
      />

      <TextField
        fullWidth
        label={t('confirmPassword')}
        name="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder={placeholders.confirmPassword}
        required
        aria-describedby="confirmPassword-helper-text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock color="action" aria-hidden="true" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
                aria-label={getPasswordVisibilityLabel(showConfirmPassword, true)}
                tabIndex={0}
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={language === 'de' ? 'Wiederholen Sie Ihr Passwort zur Bestätigung' : language === 'es' ? 'Repita su contraseña para confirmar' : 'Repeat your password to confirm'}
        FormHelperTextProps={{
          id: 'confirmPassword-helper-text'
        }}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ 
          mt: 2, 
          py: 1.5,
          backgroundColor: 'rgb(14, 112, 144)',
          '&:hover': { backgroundColor: 'rgb(10, 90, 115)' },
          '&:focus': { 
            outline: '2px solid rgb(14, 112, 144)',
            outlineOffset: '2px'
          }
        }}
        aria-describedby="register-button-description"
      >
        {t('createAccount')}
      </Button>
      <span id="register-button-description" className="sr-only">
        {language === 'de' ? 'Erstellen Sie Ihr neues Konto' : 
         language === 'es' ? 'Crear su nueva cuenta' : 
         'Create your new account'}
      </span>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="caption" color="text.secondary" role="note">
          {language === 'de' && (
            <>
              Mit der Registrierung stimmen Sie unserer{' '}
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&:focus': { 
                    outline: '2px solid rgb(14, 112, 144)',
                    outlineOffset: '2px'
                  }
                }}
                aria-label="Nutzungsbedingungen öffnen"
              >
                Nutzungsbedingungen
              </Link>
              {' '}&{' '}
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&:focus': { 
                    outline: '2px solid rgb(14, 112, 144)',
                    outlineOffset: '2px'
                  }
                }}
                aria-label="Datenschutzrichtlinie öffnen"
              >
                Datenschutzrichtlinie
              </Link>
              {' '}zu.
            </>
          )}
          {language === 'en' && (
            <>
              By registering, you agree to our{' '}
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&:focus': { 
                    outline: '2px solid rgb(14, 112, 144)',
                    outlineOffset: '2px'
                  }
                }}
                aria-label="Open Terms of Service"
              >
                Terms of Service
              </Link>
              {' '}&{' '}
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&:focus': { 
                    outline: '2px solid rgb(14, 112, 144)',
                    outlineOffset: '2px'
                  }
                }}
                aria-label="Open Privacy Policy"
              >
                Privacy Policy
              </Link>
              .
            </>
          )}
          {language === 'es' && (
            <>
              Al registrarte, aceptas nuestros{' '}
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&:focus': { 
                    outline: '2px solid rgb(14, 112, 144)',
                    outlineOffset: '2px'
                  }
                }}
                aria-label="Abrir Términos de Servicio"
              >
                Términos de Servicio
              </Link>
              {' '}y{' '}
              <Link 
                href="#" 
                underline="hover" 
                sx={{ 
                  color: 'rgb(14, 112, 144)',
                  '&:focus': { 
                    outline: '2px solid rgb(14, 112, 144)',
                    outlineOffset: '2px'
                  }
                }}
                aria-label="Abrir Política de Privacidad"
              >
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
