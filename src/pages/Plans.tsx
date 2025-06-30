
import React, { useState } from 'react';
import { Container, Box, Typography, Button, Card, CardContent, CardActions, Stack, Chip, Grid2 as Grid, Alert, AlertTitle, Accordion, AccordionSummary, AccordionDetails, Radio, RadioGroup, FormControlLabel, FormControl, Tooltip, IconButton } from '@mui/material';
import { Check, ExpandMore, Info, Security, People, Cancel, Support } from '@mui/icons-material';
import { useTranslations } from '@/hooks/useTranslations';

const Plans = () => {
  const { t } = useTranslations();
  const [selectedStarter, setSelectedStarter] = useState<'clips' | 'live-shopping' | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleStarterSelection = (value: 'clips' | 'live-shopping') => {
    setSelectedStarter(value);
  };

  const starterFeatures = {
    clips: [
      'Shoppable Clips Modul',
      '1.000 inklusive Aufrufe/Monat',
      'Flexibler Video-Player (Bild-in-Bild)',
      'Mediathek & Playlists mit Tagging',
      'Endlos-Play & Swipe',
      'Einfache Player-Integration (1-Code)',
      'Self-Branding'
    ],
    liveShopping: [
      'Live Shopping Modul',
      '1.000 inklusive Aufrufe/Monat',
      'Flexibler Live Shopping Player (Bild-in-Bild)',
      'Mediathek & Playlists mit Tagging',
      'Endlos-Play & Swipe',
      'Einfache Player-Integration (1-Code)',
      'Self-Branding'
    ]
  };

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
      case 'clips': return '#007BFF';
      case 'live-shopping': return '#9B51E0';
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
    <Box sx={{ py: 8, backgroundColor: '#fafbfc', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: '#1a1d21' }}>
            Preise & Pakete
          </Typography>
          <Typography variant="h6" sx={{ color: '#64748b', mb: 2, maxWidth: '600px', mx: 'auto' }}>
            Wählen Sie das perfekte Paket für Ihre Video-Commerce Strategie
          </Typography>
        </Box>

        {/* Main Pricing Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Starter Packages Container */}
          <Grid xs={12} md={6}>
            <Box sx={{ 
              p: 3, 
              backgroundColor: '#ffffff', 
              borderRadius: 3, 
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1a1d21', mr: 1 }}>
                  Starter-Paket: Wähle eine Option (Entweder/Oder)
                </Typography>
                <Tooltip title="Die Starter-Module sind Alternativen. Du kannst nur eines buchen." arrow>
                  <IconButton size="small">
                    <Info sx={{ fontSize: 20, color: '#64748b' }} />
                  </IconButton>
                </Tooltip>
              </Box>

              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  value={selectedStarter || ''}
                  onChange={(e) => handleStarterSelection(e.target.value as 'clips' | 'live-shopping')}
                >
                  <Grid container spacing={3}>
                    {/* Starter Clips */}
                    <Grid xs={12} sm={6}>
                      <Card sx={getCardStyles('clips', selectedStarter === 'clips', selectedStarter === 'live-shopping')}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <FormControlLabel
                              value="clips"
                              control={<Radio sx={{ color: '#007BFF' }} />}
                              label=""
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#007BFF' }}>
                              Starter Clips
                            </Typography>
                          </Box>
                          
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21' }}>
                              495€
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                              /Monat zzgl. gesetzlicher MwSt
                            </Typography>
                          </Box>

                          <Stack spacing={2}>
                            {starterFeatures.clips.map((feature, index) => (
                              <Stack key={index} direction="row" alignItems="center" spacing={1}>
                                <Check sx={{ color: '#007BFF', fontSize: 16 }} />
                                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
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
                              borderColor: '#007BFF',
                              color: '#007BFF',
                              '&:hover': {
                                backgroundColor: '#007BFF',
                                color: '#ffffff'
                              }
                            }}
                            disabled={selectedStarter === 'live-shopping'}
                          >
                            Mit Video starten
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>

                    {/* Starter Live Shopping */}
                    <Grid xs={12} sm={6}>
                      <Card sx={getCardStyles('live-shopping', selectedStarter === 'live-shopping', selectedStarter === 'clips')}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <FormControlLabel
                              value="live-shopping"
                              control={<Radio sx={{ color: '#9B51E0' }} />}
                              label=""
                              sx={{ mr: 1 }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#9B51E0' }}>
                              Starter Live Shopping
                            </Typography>
                          </Box>
                          
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21' }}>
                              495€
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#64748b' }}>
                              /Monat zzgl. gesetzlicher MwSt
                            </Typography>
                          </Box>

                          <Stack spacing={2}>
                            {starterFeatures.liveShopping.map((feature, index) => (
                              <Stack key={index} direction="row" alignItems="center" spacing={1}>
                                <Check sx={{ color: '#9B51E0', fontSize: 16 }} />
                                <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
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
                              borderColor: '#9B51E0',
                              color: '#9B51E0',
                              '&:hover': {
                                backgroundColor: '#9B51E0',
                                color: '#ffffff'
                              }
                            }}
                            disabled={selectedStarter === 'clips'}
                          >
                            Live Shopping aktivieren
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </RadioGroup>
              </FormControl>

              <Alert severity="warning" sx={{ mt: 3 }}>
                <AlertTitle>Wichtiger Hinweis</AlertTitle>
                Starter Clips und Starter Live Shopping sind nicht kombinierbar.
              </Alert>
            </Box>
          </Grid>

          {/* Advanced Package */}
          <Grid xs={12} md={3}>
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
                  fontWeight: 700
                }}
              />
              <CardContent sx={{ p: 3, pt: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#27AE60', mb: 2 }}>
                  Advanced
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21' }}>
                    1.195€
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    /Monat zzgl. gesetzlicher MwSt
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  {advancedFeatures.map((feature, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={1}>
                      <Check sx={{ color: '#27AE60', fontSize: 16 }} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
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
                    '&:hover': {
                      backgroundColor: '#219A52'
                    }
                  }}
                >
                  Komplettlösung wählen
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Enterprise Package */}
          <Grid xs={12} md={3}>
            <Card sx={getCardStyles('enterprise')}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#64748b', mb: 2 }}>
                  Enterprise
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1d21' }}>
                    Custom
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    Preis auf Anfrage
                  </Typography>
                </Box>

                <Stack spacing={2}>
                  {enterpriseFeatures.map((feature, index) => (
                    <Stack key={index} direction="row" alignItems="center" spacing={1}>
                      <Check sx={{ color: '#64748b', fontSize: 16 }} />
                      <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
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
          </Grid>
        </Grid>

        {/* Trust Elements */}
        <Box sx={{ 
          backgroundColor: '#ffffff', 
          p: 4, 
          borderRadius: 3, 
          border: '1px solid #e2e8f0',
          mb: 6
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
            Vertrauensanker
          </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Security sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    DSGVO-konform
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    Deutsches Hosting
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Cancel sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Monatlich kündbar
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    Keine Mindestlaufzeit
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <People sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Über 100 Unternehmen
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    Im Einsatz
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Support sx={{ color: '#27AE60', fontSize: 28 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Persönlicher
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b' }}>
                    Ansprechpartner
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Feature Comparison (Optional) */}
        <Accordion sx={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Alle Details anzeigen - Feature-Vergleich
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3}>
              <Grid xs={12} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#007BFF' }}>
                  Starter Clips
                </Typography>
                <Stack spacing={1}>
                  {starterFeatures.clips.map((feature, index) => (
                    <Typography key={index} variant="body2">
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid xs={12} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#9B51E0' }}>
                  Starter Live Shopping
                </Typography>
                <Stack spacing={1}>
                  {starterFeatures.liveShopping.map((feature, index) => (
                    <Typography key={index} variant="body2">
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid xs={12} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#27AE60' }}>
                  Advanced
                </Typography>
                <Stack spacing={1}>
                  {advancedFeatures.map((feature, index) => (
                    <Typography key={index} variant="body2">
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid xs={12} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#64748b' }}>
                  Enterprise
                </Typography>
                <Stack spacing={1}>
                  {enterpriseFeatures.map((feature, index) => (
                    <Typography key={index} variant="body2">
                      • {feature}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Plans;
