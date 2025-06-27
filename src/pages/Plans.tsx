import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, Grow, Collapse } from '@mui/material';
import { Check, HelpOutline, ExpandMore, ExpandLess, Phone, InfoOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Plans = () => {
  const { t } = useTranslations();
  const [expandedDetails, setExpandedDetails] = useState<boolean>(false);
  const [selectedStarterPlan, setSelectedStarterPlan] = useState<string>("");

  const plans = [
    {
      id: 'starter-clips',
      name: 'Starter Clips',
      description: 'LOREM IPSUM- TEXT folgt',
      subtitle: 'Video Modul',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
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
      description: 'LOREM IPSUM- TEXT folgt',
      subtitle: 'Commerce Modul',
      monthlyPrice: 495,
      popular: false,
      color: 'default' as const,
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
      description: 'Die komplette Video-Commerce Lösung',
      subtitle: 'Vollständige Lösung',
      monthlyPrice: 1195,
      popular: true,
      color: 'primary' as const,
      isStarterOption: false,
      hasStarterPlus: true,
      starterPlusText: 'Starter+',
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
      description: 'Maßgeschneiderte Unternehmenslösung',
      subtitle: 'Enterprise Lösung',
      monthlyPrice: null,
      popular: false,
      color: 'secondary' as const,
      isStarterOption: false,
      hasAdvancedPlus: true,
      advancedPlusText: 'Advanced+',
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

  const starterPlans = plans.filter(plan => plan.isStarterOption);
  const regularPlans = plans.filter(plan => !plan.isStarterOption);

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

  const renderFeatureWithTooltip = (feature: { text: string; tooltip?: string }, index: number, plan: typeof plans[0]) => (
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

        {/* Starter Plans Section with Either-Or Selection */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 4, 
              color: '#1a1d21',
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            Starter-Pakete
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#64748b', 
              textAlign: 'center',
              mb: 6,
              fontSize: '1.1rem'
            }}
          >
            Wählen Sie eines der beiden Starter-Pakete
          </Typography>
          
          <Box sx={{ 
            maxWidth: '1000px',
            mx: 'auto',
            backgroundColor: '#ffffff',
            borderRadius: 4,
            p: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            border: '2px solid #e2e8f0',
            position: 'relative'
          }}>
            <RadioGroup 
              value={selectedStarterPlan} 
              onValueChange={setSelectedStarterPlan}
            >
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 0,
                alignItems: 'stretch',
                position: 'relative'
              }}>
                {/* First Starter Plan */}
                <Box sx={{ pr: 2 }}>
                  <Grow in timeout={600}>
                    <Card sx={{
                      ...getCardStyles(starterPlans[0]),
                      border: selectedStarterPlan === starterPlans[0].id ? '2px solid #43BEAC' : '1px solid rgba(211, 212, 213, 0.3)',
                      backgroundColor: selectedStarterPlan === starterPlans[0].id ? '#fafffe' : '#ffffff'
                    }}>
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
                            {starterPlans[0].subtitle}
                          </Typography>
                          <Typography variant="h5" sx={{ 
                            fontWeight: 700, 
                            mb: 2,
                            color: '#1a1d21',
                            letterSpacing: '-0.015em',
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                          }}>
                            {starterPlans[0].name}
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
                            {starterPlans[0].description}
                          </Typography>

                          {/* Price */}
                          <Box sx={{ mb: 4 }}>
                            <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                              <Typography variant="h3" sx={{
                                fontWeight: 800,
                                color: selectedStarterPlan === starterPlans[0].id ? '#43BEAC' : '#1a1d21',
                                lineHeight: 1,
                                letterSpacing: '-0.025em',
                                fontSize: { xs: '2.5rem', md: '3rem' }
                              }}>
                                {formatPrice(starterPlans[0].monthlyPrice)}
                              </Typography>
                              <Typography variant="body1" sx={{ 
                                color: '#64748b',
                                fontWeight: 500,
                                fontSize: '1rem'
                              }}>
                                /Monat
                              </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ 
                              color: '#94a3b8',
                              fontSize: '0.75rem',
                              mt: 1
                            }}>
                              zzgl. der gesetzlichen Mehrwertsteuer
                            </Typography>
                          </Box>
                        </Box>

                        {/* Features */}
                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          <Box sx={{ minHeight: { xs: 'auto', md: '400px' } }}>
                            <Stack spacing={3}>
                              {starterPlans[0].features.map((feature, index) => 
                                renderFeatureWithTooltip(feature, index, starterPlans[0])
                              )}
                            </Stack>
                          </Box>

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
                              <Box sx={{ minHeight: { xs: 'auto', md: '300px' } }}>
                                <Stack spacing={2}>
                                  {starterPlans[0].detailedFeatures?.map((feature, index) => (
                                    <Stack key={index} direction="row" alignItems="flex-start" spacing={1.5}>
                                      <Box sx={{
                                        width: 14,
                                        height: 14,
                                        backgroundColor: '#43BEAC',
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                        mt: 0.25
                                      }} />
                                      <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
                                        <Typography variant="body2" sx={{ 
                                          color: '#64748b', 
                                          fontSize: '0.875rem',
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
                                  ))}
                                </Stack>
                              </Box>
                            </Box>
                          </Collapse>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ p: { xs: 3, md: 4 }, pt: 0 }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <RadioGroupItem value={starterPlans[0].id} id={starterPlans[0].id} />
                            <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                              Dieses Paket wählen
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={selectedStarterPlan !== starterPlans[0].id}
                            data-track-id={`pricing-${starterPlans[0].id}-click`}
                            sx={{
                              py: 2,
                              backgroundColor: selectedStarterPlan === starterPlans[0].id ? '#43BEAC' : '#94a3b8',
                              color: '#ffffff',
                              '&:hover': {
                                backgroundColor: selectedStarterPlan === starterPlans[0].id ? '#369991' : '#64748b',
                                transform: selectedStarterPlan === starterPlans[0].id ? 'translateY(-2px)' : 'none',
                                boxShadow: selectedStarterPlan === starterPlans[0].id 
                                  ? '0 12px 32px rgba(67, 190, 172, 0.4)' 
                                  : 'none'
                              },
                              '&:disabled': {
                                backgroundColor: '#94a3b8',
                                color: '#ffffff',
                                opacity: 0.7
                              },
                              fontWeight: 700,
                              textTransform: 'none',
                              fontSize: '1.05rem',
                              borderRadius: 3,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: selectedStarterPlan === starterPlans[0].id 
                                ? '0 4px 16px rgba(67, 190, 172, 0.2)' 
                                : '0 4px 16px rgba(148, 163, 184, 0.1)'
                            }}
                          >
                            Paket wählen
                          </Button>
                        </Box>
                      </CardActions>
                    </Card>
                  </Grow>
                </Box>

                {/* Vertical Divider with ODER */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: 2,
                  position: 'relative'
                }}>
                  <Separator orientation="vertical" className="h-full bg-slate-300" />
                  <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#43BEAC',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    boxShadow: '0 4px 16px rgba(67, 190, 172, 0.3)',
                    border: '3px solid #ffffff'
                  }}>
                    ODER
                  </Box>
                </Box>

                {/* Second Starter Plan */}
                <Box sx={{ pl: 2 }}>
                  <Grow in timeout={750}>
                    <Card sx={{
                      ...getCardStyles(starterPlans[1]),
                      border: selectedStarterPlan === starterPlans[1].id ? '2px solid #43BEAC' : '1px solid rgba(211, 212, 213, 0.3)',
                      backgroundColor: selectedStarterPlan === starterPlans[1].id ? '#fafffe' : '#ffffff'
                    }}>
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
                            {starterPlans[1].subtitle}
                          </Typography>
                          <Typography variant="h5" sx={{ 
                            fontWeight: 700, 
                            mb: 2,
                            color: '#1a1d21',
                            letterSpacing: '-0.015em',
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                          }}>
                            {starterPlans[1].name}
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
                            {starterPlans[1].description}
                          </Typography>

                          {/* Price */}
                          <Box sx={{ mb: 4 }}>
                            <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                              <Typography variant="h3" sx={{
                                fontWeight: 800,
                                color: selectedStarterPlan === starterPlans[1].id ? '#43BEAC' : '#1a1d21',
                                lineHeight: 1,
                                letterSpacing: '-0.025em',
                                fontSize: { xs: '2.5rem', md: '3rem' }
                              }}>
                                {formatPrice(starterPlans[1].monthlyPrice)}
                              </Typography>
                              <Typography variant="body1" sx={{ 
                                color: '#64748b',
                                fontWeight: 500,
                                fontSize: '1rem'
                              }}>
                                /Monat
                              </Typography>
                            </Stack>
                            <Typography variant="body2" sx={{ 
                              color: '#94a3b8',
                              fontSize: '0.75rem',
                              mt: 1
                            }}>
                              zzgl. der gesetzlichen Mehrwertsteuer
                            </Typography>
                          </Box>
                        </Box>

                        {/* Features */}
                        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                          <Box sx={{ minHeight: { xs: 'auto', md: '400px' } }}>
                            <Stack spacing={3}>
                              {starterPlans[1].features.map((feature, index) => 
                                renderFeatureWithTooltip(feature, index, starterPlans[1])
                              )}
                            </Stack>
                          </Box>

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
                              <Box sx={{ minHeight: { xs: 'auto', md: '300px' } }}>
                                <Stack spacing={2}>
                                  {starterPlans[1].detailedFeatures?.map((feature, index) => (
                                    <Stack key={index} direction="row" alignItems="flex-start" spacing={1.5}>
                                      <Box sx={{
                                        width: 14,
                                        height: 14,
                                        backgroundColor: '#43BEAC',
                                        borderRadius: '50%',
                                        flexShrink: 0,
                                        mt: 0.25
                                      }} />
                                      <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
                                        <Typography variant="body2" sx={{ 
                                          color: '#64748b', 
                                          fontSize: '0.875rem',
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
                                  ))}
                                </Stack>
                              </Box>
                            </Box>
                          </Collapse>
                        </Box>
                      </CardContent>

                      <CardActions sx={{ p: { xs: 3, md: 4 }, pt: 0 }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <RadioGroupItem value={starterPlans[1].id} id={starterPlans[1].id} />
                            <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                              Dieses Paket wählen
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={selectedStarterPlan !== starterPlans[1].id}
                            data-track-id={`pricing-${starterPlans[1].id}-click`}
                            sx={{
                              py: 2,
                              backgroundColor: selectedStarterPlan === starterPlans[1].id ? '#43BEAC' : '#94a3b8',
                              color: '#ffffff',
                              '&:hover': {
                                backgroundColor: selectedStarterPlan === starterPlans[1].id ? '#369991' : '#64748b',
                                transform: selectedStarterPlan === starterPlans[1].id ? 'translateY(-2px)' : 'none',
                                boxShadow: selectedStarterPlan === starterPlans[1].id 
                                  ? '0 12px 32px rgba(67, 190, 172, 0.4)' 
                                  : 'none'
                              },
                              '&:disabled': {
                                backgroundColor: '#94a3b8',
                                color: '#ffffff',
                                opacity: 0.7
                              },
                              fontWeight: 700,
                              textTransform: 'none',
                              fontSize: '1.05rem',
                              borderRadius: 3,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: selectedStarterPlan === starterPlans[1].id 
                                ? '0 4px 16px rgba(67, 190, 172, 0.2)' 
                                : '0 4px 16px rgba(148, 163, 184, 0.1)'
                            }}
                          >
                            Paket wählen
                          </Button>
                        </Box>
                      </CardActions>
                    </Card>
                  </Grow>
                </Box>
              </Box>
            </RadioGroup>
          </Box>
        </Box>

        {/* Regular Plans Section */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 6, 
              color: '#1a1d21',
              textAlign: 'center',
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            Erweiterte Pakete
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(2, 1fr)'
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1000px',
            mx: 'auto',
            alignItems: 'stretch'
          }}>
            {regularPlans.map((plan, index) => (
              <Box key={plan.id}>
                <Grow in timeout={900 + index * 150}>
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
                          {/* VAT Notice */}
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
                      </Box>

                      {/* Features */}
                      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Plus Headline for Advanced and Enterprise plans - without background */}
                        {(plan.hasStarterPlus || plan.hasAdvancedPlus) && (
                          <Box sx={{ mb: 3, textAlign: 'center', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 800,
                              color: '#43BEAC',
                              fontSize: '1.25rem'
                            }}>
                              {plan.hasStarterPlus ? plan.starterPlusText : plan.advancedPlusText}
                            </Typography>
                          </Box>
                        )}
                        
                        {/* Empty box for starter plans to maintain alignment */}
                        {!plan.hasStarterPlus && !plan.hasAdvancedPlus && (
                          <Box sx={{ mb: 3, minHeight: '60px' }} />
                        )}
                        
                        <Box sx={{ minHeight: { xs: 'auto', md: '400px' } }}>
                          <Stack spacing={3}>
                            {plan.features.map((feature, index) => 
                              renderFeatureWithTooltip(feature, index, plan)
                            )}
                          </Stack>
                        </Box>

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
                            <Box sx={{ minHeight: { xs: 'auto', md: '300px' } }}>
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
                                    <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ flexGrow: 1 }}>
                                      <Typography variant="body2" sx={{ 
                                        color: '#64748b', 
                                        fontSize: '0.875rem',
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
                                ))}
                              </Stack>
                            </Box>
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

        {/* Global Details Toggle - prominenter gestaltet */}
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
              fontSize: '1.5rem',
              py: 4,
              px: 12,
              borderRadius: 6,
              boxShadow: '0 12px 32px rgba(67, 190, 172, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#369991',
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 50px rgba(67, 190, 172, 0.5)'
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
                Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
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
                <sup>1</sup> Kostenlose Aufrufe pro Monat im jeweiligen Plan inkludiert. Zusätzliche Views werden zu 0,15 € pro Viewer berechnet und automatisch über die hinterlegte Zahlungsmethode gemäß Verbrauch abgebucht.
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
