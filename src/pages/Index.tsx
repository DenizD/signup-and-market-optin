
import { Box, Container, Typography } from '@mui/material';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

const Index = () => {
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

      {/* Right side - Forms with Tabs */}
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

          <div className="w-full max-w-md mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger 
                  value="login" 
                  className="text-sm font-medium data-[state=active]:bg-[rgb(14,112,144)] data-[state=active]:text-white"
                >
                  {t('signIn')}
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="text-sm font-medium data-[state=active]:bg-[rgb(14,112,144)] data-[state=active]:text-white"
                >
                  {t('register')}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <LoginForm language={language} t={t} />
                </div>
              </TabsContent>
              
              <TabsContent value="register" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <RegisterForm language={language} t={t} />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
