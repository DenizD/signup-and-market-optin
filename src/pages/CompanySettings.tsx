
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
  DialogContentText,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faUsers, 
  faPalette, 
  faCog, 
  faGlobe, 
  faRobot, 
  faCreditCard,
  faShield,
  faTrash,
  faEdit
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
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  
  // Company Data State
  const [companyData, setCompanyData] = useState({
    companyName: '',
    website: '',
    companyAddress: '',
    secondaryAddress: '',
    postalCode: '',
    city: '',
    country: '',
    taxNumber: '',
    contactEmail: '',
    contactPhone: ''
  });

  // Settings State
  const [settings, setSettings] = useState({
    pipEnabled: false,
    mfaEnabled: false,
    aiBotEnabled: false,
    playerLanguage: 'de',
    timezone: 'Europe/Berlin'
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSave = () => {
    console.log('Saving company settings...', { companyData, settings });
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
              label="Company" 
              iconPosition="start"
            />
            <Tab 
              icon={<FontAwesomeIcon icon={faUsers} />} 
              label="Users" 
              iconPosition="start"
            />
            <Tab 
              icon={<FontAwesomeIcon icon={faPalette} />} 
              label="Customization" 
              iconPosition="start"
            />
            <Tab 
              icon={<FontAwesomeIcon icon={faCog} />} 
              label="Settings" 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {/* Company Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Company Profile
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
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
                  placeholder="https://www.example.com"
                />
                
                <TextField
                  fullWidth
                  label="Contact Email"
                  type="email"
                  required
                  value={companyData.contactEmail}
                  onChange={(e) => setCompanyData({...companyData, contactEmail: e.target.value})}
                  placeholder="contact@company.com"
                />
                
                <TextField
                  fullWidth
                  label="Contact Phone"
                  required
                  value={companyData.contactPhone}
                  onChange={(e) => setCompanyData({...companyData, contactPhone: e.target.value})}
                  placeholder="+49 123 456 789"
                />
                
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

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label="Company Address"
                  required
                  value={companyData.companyAddress}
                  onChange={(e) => setCompanyData({...companyData, companyAddress: e.target.value})}
                  placeholder="123 Street Name"
                />
                
                <TextField
                  fullWidth
                  label="Secondary Address"
                  value={companyData.secondaryAddress}
                  onChange={(e) => setCompanyData({...companyData, secondaryAddress: e.target.value})}
                  placeholder="Floor 1, Suite 100"
                />
                
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      required
                      value={companyData.postalCode}
                      onChange={(e) => setCompanyData({...companyData, postalCode: e.target.value})}
                      placeholder="12345"
                    />
                  </Grid>
                  <Grid size={6}>
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
                    <MenuItem value="France">France</MenuItem>
                    <MenuItem value="Netherlands">Netherlands</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Users Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            User Management
          </Typography>
          
          <Card>
            <CardHeader 
              title="Team Members"
              action={
                <Button variant="contained" sx={{ backgroundColor: '#43BEAC' }}>
                  Add User
                </Button>
              }
            />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="John Doe" 
                    secondary="john.doe@company.com • Admin"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText 
                    primary="Jane Smith" 
                    secondary="jane.smith@company.com • User"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </TabPanel>

        {/* Customization Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Customization
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: '#64748b' }}>
            Personalize your videos to fit your brand's style.
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Shows/Clips
            </Typography>
            
            <Card sx={{ maxWidth: 400 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle2">Default style</Typography>
                  <Button size="small" variant="outlined" sx={{ textTransform: 'none' }}>
                    New Profile
                  </Button>
                </Box>
                
                <Box sx={{ 
                  width: '100%', 
                  height: 200, 
                  border: '2px solid #e0e0e0', 
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f5f5f5'
                }}>
                  <Typography variant="body2" color="textSecondary">
                    Video Player Preview
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </TabPanel>

        {/* Settings Tab */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Application Settings
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Features
                </Typography>
                
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.pipEnabled}
                      onChange={(e) => setSettings({...settings, pipEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label="Picture-in-Picture (PiP)"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.mfaEnabled}
                      onChange={(e) => setSettings({...settings, mfaEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FontAwesomeIcon icon={faShield} />
                      <span>Multi-Factor Authentication (MFA)</span>
                    </Box>
                  }
                />

                <Box>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={settings.aiBotEnabled}
                        onChange={(e) => setSettings({...settings, aiBotEnabled: e.target.checked})}
                        color="primary"
                        disabled
                      />
                    }
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FontAwesomeIcon icon={faRobot} />
                        <span>AI Bot (Enterprise)</span>
                      </Box>
                    }
                  />
                  <Alert severity="info" sx={{ mt: 1, fontSize: '0.875rem' }}>
                    AI Bot ist nur im Enterprise Paket verfügbar. Kontaktieren Sie uns für weitere Informationen.
                  </Alert>
                </Box>
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Preferences
                </Typography>
                
                <FormControl fullWidth>
                  <InputLabel>
                    <FontAwesomeIcon icon={faGlobe} style={{ marginRight: 8 }} />
                    Video Player Language
                  </InputLabel>
                  <Select
                    value={settings.playerLanguage}
                    label="Video Player Language"
                    onChange={(e) => setSettings({...settings, playerLanguage: e.target.value})}
                  >
                    <MenuItem value="de">Deutsch</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="zh">中文</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Timezone</InputLabel>
                  <Select
                    value={settings.timezone}
                    label="Timezone"
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                  >
                    <MenuItem value="Europe/Berlin">Europe/Berlin</MenuItem>
                    <MenuItem value="Europe/London">Europe/London</MenuItem>
                    <MenuItem value="America/New_York">America/New_York</MenuItem>
                    <MenuItem value="Asia/Tokyo">Asia/Tokyo</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Ownership Section */}
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Ownership Management
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>
            <Alert severity="warning">
              <strong>Achtung:</strong> Änderungen an der Unternehmensberechtigung können nicht rückgängig gemacht werden.
            </Alert>
            
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

            <Divider />

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#d32f2f' }}>
                Danger Zone
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                Löschen Sie Ihr Konto und alle zugehörigen Daten permanent.
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setDeleteAccountOpen(true)}
                sx={{ textTransform: 'none' }}
                startIcon={<FontAwesomeIcon icon={faTrash} />}
              >
                Delete Account & Data
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
            Save Changes
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

      {/* Delete Account Dialog */}
      <Dialog open={deleteAccountOpen} onClose={() => setDeleteAccountOpen(false)}>
        <DialogTitle sx={{ color: '#d32f2f' }}>Konto und Daten löschen</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            <strong>Warnung:</strong> Diese Aktion kann nicht rückgängig gemacht werden. Alle Ihre Daten werden permanent gelöscht.
          </DialogContentText>
          <DialogContentText sx={{ mb: 2 }}>
            Geben Sie zur Bestätigung "DELETE" ein:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Bestätigung"
            fullWidth
            variant="outlined"
            placeholder="DELETE"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteAccountOpen(false)}>Abbrechen</Button>
          <Button variant="contained" color="error">Permanent löschen</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CompanySettings;
