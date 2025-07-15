
import React from 'react';
import { Box, Typography, ToggleButtonGroup, ToggleButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

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
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newModule: 'clips' | 'live-shopping' | null,
  ) => {
    if (newModule !== null) {
      onModuleChange(newModule);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="caption" sx={{ 
        display: 'block', 
        textAlign: 'center', 
        mb: 2, 
        fontWeight: 600,
        color: 'text.secondary'
      }}>
        {language === 'de' ? 'Wählen Sie Ihr Starter-Modul:' : 'Choose your Starter module:'}
      </Typography>
      <Typography variant="caption" sx={{ 
        display: 'block', 
        textAlign: 'center', 
        mb: 2, 
        color: 'text.secondary'
      }}>
        1.000 {language === 'de' ? 'Aufrufe/Monat inkl.' : 'views/month incl.'}
      </Typography>
      <ToggleButtonGroup
        value={selectedModule}
        exclusive
        onChange={handleChange}
        aria-label="module selection"
        fullWidth
        sx={{
          '& .MuiToggleButton-root': {
            border: '1px solid',
            borderColor: 'divider',
            '&.Mui-selected': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }
          }
        }}
      >
        <ToggleButton value="clips" sx={{ py: 1.5 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <FontAwesomeIcon icon={faVideo} size="sm" />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {language === 'de' ? 'Clips' : 'Clips'}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {language === 'de' ? 'Highlights' : 'Highlights'}
              </Typography>
            </Box>
          </Stack>
        </ToggleButton>
        <ToggleButton value="live-shopping" sx={{ py: 1.5 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <FontAwesomeIcon icon={faBroadcastTower} size="sm" />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {language === 'de' ? 'Live Shopping' : 'Live Shopping'}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {language === 'de' ? 'Livestreams' : 'Livestreams'}
              </Typography>
            </Box>
          </Stack>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
