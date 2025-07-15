
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ModuleSelectorProps {
  selectedModule: 'clips' | 'live-shopping';
  onModuleChange: (module: 'clips' | 'live-shopping') => void;
  language: 'de' | 'en';
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({
  selectedModule,
  onModuleChange,
  language
}) => {
  return (
    <div className="w-full">
      <div className="text-xs font-semibold text-center mb-3 text-muted-foreground">
        1.000 {language === 'de' ? 'Aufrufe/Monat inkl.' : 'views/month incl.'}
      </div>
      <Tabs value={selectedModule} onValueChange={(value) => onModuleChange(value as 'clips' | 'live-shopping')}>
        <TabsList className="grid w-full grid-cols-2 h-16">
          <TabsTrigger value="clips" className="text-xs p-2">
            <div className="text-center">
              <div className="font-semibold">
                {language === 'de' ? 'Clips' : 'Clips'}
              </div>
              <div className="text-xs opacity-75">
                {language === 'de' ? 'Highlights' : 'Highlights'}
              </div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="live-shopping" className="text-xs p-2">
            <div className="text-center">
              <div className="font-semibold">
                {language === 'de' ? 'Live Shopping' : 'Live Shopping'}
              </div>
              <div className="text-xs opacity-75">
                {language === 'de' ? 'Livestreams' : 'Livestreams'}
              </div>
            </div>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
