
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, RadioGroup, FormControl, FormControlLabel, Radio, ToggleButtonGroup, ToggleButton, Grid, Grow } from '@mui/material';
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
      subtitle: 'Für den Einstieg',
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
    if (price === null) return t('custom');
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
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: plan.popular ? '0 12px 40px rgba(25, 118, 210, 0.3)' : '0 8px 30px rgba(0,0,0,0.12)'
      }
    };

    if (plan.popular) {
      return {
        ...baseStyles,
        border: '2px solid #1976d2',
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.2)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f3f7ff 100%)'
      };
    }

    if (plan.id === 'enterprise') {
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)',
        color: 'white',
        '& .MuiTypography-root': {
          color: 'white'
        }
      };
    }

    return {
      ...baseStyles,
      border: '1px solid #e0e0e0'
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
              fontWeight: 800, 
              mb: 2, 
              color: '#0d47a1',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('discoverPlans')}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#64748b', 
              fontWeight: 400,
              mb: 6,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            {t('plansSubtitle')}
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
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                '& .MuiToggleButton-root': {
                  border: 'none',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: 'none',
                  color: '#64748b',
                  '&.Mui-selected': {
                    backgroundColor: '#1976d2',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: '#1565c0'
                    }
                  },
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
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
                      backgroundColor: '#e8f5e8', 
                      color: '#2e7d32',
                      fontSize: '0.7rem',
                      height: '20px'
                    }} 
                  />
                </Stack>
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {getSavings() && (
            <Typography sx={{ color: '#2e7d32', fontWeight: 600, mb: 4 }}>
              {getSavings()}
            </Typography>
          )}
        </Box>

        {/* Plans Grid */}
        <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={plan.id}>
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
                        backgroundColor: '#1976d2',
                        color: '#ffffff',
                        fontWeight: 700,
                        zIndex: 1
                      }}
                    />
                  )}

                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    {/* Plan Header */}
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                      <Typography variant="subtitle2" sx={{ 
                        color: plan.id === 'enterprise' ? '#bbdefb' : '#64748b', 
                        mb: 1,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        fontWeight: 600
                      }}>
                        {plan.subtitle}
                      </Typography>
                      <Typography variant="h4" sx={{ 
                        fontWeight: 700, 
                        mb: 1,
                        color: plan.id === 'enterprise' ? '#ffffff' : '#0d47a1'
                      }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: plan.id === 'enterprise' ? '#bbdefb' : '#64748b',
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
                            color: plan.id === 'enterprise' ? '#ffffff' : '#0d47a1',
                            lineHeight: 1
                          }}>
                            {formatPrice(plan.monthlyPrice)}
                          </Typography>
                          {plan.monthlyPrice !== null && (
                            <Typography variant="body2" sx={{ 
                              color: plan.id === 'enterprise' ? '#bbdefb' : '#64748b'
                            }}>
                              /{t('month')}
                            </Typography>
                          )}
                        </Stack>
                      </Box>
                    </Box>

                    {/* Module Selector for Starter */}
                    {plan.hasModuleSelector && (
                      <Box sx={{ 
                        mb: 4, 
                        p: 3, 
                        backgroundColor: '#f8fafc', 
                        borderRadius: 2,
                        border: '1px solid #e0e7ff'
                      }}>
                        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600, color: '#0d47a1' }}>
                          Modul auswählen:
                        </Typography>
                        <FormControl component="fieldset">
                          <RadioGroup
                            value={selectedModule}
                            onChange={(e) => setSelectedModule(e.target.value)}
                          >
                            <FormControlLabel 
                              value="clips" 
                              control={<Radio size="small" sx={{ color: '#1976d2' }} />} 
                              label={
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  Clips Modul
                                </Typography>
                              }
                            />
                            <FormControlLabel 
                              value="live-shopping" 
                              control={<Radio size="small" sx={{ color: '#1976d2' }} />} 
                              label={
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                  Live Shopping Modul
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </Box>
                    )}

                    {/* Features */}
                    <Stack spacing={2.5}>
                      {plan.features.map((feature, index) => (
                        <Stack key={index} direction="row" alignItems="center" spacing={1.5}>
                          <Box sx={{
                            backgroundColor: plan.id === 'enterprise' ? 'rgba(25, 118, 210, 0.2)' : '#e8f5e8',
                            borderRadius: '50%',
                            p: 0.5,
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Check sx={{ 
                              fontSize: 16, 
                              color: plan.id === 'enterprise' ? '#1976d2' : '#2e7d32' 
                            }} />
                          </Box>
                          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" sx={{ 
                              color: plan.id === 'enterprise' ? '#e3f2fd' : '#374151',
                              lineHeight: 1.5,
                              fontWeight: 500
                            }}>
                              {feature.text}
                            </Typography>
                            {feature.tooltip && (
                              <Tooltip title={feature.tooltip} arrow>
                                <HelpOutline sx={{ 
                                  fontSize: 16, 
                                  color: plan.id === 'enterprise' ? '#bbdefb' : '#9ca3af',
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
                        variant={plan.popular ? "contained" : "outlined"}
                        fullWidth
                        size="large"
                        data-track-id={`pricing-${plan.id}-click`}
                        sx={{
                          py: 1.5,
                          backgroundColor: plan.popular 
                            ? '#1976d2' 
                            : plan.id === 'enterprise' 
                              ? 'transparent' 
                              : 'transparent',
                          color: plan.popular 
                            ? '#ffffff' 
                            : plan.id === 'enterprise' 
                              ? '#ffffff' 
                              : '#1976d2',
                          border: plan.popular 
                            ? 'none' 
                            : plan.id === 'enterprise' 
                              ? '2px solid #ffffff' 
                              : '2px solid #1976d2',
                          '&:hover': {
                            backgroundColor: plan.id === 'enterprise' 
                              ? 'rgba(255,255,255,0.1)' 
                              : '#1976d2',
                            color: '#ffffff',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(25, 118, 210, 0.4)'
                          },
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          borderRadius: 2,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {plan.id === 'enterprise' ? t('contactSales') : t('buyPlan')}
                      </Button>

                      <Button
                        variant="text"
                        sx={{
                          color: plan.id === 'enterprise' ? '#bbdefb' : '#64748b',
                          textTransform: 'none',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: plan.id === 'enterprise' ? '#ffffff' : '#1976d2',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        {t('allDetails')}
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Plans;
