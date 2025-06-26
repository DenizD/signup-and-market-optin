
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faVideo, 
  faUserCog, 
  faGlobe, 
  faRobot, 
  faCreditCard 
} from '@fortawesome/free-solid-svg-icons';

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
      id={`company-tabpanel-${index}`}
      aria-labelledby={`company-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const CompanySettings = () => {
  const [tabValue, setTabValue] = useState(0);
  const [transferOwnershipOpen, setTransferOwnershipOpen] = useState(false);
  const [assignOwnershipOpen, setAssignOwnershipOpen] = useState(false);
  
  // Company Data State
  const [companyData, setCompanyData] = useState({
    companyName: '',
    website: '',
    companyAddress: '',
    secondaryAddress: '',
    postalCode: '',
    city: '',
    country: '',
    taxNumber: ''
  });

  // User Details State
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    emailAddress: '',
    telephone: ''
  });

  // Live Shopping Settings State
  const [liveShoppingSettings, setLiveShoppingSettings] = useState({
    playerLanguage: 'de',
    integrationMode: 'embedded',
    botEnabled: false,
    stripeIntegration: false
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSave = () => {
    console.log('Saving company settings...', { companyData, userDetails, liveShoppingSettings });
    // Hier würde die Speicherlogik implementiert werden
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 700, color: '#252A2E' }}>
          Company Settings
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b' }}>
          Set up your company profile, and configure company-wide settings.
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ border: '1px solid #e2e8f0' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="company settings tabs"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                minHeight: 64,
                px: 3
              }
            }}
          >
            <Tab 
              icon={<FontAwesomeIcon icon={faBuilding} />} 
              label="Company Data" 
              iconPosition="start"
            />
            <Tab 
              icon={<FontAwesomeIcon icon={faVideo} />} 
              label="Live Shopping" 
              iconPosition="start"
            />
            <Tab 
              icon={<FontAwesomeIcon icon={faUserCog} />} 
              label="Ownership" 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {/* Company Data Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            {/* User Details Section */}
            <Grid xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                User Details
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  value={userDetails.fullName}
                  onChange={(e) => setUserDetails({...userDetails, fullName: e.target.value})}
                  placeholder="John Smith"
                />
                
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  required
                  value={userDetails.emailAddress}
                  onChange={(e) => setUserDetails({...userDetails, emailAddress: e.target.value})}
                  placeholder="abc@email.com"
                />
                
                <TextField
                  fullWidth
                  label="Telephone"
                  required
                  value={userDetails.telephone}
                  onChange={(e) => setUserDetails({...userDetails, telephone: e.target.value})}
                  placeholder="123456789"
                />
              </Box>
            </Grid>

            {/* Company Data Section */}
            <Grid xs={12} md={6}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Company Data
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Company Name"
                  required
                  value={companyData.companyName}
                  onChange={(e) => setCompanyData({...companyData, companyName: e.target.value})}
                  placeholder="ABC Corp."
                />
                
                <TextField
                  fullWidth
                  label="Website"
                  required
                  value={companyData.website}
                  onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                  placeholder="abc@email.com"
                />
                
                <TextField
                  fullWidth
                  label="Company Address"
                  required
                  value={companyData.companyAddress}
                  onChange={(e) => setCompanyData({...companyData, companyAddress: e.target.value})}
                  placeholder="123 street"
                />
                
                <TextField
                  fullWidth
                  label="Secondary Address"
                  required
                  value={companyData.secondaryAddress}
                  onChange={(e) => setCompanyData({...companyData, secondaryAddress: e.target.value})}
                  placeholder="Floor 1"
                />
                
                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      required
                      value={companyData.postalCode}
                      onChange={(e) => setCompanyData({...companyData, postalCode: e.target.value})}
                      placeholder="400052"
                    />
                  </Grid>
                  <Grid xs={6}>
                    <TextField
                      fullWidth
                      label="City"
                      required
                      value={companyData.city}
                      onChange={(e) => setCompanyData({...companyData, city: e.target.value})}
                      placeholder="Hamburg"
                    />
                  </Grid>
                </Grid>
                
                <FormControl fullWidth required>
                  <InputLabel>Country</InputLabel>
                  <Select
                    value={companyData.country}
                    label="Country"
                    onChange={(e) => setCompanyData({...companyData, country: e.target.value})}
                  >
                    <MenuItem value="Germany">Germany</MenuItem>
                    <MenuItem value="Austria">Austria</MenuItem>
                    <MenuItem value="Switzerland">Switzerland</MenuItem>
                  </Select>
                </FormControl>
                
                <TextField
                  fullWidth
                  label="Tax Number"
                  required
                  value={companyData.taxNumber}
                  onChange={(e) => setCompanyData({...companyData, taxNumber: e.target.value})}
                  placeholder="DE123456789"
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Live Shopping Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Live Shopping Konfiguration
          </Typography>
          
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <FormControl fullWidth>
                  <InputLabel>
                    <FontAwesomeIcon icon={faGlobe} style={{ marginRight: 8 }} />
                    Player-Sprache
                  </InputLabel>
                  <Select
                    value={liveShoppingSettings.playerLanguage}
                    label="Player-Sprache"
                    onChange={(e) => setLiveShoppingSettings({...liveShoppingSettings, playerLanguage: e.target.value})}
                  >
                    <MenuItem value="de">Deutsch</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Integrationsmodus</InputLabel>
                  <Select
                    value={liveShoppingSettings.integrationMode}
                    label="Integrationsmodus"
                    onChange={(e) => setLiveShoppingSettings({...liveShoppingSettings, integrationMode: e.target.value})}
                  >
                    <MenuItem value="embedded">Embedded</MenuItem>
                    <MenuItem value="popup">Popup</MenuItem>
                    <MenuItem value="fullscreen">Fullscreen</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            
            <Grid xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={liveShoppingSettings.botEnabled}
                      onChange={(e) => setLiveShoppingSettings({...liveShoppingSettings, botEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FontAwesomeIcon icon={faRobot} />
                      <span>Live Shopping Bot aktivieren</span>
                    </Box>
                  }
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={liveShoppingSettings.stripeIntegration}
                      onChange={(e) => setLiveShoppingSettings({...liveShoppingSettings, stripeIntegration: e.target.checked})}
                      color="primary"
                    />
                  }
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FontAwesomeIcon icon={faCreditCard} />
                      <span>Stripe Integration</span>
                    </Box>
                  }
                />

                {liveShoppingSettings.stripeIntegration && (
                  <Alert severity="info" sx={{ mt: 1 }}>
                    Stripe-Konfiguration erfordert zusätzliche Setup-Schritte in den Zahlungseinstellungen.
                  </Alert>
                )}
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Ownership Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Unternehmensberechtigung verwalten
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>
            <Alert severity="warning">
              <strong>Achtung:</strong> Änderungen an der Unternehmensberechtigung können nicht rückgängig gemacht werden.
            </Alert>
            
            <Divider />
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                Berechtigung übertragen
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                Übertragen Sie die vollständige Kontrolle über dieses Unternehmen an einen anderen Benutzer.
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => setTransferOwnershipOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                Transfer Company Ownership
              </Button>
            </Box>
            
            <Divider />
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                Berechtigung zuweisen
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                Weisen Sie einem anderen Benutzer Verwaltungsrechte für dieses Unternehmen zu.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setAssignOwnershipOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                Assign Company Ownership
              </Button>
            </Box>
          </Box>
        </TabPanel>

        {/* Save Button */}
        <Box sx={{ p: 3, pt: 0, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: '#43BEAC',
              '&:hover': { backgroundColor: '#359a8a' },
              textTransform: 'none',
              px: 4,
              py: 1.5
            }}
          >
            Submit
          </Button>
        </Box>
      </Paper>

      {/* Transfer Ownership Dialog */}
      <Dialog open={transferOwnershipOpen} onClose={() => setTransferOwnershipOpen(false)}>
        <DialogTitle>Unternehmensberechtigung übertragen</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Geben Sie die E-Mail-Adresse des Benutzers ein, an den Sie die Berechtigung übertragen möchten:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="E-Mail-Adresse"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTransferOwnershipOpen(false)}>Abbrechen</Button>
          <Button variant="contained" color="warning">Übertragen</Button>
        </DialogActions>
      </Dialog>

      {/* Assign Ownership Dialog */}
      <Dialog open={assignOwnershipOpen} onClose={() => setAssignOwnershipOpen(false)}>
        <DialogTitle>Unternehmensberechtigung zuweisen</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Geben Sie die E-Mail-Adresse des Benutzers ein, dem Sie Verwaltungsrechte zuweisen möchten:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="E-Mail-Adresse"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAssignOwnershipOpen(false)}>Abbrechen</Button>
          <Button variant="contained" color="primary">Zuweisen</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CompanySettings;
