
// Company data plausibility validation
export interface CompanyValidationResult {
  isValid: boolean;
  warnings: string[];
  errors: string[];
}

// Known company domains for validation
const knownCompanyDomains = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'web.de', 'gmx.de', 
  'gmx.net', 't-online.de', 'freenet.de', 'aol.com', 'icloud.com'
];

export const validateCompanyData = (data: {
  companyName: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  city: string;
  postalCode: string;
  country: string;
}): CompanyValidationResult => {
  const warnings: string[] = [];
  const errors: string[] = [];

  // Company name validation
  if (data.companyName.length < 2) {
    errors.push('Company name is too short');
  }
  
  // Check for obviously fake company names
  const fakePatterns = [/test/i, /fake/i, /dummy/i, /example/i, /temp/i];
  if (fakePatterns.some(pattern => pattern.test(data.companyName))) {
    warnings.push('Company name appears to be a placeholder');
  }

  // Website and email domain consistency
  if (data.website && data.contactEmail) {
    try {
      const websiteDomain = new URL(data.website).hostname.replace('www.', '');
      const emailDomain = data.contactEmail.split('@')[1];
      
      if (websiteDomain !== emailDomain) {
        // Check if email is from a known personal email provider
        if (knownCompanyDomains.includes(emailDomain)) {
          warnings.push('Email appears to be from a personal email provider rather than company domain');
        } else {
          warnings.push('Website domain and email domain do not match');
        }
      }
    } catch (e) {
      // Invalid URL format already handled by URL validation
    }
  }

  // Phone number country code validation
  if (data.contactPhone && data.country) {
    const countryPhonePrefixes: Record<string, string[]> = {
      'Germany': ['+49', '0049'],
      'Austria': ['+43', '0043'],
      'Switzerland': ['+41', '0041'],
      'United States': ['+1', '001'],
      'United Kingdom': ['+44', '0044'],
      'France': ['+33', '0033']
    };
    
    const expectedPrefixes = countryPhonePrefixes[data.country];
    if (expectedPrefixes) {
      const hasCorrectPrefix = expectedPrefixes.some(prefix => 
        data.contactPhone.startsWith(prefix)
      );
      
      if (!hasCorrectPrefix && !data.contactPhone.startsWith('0')) {
        warnings.push(`Phone number should start with country code for ${data.country}`);
      }
    }
  }

  return {
    isValid: errors.length === 0,
    warnings,
    errors
  };
};

export const validateCompanyWebsite = async (website: string, companyName: string): Promise<boolean> => {
  // In a real implementation, you might check if the website exists
  // and if it contains the company name
  try {
    const url = new URL(website);
    
    // Basic checks
    if (!url.protocol.startsWith('http')) return false;
    if (url.hostname.length < 4) return false;
    
    // Check for obvious fake domains
    const fakeDomains = ['example.com', 'test.com', 'fake.com', 'dummy.com'];
    if (fakeDomains.includes(url.hostname)) return false;
    
    return true;
  } catch {
    return false;
  }
};
