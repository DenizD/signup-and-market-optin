
import React, { useState } from 'react';
import { Container, Box, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Alert, AlertTitle, Accordion, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, FormControl, Tooltip, IconButton, Grid } from '@mui/material';
import { Check, ExpandMore, Info, Security, People, Cancel, Support } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [selectedStarter, setSelectedStarter] = useState<'clips' | 'live-shopping' | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleStarterSelection = (value: 'clips' | 'live-shopping') => {
    setSelectedStarter(value);
  };

  const starterModules = [
    {
      id: 'clips' as const,
      label: 'Starter Clips',
      color: '#1976d2',
      icon: faVideo,
      tag: 'Video-Modul',
      price: '495€',
      priceLabel: '/Monat zzgl. gesetzlicher MwSt',
      features: [
        '🎥 Shoppable Clips direkt im Shop',
        '🔁 1.000 Aufrufe/Monat inklusive',
        '🖼️ Bild-in-Bild & Swipe-Player',
        '🗂️ Mediathek mit Tags & Playlists',
        '🎨 Self-Branding & einfacher Einbau'
      ],
      cta: 'Mit Video starten',
    },
    {
      id: 'live-shopping' as const,
      label: 'Starter Live Shopping',
      color: '#9c27b0',
      icon: faShoppingCart,
      tag: 'Commerce-Modul',
      price: '495€',
      priceLabel: '/Monat zzgl. gesetzlicher MwSt',
      features: [
        '🛍️ Live Events mit Kaufoption',
        '👥 1.000 Zuschauer/Monat inklusive',
        '🖼️ Live Player mit Bild-in-Bild',
        '🗂️ Event-Mediathek & Tagging',
        '🎨 Self-Branding & 1-Code-Integration'
      ],
      cta: 'Live Shopping aktivieren',
    },
  ];

  const advancedFeatures = [
    'Umfasst alle Funktionen von Clips & Live Shopping',
    '2.500 inklusive Aufrufe/Monat'
  ];

  const enterpriseFeatures = [
    'KI-Bot Integration',
    'Unbegrenzte Aufrufe',
    'Multi-Company-Funktionen',
    'Unbegrenzte Accounts',
    'Enterprise Support',
    'Persönlicher Success Manager'
  ];

  const getCardColor = (type: string) => {
    switch (type) {
      case 'advanced': return '#27AE60';
      case 'enterprise': return '#E0E0E0';
      default: return '#ffffff';
    }
  };

  const getCardStyles = (type: string, isSelected: boolean = false, isDisabled: boolean = false) => {
    const baseColor = getCardColor(type);
    return {
      height: '100%',
      border: `2px solid ${isSelected ? baseColor : 'rgba(0,0,0,0.1)'}`,
      borderRadius: 3,
      opacity: isDisabled ? 0.5 : 1,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: isSelected ? `${baseColor}08` : '#ffffff',
      '&:hover': {
        transform: isDisabled ? 'none' : 'translateY(-4px)',
        boxShadow: isDisabled ? 'none' : `0 8px 25px ${baseColor}30`
      }
    };
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#fafbfc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: '#1a1d21', fontFamily: 'Inter, sans-serif' }}>
            Preise & Pakete
          </Typography>
          <Typography variant="h6" sx={{ color: '#64748b', mb: 2, maxWidth: '600px', mx: 'auto', fontFamily: 'Inter, sans-serif' }}>
            Wählen Sie das perfekte Paket für Ihre Video-Commerce Strategie
          </Typography>
        </Box>

        {/* Starter Module Selector */}
        <Box sx={{ 
          p: 4, 
          backgroundColor: '#ffffff', 
          borderRadius: 3, 
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          mb: 6
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1d21', mr: 1, fontFamily: 'Inter, sans-serif' }}>
              🎛️ Wähle dein Starter-Modul – Clips oder Live Shopping
            </Typography>
            <Tooltip title="Die beiden Starter-Module sind Alternativen. Nur eines aktivierbar." arrow>
              <IconButton size="small">
                <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: 16, color: '#64748b' }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Typography variant="body2" sx={{ textAlign: 'center', color: '#64748b', mb: 4, fontFamily: 'Inter, sans-serif' }}>
            (nicht kombinierbar)
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {starterModules.map((module) => (
              <Grid item xs={12} md={5} key={module.id}>
                <Card
                  onClick={() => handleStarterSelection(module.id)}
                  sx={{
                    height: '100%',
                    border: selectedStarter === module.id ? `3px solid ${module.color}` : '2px solid rgba(0,0,0,0.1)',
                    borderRadius: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    backgroundColor: selectedStarter === module.id ? `${module.color}08` : '#ffffff',
                    opacity: selectedStarter && selectedStarter !== module.id ? 0.6 : 1,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 25px ${module.color}30`
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        backgroundColor: module.color, 
                        color: 'white', 
                        px: 1.5, 
                        py: 0.5, 
                        borderRadius: 2,
                        mr: 2
                      }}>
                        <FontAwesomeIcon icon={module.icon} style={{ fontSize: 16, marginRight: 6 }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                          {module.tag}
                        </Typography>
                      </Box>
                      {selectedStarter === module.id && (
                        <Check sx={{ color: module.color, fontSize: 20 }} />
                      )}
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 700, color: module.color, mb: 2, fontFamily: 'Inter, sans-serif' }}>
                      {module.label}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21', fontFamily: 'Inter, sans-serif' }}>
                        {module.price}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                        {module.priceLabel}
                      </Typography>
                    </Box>

                    <Stack spacing={2} sx={{ mb: 3 }}>
                      {module.features.map((feature, index) => (
                        <Typography key={index} variant="body2" sx={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                          {feature}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      fullWidth
                      variant={selectedStarter === module.id ? "contained" : "outlined"}
                      sx={{
                        backgroundColor: selectedStarter === module.id ? module.color : 'transparent',
                        borderColor: module.color,
                        color: selectedStarter === module.id ? '#ffffff' : module.color,
                        textTransform: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: module.color,
                          color: '#ffffff'
                        }
                      }}
                      disabled={selectedStarter && selectedStarter !== module.id}
                    >
                      {module.cta}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#f59e0b', fontSize: 16 }} />
            <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
              ⚠️ Hinweis: Die beiden Starter-Module können nicht kombiniert werden.
            </Typography>
          </Box>
        </Box>

        {/* Advanced and Enterprise Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Advanced Package */}
          <div>
            <Card sx={{
              ...getCardStyles('advanced'),
              position: 'relative',
              border: '2px solid #27AE60'
            }}>
              <Chip
                label="Beliebteste Wahl"
                sx={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#27AE60',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif'
                }}
              />
              <CardContent sx={{ p: 3, pt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#27AE60', mb: 2, fontFamily: 'Inter, sans-serif' }}>
                  Advanced
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21', fontFamily: 'Inter, sans-serif' }}>
                    1.195€
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                    /Monat zzgl. gesetzlicher MwSt
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  {advancedFeatures.map((feature, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={1}>
                      <Check sx={{ color: '#27AE60', fontSize: 16 }} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#27AE60',
                    textTransform: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#219A52'
                    }
                  }}
                >
                  Komplettlösung wählen
                </Button>
              </CardActions>
            </Card>
          </div>

          {/* Enterprise Package */}
          <div>
            <Card sx={getCardStyles('enterprise')}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#64748b', mb: 2, fontFamily: 'Inter, sans-serif' }}>
                  Enterprise
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21', fontFamily: 'Inter, sans-serif' }}>
                    Custom
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                    Preis auf Anfrage
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  {enterpriseFeatures.map((feature, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={1}>
                      <Check sx={{ color: '#64748b', fontSize: 16 }} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderColor: '#64748b',
                    color: '#64748b',
                    textTransform: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#64748b',
                      color: '#ffffff'
                    }
                  }}
                >
                  Beratung vereinbaren
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>

        {/* Trust Elements */}
        <Box sx={{ 
          backgroundColor: '#ffffff', 
          p: 4, 
          borderRadius: 3, 
          border: '1px solid #e2e8f0',
          mb: 6
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
            Vertrauensanker
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Security sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                    DSGVO-konform
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                    Deutsches Hosting
                  </Typography>
                </Box>
              </Stack>
            </div>
            <div>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Cancel sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                    Monatlich kündbar
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                    Keine Mindestlaufzeit
                  </Typography>
                </Box>
              </Stack>
            </div>
            <div>
              <Stack direction="row" alignItems="center" spacing={2}>
                <People sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                    Über 100 Unternehmen
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                    Im Einsatz
                  </Typography>
                </Box>
              </Stack>
            </div>
            <div>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Support sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                    Persönlicher
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                    Ansprechpartner
                  </Typography>
                </Box>
              </Stack>
            </div>
          </div>
        </Box>

        {/* Feature Comparison (Optional) */}
        <Accordion sx={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
              Alle Details anzeigen - Feature-Vergleich
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#1976d2', fontFamily: 'Inter, sans-serif' }}>
                  Starter Clips
                </Typography>
                <Stack spacing={1}>
                  {starterModules[0].features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </div>
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#9c27b0', fontFamily: 'Inter, sans-serif' }}>
                  Starter Live Shopping
                </Typography>
                <Stack spacing={1}>
                  {starterModules[1].features.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </div>
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#27AE60', fontFamily: 'Inter, sans-serif' }}>
                  Advanced
                </Typography>
                <Stack spacing={1}>
                  {advancedFeatures.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </div>
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#64748b', fontFamily: 'Inter, sans-serif' }}>
                  Enterprise
                </Typography>
                <Stack spacing={1}>
                  {enterpriseFeatures.map((feature, index) => (
                    <Typography key={index} variant="body2" sx={{ fontFamily: 'Inter, sans-serif' }}>
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Plans;
