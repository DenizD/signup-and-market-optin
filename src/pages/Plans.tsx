
import React, { useState } from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';
import { useTranslations } from '@/hooks/useTranslations';
import { PlanCard } from '@/components/plans/PlanCard';
import { plans } from '@/components/plans/plansData';

const Plans = () => {
  const { language } = useTranslations();
  const [starterModule, setStarterModule] = useState<'clips' | 'live-shopping'>('clips');
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  const toggleFeatures = (key: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
      py: 8
    }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #252A2E 0%, #37474F 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {language === 'de' ? 'Entdecken Sie unsere Pläne' : 'Discover our Plans'}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 1, maxWidth: '600px', mx: 'auto' }}>
            {language === 'de' 
              ? 'Wählen Sie den perfekten Plan für Ihr Unternehmen und starten Sie noch heute'
              : 'Choose the perfect plan for your business and get started today'
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {language === 'de' 
              ? 'Alle Pakete enthalten kostenlose Updates'
              : 'All packages include free updates'
            }
          </Typography>
        </Box>

        {/* Plans Grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
          gap: 4,
          maxWidth: '1400px',
          mx: 'auto',
          mb: 8,
          alignItems: 'stretch'
        }}>
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              language={language as 'de' | 'en'}
              isPopular={plan.popular}
              starterModule={starterModule}
              onModuleChange={setStarterModule}
              expandedFeatures={expandedFeatures}
              onToggleFeatures={toggleFeatures}
            />
          ))}
        </Box>

        {/* Additional Information */}
        <Box sx={{
          maxWidth: '800px',
          mx: 'auto',
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          p: 4,
          boxShadow: 1
        }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, textAlign: 'center', fontWeight: 600 }}>
            {language === 'de' ? 'Zusätzliche Informationen' : 'Additional Information'}
          </Typography>
          
          <Stack spacing={3}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {language === 'de' 
                ? 'Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.'
                : 'All prices are subject to applicable VAT.'
              }
            </Typography>
            
            <Box sx={{
              bgcolor: 'grey.50',
              p: 2,
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'grey.200'
            }}>
              <Typography variant="body2" color="text.secondary">
                <sup>1</sup> {language === 'de' 
                  ? 'Kostenlose Aufrufe pro Monat im jeweiligen Plan enthalten. Zusätzliche Aufrufe werden mit 0,15€ pro Aufruf berechnet und automatisch über die hinterlegte Zahlungsmethode nutzungsbasiert abgerechnet.'
                  : 'Free views per month included in the respective plan. Additional views are charged at €0.15 per view and automatically debited via the stored payment method according to usage.'
                }
              </Typography>
            </Box>
            
            <Box sx={{ textAlign: 'center', pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body1" color="primary" sx={{ fontWeight: 600 }}>
                {language === 'de' 
                  ? 'Individuelle Lösungen und maßgeschneiderte Pakete auf Anfrage verfügbar.'
                  : 'Individual solutions and custom packages available upon request.'
                }
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Plans;
