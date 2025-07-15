
import React from 'react';
import { Card, CardContent, Typography, Button, Box, Stack, Chip, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { PlanCardProps } from './types';
import { ModuleSelector } from './ModuleSelector';
import { FeatureSection } from './FeatureSection';

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  language,
  isPopular,
  starterModule,
  onModuleChange,
  expandedFeatures,
  onToggleFeatures
}) => {
  const formatPrice = (price: number | null) => {
    if (price === null) return language === 'de' ? 'Individuell' : 'Custom';
    return `${price.toLocaleString('en-US')}€`;
  };

  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <Card sx={{
        width: '100%',
        display: 'grid',
        gridTemplateRows: '220px 140px auto 1fr 80px',
        minHeight: '800px',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 4,
          transform: 'translateY(-4px)'
        },
        border: isPopular ? '2px solid' : '1px solid',
        borderColor: isPopular ? 'primary.main' : 'divider',
        bgcolor: isPopular ? 'primary.50' : 'background.paper',
        position: 'relative'
      }}>
        {/* Popular Badge */}
        {isPopular && (
          <Chip
            label={language === 'de' ? 'EMPFOHLEN' : 'RECOMMENDED'}
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 600,
              zIndex: 1
            }}
          />
        )}

        {/* Block 1: Header-Bereich (220px) */}
        <CardContent sx={{ p: 3, textAlign: 'center', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="caption" sx={{ 
            fontWeight: 600, 
            color: 'text.secondary', 
            textTransform: 'uppercase', 
            letterSpacing: 1,
            mb: 1,
            display: 'block'
          }}>
            {language === 'de' ? plan.subtitle : plan.subtitleEN}
          </Typography>
          <Typography variant="h4" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
            {plan.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px' }}>
            {language === 'de' ? plan.description : plan.descriptionEN}
          </Typography>
          <Typography variant="h3" color="primary" sx={{ fontWeight: 700, mb: 0.5 }}>
            {formatPrice(plan.monthlyPrice)}
          </Typography>
          {plan.monthlyPrice && (
            <Typography variant="body2" color="text.secondary">
              {language === 'de' ? 'pro Monat' : 'per month'}
            </Typography>
          )}
        </CardContent>

        {/* Block 2: Modul/Info-Bereich (140px) */}
        <CardContent sx={{ 
          p: 3, 
          borderBottom: '1px solid', 
          borderColor: 'divider',
          bgcolor: 'grey.50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {plan.isStarterOption ? (
            <ModuleSelector
              selectedModule={starterModule}
              onModuleChange={onModuleChange}
              language={language}
            />
          ) : (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body1" color="primary" sx={{ fontWeight: 600, mb: 0.5 }}>
                {plan.id === 'advanced' 
                  ? (language === 'de' ? 'Beinhaltet alle Starter-Features (Clips + Live Shopping) sowie:' : 'Includes all Starter features (Clips + Live Shopping) plus:')
                  : (language === 'de' ? 'Beinhaltet alle Advanced-Features sowie individuell anpassbare Leistungen:' : 'Includes all Advanced features plus individually customizable services:')
                }
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {plan.monthlyPrice && `${plan.monthlyPrice === 1195 ? '2.500' : '1.000'} ${language === 'de' ? 'Aufrufe/Monat inkl.' : 'views/month incl.'}`}
              </Typography>
            </Box>
          )}
        </CardContent>

        {/* Block 3: Basis-Features (auto) */}
        <CardContent sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography variant="subtitle2" sx={{ 
            fontWeight: 600, 
            color: 'text.secondary', 
            textTransform: 'uppercase', 
            letterSpacing: 0.5,
            mb: 2
          }}>
            {language === 'de' ? 'Basis-Features' : 'Base Features'}
          </Typography>
          <FeatureSection
            features={plan.baseFeatures || []}
            language={language}
            showAll={true}
          />
        </CardContent>

        {/* Block 4: Spezielle Features (1fr - flexibel) */}
        <CardContent sx={{ p: 3, flex: 1 }}>
          {plan.isStarterOption ? (
            <Box>
              <Typography variant="subtitle2" sx={{ 
                fontWeight: 600, 
                color: 'text.secondary', 
                textTransform: 'uppercase', 
                letterSpacing: 0.5,
                mb: 2
              }}>
                {language === 'de' 
                  ? `${starterModule === 'clips' ? 'Clips' : 'Live Shopping'} Features`
                  : `${starterModule === 'clips' ? 'Clips' : 'Live Shopping'} Features`
                }
              </Typography>
              <FeatureSection
                features={plan.moduleFeatures?.[starterModule] || []}
                language={language}
                showAll={expandedFeatures[`starter-${starterModule}`] || false}
                onToggle={() => onToggleFeatures(`starter-${starterModule}`)}
                maxInitial={5}
              />
            </Box>
          ) : (
            <Box>
              <Typography variant="subtitle2" sx={{ 
                fontWeight: 600, 
                color: 'text.secondary', 
                textTransform: 'uppercase', 
                letterSpacing: 0.5,
                mb: 2
              }}>
                {language === 'de' ? 'Exklusive Features' : 'Exclusive Features'}
              </Typography>
              <FeatureSection
                features={plan.exclusiveFeatures || []}
                language={language}
                showAll={true}
              />
            </Box>
          )}
        </CardContent>

        {/* Block 5: CTA-Button (80px) */}
        <CardContent sx={{ p: 3, pt: 2 }}>
          <Button
            variant={isPopular ? "contained" : "outlined"}
            color={isPopular ? "primary" : "primary"}
            fullWidth
            size="large"
            sx={{
              height: '48px',
              fontWeight: 600,
              fontSize: '1rem',
              ...(isPopular && {
                bgcolor: '#43BEAC',
                '&:hover': {
                  bgcolor: '#3AA89B'
                }
              })
            }}
          >
            {plan.monthlyPrice 
              ? (language === 'de' ? 'Jetzt starten' : 'Start Now')
              : (language === 'de' ? 'Kontakt aufnehmen' : 'Contact Us')
            }
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};
