
// Tax number validation patterns for different countries
const taxNumberPatterns: Record<string, { pattern: RegExp; format: string }> = {
  'Germany': { pattern: /^DE\d{9}$/, format: 'DE123456789' },
  'Austria': { pattern: /^ATU\d{8}$/, format: 'ATU12345678' },
  'Switzerland': { pattern: /^CHE-\d{3}\.\d{3}\.\d{3}$/, format: 'CHE-123.456.789' },
  'United States': { pattern: /^\d{2}-\d{7}$/, format: '12-3456789' },
  'United Kingdom': { pattern: /^GB\d{9}$|^GB\d{12}$/, format: 'GB123456789' },
  'France': { pattern: /^FR[A-Z0-9]{2}\d{9}$/, format: 'FR12345678901' },
  'Italy': { pattern: /^IT\d{11}$/, format: 'IT12345678901' },
  'Spain': { pattern: /^ES[A-Z]\d{8}$|^ES\d{8}[A-Z]$/, format: 'ESA12345674' },
  'Netherlands': { pattern: /^NL\d{9}B\d{2}$/, format: 'NL123456789B01' },
  'Belgium': { pattern: /^BE0\d{9}$/, format: 'BE0123456789' },
};

export const validateTaxNumber = (taxNumber: string, country: string): { isValid: boolean; message?: string } => {
  if (!taxNumber.trim()) {
    return { isValid: false, message: 'Tax number is required' };
  }

  const countryPattern = taxNumberPatterns[country];
  if (!countryPattern) {
    // For countries without specific patterns, just check basic format
    if (taxNumber.length < 5) {
      return { isValid: false, message: 'Tax number seems too short' };
    }
    return { isValid: true };
  }

  if (!countryPattern.pattern.test(taxNumber)) {
    return { 
      isValid: false, 
      message: `Invalid format. Expected format: ${countryPattern.format}` 
    };
  }

  return { isValid: true };
};

export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) {
    return { isValid: false, message: 'Email is required' };
  }
  if (!emailPattern.test(email)) {
    return { isValid: false, message: 'Invalid email format' };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): { isValid: boolean; message?: string } => {
  const phonePattern = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
  if (!phone.trim()) {
    return { isValid: false, message: 'Phone number is required' };
  }
  if (!phonePattern.test(phone.replace(/\s/g, ''))) {
    return { isValid: false, message: 'Invalid phone format' };
  }
  return { isValid: true };
};

export const validateWebsite = (website: string): { isValid: boolean; message?: string } => {
  const urlPattern = /^https?:\/\/.+\..+/;
  if (!website.trim()) {
    return { isValid: false, message: 'Website is required' };
  }
  if (!urlPattern.test(website)) {
    return { isValid: false, message: 'Invalid website format (must start with http:// or https://)' };
  }
  return { isValid: true };
};

export const validatePostalCode = (postalCode: string, country: string): { isValid: boolean; message?: string } => {
  if (!postalCode.trim()) {
    return { isValid: false, message: 'Postal code is required' };
  }

  const postalPatterns: Record<string, RegExp> = {
    'Germany': /^\d{5}$/,
    'United States': /^\d{5}(-\d{4})?$/,
    'United Kingdom': /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
    'France': /^\d{5}$/,
    'Canada': /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/i,
    'Australia': /^\d{4}$/,
    'Netherlands': /^\d{4}\s?[A-Z]{2}$/i,
    'Switzerland': /^\d{4}$/,
    'Austria': /^\d{4}$/,
    'Belgium': /^\d{4}$/,
    'Spain': /^\d{5}$/,
    'Italy': /^\d{5}$/,
  };

  const pattern = postalPatterns[country];
  if (pattern && !pattern.test(postalCode)) {
    return { isValid: false, message: `Invalid postal code format for ${country}` };
  }

  return { isValid: true };
};
