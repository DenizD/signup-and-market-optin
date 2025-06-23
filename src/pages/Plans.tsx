
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, ToggleButtonGroup, ToggleButton, Grow, Fade, Collapse, Grid } from '@mui/material';
import { Check, HelpOutline, PlayCircle, ShoppingCart, ExpandMore, ExpandLess } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedModule, setSelectedModule] = useState('clips');
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: t('starterDescription'),
      subtitle: t('starterSubtitle'),
      monthlyPrice: 695,
      yearlyPrice: 6950,
      popular: false,
      color: 'default' as const,
      features: [
        { text: t('starterModule'), tooltip: t('starterModuleTooltip') },
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
      ],
      hasModuleSelector: true
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: t('advancedDescription'),
      subtitle: t('advancedSubtitle'),
      monthlyPrice: 1495,
      yearlyPrice: 14950,
      popular: true,
      color: 'primary' as const,
      features: [
        { text: t('allFromStarter'), tooltip: null },
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
      subtitle: t('enterpriseSubtitle'),
      monthlyPrice: null,
      yearlyPrice: null,
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
    if (price === null) return t('contact');
    const displayPrice = billingPeriod === 'yearly' ? Math.floor(price / 12) : price;
    return `${displayPrice}€`;
  };

  const getSavings = () => {
    if (billingPeriod === 'yearly') {
      return t('saveWithYearly');
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
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 12px 32px rgba(14, 112, 144, 0.15)'
      }
    };

    if (plan.popular) {
      return {
        ...baseStyles,
        border: '2px solid rgb(14, 112, 144)',
        boxShadow: '0 8px 24px rgba(14, 112, 144, 0.12)',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 16px 40px rgba(14, 112, 144, 0.2)'
        }
      };
    }

    return baseStyles;
  };

  const toggleDetails = (planId: string) => {
    setExpandedDetails(expandedDetails === planId ? null : planId);
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
              color: 'rgb(14, 112, 144)',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              letterSpacing: '-0.02em'
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
              mx: 'auto',
              lineHeight: 1.6
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
                    backgroundColor: 'rgb(14, 112, 144)',
                    color: '#ffffff',
                    boxShadow: '0 2px 8px rgba(14, 112, 144, 0.3)',
                    '&:hover': {
                      backgroundColor: 'rgb(12, 100, 128)'
                    }
                  },
                  '&:hover': {
                    backgroundColor: 'transparent'
                  }
                }
              }}
            >
              <ToggleButton value="monthly">{t('monthly')}</ToggleButton>
              <ToggleButton value="yearly">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <span>{t('yearly')}</span>
                  <Chip 
                    label={t('save15')}
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
        <Box sx={{ 
          display: 'flex', 
          maxWidth: '1200px', 
          mx: 'auto', 
          mb: 2,
          gap: 4,
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {plans.map((plan) => (
            <Box key={`header-${plan.id}`} sx={{ flex: 1 }}>
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
            </Box>
          ))}
        </Box>

        {/* Plans Grid */}
        <Box sx={{ 
          display: 'flex', 
          maxWidth: '1200px', 
          mx: 'auto',
          gap: 4,
          flexDirection: { xs: 'column', md: 'row' }
        }}>
          {plans.map((plan, index) => (
            <Box key={plan.id} sx={{ flex: 1 }}>
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
                        backgroundColor: 'rgb(14, 112, 144)',
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
                        color: '#252A2E',
                        letterSpacing: '-0.01em'
                      }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#64748b',
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
                            color: 'rgb(14, 112, 144)',
                            lineHeight: 1,
                            letterSpacing: '-0.02em'
                          }}>
                            {formatPrice(plan.monthlyPrice)}
                          </Typography>
                          {plan.monthlyPrice !== null && (
                            <Typography variant="body2" sx={{ 
                              color: '#64748b',
                              fontWeight: 500
                            }}>
                              /{t('month')}
                            </Typography>
                          )}
                        </Stack>
                      </Box>
                    </Box>

                    {/* Module Selector for Starter */}
                    {plan.hasModuleSelector && (
                      <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle2" sx={{ 
                          mb: 3, 
                          fontWeight: 600, 
                          color: '#252A2E', 
                          textAlign: 'center',
                          fontSize: '0.875rem'
                        }}>
                          {t('chooseModule')}:
                        </Typography>
                        <Stack spacing={1.5}>
                          <Box
                            onClick={() => setSelectedModule('clips')}
                            sx={{
                              cursor: 'pointer',
                              p: 2,
                              borderRadius: 2,
                              border: selectedModule === 'clips' ? '2px solid rgb(14, 112, 144)' : '1px solid #e2e8f0',
                              backgroundColor: selectedModule === 'clips' ? 'rgba(14, 112, 144, 0.05)' : '#ffffff',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                borderColor: 'rgb(14, 112, 144)',
                                backgroundColor: 'rgba(14, 112, 144, 0.05)'
                              }
                            }}
                          >
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Box sx={{ 
                                backgroundColor: selectedModule === 'clips' ? 'rgb(14, 112, 144)' : '#f1f5f9',
                                borderRadius: '50%',
                                p: 1,
                                minWidth: 36,
                                height: 36,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <PlayCircle sx={{ 
                                  fontSize: 18, 
                                  color: selectedModule === 'clips' ? '#ffffff' : '#64748b' 
                                }} />
                              </Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography fontWeight={600} variant="body2" sx={{ color: '#252A2E' }}>
                                  {t('clipsModule')}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>
                                  {t('clipsModuleDesc')}
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>

                          <Box
                            onClick={() => setSelectedModule('live-shopping')}
                            sx={{
                              cursor: 'pointer',
                              p: 2,
                              borderRadius: 2,
                              border: selectedModule === 'live-shopping' ? '2px solid rgb(14, 112, 144)' : '1px solid #e2e8f0',
                              backgroundColor: selectedModule === 'live-shopping' ? 'rgba(14, 112, 144, 0.05)' : '#ffffff',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                borderColor: 'rgb(14, 112, 144)',
                                backgroundColor: 'rgba(14, 112, 144, 0.05)'
                              }
                            }}
                          >
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Box sx={{ 
                                backgroundColor: selectedModule === 'live-shopping' ? 'rgb(14, 112, 144)' : '#f1f5f9',
                                borderRadius: '50%',
                                p: 1,
                                minWidth: 36,
                                height: 36,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <ShoppingCart sx={{ 
                                  fontSize: 18, 
                                  color: selectedModule === 'live-shopping' ? '#ffffff' : '#64748b' 
                                }} />
                              </Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography fontWeight={600} variant="body2" sx={{ color: '#252A2E' }}>
                                  {t('liveShoppingModule')}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#64748b' }}>
                                  {t('liveShoppingModuleDesc')}
                                </Typography>
                              </Box>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    )}

                    {/* Features */}
                    <Stack spacing={2.5}>
                      {plan.features.map((feature, index) => (
                        <Stack key={index} direction="row" alignItems="center" spacing={2}>
                          <Box sx={{
                            backgroundColor: '#dcfce7',
                            borderRadius: '50%',
                            p: 0.5,
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Check sx={{ 
                              fontSize: 16, 
                              color: '#16a34a' 
                            }} />
                          </Box>
                          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ flexGrow: 1 }}>
                            <Typography variant="body2" sx={{ 
                              color: '#374151',
                              lineHeight: 1.5,
                              fontWeight: 500
                            }}>
                              {feature.text}
                            </Typography>
                            {feature.tooltip && (
                              <Tooltip title={feature.tooltip} arrow>
                                <HelpOutline sx={{ 
                                  fontSize: 16, 
                                  color: '#9ca3af',
                                  cursor: 'help'
                                }} />
                              </Tooltip>
                            )}
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>

                    {/* Detailed Features Collapse */}
                    <Collapse in={expandedDetails === plan.id}>
                      <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid #e2e8f0' }}>
                        <Typography variant="subtitle2" sx={{ 
                          fontWeight: 700, 
                          mb: 2, 
                          color: 'rgb(14, 112, 144)' 
                        }}>
                          {t('additionalFeatures')}:
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          flexWrap: 'wrap', 
                          gap: 2 
                        }}>
                          {plan.detailedFeatures?.map((feature, index) => (
                            <Box 
                              key={index} 
                              sx={{ 
                                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' },
                                minWidth: 0
                              }}
                            >
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Check sx={{ fontSize: 14, color: '#16a34a', flexShrink: 0 }} />
                                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.8rem' }}>
                                  {feature}
                                </Typography>
                              </Stack>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Collapse>
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
                          backgroundColor: 'rgb(14, 112, 144)',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: 'rgb(12, 100, 128)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(14, 112, 144, 0.4)'
                          },
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          borderRadius: 2,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {plan.id === 'enterprise' ? t('contactSales') : t('selectPlan')}
                      </Button>

                      <Button
                        variant="text"
                        onClick={() => toggleDetails(plan.id)}
                        endIcon={expandedDetails === plan.id ? <ExpandLess /> : <ExpandMore />}
                        sx={{
                          color: '#64748b',
                          textTransform: 'none',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: 'rgb(14, 112, 144)',
                          }
                        }}
                      >
                        {t('allDetails')}
                      </Button>
                    </Stack>
                  </CardActions>
                </Card>
              </Grow>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Plans;
