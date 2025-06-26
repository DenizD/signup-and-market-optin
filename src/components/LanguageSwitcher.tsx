
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Languages } from 'lucide-react';

export type Language = {
  code: 'de' | 'en' | 'es' | 'zh';
  name: string;
};

export const languages: Language[] = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
];

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-2">
      <Languages size={20} />
      <Select value={currentLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue>
            {languages.find(lang => lang.code === currentLanguage)?.name}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.code} value={language.code}>
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
