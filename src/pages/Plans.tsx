
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Tooltip, Grow, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t, language } = useTranslations();
  const [starterModule, setStarterModule] = useState<'clips' | 'live-shopping'>('clips');

  const starterModules = {
    clips: {
      name: t('clipsModule'),
      description: t('clipsModuleDesc'),
      features: [
        {
          text: 'Shoppable Clips Module',
          textDE: 'Shoppable Clips Modul',
          tooltip: 'Create and manage interactive video clips with direct purchase options',
          tooltipDE: 'Erstelle und verwalte interaktive Video-Clips mit direkten Kaufoptionen'
        },
        {
          text: 'Video Import & Management',
          textDE: 'Video Import & Verwaltung',
          tooltip: 'Import and manage videos (max. 1 GB/video)',
          tooltipDE: 'Import und Verwaltung von Videos (max. 1 GB/Video)'
        },
        {
          text: 'Product Thumbnail Display',
          textDE: 'Produkt-Thumbnail Anzeige',
          tooltip: 'Featured product display on video covers',
          tooltipDE: 'Hervorgehobene Produktanzeige auf Video-Covern'
        },
        {
          text: 'Thumbnail Generator',
          textDE: 'Thumbnail Generator',
          tooltip: 'Automatic creation of 15 random preview images',
          tooltipDE: 'Automatische Erstellung von 15 zufälligen Vorschaubildern'
        },
        {
          text: 'Smart Product Tagging',
          textDE: 'Intelligente Produkt-Tags',
          tooltip: 'AI-powered automatic product recognition and tagging in videos',
          tooltipDE: 'KI-gestützte automatische Produkterkennung und -markierung in Videos'
        },
        {
          text: 'Interactive Hotspots',
          textDE: 'Interaktive Hotspots',
          tooltip: 'Clickable product points within videos for instant shopping',
          tooltipDE: 'Klickbare Produktpunkte in Videos für sofortiges Shopping'
        }
      ]
    },
    'live-shopping': {
      name: t('liveShoppingModule'),
      description: t('liveShoppingModuleDesc'),
      features: [
        {
          text: 'Live Shopping Module',
          textDE: 'Live Shopping Modul',
          tooltip: 'Complete live streaming solution with e-commerce integration',
          tooltipDE: 'Komplette Live-Streaming-Lösung mit E-Commerce-Integration'
        },
        {
          text: 'Broadcasting App & RTMP',
          textDE: 'Broadcasting App & RTMP',
          tooltip: 'Web app and professional streaming with external cameras',
          tooltipDE: 'Web-App und professionelles Streaming mit externen Kameras'
        },
        {
          text: 'Live Chat & Moderation',
          textDE: 'Live Chat & Moderation',
          tooltip: 'Interactive chat functions with moderation tools',
          tooltipDE: 'Interaktive Chat-Funktionen mit Moderations-Tools'
        },
        {
          text: 'Social Media Multistreaming',
          textDE: 'Social Media Multistreaming',
          tooltip: 'Simultaneous streaming to one social media platform',
          tooltipDE: 'Gleichzeitiges Streaming auf eine Social Media Plattform'
        },
        {
          text: 'Real-time Product Showcase',
          textDE: 'Echtzeit Produkt-Showcase',
          tooltip: 'Live product demonstrations with instant purchase options',
          tooltipDE: 'Live Produktvorführungen mit sofortigen Kaufoptionen'
        },
        {
          text: 'Audience Interaction Tools',
          textDE: 'Publikums-Interaktions-Tools',
          tooltip: 'Polls, Q&A sessions, and viewer engagement features',
          tooltipDE: 'Umfragen, Q&A-Sessions und Zuschauer-Engagement-Features'
        },
        {
          text: 'Stream Recording & Replay',
          textDE: 'Stream-Aufzeichnung & Wiedergabe',
          tooltip: 'Automatic recording and replay functionality for missed shows',
          tooltipDE: 'Automatische Aufzeichnung und Wiedergabe-Funktion für verpasste Shows'
        }
      ]
    }
  };

  const plans = [
    {
      id: 'starter',
      name: t('starterDescription').split(' ')[0], // 'Starter'
      description: t('starterDescription'),
      subtitle: t('starterSubtitle'),
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
      isStarterOption: true,
      coreFeatures: [
        {
          text: t('starterViews'),
          tooltip: language === 'de' 
            ? 'Ein Viewer wird gezählt, wenn ein Video/Stream länger als 5 Sekunden angeschaut wird'
            : 'A viewer is counted when a video/stream is watched for more than 5 seconds'
        },
        {
          text: t('playerIntegration'),
          tooltip: t('playerIntegrationTooltip')
        },
        {
          text: 'Media Library & Playlists with Tagging',
          textDE: 'Medien-Bibliothek & Playlists mit Tagging',
          tooltip: 'Central management of all content without code changes',
          tooltipDE: 'Zentrale Verwaltung aller Inhalte ohne Code-Änderungen'
        },
        {
          text: 'Endless Play & Swipe',
          textDE: 'Endless Play & Swipe',
          tooltip: 'Uninterrupted scrolling and playback of content',
          tooltipDE: 'Ununterbrochenes Scrollen und Abspielen von Inhalten'
        },
        {
          text: t('playerIntegration'),
          tooltip: t('playerIntegrationTooltip')
        },
        {
          text: t('selfBranding'),
          tooltip: t('selfBrandingTooltip')
        },
        {
          text: t('basicSupport'),
          tooltip: language === 'de' 
            ? 'Technischer Support über unser Ticket-System'
            : 'Technical support via our ticket system'
        }
      ]
    },
    {
      id: 'advanced',
      name: t('advancedDescription').split(' ')[0], // 'Advanced'
      description: t('advancedDescription'),
      subtitle: t('advancedSubtitle'),
      monthlyPrice: 1195,
      popular: true,
      color: 'primary' as const,
      isStarterOption: false,
      includesPrevious: t('allFromStarter'),
      features: [
        {
          text: t('fullVideoCommerce'),
          tooltip: t('fullVideoCommerceTooltip')
        },
        {
          text: t('advancedViews'),
          tooltip: language === 'de' 
            ? 'Erweiterte Viewer-Kapazität für höhere Reichweite'
            : 'Extended viewer capacity for higher reach'
        },
        {
          text: t('extendedApiAccess'),
          tooltip: t('extendedApiAccessTooltip')
        },
        {
          text: 'Product Detail Page Integration',
          textDE: 'Produktdetailseiten Integration',
          tooltip: 'Automatic video snippets on product pages',
          tooltipDE: 'Automatische Video-Snippets auf Produktseiten'
        },
        {
          text: 'Custom Embed Codes',
          textDE: 'Custom Embed Codes',
          tooltip: 'Individual embedding codes for special requirements',
          tooltipDE: 'Individuelle Einbettungs-Codes für spezielle Anforderungen'
        },
        {
          text: t('advancedAnalytics'),
          tooltip: t('advancedAnalyticsTooltip')
        },
        {
          text: 'Multi-Platform Broadcasting',
          textDE: 'Multi-Plattform Broadcasting',
          tooltip: 'Stream simultaneously to multiple social media platforms',
          tooltipDE: 'Stream gleichzeitig auf mehrere Social Media Plattformen'
        },
        {
          text: 'Advanced Moderation Tools',
          textDE: 'Erweiterte Moderations-Tools',
          tooltip: 'Professional moderation features for large-scale events',
          tooltipDE: 'Professionelle Moderations-Features für große Events'
        },
        {
          text: t('prioritySupport'),
          tooltip: language === 'de' 
            ? 'Bevorzugter technischer Support mit kürzeren Antwortzeiten'
            : 'Preferred technical support with shorter response times'
        }
      ]
    },
    {
      id: 'enterprise',
      name: t('enterpriseDescription').split(' ')[0], // 'Enterprise'
      description: t('enterpriseDescription'),
      subtitle: t('enterpriseSubtitle'),
      monthlyPrice: null,
      popular: false,
      color: 'secondary' as const,
      isStarterOption: false,
      includesPrevious: t('allFromAdvanced'),
      features: [
        {
          text: t('aiBot'),
          tooltip: t('aiBotTooltip')
        },
        {
          text: t('enterpriseViews'),
          tooltip: language === 'de' 
            ? 'Keine Limits bei Viewern oder Nutzeranzahl'
            : 'No limits on viewers or user count'
        },
        {
          text: 'Multi-Company Management',
          textDE: 'Multi-Company Management',
          tooltip: 'Manage multiple companies and markets in one platform',
          tooltipDE: 'Verwalten Sie mehrere Unternehmen und Märkte in einer Plattform'
        },
        {
          text: t('successManager'),
          tooltip: t('successManagerTooltip')
        },
        {
          text: t('enterpriseSupport'),
          tooltip: t('enterpriseSupportTooltip')
        },
        {
          text: t('customDevelopment'),
          tooltip: language === 'de' 
            ? 'Maßgeschneiderte Features und umfassende Team-Schulungen'
            : 'Custom features and comprehensive team training'
        },
        {
          text: 'White-Label Solutions',
          textDE: 'White-Label Lösungen',
          tooltip: 'Complete customization to your brand and corporate identity',
          tooltipDE: 'Vollständige Anpassung an Ihre Marke und Corporate Identity'
        },
        {
          text: 'Advanced AI Analytics',
          textDE: 'Erweiterte KI Analytics',
          tooltip: 'AI-powered insights and predictive analytics for optimal performance',
          tooltipDE: 'KI-gestützte Insights und prädiktive Analytics für optimale Performance'
        },
        {
          text: 'Custom API Development',
          textDE: 'Custom API Entwicklung',
          tooltip: 'Bespoke API solutions tailored to your specific business needs',
          tooltipDE: 'Maßgeschneiderte API-Lösungen für Ihre spezifischen Geschäftsanforderungen'
        }
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return t('custom');
    return `${price.toLocaleString('en-US')}€`;
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

  const renderFeatureWithTooltip = (feature: { text: string; textDE?: string; tooltip?: string; tooltipDE?: string }, index: number, plan: typeof plans[0]) => {
    const displayText = language === 'de' && feature.textDE ? feature.textDE : feature.text;
    const tooltipText = language === 'de' && feature.tooltipDE ? feature.tooltipDE : feature.tooltip;

    return (
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
        <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
          <Typography variant="body1" sx={{ 
            color: '#334155',
            lineHeight: 1.5,
            fontWeight: 500,
            fontSize: '0.95rem',
            flexGrow: 1
          }}>
            {displayText}
          </Typography>
          {tooltipText && (
            <Tooltip 
              title={tooltipText}
              placement="top"
              arrow
              sx={{
                '& .MuiTooltip-tooltip': {
                  backgroundColor: '#1a1d21',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  maxWidth: '300px',
                  padding: '12px',
                  borderRadius: '8px',
                  lineHeight: 1.4
                },
                '& .MuiTooltip-arrow': {
                  color: '#1a1d21'
                }
              }}
            >
              <InfoOutlined sx={{ 
                color: '#64748b', 
                fontSize: '16px',
                cursor: 'help',
                flexShrink: 0,
                mt: 0.25,
                '&:hover': {
                  color: '#43BEAC'
                }
              }} />
            </Tooltip>
          )}
        </Stack>
      </Stack>
    );
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
            {t('discoverPlans')}
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
            {t('plansSubtitle')}
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
            {language === 'de' 
              ? 'Alle Pakete enthalten kostenlose Updates'
              : 'All packages include free updates'
            }
          </Typography>
        </Box>

        {/* All Plans Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(3, 1fr)' 
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1200px',
            mx: 'auto',
            alignItems: 'stretch'
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
                        {t('recommended')}
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
                          fontSize: { xs: '1.5rem', md: '1.75rem' }
                        }}>
                          {plan.name}
                        </Typography>
                        <Typography variant="body1" sx={{ 
                          color: '#64748b',
                          mb: 4,
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                          minHeight: { xs: 'auto', md: '60px' },
                          display: 'flex',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}>
                          {plan.description}
                        </Typography>

                        {/* Pricing */}
                        <Box sx={{ mb: 4 }}>
                          <Typography 
                            variant="h3" 
                            sx={{ 
                              fontWeight: 800,
                              color: plan.popular ? '#43BEAC' : '#1a1d21',
                              fontSize: { xs: '2.25rem', md: '2.75rem' },
                              lineHeight: 1,
                              mb: 0.5
                            }}
                          >
                            {formatPrice(plan.monthlyPrice)}
                          </Typography>
                          {plan.monthlyPrice && (
                            <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.9rem' }}>
                              {language === 'de' ? 'pro Monat' : 'per month'}
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      {/* Previous Tier Information */}
                      {plan.includesPrevious && (
                        <Box sx={{ 
                          mb: 3, 
                          p: 2, 
                          backgroundColor: '#f8fafc', 
                          borderRadius: 2, 
                          border: '1px solid #e2e8f0' 
                        }}>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#43BEAC',
                            textAlign: 'center',
                            fontSize: '0.9rem'
                          }}>
                            {plan.includesPrevious}
                          </Typography>
                        </Box>
                      )}

                      {/* Starter Module Selection */}
                      {plan.isStarterOption && (
                        <Box sx={{ mb: 4 }}>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#1a1d21',
                            mb: 2,
                            textAlign: 'center'
                          }}>
                            {t('chooseModule')}:
                          </Typography>
                          <RadioGroup
                            value={starterModule}
                            onChange={(e) => setStarterModule(e.target.value as 'clips' | 'live-shopping')}
                            sx={{ 
                              '& .MuiFormControlLabel-root': {
                                mx: 0,
                                mb: 1
                              }
                            }}
                          >
                            <FormControlLabel
                              value="clips"
                              control={<Radio sx={{ color: '#43BEAC', '&.Mui-checked': { color: '#43BEAC' } }} />}
                              label={
                                <Box>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1d21' }}>
                                    {starterModules.clips.name}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                                    {starterModules.clips.description}
                                  </Typography>
                                </Box>
                              }
                            />
                            <FormControlLabel
                              value="live-shopping"
                              control={<Radio sx={{ color: '#43BEAC', '&.Mui-checked': { color: '#43BEAC' } }} />}
                              label={
                                <Box>
                                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1d21' }}>
                                    {starterModules['live-shopping'].name}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                                    {starterModules['live-shopping'].description}
                                  </Typography>
                                </Box>
                              }
                            />
                          </RadioGroup>
                          <Divider sx={{ my: 3 }} />
                        </Box>
                      )}

                      {/* Core Features for Starter */}
                      {plan.isStarterOption && plan.coreFeatures && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#1a1d21',
                            mb: 2
                          }}>
                            {language === 'de' 
                              ? 'Kern-Features (in beiden Modulen):'
                              : 'Core features (in both modules):'
                            }
                          </Typography>
                          <Stack spacing={2}>
                            {plan.coreFeatures.map((feature, idx) => 
                              renderFeatureWithTooltip(feature, idx, plan)
                            )}
                          </Stack>
                          <Divider sx={{ my: 3 }} />
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#1a1d21',
                            mb: 2
                          }}>
                            {starterModules[starterModule].name} {language === 'de' ? 'Features:' : 'features:'}
                          </Typography>
                          <Stack spacing={2}>
                            {starterModules[starterModule].features.map((feature, idx) => 
                              renderFeatureWithTooltip(feature, idx, plan)
                            )}
                          </Stack>
                        </Box>
                      )}

                      {/* Regular Features for Advanced/Enterprise */}
                      {!plan.isStarterOption && plan.features && (
                        <Stack spacing={2.5} sx={{ flexGrow: 1, mb: 4 }}>
                          {plan.features.map((feature, idx) => 
                            renderFeatureWithTooltip(feature, idx, plan)
                          )}
                        </Stack>
                      )}
                    </CardContent>

                    {/* CTA Button */}
                    <CardActions sx={{ p: { xs: 3, md: 4 }, pt: 0 }}>
                      <Button
                        variant={plan.popular ? "contained" : "outlined"}
                        fullWidth
                        size="large"
                        sx={{
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: '1rem',
                          textTransform: 'none',
                          borderRadius: 2,
                          ...(plan.popular ? {
                            backgroundColor: '#43BEAC',
                            '&:hover': {
                              backgroundColor: '#059669',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(67, 190, 172, 0.3)'
                            }
                          } : {
                            borderColor: '#43BEAC',
                            color: '#43BEAC',
                            '&:hover': {
                              backgroundColor: '#43BEAC',
                              color: '#ffffff',
                              borderColor: '#43BEAC',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(67, 190, 172, 0.2)'
                            }
                          }),
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {plan.monthlyPrice 
                          ? (language === 'de' ? 'Jetzt starten' : 'Start Now')
                          : (language === 'de' ? 'Kontakt aufnehmen' : 'Contact Us')
                        }
                      </Button>
                    </CardActions>
                  </Card>
                </Grow>
              </Box>
            ))}
          </Box>
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
            {language === 'de' ? 'Zusätzliche Informationen' : 'Additional Information'}
          </Typography>
          
          <Stack spacing={4}>
            <Box>
              <Typography variant="body1" sx={{ 
                color: '#334155', 
                lineHeight: 1.7,
                fontSize: '1.05rem',
                fontWeight: 500
              }}>
                {language === 'de' 
                  ? 'Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.'
                  : 'All prices are subject to applicable VAT.'
                }
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
                <sup>1</sup> {language === 'de' 
                  ? 'Kostenlose Views pro Monat im jeweiligen Plan enthalten. Zusätzliche Views werden mit 0,15€ pro Viewer berechnet und automatisch über die hinterlegte Zahlungsmethode nutzungsbasiert abgerechnet.'
                  : 'Free views per month included in the respective plan. Additional views are charged at €0.15 per viewer and automatically debited via the stored payment method according to usage.'
                }
              </Typography>
            </Box>
            
            <Box sx={{ pt: 4, borderTop: '1px solid #e2e8f0' }}>
              <Typography variant="body1" sx={{ 
                color: '#43BEAC', 
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
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
