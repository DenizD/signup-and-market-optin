
// Address validation and autocomplete service
export interface AddressSearchResult {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  formatted: string;
}

export interface CityInfo {
  name: string;
  postalCodes: string[];
  country: string;
}

export interface StreetInfo {
  name: string;
  city: string;
  postalCode: string;
  country: string;
}

// Mock data for demonstration - in production, you'd use real APIs like Google Places, HERE, or OpenStreetMap
const mockCityData: Record<string, CityInfo[]> = {
  'Germany': [
    { name: 'Berlin', postalCodes: ['10115', '10117', '10119', '10178', '10179'], country: 'Germany' },
    { name: 'Hamburg', postalCodes: ['20095', '20097', '20099', '20144', '20146'], country: 'Germany' },
    { name: 'Munich', postalCodes: ['80331', '80333', '80335', '80336', '80337'], country: 'Germany' },
    { name: 'Cologne', postalCodes: ['50667', '50668', '50670', '50672', '50674'], country: 'Germany' },
    { name: 'Frankfurt', postalCodes: ['60311', '60313', '60314', '60316', '60318'], country: 'Germany' },
  ],
  'Austria': [
    { name: 'Vienna', postalCodes: ['1010', '1020', '1030', '1040', '1050'], country: 'Austria' },
    { name: 'Salzburg', postalCodes: ['5020', '5023', '5026', '5027', '5028'], country: 'Austria' },
    { name: 'Graz', postalCodes: ['8010', '8020', '8030', '8036', '8041'], country: 'Austria' },
  ],
  'Switzerland': [
    { name: 'Zurich', postalCodes: ['8001', '8002', '8003', '8004', '8005'], country: 'Switzerland' },
    { name: 'Geneva', postalCodes: ['1200', '1201', '1202', '1203', '1204'], country: 'Switzerland' },
    { name: 'Basel', postalCodes: ['4001', '4002', '4003', '4051', '4052'], country: 'Switzerland' },
  ]
};

// Mock street data for autocomplete
const mockStreetData: Record<string, StreetInfo[]> = {
  'Berlin': [
    { name: 'Unter den Linden', city: 'Berlin', postalCode: '10117', country: 'Germany' },
    { name: 'Friedrichstraße', city: 'Berlin', postalCode: '10117', country: 'Germany' },
    { name: 'Alexanderplatz', city: 'Berlin', postalCode: '10178', country: 'Germany' },
    { name: 'Potsdamer Platz', city: 'Berlin', postalCode: '10785', country: 'Germany' },
  ],
  'Hamburg': [
    { name: 'Mönckebergstraße', city: 'Hamburg', postalCode: '20095', country: 'Germany' },
    { name: 'Jungfernstieg', city: 'Hamburg', postalCode: '20354', country: 'Germany' },
    { name: 'Reeperbahn', city: 'Hamburg', postalCode: '20359', country: 'Germany' },
  ],
  'Munich': [
    { name: 'Marienplatz', city: 'Munich', postalCode: '80331', country: 'Germany' },
    { name: 'Maximilianstraße', city: 'Munich', postalCode: '80539', country: 'Germany' },
    { name: 'Leopoldstraße', city: 'Munich', postalCode: '80802', country: 'Germany' },
  ]
};

export const searchCities = (query: string, country: string): CityInfo[] => {
  const cities = mockCityData[country] || [];
  if (!query || query.length < 2) return cities.slice(0, 5);
  
  return cities.filter(city => 
    city.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 10);
};

export const searchStreets = (query: string, city: string): StreetInfo[] => {
  const streets = mockStreetData[city] || [];
  if (!query || query.length < 2) return streets.slice(0, 5);
  
  return streets.filter(street => 
    street.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 10);
};

export const validateCityPostalCode = (city: string, postalCode: string, country: string): boolean => {
  const cities = mockCityData[country] || [];
  const cityInfo = cities.find(c => c.name.toLowerCase() === city.toLowerCase());
  
  if (!cityInfo) return true; // Allow unknown cities for now
  
  return cityInfo.postalCodes.includes(postalCode);
};

export const getPostalCodesForCity = (city: string, country: string): string[] => {
  const cities = mockCityData[country] || [];
  const cityInfo = cities.find(c => c.name.toLowerCase() === city.toLowerCase());
  
  return cityInfo ? cityInfo.postalCodes : [];
};

export const suggestPostalCodeForCity = (city: string, country: string): string => {
  const postalCodes = getPostalCodesForCity(city, country);
  return postalCodes.length > 0 ? postalCodes[0] : '';
};

export const getCityByPostalCode = (postalCode: string, country: string): string => {
  const cities = mockCityData[country] || [];
  const matchingCity = cities.find(city => 
    city.postalCodes.some(code => code === postalCode || code.startsWith(postalCode.substring(0, 3)))
  );
  return matchingCity ? matchingCity.name : '';
};
