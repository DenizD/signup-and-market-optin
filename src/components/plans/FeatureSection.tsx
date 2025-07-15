
import React from 'react';
import { Box, Typography, Button, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface Feature {
  text: string;
  textEN?: string;
  tooltip?: string;
  tooltipEN?: string;
}

interface FeatureSectionProps {
  features: Feature[];
  language: 'de' | 'en';
  showAll: boolean;
  onToggle?: () => void;
  maxInitial?: number;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  features,
  language,
  showAll,
  onToggle,
  maxInitial = 5
}) => {
  const displayFeatures = showAll ? features : features.slice(0, maxInitial);
  const hasMore = features.length > maxInitial;

  return (
    <Box>
      <Stack spacing={2}>
        {displayFeatures.map((feature, index) => (
          <Stack key={index} direction="row" alignItems="flex-start" spacing={1.5}>
            <Box sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              bgcolor: 'primary.50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              mt: 0.125
            }}>
              <FontAwesomeIcon icon={faCheck} size="xs" color="#43BEAC" />
            </Box>
            <Typography variant="body2" sx={{ 
              color: 'text.primary',
              lineHeight: 1.5,
              fontFamily: 'Inter, sans-serif'
            }}>
              {language === 'de' ? feature.text : (feature.textEN || feature.text)}
            </Typography>
          </Stack>
        ))}
      </Stack>
      
      {hasMore && onToggle && (
        <Button
          variant="text"
          size="small"
          onClick={onToggle}
          fullWidth
          sx={{
            mt: 2,
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.50'
            },
            textTransform: 'none',
            fontWeight: 500
          }}
          startIcon={
            <FontAwesomeIcon 
              icon={showAll ? faChevronUp : faChevronDown} 
              size="sm" 
            />
          }
        >
          {showAll 
            ? (language === 'de' ? 'Weniger anzeigen' : 'Show less')
            : (language === 'de' ? 'Mehr anzeigen' : 'Show more')
          }
        </Button>
      )}
    </Box>
  );
};
