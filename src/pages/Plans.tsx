
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, Grid2, ToggleButtonGroup, ToggleButton, Grow, Fade } from '@mui/material';
import { Check, HelpOutline } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedModule, setSelectedModule] = useState('clips');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: t('starterDescription'),
      subtitle: 'Für Einsteiger',
      monthlyPrice: 695,
      yearlyPrice: 6950,
      popular: false,
      color: 'default' as const,
      features: [
        { text: t('starterModule'), tooltip: 'Wählen Sie zwischen Live Shopping oder Clips Modul' },
        { text: t('starterViews'), tooltip: null },
        { text: t('starterUploads'), tooltip: null },
        { text: t('starterAccounts'), tooltip: null },
        { text: t('basicAnalytics'), tooltip: null },
        { text: t('playerIntegration'), tooltip: '1-Code Integration in Ihre Website' },
        { text: t('selfBranding'), tooltip: 'Personalisieren Sie das Aussehen' }
      ],
      hasModuleSelector: true
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: t('advancedDescription'),
      subtitle: 'Für Teams',
      monthlyPrice: 1495,
      yearlyPrice: 14950,
      popular: true,
      color: 'primary' as const,
      features: [
        { text: t('allFromStarter'), tooltip: null },
        { text: t('fullVideoCommerce'), tooltip: 'Beide Module: Live Shopping & Clips' },
        { text: t('advancedViews'), tooltip: null },
        { text: t('advancedUploads'), tooltip: null },
        { text: t('advancedUserAccounts'), tooltip: null },
        { text: t('advancedAnalytics'), tooltip: 'Detaillierte Berichte mit Export-Funktion' },
        { text: t('extendedApiAccess'), tooltip: 'Erweiterte API-Funktionen verfügbar' }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: t('enterpriseDescription'),
      subtitle: 'Für Konzerne',
      monthlyPrice: null,
      yearlyPrice: null,
      popular: false,
      color: 'secondary' as const,
      features: [
        { text: t('allFromStarter'), tooltip: null },
        { text: t('aiBot'), tooltip: 'KI-gestützter Chatbot für Kunden' },
        { text: t('enterpriseViews'), tooltip: null },
        { text: t('unlimitedUploads'), tooltip: null },
        { text: t('unlimitedAccounts'), tooltip: null },
        { text: t('enterpriseSupport'), tooltip: 'Prioritärer 24/7 Support' },
        { text: t('successManager'), tooltip: 'Persönlicher Ansprechpartner' }
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Kontakt';
    const displayPrice = billingPeriod === 'yearly' ? Math.floor(price / 12) : price;
    return `${displayPrice}€`;
  };

  const getSavings = () => {
    if (billingPeriod === 'yearly') {
      return 'Spare 15% bei Jahresabo';
    }
    return null;
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
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: 8
      }
    };

    if (plan.popular) {
      return {
        ...baseStyles,
        border: '2px solid',
        borderColor: 'primary.main',
        boxShadow: 4,
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)'
      };
    }

    if (plan.id === 'enterprise') {
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        '& .MuiTypography-root': {
          color: 'white'
        },
        '& .MuiSvgIcon-root': {
          color: '#10b981'
        }
      };
    }

    return {
      ...baseStyles,
      border: '1px solid',
      borderColor: 'grey.200',
      background: '#ffffff'
    };
  };

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f8fafc 0%, #e8f4fd 100%)', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              color: '#43BEAC',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em'
            }}
          >
            Entdecken Sie die Pläne
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#64748b', 
              fontWeight: 400,
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Wählen Sie den perfekten Plan für Ihr Unternehmen und starten Sie noch heute
          </Typography>

          {/* Modern Billing Toggle */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            mb: 6
          }}>
            <ToggleButtonGroup
              value={billingPeriod}
              exclusive
              onChange={(_, value) => value && setBillingPeriod(value)}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 50,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0',
                '& .MuiToggleButton-root': {
                  border: 'none',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  color: '#64748b',
                  borderRadius: 50,
                  '&.Mui-selected': {
                    backgroundColor: '#43BEAC',
                    color: '#ffffff',
                    boxShadow: '0 2px 8px rgba(67, 190, 172, 0.3)',
                    '&:hover': {
                      backgroundColor: '#37a08e'
                    }
                  },
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }
              }}
            >
              <ToggleButton value="monthly">Monatlich</ToggleButton>
              <ToggleButton value="yearly">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <span>Jährlich</span>
                  <Chip 
                    label="15% sparen" 
                    size="small" 
                    sx={{ 
                      backgroundColor: '#dcfce7', 
                      color: '#16a34a',
                      fontSize: '0.7rem',
                      height: '20px',
                      fontWeight: 600
                    }} 
                  />
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {getSavings() && (
            <Fade in>
              <Typography sx={{ color: '#16a34a', fontWeight: 600, mb: 4 }}>
                💰 {getSavings()}
              </Typography>
            </Fade>
          )}
        </Box>

        {/* Category Headers */}
        <Grid2 container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto', mb: 2 }}>
          {plans.map((plan) => (
            <Grid2 xs={12} md={4} key={`header-${plan.id}`}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#64748b',
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  display: 'block',
                  textAlign: 'center'
                }}
              >
                {plan.subtitle}
              </Typography>
            </Grid2>
          ))}
        </Grid2>

        {/* Plans Grid */}
        <Grid2 container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {plans.map((plan, index) => (
            <Grid2 xs={12} md={4} key={plan.id}>
              <Grow in timeout={500 + index * 200}>
                <Card sx={getCardStyles(plan)}>
                  {plan.popular && (
                    <Chip 
                      label="EMPFOHLEN" 
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

                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    {/* Plan Header */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Typography variant="h6" sx={{ 
                        fontWeight: 700, 
                        mb: 1,
                        color: plan.id === 'enterprise' ? '#ffffff' : '#252A2E',
                        letterSpacing: '-0.01em'
                      }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: plan.id === 'enterprise' ? '#cbd5e1' : '#64748b',
                        mb: 3,
                        lineHeight: 1.6
                      }}>
                        {plan.description}
                      </Typography>

                      {/* Price */}
                      <Box sx={{ mb: 3 }}>
                        <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                          <Typography variant="h3" sx={{
                            fontWeight: 800,
                            color: plan.id === 'enterprise' ? '#ffffff' : '#43BEAC',
                            lineHeight: 1,
                            letterSpacing: '-0.02em'
                          }}>
                            {formatPrice(plan.monthlyPrice)}
                          </Typography>
                          {plan.monthlyPrice !== null && (
                            <Typography variant="body2" sx={{ 
                              color: plan.id === 'enterprise' ? '#cbd5e1' : '#64748b',
                              fontWeight: 500
                            }}>
                              /Monat
                            </Typography>
                          )}
                        </Stack>
                      </Box>
                    </Box>

                    {/* Module Selector for Starter */}
                    {plan.hasModuleSelector && (
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle2" sx={{ mb: 3, fontWeight: 600, color: '#43BEAC', textAlign: 'center' }}>
                          Modul auswählen:
                        </Typography>
                        <Stack spacing={2}>
                          <Card
                            variant={selectedModule === 'clips' ? 'elevation' : 'outlined'}
                            onClick={() => setSelectedModule('clips')}
                            sx={{
                              cursor: 'pointer',
                              p: 2.5,
                              borderColor: selectedModule === 'clips' ? '#43BEAC' : '#e2e8f0',
                              borderWidth: selectedModule === 'clips' ? 2 : 1,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                borderColor: '#43BEAC',
                                transform: 'translateY(-1px)'
                              }
                            }}
                          >
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Box sx={{ 
                                backgroundColor: selectedModule === 'clips' ? '#43BEAC' : '#f1f5f9',
                                borderRadius: '50%',
                                p: 1,
                                minWidth: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>🎬</Typography>
                              </Box>
                              <Box>
                                <Typography fontWeight={600} variant="body2">Clips Modul</Typography>
                                <Typography variant="caption" color="text.secondary">
                                  Ideal für Highlight-Videos
                                </Typography>
                              </Box>
                            </Stack>
                          </Card>

                          <Card
                            variant={selectedModule === 'live-shopping' ? 'elevation' : 'outlined'}
                            onClick={() => setSelectedModule('live-shopping')}
                            sx={{
                              cursor: 'pointer',
                              p: 2.5,
                              borderColor: selectedModule === 'live-shopping' ? '#43BEAC' : '#e2e8f0',
                              borderWidth: selectedModule === 'live-shopping' ? 2 : 1,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                borderColor: '#43BEAC',
                                transform: 'translateY(-1px)'
                              }
                            }}
                          >
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Box sx={{ 
                                backgroundColor: selectedModule === 'live-shopping' ? '#43BEAC' : '#f1f5f9',
                                borderRadius: '50%',
                                p: 1,
                                minWidth: 40,
                                height: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <Typography sx={{ fontSize: '1.2rem' }}>🛍️</Typography>
                              </Box>
                              <Box>
                                <Typography fontWeight={600} variant="body2">Live Shopping Modul</Typography>
                                <Typography variant="caption" color="text.secondary">
                                  Ideal für Livestream Sales
                                </Typography>
                              </Box>
                            </Stack>
                          </Card>
                        </Stack>
                      </Box>
                    )}

                    {/* Features */}
                    <Stack spacing={2.5}>
                      {plan.features.map((feature, index) => (
                        <Stack key={index} direction="row" alignItems="center" spacing={2}>
                          <Box sx={{
                            backgroundColor: plan.id === 'enterprise' ? 'rgba(16, 185, 129, 0.2)' : '#dcfce7',
                            borderRadius: '50%',
                            p: 0.5,
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Check sx={{ 
                              fontSize: 16, 
                              color: plan.id === 'enterprise' ? '#10b981' : '#16a34a' 
                            }} />
                          </Box>
                          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" sx={{ 
                              color: plan.id === 'enterprise' ? '#e2e8f0' : '#374151',
                              lineHeight: 1.5,
                              fontWeight: 500
                            }}>
                              {feature.text}
                            </Typography>
                            {feature.tooltip && (
                              <Tooltip title={feature.tooltip} arrow>
                                <HelpOutline sx={{ 
                                  fontSize: 16, 
                                  color: plan.id === 'enterprise' ? '#94a3b8' : '#9ca3af',
                                  cursor: 'help'
                                }} />
                              </Tooltip>
                            )}
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        data-track-id={`pricing-${plan.id}-click`}
                        sx={{
                          py: 1.5,
                          backgroundColor: plan.id === 'enterprise' 
                            ? '#ffffff' 
                            : '#43BEAC',
                          color: plan.id === 'enterprise' 
                            ? '#252A2E' 
                            : '#ffffff',
                          '&:hover': {
                            backgroundColor: plan.id === 'enterprise' 
                              ? '#f1f5f9' 
                              : '#37a08e',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(67, 190, 172, 0.4)'
                          },
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          borderRadius: 2,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {plan.id === 'enterprise' ? 'Kontakt aufnehmen' : 'Plan auswählen'}
                      </Button>

                      <Button
                        variant="text"
                        sx={{
                          color: plan.id === 'enterprise' ? '#cbd5e1' : '#64748b',
                          textTransform: 'none',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: plan.id === 'enterprise' ? '#ffffff' : '#43BEAC',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Alle Details anzeigen
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grow>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default Plans;
