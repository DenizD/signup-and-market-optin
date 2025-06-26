
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
} from '@mui/material';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from '@/hooks/useTranslations';

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

// List of countries under embargo (simplified example)
const embargoCountries = [
  "North Korea", "Iran", "Syria", "Cuba", "Russia", "Belarus", "Myanmar"
];

// Complete list of countries
const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
  "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
  "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
  "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
  "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

// Complete list of timezones
const timezones = [
  "UTC", "Europe/London", "Europe/Berlin", "Europe/Paris", "Europe/Rome", "Europe/Madrid", "Europe/Amsterdam", "Europe/Brussels", "Europe/Vienna", "Europe/Prague",
  "Europe/Warsaw", "Europe/Budapest", "Europe/Bucharest", "Europe/Athens", "Europe/Helsinki", "Europe/Stockholm", "Europe/Oslo", "Europe/Copenhagen", "Europe/Dublin", "Europe/Lisbon",
  "Europe/Zurich", "Europe/Moscow", "Europe/Kiev", "Europe/Istanbul", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Toronto", "America/Vancouver",
  "America/Montreal", "America/Mexico_City", "America/Sao_Paulo", "America/Buenos_Aires", "America/Lima", "America/Bogota", "America/Caracas", "America/Santiago", "America/La_Paz", "America/Asuncion",
  "America/Montevideo", "America/Guatemala", "America/Costa_Rica", "America/Panama", "America/Havana", "America/Jamaica", "America/Santo_Domingo", "America/Puerto_Rico", "America/Barbados", "America/Port_of_Spain",
  "Asia/Tokyo", "Asia/Seoul", "Asia/Shanghai", "Asia/Hong_Kong", "Asia/Singapore", "Asia/Bangkok", "Asia/Jakarta", "Asia/Manila", "Asia/Kuala_Lumpur", "Asia/Mumbai",
  "Asia/Delhi", "Asia/Kolkata", "Asia/Dhaka", "Asia/Karachi", "Asia/Kabul", "Asia/Tehran", "Asia/Dubai", "Asia/Riyadh", "Asia/Kuwait", "Asia/Qatar",
  "Asia/Bahrain", "Asia/Jerusalem", "Asia/Beirut", "Asia/Damascus", "Asia/Baghdad", "Asia/Amman", "Asia/Yerevan", "Asia/Baku", "Asia/Tbilisi", "Asia/Tashkent",
  "Asia/Almaty", "Asia/Bishkek", "Asia/Dushanbe", "Asia/Ashgabat", "Asia/Ulaanbaatar", "Asia/Pyongyang", "Australia/Sydney", "Australia/Melbourne", "Australia/Brisbane", "Australia/Perth",
  "Australia/Adelaide", "Australia/Darwin", "Pacific/Auckland", "Pacific/Fiji", "Pacific/Tahiti", "Pacific/Honolulu", "Pacific/Samoa", "Pacific/Guam", "Pacific/Port_Moresby", "Pacific/Noumea",
  "Africa/Cairo", "Africa/Lagos", "Africa/Nairobi", "Africa/Johannesburg", "Africa/Cape_Town", "Africa/Casablanca", "Africa/Algiers", "Africa/Tunis", "Africa/Tripoli", "Africa/Khartoum",
  "Africa/Addis_Ababa", "Africa/Dar_es_Salaam", "Africa/Kampala", "Africa/Kigali", "Africa/Lusaka", "Africa/Harare", "Africa/Maputo", "Africa/Windhoek", "Africa/Gaborone", "Africa/Maseru"
];

