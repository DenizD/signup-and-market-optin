
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Languages } from 'lucide-react';
import { Box } from '@mui/material';

export type Language = {
  code: 'de' | 'en' | 'es';
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'de', name: 'Deutsch'},
  { code: 'en', name: 'English'},
  { code: 'es', name: 'Español'},
];

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Languages size={20} />
      <Select value={currentLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue>
            {languages.find(lang => lang.code === currentLanguage)?.flag} {languages.find(lang => lang.code === currentLanguage)?.name}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              <span className="flex items-center gap-2">
                {language.flag} {language.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Box>
  );
};

export default LanguageSwitcher;
