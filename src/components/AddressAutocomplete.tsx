
import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box, Typography } from '@mui/material';
import { searchCities, CityInfo, suggestPostalCodeForCity, getCityByPostalCode } from '@/services/addressService';

interface AddressAutocompleteProps {
  label: string;
  value: string;
  country: string;
  postalCode?: string;
  onCityChange: (city: string) => void;
  onPostalCodeSuggestion: (postalCode: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({
  label,
  value,
  country,
  postalCode = '',
  onCityChange,
  onPostalCodeSuggestion,
  error,
  helperText,
  required
}) => {
  const [options, setOptions] = useState<CityInfo[]>([]);
  const [inputValue, setInputValue] = useState(value);

  // Auto-fill city based on postal code
  useEffect(() => {
    console.log('Postal code changed:', postalCode, 'Country:', country);
    if (postalCode && postalCode.length >= 3 && country) {
      const cityFromPostalCode = getCityByPostalCode(postalCode, country);
      console.log('City found for postal code:', cityFromPostalCode);
      
      if (cityFromPostalCode && cityFromPostalCode !== value) {
        console.log('Auto-filling city based on postal code:', postalCode, '→', cityFromPostalCode);
        onCityChange(cityFromPostalCode);
        setInputValue(cityFromPostalCode);
      }
    }
  }, [postalCode, country, onCityChange, value]);

  useEffect(() => {
    if (country) {
      const cities = searchCities(inputValue, country);
      setOptions(cities);
    } else {
      setOptions([]);
    }
  }, [inputValue, country]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleCitySelect = (city: CityInfo | string | null) => {
    if (city) {
      if (typeof city === 'string') {
        onCityChange(city);
      } else {
        onCityChange(city.name);
        // Only suggest postal code if current one is empty
        if (!postalCode) {
          const suggestedPostalCode = suggestPostalCodeForCity(city.name, country);
          if (suggestedPostalCode) {
            onPostalCodeSuggestion(suggestedPostalCode);
          }
        }
      }
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
      value={options.find(opt => opt.name === value) || null}
      onChange={(_, newValue) => handleCitySelect(newValue)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
        onCityChange(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Box>
            <Typography variant="body2">{option.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              Postal codes: {option.postalCodes.slice(0, 3).join(', ')}
              {option.postalCodes.length > 3 && '...'}
            </Typography>
          </Box>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          required={required}
          error={error}
          helperText={helperText}
          placeholder={country ? "Start typing city name..." : "Select country first"}
          disabled={!country}
        />
      )}
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
    />
  );
};

export default AddressAutocomplete;
