
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText, Select, MenuItem, FormControl } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { language, t } = useTranslations();
  const [starterOption, setStarterOption] = useState('shows');

  const getStarterPrice = () => {
    switch (starterOption) {
      case 'shows': return '695€';
      case 'clips': return '695€';
      case 'showsAndClips': return '990€';
      default: return '695€';
    }
  };

  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      price: getStarterPrice(),
      description: t('starterDescription'),
      hexagonColor: '#E8F8F5',
      features: [
        t('starterModule'),
        t('starterViews'),
        t('starterUploads'),
        t('starterAccounts'),
        t('basicAnalytics'),
        t('playerIntegration'),
        t('selfBranding')
      ],
      hasSelect: true,
      buttonText: t('buyPlan'),
      buttonVariant: 'contained' as const
    },
    {
      id: 'advanced',
      title: 'Advanced',
      price: '1.495€',
      description: t('advancedDescription'),
      hexagonColor: '#E8F8F5',
      features: [
        t('allFromStarter'),
        t('fullVideoCommerce'),
        t('advancedViews'),
        t('advancedUploads'),
        t('advancedUserAccounts'),
        t('advancedAnalytics'),
        t('extendedApiAccess')
      ],
      hasSelect: false,
      buttonText: t('buyPlan'),
      buttonVariant: 'contained' as const
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      price: t('custom'),
      description: t('enterpriseDescription'),
      hexagonColor: '#43BEAC',
      features: [
        t('allFromStarter'),
        t('aiBot'),
        t('enterpriseViews'),
        t('unlimitedUploads'),
        t('unlimitedAccounts'),
        t('enterpriseSupport'),
        t('successManager')
      ],
      hasSelect: false,
      buttonText: t('contactSales'),
      buttonVariant: 'outlined' as const
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 700, 
              mb: 2, 
              color: '#252A2E',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {t('discoverPlans')}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#37474F', 
              fontWeight: 400,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            {t('plansSubtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #E0E0E0',
                  borderRadius: 2,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '&:hover': {
                    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                    transition: 'box-shadow 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Hexagon Price */}
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        backgroundColor: plan.hexagonColor,
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                      }}
                    >
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          fontWeight: 700, 
                          color: plan.id === 'enterprise' ? '#ffffff' : '#252A2E',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: plan.id === 'enterprise' ? '1.5rem' : '2rem'
                        }}
                      >
                        {plan.price}
                      </Typography>
                      {plan.id !== 'enterprise' && (
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#252A2E',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {t('month')}
                        </Typography>
                      )}
                    </Box>
                  </Box>

                  {/* Plan Title and Description */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 2, 
                      fontWeight: 600,
                      color: '#43BEAC',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {plan.title}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      textAlign: 'center', 
                      mb: 3, 
                      color: '#37474F',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {plan.description}
                  </Typography>

                  {/* Starter Plan Select */}
                  {plan.hasSelect && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" sx={{ mb: 1, color: '#252A2E', fontWeight: 500 }}>
                        {t('selectOption')}
                      </Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={starterOption}
                          onChange={(e) => setStarterOption(e.target.value)}
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 1,
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        >
                          <MenuItem value="shows">Shows - 695€</MenuItem>
                          <MenuItem value="clips">Clips - 695€</MenuItem>
                          <MenuItem value="showsAndClips">Shows & Clips - 990€</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  )}

                  {/* Features List */}
                  <List sx={{ flexGrow: 1, py: 0 }}>
                    {plan.features.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <FontAwesomeIcon 
                            icon="check" 
                            style={{ color: '#43BEAC', fontSize: '0.875rem' }} 
                          />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{
                            sx: { 
                              fontSize: '0.875rem',
                              color: '#252A2E',
                              fontFamily: 'Inter, sans-serif'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Buy Button */}
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant={plan.buttonVariant}
                      fullWidth
                      size="large"
                      sx={{
                        py: 1.5,
                        backgroundColor: plan.buttonVariant === 'contained' ? '#43BEAC' : 'transparent',
                        color: plan.buttonVariant === 'contained' ? '#ffffff' : '#43BEAC',
                        border: plan.buttonVariant === 'outlined' ? '2px solid #43BEAC' : 'none',
                        '&:hover': {
                          backgroundColor: plan.buttonVariant === 'contained' ? '#30A39D' : 'rgba(67, 190, 172, 0.1)',
                        },
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        textTransform: 'none'
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </Box>

                  {/* All Details Link */}
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button
                      variant="text"
                      sx={{
                        color: '#43BEAC',
                        textTransform: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {t('allDetails')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Plans;
