import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Tab,
  Tabs,
  Paper,
  TextField,
  Button,
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
  Grid,
} from '@mui/material';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from '@/hooks/useTranslations';
import { validTimezones } from '@/constants/validTimezones';
import { validateTaxNumber, validateEmail, validatePhone, validateWebsite, validatePostalCode } from '@/utils/validation';
import { validateCompanyData, validateCompanyWebsite } from '@/services/companyValidation';
import { validateCityPostalCode } from '@/services/addressService';
import AddressAutocomplete from '@/components/AddressAutocomplete';
import StreetAutocomplete from '@/components/StreetAutocomplete';

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

const CompanySettings = () => {
  const { t, language, setLanguage } = useTranslations();
  const [tabValue, setTabValue] = useState(0);
  const [transferOwnershipOpen, setTransferOwnershipOpen] = useState(false);
  const [assignOwnershipOpen, setAssignOwnershipOpen] = useState(false);
  const [deleteAccountOpen, setDeleteAccountOpen] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [validationWarnings, setValidationWarnings] = useState<string[]>([]);
  
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

  // Real-time validation function
  const validateField = (fieldName: string, value: string) => {
    const errors: Record<string, string> = { ...validationErrors };
    const warnings: string[] = [...validationWarnings];
    
    // Clear previous errors and warnings for this field
    delete errors[fieldName];
    
    switch (fieldName) {
      case 'companyName':
        if (!value.trim()) {
          errors.companyName = t('requiredField');
        } else if (value.length < 2) {
          errors.companyName = 'Company name is too short';
        } else {
          // Check for fake company names
          const fakePatterns = [/test/i, /fake/i, /dummy/i, /example/i, /temp/i];
          if (fakePatterns.some(pattern => pattern.test(value))) {
            const newWarnings = warnings.filter(w => !w.includes('placeholder'));
            newWarnings.push('Company name appears to be a placeholder');
            setValidationWarnings(newWarnings);
          }
        }
        break;
      
      case 'contactEmail':
        const emailValidation = validateEmail(value);
        if (!emailValidation.isValid) {
          errors.contactEmail = emailValidation.message || 'Invalid email format';
        }
        break;
      
      case 'contactPhone':
        const phoneValidation = validatePhone(value);
        if (!phoneValidation.isValid) {
          errors.contactPhone = phoneValidation.message || 'Invalid phone format';
        }
        break;
      
      case 'website':
        const websiteValidation = validateWebsite(value);
        if (!websiteValidation.isValid) {
          errors.website = websiteValidation.message || 'Invalid website format';
        }
        break;
      
      case 'taxNumber':
        if (companyData.country) {
          const taxValidation = validateTaxNumber(value, companyData.country);
          if (!taxValidation.isValid) {
            errors.taxNumber = taxValidation.message || 'Invalid tax number';
          }
        }
        break;
      
      case 'postalCode':
        if (companyData.country) {
          const postalValidation = validatePostalCode(value, companyData.country);
          if (!postalValidation.isValid) {
            errors.postalCode = postalValidation.message || 'Invalid postal code';
          }
        }
        break;
    }
    
    setValidationErrors(errors);
  };

  const validateAllFields = () => {
    const errors: Record<string, string> = {};
    const warnings: string[] = [];
    
    // Required field checks
    if (!companyData.companyName.trim()) errors.companyName = t('requiredField');
    if (!companyData.companyAddress.trim()) errors.companyAddress = t('requiredField');
    if (!companyData.postalCode.trim()) errors.postalCode = t('requiredField');
    if (!companyData.city.trim()) errors.city = t('requiredField');
    if (!companyData.country.trim()) errors.country = t('requiredField');
    
    // Email validation
    const emailValidation = validateEmail(companyData.contactEmail);
    if (!emailValidation.isValid) errors.contactEmail = emailValidation.message || 'Invalid email format';
    
    // Phone validation
    const phoneValidation = validatePhone(companyData.contactPhone);
    if (!phoneValidation.isValid) errors.contactPhone = phoneValidation.message || 'Invalid phone format';
    
    // Website validation
    const websiteValidation = validateWebsite(companyData.website);
    if (!websiteValidation.isValid) errors.website = websiteValidation.message || 'Invalid website format';
    
    // Tax number validation
    const taxValidation = validateTaxNumber(companyData.taxNumber, companyData.country);
    if (!taxValidation.isValid) errors.taxNumber = taxValidation.message || 'Invalid tax number';
    
    // Postal code validation
    const postalValidation = validatePostalCode(companyData.postalCode, companyData.country);
    if (!postalValidation.isValid) errors.postalCode = postalValidation.message || 'Invalid postal code';
    
    // City and postal code consistency check
    if (companyData.city && companyData.postalCode && companyData.country) {
      const isCityPostalValid = validateCityPostalCode(companyData.city, companyData.postalCode, companyData.country);
      if (!isCityPostalValid) {
        warnings.push('City and postal code combination seems unusual for the selected country');
      }
    }
    
    // Company data plausibility check
    const companyValidation = validateCompanyData({
      companyName: companyData.companyName,
      website: companyData.website,
      contactEmail: companyData.contactEmail,
      contactPhone: companyData.contactPhone,
      city: companyData.city,
      postalCode: companyData.postalCode,
      country: companyData.country
    });
    
    warnings.push(...companyValidation.warnings);
    companyValidation.errors.forEach(error => {
      if (!errors.companyName && error.includes('Company name')) {
        errors.companyName = error;
      }
    });
    
    setValidationErrors(errors);
    setValidationWarnings(warnings);
    return Object.keys(errors).length === 0;
  };

  const handleSave = async () => {
    if (validateAllFields()) {
      // Additional website validation
      if (companyData.website) {
        const isWebsiteValid = await validateCompanyWebsite(companyData.website, companyData.companyName);
        if (!isWebsiteValid) {
          setValidationErrors(prev => ({
            ...prev,
            website: 'Website appears to be invalid or unreachable'
          }));
          return;
        }
      }
      
      console.log('Saving company settings...', { companyData, settings });
      setValidationErrors({});
      setValidationWarnings([]);
    }
  };

  const handleCityChange = (city: string) => {
    setCompanyData({...companyData, city});
    validateField('city', city);
  };

  const handlePostalCodeSuggestion = (postalCode: string) => {
    if (!companyData.postalCode) {
      setCompanyData({...companyData, postalCode});
    }
  };

  const handleStreetChange = (street: string) => {
    setCompanyData({...companyData, companyAddress: street});
    validateField('companyAddress', street);
  };

  const handlePostalCodeChange = (postalCode: string) => {
    setCompanyData({...companyData, postalCode});
    validateField('postalCode', postalCode);
  };

  const handleInputChange = (field: string, value: string) => {
    setCompanyData({...companyData, [field]: value});
    validateField(field, value);
  };

  const isEmbargoCountry = (country: string) => {
    return embargoCountries.includes(country);
  };

  const getTaxNumberHelperText = () => {
    if (validationErrors.taxNumber) return validationErrors.taxNumber;
    return '';
  };

  const handleContactForAI = () => {
    window.open('mailto:sales@company.com?subject=AI Bot Enterprise Feature Inquiry', '_blank');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box>
          <Typography variant="h3" sx={{ mb: 1, fontWeight: 700, color: '#252A2E' }}>
            Company Settings
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b' }}>
            Manage your company profile and settings
          </Typography>
        </Box>
        <LanguageSwitcher 
          currentLanguage={language} 
          onLanguageChange={setLanguage} 
        />
      </Box>

      {Object.keys(validationErrors).length > 0 && (
        <Alert severity="error" sx={{ mb: 3 }}>
          Please complete all required fields
        </Alert>
      )}

      {validationWarnings.length > 0 && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>Data Quality Warnings:</Typography>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {validationWarnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
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
            <Tab label="Company" />
            <Tab label="Users" />
            <Tab label="Customization" />
            <Tab label="Settings" />
          </Tabs>
        </Box>

        {/* Company Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 600 }}>
            Company Profile
          </Typography>
          
          {/* Basic Information */}
          <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600, color: '#374151' }}>
            Basic Information
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <TextField
              fullWidth
              label="Company Name *"
              required
              value={companyData.companyName}
              onChange={(e) => handleInputChange('companyName', e.target.value)}
              error={!!validationErrors.companyName}
              helperText={validationErrors.companyName}
            />
            
            <FormControl fullWidth required error={!!validationErrors.country}>
              <InputLabel>Country *</InputLabel>
              <Select
                value={companyData.country}
                label="Country *"
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
                        (Service not available)
                      </Typography>
                    )}
                  </MenuItem>
                ))}
              </Select>
              {validationErrors.country && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                  {validationErrors.country}
                </Typography>
              )}
            </FormControl>

            <TextField
              fullWidth
              label="Tax Number *"
              required
              value={companyData.taxNumber}
              onChange={(e) => handleInputChange('taxNumber', e.target.value)}
              error={!!validationErrors.taxNumber}
              helperText={getTaxNumberHelperText()}
            />

            <TextField
              fullWidth
              label="Contact Email *"
              type="email"
              required
              value={companyData.contactEmail}
              onChange={(e) => handleInputChange('contactEmail', e.target.value)}
              error={!!validationErrors.contactEmail}
              helperText={validationErrors.contactEmail}
            />

            <FormControl fullWidth>
              <InputLabel>Industry</InputLabel>
              <Select
                value={companyData.industry}
                label="Industry"
                onChange={(e) => setCompanyData({...companyData, industry: e.target.value})}
              >
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Consulting">Consulting</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Real Estate">Real Estate</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Contact Phone"
              value={companyData.contactPhone}
              onChange={(e) => handleInputChange('contactPhone', e.target.value)}
              error={!!validationErrors.contactPhone}
              helperText={validationErrors.contactPhone}
            />

            <FormControl fullWidth>
              <InputLabel>Company Size</InputLabel>
              <Select
                value={companyData.companySize}
                label="Company Size"
                onChange={(e) => setCompanyData({...companyData, companySize: e.target.value})}
              >
                <MenuItem value="1-10">1-10 employees</MenuItem>
                <MenuItem value="11-50">11-50 employees</MenuItem>
                <MenuItem value="51-200">51-200 employees</MenuItem>
                <MenuItem value="201-500">201-500 employees</MenuItem>
                <MenuItem value="501-1000">501-1000 employees</MenuItem>
                <MenuItem value="1000+">1000+ employees</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Website"
              value={companyData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              error={!!validationErrors.website}
              helperText={validationErrors.website}
            />

            <TextField
              fullWidth
              label="Founded Year"
              type="number"
              value={companyData.foundedYear}
              onChange={(e) => setCompanyData({...companyData, foundedYear: e.target.value})}
              inputProps={{ min: 1800, max: new Date().getFullYear() }}
            />
          </div>

          {companyData.country && isEmbargoCountry(companyData.country) && (
            <Alert severity="warning" sx={{ mb: 4 }}>
              Service is not available in countries under embargo
            </Alert>
          )}

          <Divider sx={{ my: 4 }} />

          {/* Address Information */}
          <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600, color: '#374151' }}>
            Company Address
          </Typography>
          <div className="grid grid-cols-1 gap-6 mb-8">
            <StreetAutocomplete
              label="Street Address *"
              value={companyData.companyAddress}
              city={companyData.city}
              onStreetChange={handleStreetChange}
              error={!!validationErrors.companyAddress}
              helperText={validationErrors.companyAddress}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TextField
                fullWidth
                label="Postal Code *"
                required
                value={companyData.postalCode}
                onChange={(e) => handlePostalCodeChange(e.target.value)}
                error={!!validationErrors.postalCode}
                helperText={validationErrors.postalCode}
              />
              <div className="md:col-span-2">
                <AddressAutocomplete
                  label="City *"
                  value={companyData.city}
                  country={companyData.country}
                  postalCode={companyData.postalCode}
                  onCityChange={handleCityChange}
                  onPostalCodeSuggestion={handlePostalCodeSuggestion}
                  error={!!validationErrors.city}
                  helperText={validationErrors.city}
                  required
                />
              </div>
            </div>
            
            <TextField
              fullWidth
              label="Additional Address Information"
              value={companyData.secondaryAddress}
              onChange={(e) => setCompanyData({...companyData, secondaryAddress: e.target.value})}
            />
          </div>

          <Divider sx={{ my: 4 }} />

          {/* Company Description */}
          <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 600, color: '#374151' }}>
            Company Description
          </Typography>
          <TextField
            fullWidth
            label="Description (optional)"
            multiline
            rows={4}
            value={companyData.description}
            onChange={(e) => setCompanyData({...companyData, description: e.target.value})}
            sx={{ mb: 6 }}
          />

          {/* Required fields note at bottom */}
          <Typography variant="body2" sx={{ color: '#64748b', fontStyle: 'italic', textAlign: 'right' }}>
            * Required fields
          </Typography>
        </TabPanel>

        {/* Users Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            User Management
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            User management functionality will be available here
          </Typography>
        </TabPanel>

        {/* Customization Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
            Customization
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748b' }}>
            Customization options will be available here
          </Typography>
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
                  label="Picture-in-Picture Feature"
                />

                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.mfaEnabled}
                      onChange={(e) => setSettings({...settings, mfaEnabled: e.target.checked})}
                      color="primary"
                    />
                  }
                  label="Multi-Factor Authentication"
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
                    label="AI Bot Feature"
                  />
                  <Alert 
                    severity="info" 
                    sx={{ mt: 1, fontSize: '0.875rem' }}
                    action={
                      <Button 
                        color="primary" 
                        size="small" 
                        onClick={handleContactForAI}
                        sx={{ textTransform: 'none' }}
                      >
                        Contact Us
                      </Button>
                    }
                  >
                    AI Bot is available only for Enterprise plans
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
                  label="Lorem Ipsum Feature"
                />
              </Box>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Preferences
                </Typography>
                
                <FormControl fullWidth>
                  <InputLabel>Video Player Language</InputLabel>
                  <Select
                    value={settings.playerLanguage}
                    label="Video Player Language"
                    onChange={(e) => setSettings({...settings, playerLanguage: e.target.value})}
                  >
                    <MenuItem value="de">German</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="es">Spanish</MenuItem>
                    <MenuItem value="zh">Chinese</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Timezone</InputLabel>
                  <Select
                    value={settings.timezone}
                    label="Timezone"
                    onChange={(e) => setSettings({...settings, timezone: e.target.value})}
                  >
                    {validTimezones.map((timezone) => (
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
            Ownership Management
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 600 }}>
            <Alert severity="warning">
              <strong>Warning: These actions cannot be undone</strong>
            </Alert>
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                Transfer Ownership
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                Transfer ownership of this company to another user
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                onClick={() => setTransferOwnershipOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                Transfer Ownership
              </Button>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                Assign Ownership
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                Assign ownership to an existing team member
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setAssignOwnershipOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                Assign Ownership
              </Button>
            </Box>

            <Divider />

            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#d32f2f' }}>
                Danger Zone
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#64748b' }}>
                Permanently delete this company account and all associated data
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setDeleteAccountOpen(true)}
                sx={{ textTransform: 'none' }}
              >
                Delete Account
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
        <DialogTitle>Transfer Ownership</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Enter the email address of the user you want to transfer ownership to:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTransferOwnershipOpen(false)}>Cancel</Button>
          <Button variant="contained" color="warning">Transfer Ownership</Button>
        </DialogActions>
      </Dialog>

      {/* Assign Ownership Dialog */}
      <Dialog open={assignOwnershipOpen} onClose={() => setAssignOwnershipOpen(false)}>
        <DialogTitle>Assign Ownership</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Select a team member to assign ownership to:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAssignOwnershipOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary">Assign Ownership</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={deleteAccountOpen} onClose={() => setDeleteAccountOpen(false)}>
        <DialogTitle sx={{ color: '#d32f2f' }}>Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            <strong>Warning: This action cannot be undone!</strong>
          </DialogContentText>
          <DialogContentText sx={{ mb: 2 }}>
            Type "DELETE" to confirm account deletion:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Confirmation"
            fullWidth
            variant="outlined"
            placeholder="Type DELETE to confirm"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteAccountOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error">Delete Account Permanently</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CompanySettings;
