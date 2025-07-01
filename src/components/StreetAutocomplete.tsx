
import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Box, Typography } from '@mui/material';
import { searchStreets, StreetInfo } from '@/services/addressService';

interface StreetAutocompleteProps {
  label: string;
  value: string;
  city: string;
  onStreetChange: (street: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
}

const StreetAutocomplete: React.FC<StreetAutocompleteProps> = ({
  label,
  value,
  city,
  onStreetChange,
  error,
  helperText,
  required
}) => {
  const [options, setOptions] = useState<StreetInfo[]>([]);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (city) {
      const streets = searchStreets(inputValue, city);
      setOptions(streets);
    } else {
      setOptions([]);
    }
  }, [inputValue, city]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleStreetSelect = (street: StreetInfo | string | null) => {
    if (street) {
      if (typeof street === 'string') {
        onStreetChange(street);
      } else {
        onStreetChange(street.name);
      }
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
      value={options.find(opt => opt.name === value) || null}
      onChange={(_, newValue) => handleStreetSelect(newValue)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
        onStreetChange(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Box>
            <Typography variant="body2">{option.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {option.city}, {option.postalCode}
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
          placeholder={city ? "Start typing street name..." : "Select city first"}
          disabled={!city}
        />
      )}
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
    />
  );
};

export default StreetAutocomplete;
