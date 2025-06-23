
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
      description: t('starterDescription'),
      subtitle: 'Video Modul',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
      features: [
        { text: 'Clips Modul', tooltip: 'Video-Clips erstellen und verwalten' },
        { text: t('starterViews'), tooltip: null },
        { text: t('starterUploads'), tooltip: null },
        { text: t('starterAccounts'), tooltip: null },
        { text: t('basicAnalytics'), tooltip: null },
        { text: t('playerIntegration'), tooltip: t('playerIntegrationTooltip') },
        { text: t('selfBranding'), tooltip: t('selfBrandingTooltip') }
      ],
      detailedFeatures: [
        t('videoHosting'),
        t('customPlayer'),
        t('basicSupport'),
        t('sslSecurity'),
        t('mobileOptimized')
      ]
    },
    {
      id: 'starter-live-shopping',
      name: 'Starter Live Shopping',
      description: t('starterDescription'),
      subtitle: 'Commerce Modul',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
      features: [
        { text: 'Live Shopping Modul', tooltip: 'Live-Shopping Events durchführen' },
        { text: t('starterViews'), tooltip: null },
        { text: t('starterUploads'), tooltip: null },
        { text: t('starterAccounts'), tooltip: null },
        { text: t('basicAnalytics'), tooltip: null },
        { text: t('playerIntegration'), tooltip: t('playerIntegrationTooltip') },
        { text: t('selfBranding'), tooltip: t('selfBrandingTooltip') }
      ],
      detailedFeatures: [
        t('videoHosting'),
        t('customPlayer'),
        t('basicSupport'),
        t('sslSecurity'),
        t('mobileOptimized')
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: t('advancedDescription'),
      subtitle: 'Vollständige Lösung',
      monthlyPrice: 1195,
      popular: true,
      color: 'primary' as const,
      features: [
        { text: 'Alle Module inklusive', tooltip: null },
        { text: t('fullVideoCommerce'), tooltip: t('fullVideoCommerceTooltip') },
        { text: t('advancedViews'), tooltip: null },
        { text: t('advancedUploads'), tooltip: null },
        { text: t('advancedUserAccounts'), tooltip: null },
        { text: t('advancedAnalytics'), tooltip: t('advancedAnalyticsTooltip') },
        { text: t('extendedApiAccess'), tooltip: t('extendedApiAccessTooltip') }
      ],
      detailedFeatures: [
        t('prioritySupport'),
        t('advancedIntegrations'),
        t('customBranding'),
        t('teamCollaboration'),
        t('advancedReporting')
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: t('enterpriseDescription'),
      subtitle: 'Enterprise Lösung',
      monthlyPrice: null,
      popular: false,
      color: 'secondary' as const,
      features: [
        { text: t('allFromAdvanced'), tooltip: null },
        { text: t('aiBot'), tooltip: t('aiBotTooltip') },
        { text: t('enterpriseViews'), tooltip: null },
        { text: t('unlimitedUploads'), tooltip: null },
        { text: t('unlimitedAccounts'), tooltip: null },
        { text: t('enterpriseSupport'), tooltip: t('enterpriseSupportTooltip') },
        { text: t('successManager'), tooltip: t('successManagerTooltip') }
      ],
      detailedFeatures: [
        t('dedicatedInfrastructure'),
        t('slaGuarantee'),
        t('onPremiseOption'),
        t('customDevelopment'),
        t('trainingIncluded')
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Custom';
    return `${price}€`;
  };

  const getCardStyles = (plan: typeof plans[0]) => {
    const baseStyles = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      borderRadius: 3,
      overflow: 'visible',
      backgroundColor: '#ffffff',
      border: '1px solid #D3D4D5',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 12px 32px rgba(67, 190, 172, 0.15)'
      }
    };

    if (plan.popular) {
      return {
        ...baseStyles,
        border: '2px solid #43BEAC',
        boxShadow: '0 8px 24px rgba(67, 190, 172, 0.12)',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 16px 40px rgba(67, 190, 172, 0.2)'
        }
      };
    }

    return baseStyles;
  };

  const toggleDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f8fafc 0%, #e8f4fd 100%)', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              color: '#252A2E',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em'
            }}
          >
            {t('discoverPlans')}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#737474', 
              fontWeight: 400,
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            {t('plansSubtitle')}
          </Typography>
        </Box>

        {/* Category Headers */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          maxWidth: '1400px', 
          mx: 'auto', 
          mb: 2,
          gap: 3
        }}>
          {plans.map((plan) => (
            <Box key={`header-${plan.id}`}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#737474',
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                {plan.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Plans Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
          maxWidth: '1400px', 
          mx: 'auto',
          gap: 3,
          mb: 8
        }}>
          {plans.map((plan, index) => (
            <Box key={plan.id}>
              <Grow in timeout={500 + index * 200}>
                <Card sx={getCardStyles(plan)}>
                  {plan.popular && (
                    <Chip 
                      label={t('recommended')}
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#43BEAC',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        zIndex: 1
                      }}
                    />
                  )}

                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Plan Header */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography variant="h6" sx={{ 
                        fontWeight: 700, 
                        mb: 1,
                        color: '#252A2E',
                        letterSpacing: '-0.01em',
                        fontSize: '1.1rem'
                      }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#737474',
                        mb: 3,
                        lineHeight: 1.5,
                        fontSize: '0.85rem',
                        minHeight: '40px'
                      }}>
                        {plan.description}
                      </Typography>

                      {/* Price */}
                      <Box sx={{ mb: 3 }}>
                        <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                          <Typography variant="h4" sx={{
                            fontWeight: 800,
                            color: '#43BEAC',
                            lineHeight: 1,
                            letterSpacing: '-0.02em'
                          }}>
                            {formatPrice(plan.monthlyPrice)}
                          </Typography>
                          {plan.monthlyPrice !== null && (
                            <Typography variant="body2" sx={{ 
                              color: '#737474',
                              fontWeight: 500
                            }}>
                              /{t('month')}
                            </Typography>
                          )}
                        </Stack>
                      </Box>
                    </Box>

                    {/* Features - Aligned for consistent height */}
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Stack spacing={2} sx={{ minHeight: '300px' }}>
                        {plan.features.map((feature, index) => (
                          <Stack key={index} direction="row" alignItems="flex-start" spacing={1.5}>
                            <Box sx={{
                              backgroundColor: '#E8FDF3',
                              borderRadius: '50%',
                              p: 0.4,
                              flexShrink: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mt: 0.2
                            }}>
                              <Check sx={{ 
                                fontSize: 14, 
                                color: '#0F7D40' 
                              }} />
                            </Box>
                            <Stack direction="row" alignItems="flex-start" spacing={0.5} sx={{ flexGrow: 1 }}>
                              <Typography variant="body2" sx={{ 
                                color: '#515558',
                                lineHeight: 1.4,
                                fontWeight: 500,
                                fontSize: '0.85rem'
                              }}>
                                {feature.text}
                              </Typography>
                              {feature.tooltip && (
                                <Tooltip title={feature.tooltip} arrow>
                                  <HelpOutline sx={{ 
                                    fontSize: 14, 
                                    color: '#A8AAAB',
                                    cursor: 'help',
                                    mt: 0.1
                                  }} />
                                </Tooltip>
                              )}
                            </Stack>
                          </Stack>
                        ))}
                      </Stack>

                      {/* Detailed Features Collapse */}
                      <Collapse in={expandedDetails}>
                        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #D3D4D5' }}>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700, 
                            mb: 2, 
                            color: '#43BEAC',
                            fontSize: '0.8rem'
                          }}>
                            Zusätzliche Features:
                          </Typography>
                          <Stack spacing={1.5}>
                            {plan.detailedFeatures?.map((feature, index) => (
                              <Stack key={index} direction="row" alignItems="flex-start" spacing={1}>
                                <Check sx={{ fontSize: 12, color: '#0F7D40', flexShrink: 0, mt: 0.2 }} />
                                <Typography variant="body2" sx={{ 
                                  color: '#737474', 
                                  fontSize: '0.75rem',
                                  lineHeight: 1.3
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

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        data-track-id={`pricing-${plan.id}-click`}
                        sx={{
                          py: 1.5,
                          backgroundColor: 'rgb(14, 112, 144)',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: 'rgb(12, 100, 128)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(14, 112, 144, 0.4)'
                          },
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1rem',
                          borderRadius: 2,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {plan.id === 'enterprise' ? 'Beratung vereinbaren' : t('selectPlan')}
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grow>
            </Box>
          ))}
        </Box>

        {/* Global Details Toggle */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Button
            variant="text"
            onClick={toggleDetails}
            endIcon={expandedDetails ? <ExpandLess /> : <ExpandMore />}
            sx={{
              color: '#737474',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.875rem',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'rgb(14, 112, 144)',
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
          borderRadius: 3,
          p: 6,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            mb: 4, 
            color: '#252A2E',
            textAlign: 'center'
          }}>
            Zusätzliche Informationen
          </Typography>
          
          <Stack spacing={3}>
            <Box>
              <Typography variant="body1" sx={{ color: '#515558', lineHeight: 1.6 }}>
                Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer. <sup>1</sup>
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ color: '#737474', lineHeight: 1.5 }}>
                <sup>1</sup> Mindestlaufzeit beträgt 12 Monate. Kündigungsfrist 3 Monate zum Laufzeitende.
              </Typography>
            </Box>
            
            <Box sx={{ pt: 2, borderTop: '1px solid #D3D4D5' }}>
              <Typography variant="body2" sx={{ 
                color: '#737474', 
                textAlign: 'center',
                fontStyle: 'italic'
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
