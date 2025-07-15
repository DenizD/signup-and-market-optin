
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Tooltip, Grow, RadioGroup, FormControlLabel, Radio, Divider } from '@mui/material';
import { InfoOutlined, ExpandMore, ExpandLess } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Plans = () => {
  const { t, language } = useTranslations();
  const [starterModule, setStarterModule] = useState<'clips' | 'live-shopping'>('clips');
  const [expandedFeatures, setExpandedFeatures] = useState<{[key: string]: boolean}>({
    'starter-clips': false,
    'starter-live-shopping': false,
  });

  const toggleFeatures = (planId: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const starterModules = {
    clips: {
      name: 'Clips Modul',
      nameEN: 'Clips Module',
      description: 'Ideal für Highlight-Videos',
      descriptionEN: 'Perfect for highlight videos',
      features: [
        {
          text: 'Video-Import',
          textEN: 'Video Import',
          tooltip: 'Import und Verwaltung von Videos',
          tooltipEN: 'Import and management of videos'
        },
        {
          text: 'Produkt-Thumbnail-Anzeige',
          textEN: 'Product Thumbnail Display',
          tooltip: 'Anzeige von Produkt-Vorschaubildern auf Videos',
          tooltipEN: 'Display of product thumbnails on videos'
        },
        {
          text: 'Thumbnail-Generator',
          textEN: 'Thumbnail Generator',
          tooltip: 'Automatische Erstellung von Video-Vorschaubildern',
          tooltipEN: 'Automatic creation of video preview images'
        }
      ]
    },
    'live-shopping': {
      name: 'Live Shopping Modul',
      nameEN: 'Live Shopping Module',
      description: 'Ideal für Livestream Sales',
      descriptionEN: 'Perfect for livestream sales',
      features: [
        {
          text: 'Video-on-Demand-Speicherung',
          textEN: 'Video-on-Demand Storage',
          tooltip: 'Speicherung von Live-Streams für spätere Wiedergabe',
          tooltipEN: 'Storage of live streams for later playback'
        },
        {
          text: 'Kalenderintegration (Add-to-Calendar)',
          textEN: 'Calendar Integration (Add-to-Calendar)',
          tooltip: 'Integration mit Kalendersystemen für Event-Planung',
          tooltipEN: 'Integration with calendar systems for event planning'
        },
        {
          text: 'Pre-Live Countdown',
          textEN: 'Pre-Live Countdown',
          tooltip: 'Countdown-Timer vor Live-Events',
          tooltipEN: 'Countdown timer before live events'
        },
        {
          text: 'Broadcasting-App',
          textEN: 'Broadcasting App',
          tooltip: 'Dedizierte App für Live-Übertragungen',
          tooltipEN: 'Dedicated app for live broadcasts'
        },
        {
          text: 'Hybrid-Streaming (RTMP/externe Apps)',
          textEN: 'Hybrid Streaming (RTMP/External Apps)',
          tooltip: 'Unterstützung für RTMP und externe Streaming-Apps',
          tooltipEN: 'Support for RTMP and external streaming apps'
        },
        {
          text: 'Host-Funktion für Live Shopping',
          textEN: 'Host Function for Live Shopping',
          tooltip: 'Spezielle Host-Tools für Live Shopping Events',
          tooltipEN: 'Special host tools for live shopping events'
        },
        {
          text: 'Upload voraufgezeichneter Shows',
          textEN: 'Upload Pre-recorded Shows',
          tooltip: 'Möglichkeit, voraufgezeichnete Shows hochzuladen',
          tooltipEN: 'Ability to upload pre-recorded shows'
        },
        {
          text: 'Show-Download',
          textEN: 'Show Download',
          tooltip: 'Download-Funktion für gespeicherte Shows',
          tooltipEN: 'Download function for saved shows'
        },
        {
          text: 'Live-Chat & Moderation',
          textEN: 'Live Chat & Moderation',
          tooltip: 'Interaktiver Chat mit Moderations-Tools',
          tooltipEN: 'Interactive chat with moderation tools'
        },
        {
          text: 'Produkt-Highlighting & Timestamps',
          textEN: 'Product Highlighting & Timestamps',
          tooltip: 'Hervorhebung von Produkten mit Zeitstempeln',
          tooltipEN: 'Product highlighting with timestamps'
        },
        {
          text: 'Social Media Multistreaming',
          textEN: 'Social Media Multistreaming',
          tooltip: 'Gleichzeitiges Streaming auf mehrere Plattformen',
          tooltipEN: 'Simultaneous streaming to multiple platforms'
        },
        {
          text: 'Floating Action Video Widget',
          textEN: 'Floating Action Video Widget',
          tooltip: 'Schwebendes Video-Widget für Aktionen',
          tooltipEN: 'Floating video widget for actions'
        }
      ]
    }
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Einstieg in professionellen Video Commerce',
      descriptionEN: 'Getting started with professional video commerce',
      subtitle: 'Für Einsteiger',
      subtitleEN: 'For Beginners',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
      isStarterOption: true,
      coreFeatures: [
        {
          text: '1.000 inklusive Aufrufe/Monat¹',
          textEN: '1,000 included views/month¹',
          tooltip: 'Ein Aufruf wird gezählt, wenn ein Video/Stream länger als 5 Sekunden angeschaut wird',
          tooltipEN: 'A view is counted when a video/stream is watched for more than 5 seconds'
        },
        {
          text: 'Flexibler Video Shopping Player (Bild-in-Bild)',
          textEN: 'Flexible Video Shopping Player (Picture-in-Picture)',
          tooltip: 'Anpassbarer Video-Player mit Bild-in-Bild-Funktion',
          tooltipEN: 'Customizable video player with picture-in-picture function'
        },
        {
          text: 'Mediathek & Playlists mit Tagging',
          textEN: 'Media Library & Playlists with Tagging',
          tooltip: 'Zentrale Verwaltung aller Inhalte mit Tagging-System',
          tooltipEN: 'Central management of all content with tagging system'
        },
        {
          text: 'Endlos-Play & Swipe',
          textEN: 'Endless Play & Swipe',
          tooltip: 'Ununterbrochenes Abspielen und Wischen durch Inhalte',
          tooltipEN: 'Uninterrupted playback and swiping through content'
        },
        {
          text: 'Einfache Player-Integration (1-Code)',
          textEN: 'Simple Player Integration (1-Code)',
          tooltip: 'Ein-Code-Integration in Ihre Website',
          tooltipEN: 'One-code integration into your website'
        },
        {
          text: 'Self-Branding',
          textEN: 'Self-Branding',
          tooltip: 'Anpassung des Players an Ihr Corporate Design',
          tooltipEN: 'Customization of the player to your corporate design'
        },
        {
          text: 'Basis-Support (Ticketsystem)',
          textEN: 'Basic Support (Ticket System)',
          tooltip: 'Technischer Support über unser Ticket-System',
          tooltipEN: 'Technical support via our ticket system'
        }
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'Die komplette Video-Commerce Lösung',
      descriptionEN: 'The complete video commerce solution',
      subtitle: 'Für Teams',
      subtitleEN: 'For Teams',
      monthlyPrice: 1195,
      popular: true,
      color: 'primary' as const,
      isStarterOption: false,
      features: [
        {
          text: 'Vollständiges Video Commerce Paket (Live Shopping & Clips)',
          textEN: 'Complete Video Commerce Package (Live Shopping & Clips)',
          tooltip: 'Beide Module: Live Shopping und Clips inklusive',
          tooltipEN: 'Both modules: Live Shopping and Clips included'
        },
        {
          text: '2.500 inklusive Aufrufe/Monat¹',
          textEN: '2,500 included views/month¹',
          tooltip: 'Erweiterte Viewer-Kapazität für höhere Reichweite',
          tooltipEN: 'Extended viewer capacity for higher reach'
        },
        {
          text: 'Erweiterter API-Zugriff',
          textEN: 'Extended API Access',
          tooltip: 'Zugriff auf erweiterte API-Funktionen',
          tooltipEN: 'Access to extended API functions'
        },
        {
          text: 'Integration von Produktdetailseiten (PDS)',
          textEN: 'Product Detail Page Integration (PDP)',
          tooltip: 'Automatische Integration auf Produktdetailseiten',
          tooltipEN: 'Automatic integration on product detail pages'
        },
        {
          text: 'Advanced Analytics',
          textEN: 'Advanced Analytics',
          tooltip: 'Detaillierte Berichte und Analysen mit Export-Funktion',
          tooltipEN: 'Detailed reports and analytics with export function'
        }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Maßgeschneiderte Unternehmenslösung',
      descriptionEN: 'Tailored enterprise solution',
      subtitle: 'Für Konzerne',
      subtitleEN: 'For Enterprises',
      monthlyPrice: null,
      popular: false,
      color: 'secondary' as const,
      isStarterOption: false,
      features: [
        {
          text: 'KI-Bot Integration',
          textEN: 'AI Bot Integration',
          tooltip: 'Intelligente Chatbot-Integration für Kundenservice',
          tooltipEN: 'Intelligent chatbot integration for customer service'
        },
        {
          text: 'Custom Viewer Pakete',
          textEN: 'Custom Viewer Packages',
          tooltip: 'Individuell angepasste Viewer-Pakete nach Bedarf',
          tooltipEN: 'Individually customized viewer packages as needed'
        },
        {
          text: 'Multi-Company-Funktionen',
          textEN: 'Multi-Company Functions',
          tooltip: 'Verwaltung mehrerer Unternehmen in einer Plattform',
          tooltipEN: 'Management of multiple companies in one platform'
        },
        {
          text: 'Enterprise Support',
          textEN: 'Enterprise Support',
          tooltip: 'Bevorzugter 24/7 Enterprise-Support',
          tooltipEN: 'Priority 24/7 enterprise support'
        },
        {
          text: 'Persönlicher Success Manager',
          textEN: 'Personal Success Manager',
          tooltip: 'Dedizierter Ansprechpartner für Ihren Erfolg',
          tooltipEN: 'Dedicated contact person for your success'
        },
        {
          text: 'Individuelle Trainings',
          textEN: 'Individual Training',
          tooltip: 'Maßgeschneiderte Schulungen für Ihr Team',
          tooltipEN: 'Tailored training for your team'
        }
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return language === 'de' ? 'Individuell' : 'Custom';
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

  const renderFeatureWithTooltip = (feature: { text: string; textEN?: string; tooltip?: string; tooltipEN?: string }, index: number, plan: typeof plans[0]) => {
    const displayText = language === 'de' ? feature.text : (feature.textEN || feature.text);
    const tooltipText = language === 'de' ? feature.tooltip : (feature.tooltipEN || feature.tooltip);

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
            {language === 'de' ? 'Entdecken Sie unsere Pläne' : 'Discover our Plans'}
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
            {language === 'de' 
              ? 'Wählen Sie den perfekten Plan für Ihr Unternehmen und starten Sie noch heute'
              : 'Choose the perfect plan for your business and get started today'
            }
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
            alignItems: 'start' // This ensures consistent starting points
          }}>
            {plans.map((plan, index) => (
              <Box key={plan.id} sx={{ display: 'flex' }}>
                <Grow in timeout={600 + index * 150}>
                  <Card sx={{
                    ...getCardStyles(plan),
                    display: 'grid',
                    gridTemplateRows: 'auto auto auto 1fr auto', // Fixed structure for all cards
                    width: '100%'
                  }}>
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
                        {language === 'de' ? 'EMPFOHLEN' : 'RECOMMENDED'}
                      </Box>
                    )}

                    {/* 1. Plan Header - Fixed Height Section */}
                    <Box sx={{ 
                      textAlign: 'center',
                      p: { xs: 3, md: 4 },
                      pb: 2,
                    }}>
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
                        {language === 'de' ? plan.subtitle : plan.subtitleEN}
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
                        fontSize: '0.95rem'
                      }}>
                        {language === 'de' ? plan.description : plan.descriptionEN}
                      </Typography>

                      {/* Pricing */}
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

                    {/* 2. Module Selection / Previous Tier Info - Fixed Height Section */}
                    <Box sx={{ 
                      px: { xs: 3, md: 4 },
                      pb: 2,
                      minHeight: '140px', // Fixed height to align horizontally
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start'
                    }}>
                      {plan.isStarterOption ? (
                        <>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#1a1d21',
                            mb: 2,
                            textAlign: 'center'
                          }}>
                            {language === 'de' ? 'Wählen Sie Ihr Modul:' : 'Choose your module:'}
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
                                    {language === 'de' ? starterModules.clips.name : starterModules.clips.nameEN}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                                    {language === 'de' ? starterModules.clips.description : starterModules.clips.descriptionEN}
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
                                    {language === 'de' ? starterModules['live-shopping'].name : starterModules['live-shopping'].nameEN}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                                    {language === 'de' ? starterModules['live-shopping'].description : starterModules['live-shopping'].descriptionEN}
                                  </Typography>
                                </Box>
                              }
                            />
                          </RadioGroup>
                        </>
                      ) : (
                        <Box sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '100px'
                        }}>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#43BEAC',
                            textAlign: 'center',
                            fontSize: '0.9rem'
                          }}>
                            {plan.id === 'advanced' 
                              ? (language === 'de' ? 'Alle Starter Features enthalten' : 'All Starter features included')
                              : (language === 'de' ? 'Alle Advanced Features enthalten' : 'All Advanced features included')
                            }
                          </Typography>
                        </Box>
                      )}
                    </Box>

                    {/* 3. Divider */}
                    <Divider sx={{ mx: { xs: 3, md: 4 } }} />

                    {/* 4. Features Section - Flexible Height that grows */}
                    <CardContent sx={{ 
                      p: { xs: 3, md: 4 }, 
                      pt: 3,
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column'
                    }}>
                      {/* Core Features for Starter */}
                      {plan.isStarterOption && plan.coreFeatures && (
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="subtitle2" sx={{ 
                            fontWeight: 700,
                            color: '#1a1d21',
                            mb: 2
                          }}>
                            {language === 'de' 
                              ? 'Basis-Features (in beiden Modulen):'
                              : 'Core features (in both modules):'
                            }
                          </Typography>
                          <Stack spacing={2} sx={{ mb: 3 }}>
                            {plan.coreFeatures.map((feature, idx) => 
                              renderFeatureWithTooltip(feature, idx, plan)
                            )}
                          </Stack>
                            
                          {/* Collapsible Additional Features */}
                          <Collapsible 
                            open={expandedFeatures[`starter-${starterModule}`]} 
                            onOpenChange={() => toggleFeatures(`starter-${starterModule}`)}
                          >
                            <CollapsibleTrigger asChild>
                              <Button
                                variant="text"
                                fullWidth
                                sx={{
                                  justifyContent: 'space-between',
                                  color: '#43BEAC',
                                  fontWeight: 600,
                                  mb: 2,
                                  textTransform: 'none',
                                  '&:hover': {
                                    backgroundColor: 'rgba(67, 190, 172, 0.05)'
                                  }
                                }}
                              >
                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                  {language === 'de' 
                                    ? `Zusätzliche ${starterModules[starterModule].name} Features`
                                    : `Additional ${starterModules[starterModule].nameEN} features`
                                  }
                                </Typography>
                                {expandedFeatures[`starter-${starterModule}`] ? <ExpandLess /> : <ExpandMore />}
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <Stack spacing={2}>
                                {starterModules[starterModule].features.map((feature, idx) => 
                                  renderFeatureWithTooltip(feature, idx, plan)
                                )}
                              </Stack>
                            </CollapsibleContent>
                          </Collapsible>
                        </Box>
                      )}

                      {/* Regular Features for Advanced/Enterprise */}
                      {!plan.isStarterOption && plan.features && (
                        <Stack spacing={2.5} sx={{ flexGrow: 1 }}>
                          {plan.features.map((feature, idx) => 
                            renderFeatureWithTooltip(feature, idx, plan)
                          )}
                        </Stack>
                      )}
                    </CardContent>

                    {/* 5. CTA Button - Fixed at Bottom */}
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
                  ? 'Kostenlose Aufrufe pro Monat im jeweiligen Plan enthalten. Zusätzliche Aufrufe werden mit 0,15€ pro Aufruf berechnet und automatisch über die hinterlegte Zahlungsmethode nutzungsbasiert abgerechnet.'
                  : 'Free views per month included in the respective plan. Additional views are charged at €0.15 per view and automatically debited via the stored payment method according to usage.'
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
