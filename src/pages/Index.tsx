
import { useState } from "react";
import { Box, Container, Typography, Paper, Tabs, Tab } from '@mui/material';
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left side - Image */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          width: { lg: '50%' },
          background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 50%, #f3e8ff 100%)',
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
          <Typography variant="h4" sx={{ color: 'text.primary', mb: 2, fontWeight: 'bold' }}>
            Welcome to our Service
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Create and manage your content in one place
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
              Welcome! 👋
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in or create a new account
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
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{ mb: 2 }}
              >
                <Tab label="Sign In" />
                <Tab label="Register" />
              </Tabs>
            </Box>

            <TabPanel value={activeTab} index={0}>
              <LoginForm />
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              <RegisterForm />
            </TabPanel>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
