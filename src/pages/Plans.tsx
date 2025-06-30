
import React, { useState } from 'react';
import { Box, Container, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Tooltip, Grow, Collapse } from '@mui/material';
import { Check, HelpOutline, ExpandMore, ExpandLess, Phone, InfoOutlined, Star, ArrowForward } from '@mui/icons-material';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [expandedDetails, setExpandedDetails] = useState<boolean>(false);
  const [activeStarterTab, setActiveStarterTab] = useState<string>("clips");

  const starterPlans = {
    clips: {
      id: 'starter-clips',
      name: 'Starter Clips',
      title: 'Shoppable Video Modul',
      description: 'Interaktive Produktvideos für mehr Engagement und höhere Conversion-Raten',
      monthlyPrice: 495,
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
    liveShopping: {
      id: 'starter-live-shopping',
      name: 'Starter Live Shopping',
      title: 'Live Shopping Modul',
      description: 'Starte mit Live-Shows und erreiche deine Kunden in Echtzeit',
      monthlyPrice: 495,
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
    }
  };

  const otherPlans = [
    {
      id: 'advanced',
      name: 'Advanced',
      title: 'Shoppable Video Advanced',
      description: 'Die komplette Video-Commerce Lösung',
      monthlyPrice: 1195,
      popular: true,
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
      isEnterprise: true,
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
    if (price === null) return 'Preis auf Anfrage';
    return `${price.toLocaleString('de-DE')}€`;
  };

  const getCardStyles = (plan: any) => {
    const baseStyles = {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      borderRadius: 3,
      overflow: 'visible',
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
      }
    };

    if (plan.popular) {
      return {
        ...baseStyles,
        border: '2px solid #43BEAC',
        boxShadow: '0 8px 24px rgba(67, 190, 172, 0.15)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 32px rgba(67, 190, 172, 0.2)'
        }
      };
    }

    if (plan.isEnterprise) {
      return {
        ...baseStyles,
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        border: '2px solid #64748b',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 32px rgba(100, 116, 139, 0.2)'
        }
      };
    }

    return baseStyles;
  };

  const toggleDetails = () => {
    setExpandedDetails(!expandedDetails);
  };

  const renderFeatureWithTooltip = (feature: { text: string; tooltip?: string }, index: number) => (
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

  const renderPlanCard = (plan: any) => (
    <Card sx={getCardStyles(plan)}>
      {plan.popular && (
        <Box sx={{
          position: 'absolute',
          top: -12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1
        }}>
          <Badge variant="default" className="bg-[#43BEAC] text-white px-4 py-1 text-sm font-semibold">
            <Star sx={{ fontSize: 14, mr: 0.5 }} />
            Empfohlen
          </Badge>
        </Box>
      )}
      
      <CardContent sx={{ 
        p: { xs: 3, md: 4 }, 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%'
      }}>
        {/* Plan Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
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
            fontSize: '0.875rem'
          }}>
            {plan.description}
          </Typography>
        </Box>

        {/* Price */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
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
              zzgl. gesetzlicher MwSt
            </Typography>
          )}
        </Box>

        {/* Features */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Stack spacing={2.5} sx={{ mb: 4 }}>
            {plan.features.map((feature: any, index: number) => 
              renderFeatureWithTooltip(feature, index)
            )}
          </Stack>

          {/* Detailed Features Collapse */}
          <Collapse in={expandedDetails}>
            <Box sx={{ pt: 4, borderTop: '1px solid #e2e8f0' }}>
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
                {plan.detailedFeatures?.map((feature: any, index: number) => (
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
          endIcon={plan.isEnterprise ? <Phone /> : <ArrowForward />}
          data-track-id={`pricing-${plan.id}-click`}
          sx={{
            py: 2.5,
            backgroundColor: plan.popular ? '#43BEAC' : plan.isEnterprise ? '#64748b' : '#216682',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: plan.popular ? '#369991' : plan.isEnterprise ? '#475569' : '#1a5a75',
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
          {plan.isEnterprise ? 'Beratung vereinbaren' : 'Jetzt auswählen'}
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      background: 'linear-gradient(135deg, #fafbfc 0%, #f0f7ff 50%, #f8fafc 100%)', 
      minHeight: '100vh' 
    }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
        </Box>

        {/* Starter Packages Section */}
        <Box sx={{ mb: { xs: 8, md: 10 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ 
              color: '#1a1d21', 
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}>
              Starter-Pakete
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto',
              fontSize: '1.1rem',
              mb: 4
            }}>
              Wählen Sie <strong>eines</strong> der beiden Starter-Module. Diese Pakete sind <strong>nicht kombinierbar</strong> - entscheiden Sie sich für das für Sie passende Modul.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Tabs value={activeStarterTab} onValueChange={setActiveStarterTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-white border border-gray-200 p-1 rounded-lg">
                <TabsTrigger 
                  value="clips" 
                  className="text-sm font-medium py-3 px-6 data-[state=active]:bg-[#43BEAC] data-[state=active]:text-white"
                >
                  Shoppable Video Clips
                </TabsTrigger>
                <TabsTrigger 
                  value="liveShopping"
                  className="text-sm font-medium py-3 px-6 data-[state=active]:bg-[#43BEAC] data-[state=active]:text-white"
                >
                  Live Shopping Shows
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="clips" className="mt-0">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ width: '100%', maxWidth: '400px' }}>
                    <Grow in timeout={600}>
                      {renderPlanCard(starterPlans.clips)}
                    </Grow>
                  </Box>
                </Box>
              </TabsContent>
              
              <TabsContent value="liveShopping" className="mt-0">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ width: '100%', maxWidth: '400px' }}>
                    <Grow in timeout={600}>
                      {renderPlanCard(starterPlans.liveShopping)}
                    </Grow>
                  </Box>
                </Box>
              </TabsContent>
            </Tabs>
          </Box>
        </Box>

        {/* Advanced & Enterprise Packages */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ 
              color: '#1a1d21', 
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.25rem' }
            }}>
              Erweiterte Lösungen
            </Typography>
          </Box>

          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { 
              xs: '1fr', 
              md: 'repeat(2, 1fr)'
            },
            gap: { xs: 4, md: 6 },
            maxWidth: '1000px',
            mx: 'auto',
            alignItems: 'stretch'
          }}>
            {otherPlans.map((plan, index) => (
              <Box key={plan.id} sx={{ display: 'flex' }}>
                <Grow in timeout={800 + index * 150}>
                  {renderPlanCard(plan)}
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
