
import { Box, Container, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Plans = () => {
  const { t } = useTranslations();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: t('starterDescription'),
      monthlyPrice: 695,
      yearlyPrice: 6950,
      popular: false,
      features: [
        t('starterModule'),
        t('starterViews'),
        t('starterUploads'),
        t('starterAccounts'),
        t('basicAnalytics'),
        t('playerIntegration'),
        t('selfBranding')
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: t('advancedDescription'),
      monthlyPrice: 1495,
      yearlyPrice: 14950,
      popular: true,
      features: [
        t('allFromStarter'),
        t('fullVideoCommerce'),
        t('advancedViews'),
        t('advancedUploads'),
        t('advancedUserAccounts'),
        t('advancedAnalytics'),
        t('extendedApiAccess')
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: t('enterpriseDescription'),
      monthlyPrice: null,
      yearlyPrice: null,
      popular: false,
      features: [
        t('allFromStarter'),
        t('aiBot'),
        t('enterpriseViews'),
        t('unlimitedUploads'),
        t('unlimitedAccounts'),
        t('enterpriseSupport'),
        t('successManager')
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return t('custom');
    return `${price}€`;
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              mb: 3, 
              color: '#1e293b',
              fontFamily: 'Inter, sans-serif',
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            {t('discoverPlans')}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#64748b', 
              fontWeight: 400,
              fontFamily: 'Inter, sans-serif',
              mb: 6,
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}
          >
            {t('plansSubtitle')}
          </Typography>

          {/* Monthly/Yearly Toggle */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 2,
            mb: 6,
            p: 1,
            backgroundColor: '#ffffff',
            borderRadius: 3,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            width: 'fit-content',
            mx: 'auto'
          }}>
            <Typography sx={{ 
              fontWeight: isYearly ? 400 : 600, 
              color: isYearly ? '#64748b' : '#1e293b',
              fontFamily: 'Inter, sans-serif'
            }}>
              Monatlich
            </Typography>
            <Switch
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#43BEAC',
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#43BEAC',
                },
              }}
            />
            <Typography sx={{ 
              fontWeight: isYearly ? 600 : 400, 
              color: isYearly ? '#1e293b' : '#64748b',
              fontFamily: 'Inter, sans-serif'
            }}>
              Jährlich
            </Typography>
            {isYearly && (
              <Box sx={{
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                px: 2,
                py: 0.5,
                borderRadius: 2,
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif'
              }}>
                2 Monate gratis
              </Box>
            )}
          </Box>
        </Box>

        {/* Plans Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: { xs: 3, md: 4 },
          maxWidth: '1200px',
          mx: 'auto'
        }}>
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative ${plan.popular ? 'ring-2 ring-[#43BEAC] shadow-xl' : 'shadow-lg'} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#ffffff',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {plan.popular && (
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: '#43BEAC',
                  color: '#ffffff',
                  textAlign: 'center',
                  py: 1,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  zIndex: 1
                }}>
                  EMPFOHLEN
                </Box>
              )}

              <CardHeader sx={{ 
                pt: plan.popular ? 6 : 4, 
                pb: 2,
                textAlign: 'center',
                borderBottom: '1px solid #f1f5f9'
              }}>
                <CardTitle sx={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  fontFamily: 'Inter, sans-serif',
                  mb: 1
                }}>
                  {plan.name}
                </CardTitle>
                <Typography sx={{
                  color: '#64748b',
                  fontSize: '0.875rem',
                  fontFamily: 'Inter, sans-serif',
                  mb: 3
                }}>
                  {plan.description}
                </Typography>

                {/* Price */}
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: '#1e293b',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1
                  }}>
                    {plan.monthlyPrice === null 
                      ? t('custom')
                      : formatPrice(isYearly ? Math.floor((plan.yearlyPrice || 0) / 12) : plan.monthlyPrice)
                    }
                  </Typography>
                  {plan.monthlyPrice !== null && (
                    <Typography sx={{
                      color: '#64748b',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      pro {t('month')}
                    </Typography>
                  )}
                  {isYearly && plan.yearlyPrice && (
                    <Typography sx={{
                      color: '#16a34a',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      mt: 1
                    }}>
                      {formatPrice(plan.yearlyPrice)} jährlich
                    </Typography>
                  )}
                </Box>
              </CardHeader>

              <CardContent sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column',
                p: 4
              }}>
                {/* Features */}
                <Box sx={{ flexGrow: 1, mb: 4 }}>
                  {plan.features.map((feature, index) => (
                    <Box key={index} sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 2, 
                      mb: 2.5
                    }}>
                      <Box sx={{
                        backgroundColor: '#dcfce7',
                        borderRadius: '50%',
                        p: 0.5,
                        mt: 0.25,
                        flexShrink: 0
                      }}>
                        <Check size={14} color="#16a34a" />
                      </Box>
                      <Typography sx={{
                        fontSize: '0.9rem',
                        color: '#475569',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: 1.5
                      }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "contained" : "outlined"}
                  fullWidth
                  size="large"
                  sx={{
                    py: 1.5,
                    backgroundColor: plan.popular ? '#43BEAC' : 'transparent',
                    color: plan.popular ? '#ffffff' : '#43BEAC',
                    border: plan.popular ? 'none' : '2px solid #43BEAC',
                    '&:hover': {
                      backgroundColor: plan.popular ? '#36a994' : '#43BEAC',
                      color: '#ffffff',
                      transform: 'translateY(-1px)',
                      boxShadow: '0 4px 12px rgba(67, 190, 172, 0.4)'
                    },
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    borderRadius: 2,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {plan.id === 'enterprise' ? t('contactSales') : t('buyPlan')}
                </Button>

                {/* All Details Link */}
                <Button
                  variant="text"
                  sx={{
                    color: '#64748b',
                    textTransform: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    mt: 2,
                    fontSize: '0.875rem',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#43BEAC',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {t('allDetails')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Plans;
