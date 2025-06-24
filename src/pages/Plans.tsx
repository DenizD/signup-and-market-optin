import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, Grow, Collapse } from '@mui/material';
import { Check, HelpOutline, ExpandMore, ExpandLess, Phone } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [expandedDetails, setExpandedDetails] = useState<boolean>(false);

  const plans = [
    {
      id: 'starter-clips',
      name: 'Starter Clips',
      description: 'Perfekt für Video-Content',
      subtitle: 'Video Modul',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
      isStarterOption: true,
      features: [
        'Shoppable Clips',
        '1.000 Views/Monat inklusive'
        'HD Video Player'
  'PiP Video Player'
  'Mediathek & Playlisten Funktion'
  'Tag Funktion'
        'Endless Play & Swipe Funktion'
        'Quer- und Hochformat Funktion'
        'Basic Analytics',
        '1 Code Video Player Integration',
        'Self Branding Funktion'
      ],
      detailedFeatures: [
        'Video Importer',
        'Featured Produktanzeige',
        'Thumbnail Generator'
        'Thumbnail Generator'
        ''
      ]
    },
    {
      id: 'starter-live-shopping',
      name: 'Starter Live Shopping',
      description: 'Ideal für E-Commerce Live Events',
      subtitle: 'Commerce Modul',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
      isStarterOption: true,
      features: [
        'Live Shopping Modul',
        '100.000 Views/Monat',
        '50 Uploads/Monat',
        '3 User Accounts',
        'Basic Analytics',
        'Player Integration',
        'Self Branding'
      ],
      detailedFeatures: [
        'Live-Event Hosting',
        'Produkt Integration',
        'Standard Support',
        'SSL Verschlüsselung',
        'Mobile optimiert'
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'Die komplette Video-Commerce Lösung',
      subtitle: 'Vollständige Lösung',
      monthlyPrice: 1195,
      popular: true,
      color: 'primary' as const,
      isStarterOption: false,
      features: [
        'Alle Module inklusive',
        'Video + Live Shopping',
        '1.000.000 Views/Monat',
        '500 Uploads/Monat',
        '20 User Accounts',
        'Advanced Analytics',
        'Extended API Access'
      ],
      detailedFeatures: [
        'Priority Support',
        'Erweiterte Integrationen',
        'Custom Branding',
        'Team Collaboration',
        'Detaillierte Reports'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Maßgeschneiderte Unternehmenslösung',
      subtitle: 'Enterprise Lösung',
      monthlyPrice: null,
      popular: false,
      color: 'secondary' as const,
      isStarterOption: false,
      features: [
        'Alles aus Advanced',
        'AI Bot Integration',
        'Unbegrenzte Views',
        'Unbegrenzte Uploads',
        'Unbegrenzte Accounts',
        'Enterprise Support',
        'Success Manager'
      ],
      detailedFeatures: [
        'Dedizierte Infrastruktur',
        'SLA Garantie',
        'On-Premise Option',
        'Custom Development',
        'Training inklusive'
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Custom';
    return `${price.toLocaleString('de-DE')}€`;
  };

  const getCardStyles = (plan: typeof plans[0]) => {
    const baseStyles = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      borderRadius: 4,
      overflow: 'visible',
      backgroundColor: '#ffffff',
      border: '1px solid rgba(211, 212, 213, 0.3)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 40px rgba(67, 190, 172, 0.12)',
        borderColor: 'rgba(67, 190, 172, 0.2)'
      }
    };

    if (plan.popular) {
      return {
        ...baseStyles,
        border: '2px solid #43BEAC',
        boxShadow: '0 8px 32px rgba(67, 190, 172, 0.15)',
        backgroundColor: '#fafffe',
        '&:hover': {
          transform: 'translateY(-12px)',
          boxShadow: '0 32px 64px rgba(67, 190, 172, 0.2)',
          borderColor: '#43BEAC'
        }
      };
    }

    return baseStyles;
  };

  const toggleDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      background: 'linear-gradient(135deg, #fafbfc 0%, #f0f7ff 50%, #f8fafc 100%)', 
      minHeight: '100vh' 
    }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              color: '#1a1d21',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
              letterSpacing: '-0.025em',
              lineHeight: 1.1
            }}
          >
            Preise & Pakete
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#64748b', 
              fontWeight: 400,
              mb: 2,
              maxWidth: '680px',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Wählen Sie das perfekte Paket für Ihre Video-Commerce Strategie
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#94a3b8', 
              maxWidth: '500px',
              mx: 'auto',
              fontSize: '1rem'
            }}
          >
            Alle Pakete sind monatlich kündbar und beinhalten kostenlose Updates
          </Typography>
        </Box>

        {/* Starter Hinweis */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#64748b',
              fontSize: '1.1rem',
              fontWeight: 500,
              backgroundColor: '#f8fafc',
              px: 4,
              py: 2,
              borderRadius: 3,
              display: 'inline-block',
              border: '1px solid #e2e8f0'
            }}
          >
            Die beiden Starter-Module sind als <strong>Entweder/Oder</strong> Option verfügbar
          </Typography>
        </Box>

        {/* All Plans Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)', 
              lg: 'repeat(4, 1fr)' 
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1400px',
            mx: 'auto'
          }}>
            {plans.map((plan, index) => (
              <Box key={plan.id}>
                <Grow in timeout={600 + index * 150}>
                  <Card sx={getCardStyles(plan)}>
                    {plan.popular && (
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: -14,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'linear-gradient(135deg, #43BEAC 0%, #2dd4bf 100%)',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          px: 2,
                          py: 0.5,
                          zIndex: 1,
                          boxShadow: '0 4px 12px rgba(67, 190, 172, 0.4)',
                          borderRadius: 2
                        }}
                      >
                        Beliebteste Wahl
                      </Box>
                    )}

                    <CardContent sx={{ p: { xs: 3, md: 4 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Plan Header */}
                      <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography 
                          variant="overline" 
                          sx={{ 
                            color: '#64748b',
                            fontWeight: 700,
                            letterSpacing: 2,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            mb: 1,
                            display: 'block'
                          }}
                        >
                          {plan.subtitle}
                        </Typography>
                        <Typography variant="h5" sx={{ 
                          fontWeight: 700, 
                          mb: 2,
                          color: '#1a1d21',
                          letterSpacing: '-0.015em',
                          fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}>
                          {plan.name}
                        </Typography>
                        <Typography variant="body1" sx={{ 
                          color: '#64748b',
                          mb: 4,
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                          minHeight: { xs: 'auto', md: '48px' },
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}>
                          {plan.description}
                        </Typography>

                        {/* Price */}
                        <Box sx={{ mb: 4 }}>
                          <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                            <Typography variant="h3" sx={{
                              fontWeight: 800,
                              color: plan.popular ? '#43BEAC' : '#1a1d21',
                              lineHeight: 1,
                              letterSpacing: '-0.025em',
                              fontSize: { xs: '2.5rem', md: '3rem' }
                            }}>
                              {formatPrice(plan.monthlyPrice)}
                            </Typography>
                            {plan.monthlyPrice !== null && (
                              <Typography variant="body1" sx={{ 
                                color: '#64748b',
                                fontWeight: 500,
                                fontSize: '1rem'
                              }}>
                                /Monat
                              </Typography>
                            )}
                          </Stack>
                          {plan.monthlyPrice !== null && (
                            <Typography variant="body2" sx={{ 
                              color: '#94a3b8',
                              mt: 1,
                              fontSize: '0.875rem'
                            }}>
                              zzgl. MwSt.
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      {/* Features */}
                      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Stack spacing={3} sx={{ minHeight: { xs: 'auto', md: '280px' } }}>
                          {plan.features.map((feature, index) => (
                            <Stack key={index} direction="row" alignItems="flex-start" spacing={2}>
                              <Box sx={{
                                backgroundColor: plan.popular ? '#E8FDF3' : '#f1f5f9',
                                borderRadius: '50%',
                                p: 0.5,
                                flexShrink: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mt: 0.25,
                                width: 20,
                                height: 20
                              }}>
                                <Box sx={{
                                  width: 8,
                                  height: 8,
                                  backgroundColor: plan.popular ? '#059669' : '#43BEAC',
                                  borderRadius: '50%'
                                }} />
                              </Box>
                              <Typography variant="body1" sx={{ 
                                color: '#334155',
                                lineHeight: 1.5,
                                fontWeight: 500,
                                fontSize: '0.95rem'
                              }}>
                                {feature}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        {/* Detailed Features Collapse */}
                        <Collapse in={expandedDetails}>
                          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #e2e8f0' }}>
                            <Typography variant="subtitle2" sx={{ 
                              fontWeight: 700, 
                              mb: 3, 
                              color: '#43BEAC',
                              fontSize: '0.875rem',
                              textTransform: 'uppercase',
                              letterSpacing: 1
                            }}>
                              Zusätzliche Features:
                            </Typography>
                            <Stack spacing={2}>
                              {plan.detailedFeatures?.map((feature, index) => (
                                <Stack key={index} direction="row" alignItems="flex-start" spacing={1.5}>
                                  <Box sx={{
                                    width: 14,
                                    height: 14,
                                    backgroundColor: '#43BEAC',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    mt: 0.25
                                  }} />
                                  <Typography variant="body2" sx={{ 
                                    color: '#64748b', 
                                    fontSize: '0.875rem',
                                    lineHeight: 1.4
                                  }}>
                                    {feature}
                                  </Typography>
                                </Stack>
                              ))}
                            </Stack>
                          </Box>
                        </Collapse>
                      </Box>
                    </CardContent>

                    <CardActions sx={{ p: { xs: 3, md: 4 }, pt: 0 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        data-track-id={`pricing-${plan.id}-click`}
                        sx={{
                          py: 2,
                          backgroundColor: plan.popular ? '#43BEAC' : '#1e293b',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: plan.popular ? '#369991' : '#0f172a',
                            transform: 'translateY(-2px)',
                            boxShadow: plan.popular 
                              ? '0 12px 32px rgba(67, 190, 172, 0.4)' 
                              : '0 12px 32px rgba(30, 41, 59, 0.4)'
                          },
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1.05rem',
                          borderRadius: 3,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: plan.popular 
                            ? '0 4px 16px rgba(67, 190, 172, 0.2)' 
                            : '0 4px 16px rgba(30, 41, 59, 0.1)'
                        }}
                      >
                        {plan.id === 'enterprise' ? 'Beratung vereinbaren' : 'Paket wählen'}
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Global Details Toggle */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
          <Button
            variant="text"
            onClick={toggleDetails}
            endIcon={expandedDetails ? <Box sx={{ transform: 'rotate(180deg)', transition: 'transform 0.3s' }}>▼</Box> : <Box sx={{ transition: 'transform 0.3s' }}>▼</Box>}
            sx={{
              color: '#64748b',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              py: 2,
              px: 4,
              borderRadius: 3,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(67, 190, 172, 0.08)',
                color: '#43BEAC',
                transform: 'translateY(-1px)'
              }
            }}
          >
            {expandedDetails ? 'Details ausblenden' : 'Alle Details anzeigen'}
          </Button>
        </Box>

        {/* Additional Information Section */}
        <Box sx={{ 
          maxWidth: '1000px', 
          mx: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: 4,
          p: { xs: 4, md: 8 },
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          border: '1px solid rgba(226, 232, 240, 0.8)'
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            mb: 6, 
            color: '#1a1d21',
            textAlign: 'center',
            fontSize: { xs: '1.75rem', md: '2.25rem' }
          }}>
            Zusätzliche Informationen
          </Typography>
          
          <Stack spacing={4}>
            <Box>
              <Typography variant="body1" sx={{ 
                color: '#334155', 
                lineHeight: 1.7,
                fontSize: '1.05rem',
                fontWeight: 500
              }}>
                Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. <sup>1</sup>
              </Typography>
            </Box>
            
            <Box sx={{ 
              backgroundColor: '#f8fafc', 
              p: 4, 
              borderRadius: 3,
              border: '1px solid #e2e8f0'
            }}>
              <Typography variant="body2" sx={{ 
                color: '#64748b', 
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}>
                <sup>1</sup> Mindestlaufzeit beträgt 12 Monate. Kündigungsfrist 3 Monate zum Laufzeitende. 
                Alle Pakete beinhalten kostenlose Updates und Standard-Support während der Laufzeit.
              </Typography>
            </Box>
            
            <Box sx={{ pt: 4, borderTop: '1px solid #e2e8f0' }}>
              <Typography variant="body1" sx={{ 
                color: '#43BEAC', 
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Individuelle Lösungen und maßgeschneiderte Pakete auf Anfrage verfügbar.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Plans;
