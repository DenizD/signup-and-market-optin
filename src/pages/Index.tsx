
import { useState } from "react";
import { Box, Container, Typography, Paper, Button } from '@mui/material';
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

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Language Switcher - Top Right */}
      <Box sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}>
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
          p: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>
              {t('welcome')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('welcomeSubtitle')}
            </Typography>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            {!isRegisterMode ? (
              <>
                <LoginForm language={language} t={t} />
                
                <Box sx={{ 
                  textAlign: 'center', 
                  mt: 4, 
                  pt: 3, 
                  borderTop: '1px solid', 
                  borderColor: 'divider' 
                }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {language === 'de' ? 'Noch kein Konto?' : 
                     language === 'es' ? '¿No tienes cuenta?' : 
                     'Don\'t have an account?'}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => setIsRegisterMode(true)}
                    fullWidth
                    sx={{ 
                      backgroundColor: 'rgb(14, 112, 144)',
                      color: 'white',
                      fontWeight: 600,
                      py: 1.5,
                      minHeight: '48px',
                      fontSize: '1rem',
                      boxShadow: '0 2px 8px rgba(14, 112, 144, 0.2)',
                      '&:hover': { 
                        backgroundColor: 'rgb(10, 90, 115)',
                        boxShadow: '0 4px 12px rgba(14, 112, 144, 0.3)'
                      }
                    }}
                  >
                    {t('register')}
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <RegisterForm language={language} t={t} />
                
                <Box sx={{ 
                  textAlign: 'center', 
                  mt: 4, 
                  pt: 3, 
                  borderTop: '1px solid', 
                  borderColor: 'divider' 
                }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {language === 'de' ? 'Bereits ein Konto?' : 
                     language === 'es' ? '¿Ya tienes cuenta?' : 
                     'Already have an account?'}
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => setIsRegisterMode(false)}
                    sx={{ 
                      borderColor: 'rgb(14, 112, 144)',
                      color: 'rgb(14, 112, 144)',
                      fontWeight: 600,
                      px: 4,
                      py: 1,
                      minHeight: '44px',
                      '&:hover': { 
                        borderColor: 'rgb(10, 90, 115)',
                        backgroundColor: 'rgba(14, 112, 144, 0.04)',
                        color: 'rgb(10, 90, 115)'
                      }
                    }}
                  >
                    {language === 'de' ? 'Zur Anmeldung' : 
                     language === 'es' ? 'Ir a iniciar sesión' : 
                     'Go to Sign In'}
                  </Button>
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
