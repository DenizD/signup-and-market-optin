import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, Grow, Collapse } from '@mui/material';
import { Check, HelpOutline, ExpandMore, ExpandLess, Phone, InfoOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [expandedDetails, setExpandedDetails] = useState<boolean>(false);
  const [selectedStarterPlan, setSelectedStarterPlan] = useState<string>("");

  const plans = [
    {
      id: 'starter-clips',
      name: 'Starter Clips',
      title: 'Shoppable Video Modul',
      description: 'Interaktive Produktvideos für mehr Engagement und höhere Conversion-Raten',
      monthlyPrice: 495,
      popular: false,
      isStarterOption: true,
      features: [
        {
          text: 'Shoppable Clips Modul',
          tooltip: 'Freischaltung aller Video Commerce Module (Live Shopping & Clips)'
        },
        {
          text: '1.000 inklusive Aufrufe/Monat¹',
          tooltip: 'Jedes Modell enthält ein kostenloses Viewer-Kontingent pro Monat. Ein Viewer wird gezählt, sobald ein (Live-)Video oder Clip länger als 5 Sekunden angesehen wird.'
        },
        {
          text: 'Flexibler Video-Player (Bild-in-Bild)',
          tooltip: 'PiP-Funktion für ein verkleinerbares, verschiebbares Mini-Fenster.'
        },
        {
          text: 'Mediathek & Playlists mit Tagging',
          tooltip: 'Zentrale Verwaltung und Erstellung von Mediatheken mit Playlisten für Shows, Videos und Clips ohne Code-Änderungen.'
        },
        {
          text: 'Endlos-Play & Swipe',
          tooltip: 'Ununterbrochenes Scrollen und Abspielen von Inhalten über die Mediathek.'
        },
        {
          text: 'Einfache Player-Integration (1-Code)',
          tooltip: 'Einfache Integration des Video Players & Mediatheken in bestehende Websites oder Anwendungen durch einen einzigen Code-Snippet.'
        },
        {
          text: 'Self-Branding',
          tooltip: 'Anpassung von Videoplayer und Mediathek an die eigenen Brand Guidelines.'
        }
      ],
      detailedFeatures: [
        {
          text: 'Video-Import',
          tooltip: 'Möglichkeit, Videos in die Plattform zu importieren und zu verwalten (max. 1 GB/Video).'
        },
        {
          text: 'Produkt-Thumbnail-Anzeige',
          tooltip: 'Anzeige von hervorgehobenen Produkten in Clips auf dem Cover.'
        },
        {
          text: 'Thumbnail-Generator',
          tooltip: 'Zur Erstellung und Auswahl von 15 zufälligen Vorschaubildern aus den Videos.'
        },
        {
          text: 'Basis-Support (Ticketsystem)',
          tooltip: 'Technischer Support, der im Abonnement enthalten ist über das Ticket System.'
        }
      ]
    },
    {
      id: 'starter-live-shopping',
      name: 'Starter Live Shopping',
      title: 'Live Shopping Modul',
      description: 'Starte mit Live-Shows und erreiche deine Kunden in Echtzeit',
      monthlyPrice: 495,
      popular: false,
      isStarterOption: true,
      features: [
        {
          text: 'Live Shopping Modul',
          tooltip: 'Freischaltung aller Video Commerce Module (Live Shopping & Clips)'
        },
        {
          text: '1.000 inklusive Aufrufe/Monat¹',
          tooltip: 'Jedes Modell enthält ein kostenloses Viewer-Kontingent pro Monat. Ein Viewer wird gezählt, sobald ein (Live-)Video oder Clip länger als 5 Sekunden angesehen wird.'
        },
        {
          text: 'Flexibler Live Shopping Player (Bild-in-Bild)',
          tooltip: 'PiP-Funktion für ein verkleinerbares, verschiebbares Mini-Fenster.'
        },
        {
          text: 'Mediathek & Playlists mit Tagging',
          tooltip: 'Zentrale Verwaltung und Erstellung von Mediatheken mit Playlisten für Shows, Videos und Clips ohne Code-Änderungen.'
        },
        {
          text: 'Endlos-Play & Swipe',
          tooltip: 'Ununterbrochenes Scrollen und Abspielen von Inhalten über die Mediathek.'
        },
        {
          text: 'Einfache Player-Integration (1-Code)',
          tooltip: 'Einfache Integration des Video Players & Mediatheken in bestehende Websites oder Anwendungen durch einen einzigen Code-Snippet.'
        },
        {
          text: 'Self-Branding',
          tooltip: 'Anpassung von Videoplayer und Mediathek an die eigenen Brand Guidelines.'
        }
      ],
      detailedFeatures: [
        {
          text: 'Video-on-Demand-Speicherung',
          tooltip: 'Bereitstellung der Live-Show als Video-on-Demand (inklusive Chat-Aufzeichnung und Produkten).'
        },
        {
          text: 'Kalenderintegration (Add-to-Calendar)',
          tooltip: 'Anzeige einer Add-To-Calendar Funktion auf dem Cover Screen.'
        },
        {
          text: 'Pre-Live Countdown',
          tooltip: 'Anzeige eines Live Countdowns auf dem Cover Screen.'
        },
        {
          text: 'Broadcasting-App',
          tooltip: 'Broadcasting als Web-App für direktes Streaming von Geräten.'
        },
        {
          text: 'Hybrid-Streaming (RTMP/externe Apps)',
          tooltip: 'Fortgeschrittenes Streaming mit externen Kameras und Apps über RTMP durch die Bereitstellung eines Streaming-Keys und einer Streaming-URL pro Show.'
        },
        {
          text: 'Host-Funktion für Live Shopping',
          tooltip: 'Zuweisung von Shows an dedizierte Hosts, die diese live streamen und während der Live-Shopping-Shows mit dem Publikum interagieren können.'
        },
        {
          text: 'Upload voraufgezeichneter Shows',
          tooltip: 'Hochladen und Abspielen vorab aufgezeichneter Shows (max. 3 GB).'
        },
        {
          text: 'Show-Download',
          tooltip: 'Bereitstellung der Live aufgezeichneten Shows als mp4 zur Weiterverarbeitung außerhalb der Plattform.'
        },
        {
          text: 'Live-Chat & Moderation',
          tooltip: 'Verwaltung und Moderation von Live-Chats und Produktdarstellung während der Übertragungen inklusive After-Chat-Editierung.'
        },
        {
          text: 'Produkt-Highlighting & Timestamps',
          tooltip: 'Highlighten von Produkten während Live Shows mit automatischer Speicherung der Timestamps.'
        },
        {
          text: 'Social Media Multistreaming',
          tooltip: 'Möglichkeit, Live-Shows gleichzeitig auf Social-Media-Plattformen zu streamen (1 Kanal).'
        },
        {
          text: 'Floating Action Video Widget',
          tooltip: 'Widget zur Anzeige der aktuellen Live-Übertragung auf jeder Seite der Website. Das Widget zeigt automatisch eine Videovorschau der Show als Miniplayer an.'
        },
        {
          text: 'Basis-Support (Ticketsystem)',
          tooltip: 'Technischer Support, der im Abonnement enthalten ist über das Ticket System.'
        }
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced',
      title: 'Shoppable Video Advanced',
      description: 'Die komplette Video-Commerce Lösung',
      monthlyPrice: 1195,
      popular: false,
      isStarterOption: false,
      features: [
        {
          text: 'Vollständiges Video Commerce Paket (Live Shopping & Clips)',
          tooltip: 'Freischaltung aller Video Commerce Module (Live Shopping & Clips).'
        },
        {
          text: '2.500 inklusive Aufrufe/Monat¹',
          tooltip: 'Jedes Modell enthält ein kostenloses Viewer-Kontingent pro Monat. Ein Viewer wird gezählt, sobald ein (Live-)Video oder Clip länger als 5 Sekunden angesehen wird.'
        }
      ],
      detailedFeatures: [
        {
          text: 'Erweiterter API-Zugriff',
          tooltip: 'Zugang zu allen API-Funktionen, um die Plattform nahtlos in andere Systeme und Anwendungen zu integrieren.'
        },
        {
          text: 'Integration von Produktdetailseiten (PDS)',
          tooltip: 'Automatisierte Integration von Produkthighlights als Video Snippet auf Produktdetailseiten (PDS).'
        },
        {
          text: 'Custom Embed Codes',
          tooltip: 'Individuelle Einbettungs-Codes für spezielle Anforderungen.'
        },
        {
          text: 'Detaillierte Reports',
          tooltip: 'Dashboard zur Analyse von Key Performance Indicators (KPIs) der Live Shopping Shows und Clips.'
        }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      title: 'Enterprise Lösung',
      description: 'Maßgeschneiderte Unternehmenslösung',
      monthlyPrice: null,
      popular: false,
      isStarterOption: false,
      features: [
        {
          text: 'KI-Bot Integration',
          tooltip: 'KI-basierter Bot für Moderation und als Shopping-Assistent. Initiale Integration mindestens einer Datenquelle erforderlich.'
        },
        {
          text: 'Unbegrenzte Aufrufe',
          tooltip: 'Unbegrenztes Viewer-Kontingent.'
        },
        {
          text: 'Multi-Company-Funktionen',
          tooltip: 'Nutzung für mehrere Unternehmen/Märkte.'
        },
        {
          text: 'Unbegrenzte Accounts',
          tooltip: 'Unbegrenzte Anzahl an Benutzern pro Lizenz.'
        },
        {
          text: 'Enterprise Support',
          tooltip: 'Premium-Support rund um die Uhr.'
        },
        {
          text: 'Persönlicher Success Manager',
          tooltip: 'Experte für Onboarding und kontinuierliche Optimierung, regelmäßiger Check-in.'
        }
      ],
      detailedFeatures: [
        {
          text: 'Individuelle Trainings',
          tooltip: 'Maßgeschneiderte Trainings für Teams und Nutzer.'
        }
      ]
    }
  ];

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Custom';
    return `${price.toLocaleString('de-DE')}€`;
  };

  const getCardStyles = (plan: typeof plans[0]) => {
    const isSelected = plan.isStarterOption && selectedStarterPlan === plan.id;
    
    const baseStyles = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: plan.isStarterOption ? 'pointer' : 'default',
      borderRadius: 3,
      overflow: 'visible',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      '&:hover': plan.isStarterOption ? {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
      } : {}
    };

    if (isSelected) {
      return {
        ...baseStyles,
        border: '2px solid #43BEAC',
        boxShadow: '0 8px 24px rgba(67, 190, 172, 0.15)',
      };
    }

    return baseStyles;
  };

  const handleStarterPlanClick = (planId: string) => {
    if (selectedStarterPlan === planId) {
      setSelectedStarterPlan("");
    } else {
      setSelectedStarterPlan(planId);
    }
  };

  const toggleDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  const renderFeatureWithTooltip = (feature: { text: string; tooltip?: string }, index: number, plan: typeof plans[0]) => (
    <Stack key={index} direction="row" alignItems="flex-start" spacing={2}>
      <Box sx={{
        backgroundColor: '#43BEAC',
        borderRadius: '50%',
        p: 0.3,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 0.25,
        width: 16,
        height: 16
      }}>
        <Check sx={{ fontSize: 10, color: '#ffffff' }} />
      </Box>
      <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
        <Typography variant="body2" sx={{ 
          color: '#334155',
          lineHeight: 1.5,
          fontWeight: 400,
          fontSize: '0.875rem',
          flexGrow: 1
        }}>
          {feature.text}
        </Typography>
        {feature.tooltip && (
          <Tooltip 
            title={feature.tooltip}
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
              fontSize: '14px',
              cursor: 'help',
              flexShrink: 0,
              mt: 0.125,
              '&:hover': {
                color: '#43BEAC'
              }
            }} />
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );

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
            Alle Pakete beinhalten kostenlose Updates
          </Typography>
        </Box>

        {/* Starter Package Selection Note */}
        <Box sx={{ 
          textAlign: 'center',
          mb: 4
        }}>
          <Typography variant="body1" sx={{ 
            color: '#0f172a', 
            fontWeight: 600,
            mb: 1
          }}>
            Starter-Pakete (Bitte wählen Sie eines)
          </Typography>
          <Typography variant="body2" sx={{ 
            color: '#475569',
            lineHeight: 1.6
          }}>
            Diese beiden Pakete sind <strong>nicht kombinierbar</strong> - wählen Sie das für Sie passende aus.
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
            mx: 'auto',
            alignItems: 'stretch'
          }}>
            {/* Starter Packages */}
            <Box sx={{ 
              gridColumn: { xs: '1', lg: '1 / 3' },
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}>
              {/* Starter Package Cards with OR divider */}
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr auto 1fr' },
                gap: 3,
                alignItems: 'stretch'
              }}>
                {plans.filter(plan => plan.isStarterOption).map((plan, index) => (
                  <React.Fragment key={plan.id}>
                    <Box onClick={() => handleStarterPlanClick(plan.id)}>
                      <Grow in timeout={600 + index * 150}>
                        <Card sx={getCardStyles(plan)}>
                          <CardContent sx={{ 
                            p: { xs: 3, md: 4 }, 
                            flexGrow: 1, 
                            display: 'flex', 
                            flexDirection: 'column',
                            height: '100%'
                          }}>
                            {/* Plan Header - Fixed Height */}
                            <Box sx={{ mb: 4, height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                              <Box sx={{ textAlign: 'center' }}>
                                <Typography 
                                  variant="overline" 
                                  sx={{ 
                                    color: '#64748b',
                                    fontWeight: 700,
                                    letterSpacing: 1,
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    mb: 1,
                                    display: 'block'
                                  }}
                                >
                                  {plan.title}
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
                                  lineHeight: 1.6,
                                  fontSize: '0.875rem',
                                  textAlign: 'center'
                                }}>
                                  {plan.description}
                                </Typography>
                              </Box>
                            </Box>

                            {/* Price - Fixed Height */}
                            <Box sx={{ mb: 4, textAlign: 'center', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                              <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                                <Typography variant="h3" sx={{
                                  fontWeight: 800,
                                  color: '#1a1d21',
                                  lineHeight: 1,
                                  letterSpacing: '-0.025em',
                                  fontSize: { xs: '2rem', md: '2.5rem' }
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
                                  fontSize: '0.75rem',
                                  mt: 1
                                }}>
                                  zzgl. der gesetzlichen Mehrwertsteuer
                                </Typography>
                              )}
                            </Box>

                            {/* Features - Fixed Height */}
                            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                              <Box sx={{ height: '300px', overflow: 'hidden' }}>
                                <Stack spacing={2.5}>
                                  {plan.features.map((feature, index) => 
                                    renderFeatureWithTooltip(feature, index, plan)
                                  )}
                                </Stack>
                              </Box>

                              {/* Detailed Features Collapse - Fixed Height */}
                              <Collapse in={expandedDetails}>
                                <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #e2e8f0', height: '250px', overflow: 'hidden' }}>
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
                                          width: 12,
                                          height: 12,
                                          backgroundColor: '#43BEAC',
                                          borderRadius: '50%',
                                          flexShrink: 0,
                                          mt: 0.25
                                        }} />
                                        <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
                                          <Typography variant="body2" sx={{ 
                                            color: '#64748b', 
                                            fontSize: '0.8rem',
                                            lineHeight: 1.4,
                                            flexGrow: 1
                                          }}>
                                            {feature.text}
                                          </Typography>
                                          {feature.tooltip && (
                                            <Tooltip 
                                              title={feature.tooltip}
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
                                                fontSize: '12px',
                                                cursor: 'help',
                                                flexShrink: 0,
                                                mt: 0.125,
                                                '&:hover': {
                                                  color: '#43BEAC'
                                                }
                                              }} />
                                            </Tooltip>
                                          )}
                                        </Stack>
                                      </Stack>
                                    ))}
                                  </Stack>
                                </Box>
                              </Collapse>
                            </Box>
                          </CardContent>

                          <CardActions sx={{ p: { xs: 3, md: 4 }, pt: 0, mt: 'auto' }}>
                            <Button
                              variant="contained"
                              fullWidth
                              size="large"
                              data-track-id={`pricing-${plan.id}-click`}
                              sx={{
                                py: 2,
                                backgroundColor: (plan.isStarterOption && selectedStarterPlan === plan.id) ? '#43BEAC' : '#216682',
                                color: '#ffffff',
                                '&:hover': {
                                  backgroundColor: (plan.isStarterOption && selectedStarterPlan === plan.id) ? '#369991' : '#1a5a75',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                                },
                                fontWeight: 700,
                                textTransform: 'none',
                                fontSize: '1rem',
                                borderRadius: 2,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                              }}
                            >
                              Auswählen
                            </Button>
                          </CardActions>
                        </Card>
                      </Grow>
                    </Box>
                    
                    {/* OR Divider between starter packages */}
                    {index === 0 && (
                      <Box sx={{ 
                        display: { xs: 'none', sm: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}>
                        <Box sx={{
                          backgroundColor: '#43BEAC',
                          color: '#ffffff',
                          borderRadius: '50%',
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '1rem',
                          boxShadow: '0 4px 16px rgba(67, 190, 172, 0.3)',
                          border: '3px solid #ffffff'
                        }}>
                          ODER
                        </Box>
                      </Box>
                    )}
                  </React.Fragment>
                ))}
              </Box>
            </Box>

            {/* Other Packages */}
            {plans.filter(plan => !plan.isStarterOption).map((plan, index) => (
              <Box key={plan.id}>
                <Grow in timeout={600 + (index + 2) * 150}>
                  <Card sx={getCardStyles(plan)}>
                    <CardContent sx={{ 
                      p: { xs: 3, md: 4 }, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      height: '100%'
                    }}>
                      {/* Plan Header - Fixed Height */}
                      <Box sx={{ mb: 4, height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography 
                            variant="overline" 
                            sx={{ 
                              color: '#64748b',
                              fontWeight: 700,
                              letterSpacing: 1,
                              fontSize: '0.75rem',
                              textTransform: 'uppercase',
                              mb: 1,
                              display: 'block'
                            }}
                          >
                            {plan.title}
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
                            lineHeight: 1.6,
                            fontSize: '0.875rem',
                            textAlign: 'center'
                          }}>
                            {plan.description}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Price - Fixed Height */}
                      <Box sx={{ mb: 4, textAlign: 'center', height: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                          <Typography variant="h3" sx={{
                            fontWeight: 800,
                            color: '#1a1d21',
                            lineHeight: 1,
                            letterSpacing: '-0.025em',
                            fontSize: { xs: '2rem', md: '2.5rem' }
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
                            fontSize: '0.75rem',
                            mt: 1
                          }}>
                            zzgl. der gesetzlichen Mehrwertsteuer
                          </Typography>
                        )}
                      </Box>

                      {/* Features - Fixed Height */}
                      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ height: '300px', overflow: 'hidden' }}>
                          <Stack spacing={2.5}>
                            {plan.features.map((feature, index) => 
                              renderFeatureWithTooltip(feature, index, plan)
                            )}
                          </Stack>
                        </Box>

                        {/* Detailed Features Collapse - Fixed Height */}
                        <Collapse in={expandedDetails}>
                          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #e2e8f0', height: '250px', overflow: 'hidden' }}>
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
                                    width: 12,
                                    height: 12,
                                    backgroundColor: '#43BEAC',
                                    borderRadius: '50%',
                                    flexShrink: 0,
                                    mt: 0.25
                                  }} />
                                  <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
                                    <Typography variant="body2" sx={{ 
                                      color: '#64748b', 
                                      fontSize: '0.8rem',
                                      lineHeight: 1.4,
                                      flexGrow: 1
                                    }}>
                                      {feature.text}
                                    </Typography>
                                    {feature.tooltip && (
                                      <Tooltip 
                                        title={feature.tooltip}
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
                                          fontSize: '12px',
                                          cursor: 'help',
                                          flexShrink: 0,
                                          mt: 0.125,
                                          '&:hover': {
                                            color: '#43BEAC'
                                          }
                                        }} />
                                      </Tooltip>
                                    )}
                                  </Stack>
                                </Stack>
                              ))}
                            </Stack>
                          </Box>
                        </Collapse>
                      </Box>
                    </CardContent>

                    <CardActions sx={{ p: { xs: 3, md: 4 }, pt: 0, mt: 'auto' }}>
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        data-track-id={`pricing-${plan.id}-click`}
                        sx={{
                          py: 2,
                          backgroundColor: '#216682',
                          color: '#ffffff',
                          '&:hover': {
                            backgroundColor: '#1a5a75',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                          },
                          fontWeight: 700,
                          textTransform: 'none',
                          fontSize: '1rem',
                          borderRadius: 2,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        {plan.id === 'enterprise' ? 'Beratung vereinbaren' : 'Auswählen'}
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
            variant="contained"
            onClick={toggleDetails}
            endIcon={expandedDetails ? <ExpandLess /> : <ExpandMore />}
            sx={{
              backgroundColor: '#43BEAC',
              color: '#ffffff',
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '1.25rem',
              py: 3,
              px: 8,
              borderRadius: 3,
              boxShadow: '0 8px 24px rgba(67, 190, 172, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#369991',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(67, 190, 172, 0.4)'
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
          p: { xs: 4, md: 6 },
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            mb: 4, 
            color: '#1a1d21',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}>
            Zusätzliche Informationen
          </Typography>
          
          <Stack spacing={3}>
            <Box>
              <Typography variant="body1" sx={{ 
                color: '#334155', 
                lineHeight: 1.7,
                fontSize: '1rem',
                fontWeight: 500
              }}>
                Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
              </Typography>
            </Box>
            
            <Box sx={{ 
              backgroundColor: '#f8fafc', 
              p: 3, 
              borderRadius: 2,
              border: '1px solid #e2e8f0'
            }}>
              <Typography variant="body2" sx={{ 
                color: '#64748b', 
                lineHeight: 1.6,
                fontSize: '0.9rem'
              }}>
                <sup>1</sup> Kostenlose Aufrufe pro Monat im jeweiligen Plan inkludiert. Zusätzliche Views werden zu 0,15 € pro Viewer berechnet und automatisch über die hinterlegte Zahlungsmethode gemäß Verbrauch abgebucht.
              </Typography>
            </Box>
            
            <Box sx={{ pt: 3, borderTop: '1px solid #e2e8f0' }}>
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
