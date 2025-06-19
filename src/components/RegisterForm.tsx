
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
  const [marketingOptIn, setMarketingOptIn] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    console.log("Registration data:", { 
      ...formData, 
      marketingOptIn 
    });
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {showSuccess && (
        <Alert severity="success">
          {t('registerSuccess')}
        </Alert>
      )}

      {showError && (
        <Alert severity="error">
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
                <Person color="action" />
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
                <Person color="action" />
              </InputAdornment>
            ),
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
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Business color="action" />
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
              <Email color="action" />
            </InputAdornment>
          ),
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
        inputProps={{ minLength: 8 }}
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
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
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
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ pt: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={marketingOptIn}
              onChange={(e) => setMarketingOptIn(e.target.checked)}
              size="small"
            />
          }
          label={
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
              {t('marketingOptIn')}
            </Typography>
          }
          sx={{ alignItems: 'flex-start', mt: 1 }}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 2, py: 1.5 }}
      >
        {t('createAccount')}
      </Button>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          {t('termsAndPrivacy')}
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
