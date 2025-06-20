
import { useState } from "react";
import { Box, Container, Typography, Paper, Link } from '@mui/material';
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
          p: 4,
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
              p: 4,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            {!isRegisterMode ? (
              <>
                <LoginForm language={language} t={t} />
                
                <Box sx={{ textAlign: 'center', mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Link 
                    component="button"
                    type="button"
                    variant="body2" 
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsRegisterMode(true);
                    }}
                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {t('noAccount')}
                  </Link>
                </Box>
              </>
            ) : (
              <>
                <RegisterForm language={language} t={t} />
                
                <Box sx={{ textAlign: 'center', mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Link 
                    component="button"
                    type="button"
                    variant="body2" 
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsRegisterMode(false);
                    }}
                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {t('haveAccount')}
                  </Link>
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
