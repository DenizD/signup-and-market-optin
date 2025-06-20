
import { useState } from "react";
import { Box, Container, Typography, Paper, Link, Button } from '@mui/material';
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

const Index = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const { language, setLanguage, t } = useTranslations();

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as 'de' | 'en' | 'es');
  };

  const handleModeSwitch = (toRegister: boolean) => {
    setIsRegisterMode(toRegister);
    // Announce the change to screen readers
    const announcement = toRegister 
      ? (language === 'de' ? 'Registrierungsformular wird angezeigt' : 
         language === 'es' ? 'Mostrando formulario de registro' : 
         'Registration form is now displayed')
      : (language === 'de' ? 'Anmeldeformular wird angezeigt' : 
         language === 'es' ? 'Mostrando formulario de inicio de sesión' : 
         'Login form is now displayed');
    
    // Create a temporary live region for the announcement
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = announcement;
    document.body.appendChild(liveRegion);
    
    setTimeout(() => {
      document.body.removeChild(liveRegion);
    }, 1000);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Skip to main content link */}
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
        sx={{
          '&:focus': {
            position: 'absolute !important',
            width: 'auto !important',
            height: 'auto !important',
            padding: '8px 16px !important',
            margin: '0 !important',
            overflow: 'visible !important',
            clip: 'auto !important',
            whiteSpace: 'normal !important',
            zIndex: 1000,
            top: '16px',
            left: '16px',
            backgroundColor: 'white',
            color: 'black',
            textDecoration: 'underline',
            border: '2px solid rgb(14, 112, 144)',
            borderRadius: '4px'
          }
        }}
      >
        {language === 'de' ? 'Zum Hauptinhalt springen' : 
         language === 'es' ? 'Saltar al contenido principal' : 
         'Skip to main content'}
      </Link>

      {/* Language Switcher - Top Right */}
      <Box 
        sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
        role="navigation"
        aria-label={language === 'de' ? 'Sprachauswahl' : language === 'es' ? 'Selector de idioma' : 'Language selector'}
      >
        <LanguageSwitcher 
          currentLanguage={language} 
          onLanguageChange={handleLanguageChange} 
        />
      </Box>

      {/* Left side - Image */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          width: { lg: '50%' },
          background: '#59C3C3',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        role="img"
        aria-label={language === 'de' ? 'Willkommensbild mit Logo' : language === 'es' ? 'Imagen de bienvenida con logo' : 'Welcome image with logo'}
      >
        <Box sx={{ maxWidth: 400, textAlign: 'center', px: 4 }}>
          <Box
            sx={{
              width: 256,
              height: 256,
              background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
              borderRadius: '50%',
              mx: 'auto',
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            role="img"
            aria-label="Logo"
          >
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
              Logo
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
            {t('serviceWelcome')}
          </Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>
            {t('serviceSubtitle')}
          </Typography>
        </Box>
      </Box>

      {/* Right side - Forms */}
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4,
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography 
              variant="h4" 
              sx={{ mb: 1, fontWeight: 'bold' }}
              component="h1"
            >
              {t('welcome')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('welcomeSubtitle')}
            </Typography>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
            role="main"
            id="main-content"
          >
            {!isRegisterMode ? (
              <>
                <LoginForm language={language} t={t} />
                
                <Box 
                  sx={{ textAlign: 'center', mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
                  role="region"
                  aria-label={language === 'de' ? 'Zur Registrierung wechseln' : language === 'es' ? 'Cambiar a registro' : 'Switch to registration'}
                >
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {language === 'de' ? 'Noch kein Konto?' : 
                     language === 'es' ? '¿No tienes cuenta?' : 
                     'Don\'t have an account?'}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => handleModeSwitch(true)}
                    sx={{ 
                      borderColor: 'rgb(14, 112, 144)',
                      color: 'rgb(14, 112, 144)',
                      fontWeight: 600,
                      px: 4,
                      py: 1,
                      '&:hover': { 
                        borderColor: 'rgb(10, 90, 115)',
                        backgroundColor: 'rgba(14, 112, 144, 0.04)'
                      },
                      '&:focus': { 
                        outline: '2px solid rgb(14, 112, 144)',
                        outlineOffset: '2px'
                      }
                    }}
                    aria-describedby="register-switch-description"
                  >
                    {t('register')}
                  </Button>
                  <div id="register-switch-description" className="sr-only">
                    {language === 'de' ? 'Wechselt zum Registrierungsformular' : 
                     language === 'es' ? 'Cambia al formulario de registro' : 
                     'Switches to the registration form'}
                  </div>
                </Box>
              </>
            ) : (
              <>
                <RegisterForm language={language} t={t} />
                
                <Box 
                  sx={{ textAlign: 'center', mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
                  role="region"
                  aria-label={language === 'de' ? 'Zur Anmeldung wechseln' : language === 'es' ? 'Cambiar a inicio de sesión' : 'Switch to login'}
                >
                  <Link 
                    component="button"
                    type="button"
                    variant="body2" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleModeSwitch(false);
                    }}
                    sx={{ 
                      textDecoration: 'none', 
                      '&:hover': { textDecoration: 'underline' },
                      color: 'rgb(14, 112, 144)',
                      '&:focus': { 
                        outline: '2px solid rgb(14, 112, 144)',
                        outlineOffset: '2px'
                      }
                    }}
                    aria-describedby="login-switch-description"
                  >
                    {t('haveAccount')}
                  </Link>
                  <div id="login-switch-description" className="sr-only">
                    {language === 'de' ? 'Wechselt zum Anmeldeformular' : 
                     language === 'es' ? 'Cambia al formulario de inicio de sesión' : 
                     'Switches to the login form'}
                  </div>
                </Box>
              </>
            )}
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
