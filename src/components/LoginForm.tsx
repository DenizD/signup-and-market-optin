
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

const LoginForm = ({ language, t }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { ...formData, rememberMe });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {showSuccess && (
        <Alert severity="success">
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
        placeholder={language === 'de' ? 'Ihr Passwort' : language === 'es' ? 'Tu contraseña' : 'Your password'}
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
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              size="small"
            />
          }
          label={t('rememberMe')}
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
        />
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
            '&:hover': { color: 'rgb(10, 90, 115)' }
          }}
        >
          {t('forgotPassword')}
        </Link>
      </Box>

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ 
          mt: 2, 
          py: 1.5,
          backgroundColor: 'rgb(14, 112, 144)',
          '&:hover': { backgroundColor: 'rgb(10, 90, 115)' }
        }}
      >
        {t('signIn')}
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
