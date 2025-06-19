
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
  Grid,
  Typography,
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Person,
} from '@mui/icons-material';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {showSuccess && (
        <Alert severity="success">
          Ihr Konto wurde erfolgreich erstellt.
        </Alert>
      )}

      {showError && (
        <Alert severity="error">
          Die Passwörter stimmen nicht überein.
        </Alert>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Vorname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Max"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nachname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Mustermann"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        label="E-Mail-Adresse"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="max.mustermann@beispiel.de"
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
        label="Passwort"
        name="password"
        type={showPassword ? "text" : "password"}
        value={formData.password}
        onChange={handleChange}
        placeholder="Mindestens 8 Zeichen"
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
        label="Passwort bestätigen"
        name="confirmPassword"
        type={showConfirmPassword ? "text" : "password"}
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Passwort wiederholen"
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
              Ich möchte über Neuigkeiten, Angebote und Updates per E-Mail informiert werden. 
              Diese Einwilligung kann jederzeit widerrufen werden.
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
        Konto erstellen
      </Button>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          Mit der Registrierung stimmen Sie unseren{" "}
          <Link href="#" color="primary">
            Datenschutzbestimmungen
          </Link>{" "}
          zu.
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