const CompanySettings = () => {
  const { t, language, setLanguage } = useTranslations();
  const [tabValue, setTabValue] = useState(0);
  const [transferOwnershipOpen, setTransferOwnershipOpen] = useState(false);
  const [assignOwnershipOpen, setAssignOwnershipOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  
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
    contactPhone: '',
    industry: '',
    companySize: '',
    foundedYear: '',
    description: ''
  });

  // Settings State
  const [settings, setSettings] = useState({
    pipEnabled: false,
    mfaEnabled: false,
    aiBotEnabled: false,
    loremIpsumEnabled: false,
    playerLanguage: 'de',
    timezone: 'Europe/Berlin'
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const validateRequiredFields = () => {
    const requiredFields = [
      'companyName', 'website', 'companyAddress', 'postalCode', 
      'city', 'country', 'taxNumber', 'contactEmail', 'contactPhone'
    ];
    
    const errors: string[] = [];
    requiredFields.forEach(field => {
      if (!companyData[field as keyof typeof companyData]) {
        errors.push(field);
      }
    });
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSave = () => {
    if (validateRequiredFields()) {
      console.log('Saving company settings...', { companyData, settings });
      setValidationErrors([]);
    }
  };

  const isEmbargoCountry = (country: string) => {
    return embargoCountries.includes(country);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h3" sx={{ mb: 1, fontWeight: 700, color: '#252A2E' }}>
            {t('companySettings')}
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b' }}>
            {t('companySettingsSubtitle')}
          </Typography>
        </Box>
        <LanguageSwitcher 
          currentLanguage={language} 
          onLanguageChange={setLanguage} 
        />
      </Box>

      {validationErrors.length > 0 && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {t('pleaseCompleteRequired')}
        </Alert>
      )}

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
            <Tab label={t('companyTab')} />
            <Tab label={t('usersTab')} />
            <Tab label={t('customizationTab')} />
            <Tab label={t('settingsTab')} />
          </Tabs>
        </Box>

        {/* Company Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            {t('companyProfile')}
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label={`${t('companyName')} *`}
                  required
                  value={companyData.companyName}
                  onChange={(e) => setCompanyData({...companyData, companyName: e.target.value})}
                  placeholder="ABC Corp."
                  error={validationErrors.includes('companyName')}
                  helperText={validationErrors.includes('companyName') ? t('requiredField') : ''}
                />
                
                <TextField
                  fullWidth
                  label={`${t('website')} *`}
                  required
                  value={companyData.website}
                  onChange={(e) => setCompanyData({...companyData, website: e.target.value})}
                  placeholder="https://www.example.com"
                  error={validationErrors.includes('website')}
                  helperText={validationErrors.includes('website') ? t('requiredField') : ''}
                />
                
                <TextField
                  fullWidth
                  label={`${t('contactEmail')} *`}
                  type="email"
                  required
                  value={companyData.contactEmail}
                  onChange={(e) => setCompanyData({...companyData, contactEmail: e.target.value})}
                  placeholder="contact@company.com"
                  error={validationErrors.includes('contactEmail')}
                  helperText={validationErrors.includes('contactEmail') ? t('requiredField') : ''}
                />
                
                <TextField
                  fullWidth
                  label={`${t('contactPhone')} *`}
                  required
                  value={companyData.contactPhone}
                  onChange={(e) => setCompanyData({...companyData, contactPhone: e.target.value})}
                  placeholder="+49 123 456 789"
                  error={validationErrors.includes('contactPhone')}
                  helperText={validationErrors.includes('contactPhone') ? t('requiredField') : ''}
                />
                
                <TextField
                  fullWidth
                  label={`${t('taxNumber')} *`}
                  required
                  value={companyData.taxNumber}
                  onChange={(e) => setCompanyData({...companyData, taxNumber: e.target.value})}
                  placeholder="DE123456789"
                  error={validationErrors.includes('taxNumber')}
                  helperText={validationErrors.includes('taxNumber') ? t('requiredField') : ''}
                />

                <FormControl fullWidth>
                  <InputLabel>{t('industry')}</InputLabel>
                  <Select
                    value={companyData.industry}
                    label={t('industry')}
                    onChange={(e) => setCompanyData({...companyData, industry: e.target.value})}
                  >
                    <MenuItem value="Technology">{t('technology')}</MenuItem>
                    <MenuItem value="Finance">{t('finance')}</MenuItem>
                    <MenuItem value="Healthcare">{t('healthcare')}</MenuItem>
                    <MenuItem value="Education">{t('education')}</MenuItem>
                    <MenuItem value="Manufacturing">{t('manufacturing')}</MenuItem>
                    <MenuItem value="Retail">{t('retail')}</MenuItem>
                    <MenuItem value="Consulting">{t('consulting')}</MenuItem>
                    <MenuItem value="Media">{t('media')}</MenuItem>
                    <MenuItem value="Real Estate">{t('realEstate')}</MenuItem>
                    <MenuItem value="Other">{t('other')}</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>{t('companySize')}</InputLabel>
                  <Select
                    value={companyData.companySize}
                    label={t('companySize')}
                    onChange={(e) => setCompanyData({...companyData, companySize: e.target.value})}
                  >
                    <MenuItem value="1-10">{t('companySize1to10')}</MenuItem>
                    <MenuItem value="11-50">{t('companySize11to50')}</MenuItem>
                    <MenuItem value="51-200">{t('companySize51to200')}</MenuItem>
                    <MenuItem value="201-500">{t('companySize201to500')}</MenuItem>
                    <MenuItem value="501-1000">{t('companySize501to1000')}</MenuItem>
                    <MenuItem value="1000+">{t('companySize1000plus')}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  fullWidth
                  label={`${t('companyAddress')} *`}
                  required
                  value={companyData.companyAddress}
                  onChange={(e) => setCompanyData({...companyData, companyAddress: e.target.value})}
                  placeholder="123 Street Name"
                  error={validationErrors.includes('companyAddress')}
                  helperText={validationErrors.includes('companyAddress') ? t('requiredField') : ''}
                />
                
                <TextField
                  fullWidth
                  label={t('secondaryAddress')}
                  value={companyData.secondaryAddress}
                  onChange={(e) => setCompanyData({...companyData, secondaryAddress: e.target.value})}
                  placeholder="Floor 1, Suite 100"
                />
                
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <TextField
                      fullWidth
                      label={`${t('postalCode')} *`}
                      required
                      value={companyData.postalCode}
                      onChange={(e) => setCompanyData({...companyData, postalCode: e.target.value})}
                      placeholder="12345"
                      error={validationErrors.includes('postalCode')}
                      helperText={validationErrors.includes('postalCode') ? t('requiredField') : ''}
                    />
                  </Grid>
                  <Grid size={6}>
                    <TextField
                      fullWidth
                      label={`${t('city')} *`}
                      required
                      value={companyData.city}
                      onChange={(e) => setCompanyData({...companyData, city: e.target.value})}
                      placeholder="Hamburg"
                      error={validationErrors.includes('city')}
                      helperText={validationErrors.includes('city') ? t('requiredField') : ''}
                    />
                  </Grid>
                </Grid>
                
                <FormControl fullWidth required error={validationErrors.includes('country')}>
                  <InputLabel>{`${t('country')} *`}</InputLabel>
                  <Select
                    value={companyData.country}
                    label={`${t('country')} *`}
                    onChange={(e) => setCompanyData({...companyData, country: e.target.value})}
                  >
                    {allCountries.map((country) => (
                      <MenuItem 
                        key={country} 
                        value={country}
                        disabled={isEmbargoCountry(country)}
                        sx={isEmbargoCountry(country) ? { 
                          color: '#999', 
                          '&.Mui-disabled': { 
                            color: '#999 !important',
                            opacity: 0.6 
                          } 
                        } : {}}
                      >
                        {country}
                        {isEmbargoCountry(country) && (
                          <Typography 
                            component="span" 
                            variant="caption" 
                            sx={{ ml: 1, color: '#f44336', fontStyle: 'italic' }}
                          >
                            ({t('serviceNotAvailable')})
                          </Typography>
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                  {validationErrors.includes('country') && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                      {t('requiredField')}
                    </Typography>
                  )}
                </FormControl>

                {companyData.country && isEmbargoCountry(companyData.country) && (
                  <Alert severity="warning" sx={{ mt: 1 }}>
                    {t('embargoCountry')}
                  </Alert>
                )}

                <TextField
                  fullWidth
                  label={t('foundedYear')}
                  type="number"
                  value={companyData.foundedYear}
                  onChange={(e) => setCompanyData({...companyData, foundedYear: e.target.value})}
                  placeholder="2020"
                  inputProps={{ min: 1800, max: new Date().getFullYear() }}
                />

                <TextField
                  fullWidth
                  label={t('description')}
                  multiline
                  rows={4}
                  value={companyData.description}
                  onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
                  placeholder="Brief description of your company..."
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Users Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            {t('userManagement')}
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            {t('userManagementPlaceholder')}
          </Typography>
        </TabPanel>

        {/* Customization Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            {t('customizationTab')}
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            {t('customizationPlaceholder')}
          </Typography>
        </TabPanel>

        {/* Settings Tab */}
        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            {t('applicationSettings')}
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {t('features')}
                </Typography>
                
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.pipEnabled}
                      onChange={(e) => setSettings({...settings, pipEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label={t('pipFeature')}
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.mfaEnabled}
                      onChange={(e) => setSettings({...settings, mfaEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label={t('mfaFeature')}
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
                    label={t('aiBotFeature')}
                  />
                  <Alert severity="info" sx={{ mt: 1, fontSize: '0.875rem' }}>
                    {t('aiBotEnterpriseOnly')}
                  </Alert>
                </Box>

                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.loremIpsumEnabled}
                      onChange={(e) => setSettings({...settings, loremIpsumEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label={t('loremIpsumFeature')}
                />
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {t('preferences')}
                </Typography>
                
                <FormControl fullWidth>
                  <InputLabel>{t('videoPlayerLanguage')}</InputLabel>
                  <Select
                    value={settings.playerLanguage}
                    label={t('videoPlayerLanguage')}
                    onChange={(e) => setSettings({...settings, playerLanguage: e.target.value})}
                  >
                    <MenuItem value="de">Deutsch</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="zh">中文</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>{t('timezone')}</InputLabel>
                  <Select
                    value={settings.timezone}
                    label={t('timezone')}
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                  >
                    {timezones.map((timezone) => (
                      <MenuItem key={timezone} value={timezone}>
                        {timezone}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Ownership Section */}
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            {t('ownershipManagement')}
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>
            <Alert severity="warning">
              <strong>{t('ownershipWarning')}</strong>
            </Alert>
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                {t('transferOwnership')}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                {t('transferOwnershipDesc')}
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => setTransferOwnershipOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                {t('transferOwnershipBtn')}
              </Button>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                {t('assignOwnership')}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                {t('assignOwnershipDesc')}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setAssignOwnershipOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                {t('assignOwnershipBtn')}
              </Button>
            </Box>

            <Divider />

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#d32f2f' }}>
                {t('dangerZone')}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                {t('deleteAccountDesc')}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setDeleteAccountOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                {t('deleteAccountBtn')}
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
            {t('saveChanges')}
          </Button>
        </Box>
      </Paper>

      {/* Transfer Ownership Dialog */}
      <Dialog open={transferOwnershipOpen} onClose={() => setTransferOwnershipOpen(false)}>
        <DialogTitle>{t('transferOwnershipTitle')}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            {t('transferOwnershipPrompt')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={t('emailAddress')}
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTransferOwnershipOpen(false)}>{t('cancel')}</Button>
          <Button variant="contained" color="warning">{t('transferOwnership')}</Button>
        </DialogActions>
      </Dialog>

      {/* Assign Ownership Dialog */}
      <Dialog open={assignOwnershipOpen} onClose={() => setAssignOwnershipOpen(false)}>
        <DialogTitle>{t('assignOwnershipTitle')}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            {t('assignOwnershipPrompt')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={t('emailAddress')}
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAssignOwnershipOpen(false)}>{t('cancel')}</Button>
          <Button variant="contained" color="primary">{t('assignOwnership')}</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={deleteAccountOpen} onClose={() => setDeleteAccountOpen(false)}>
        <DialogTitle sx={{ color: '#d32f2f' }}>{t('deleteAccountTitle')}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            <strong>{t('deleteAccountWarning')}</strong>
          </DialogContentText>
          <DialogContentText sx={{ mb: 2 }}>
            {t('deleteAccountConfirm')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={t('deleteAccountConfirmPlaceholder')}
            fullWidth
            variant="outlined"
            placeholder={t('deleteAccountConfirmPlaceholder')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteAccountOpen(false)}>{t('cancel')}</Button>
          <Button variant="contained" color="error">{t('deleteAccountPermanent')}</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CompanySettings;
