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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
    <TooltipProvider>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        role="form"
        aria-label={language === 'de' ? 'Registrierungsformular' : language === 'es' ? 'Formulario de registro' : 'Registration form'}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 2, 
            fontWeight: 'bold',
            fontFamily: 'Inter, sans-serif',
            color: '#252A2E',
            textAlign: 'center'
          }}
          component="h2"
        >
          {t('registerHeadline')}
        </Typography>

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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon 
                    icon="user" 
                    style={{ color: '#37474F', fontSize: '1.2rem' }} 
                    aria-hidden="true" 
                  />
                </InputAdornment>
              ),
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon 
                    icon="user" 
                    style={{ color: '#37474F', fontSize: '1.2rem' }} 
                    aria-hidden="true" 
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TextField
          fullWidth
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {t('company')}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Box component="span" sx={{ display: 'inline-flex', cursor: 'help' }}>
                    <FontAwesomeIcon 
                      icon="question-circle" 
                      style={{ color: '#666', fontSize: '0.875rem' }} 
                    />
                  </Box>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('companyTooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </Box>
          }
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder={placeholders.company}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon 
                  icon="building" 
                  style={{ color: '#37474F', fontSize: '1.2rem' }} 
                  aria-hidden="true" 
                />
              </InputAdornment>
            ),
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
        />

        <TextField
          fullWidth
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {t('password')}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Box component="span" sx={{ display: 'inline-flex', cursor: 'help' }}>
                    <FontAwesomeIcon 
                      icon="question-circle" 
                      style={{ color: '#666', fontSize: '0.875rem' }} 
                    />
                  </Box>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('passwordTooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </Box>
          }
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder={placeholders.password}
          required
          inputProps={{ 
            minLength: 8
          }}
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
        />

        <TextField
          fullWidth
          label={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {t('confirmPassword')}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Box component="span" sx={{ display: 'inline-flex', cursor: 'help' }}>
                    <FontAwesomeIcon 
                      icon="question-circle" 
                      style={{ color: '#666', fontSize: '0.875rem' }} 
                    />
                  </Box>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('confirmPasswordTooltip')}</p>
                </TooltipContent>
              </Tooltip>
            </Box>
          }
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder={placeholders.confirmPassword}
          required
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
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  edge="end"
                  aria-label={getPasswordVisibilityLabel(showConfirmPassword, true)}
                  tabIndex={0}
                >
                  <FontAwesomeIcon 
                    icon={showConfirmPassword ? "eye-slash" : "eye"} 
                    style={{ color: '#37474F', fontSize: '1.1rem' }} 
                  />
                </IconButton>
              </InputAdornment>
            ),
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
            backgroundColor: '#43BEAC',
            '&:hover': { backgroundColor: '#30A39D' },
            '&:focus': { 
              outline: '2px solid #43BEAC',
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
                    color: '#43BEAC',
                    '&:focus': { 
                      outline: '2px solid #43BEAC',
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
                    color: '#43BEAC',
                    '&:focus': { 
                      outline: '2px solid #43BEAC',
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
                    color: '#43BEAC',
                    '&:focus': { 
                      outline: '2px solid #43BEAC',
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
                    color: '#43BEAC',
                    '&:focus': { 
                      outline: '2px solid #43BEAC',
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
                    color: '#43BEAC',
                    '&:focus': { 
                      outline: '2px solid #43BEAC',
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
                    color: '#43BEAC',
                    '&:focus': { 
                      outline: '2px solid #43BEAC',
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
    </TooltipProvider>
  );
};

export default RegisterForm;
