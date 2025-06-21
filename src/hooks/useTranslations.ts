import { useState } from 'react';

export type TranslationKey = 
  | 'welcome'
  | 'welcomeSubtitle'
  | 'signIn'
  | 'signInHeadline'
  | 'register'
  | 'registerHeadline'
  | 'createAccount'
  | 'emailAddress'
  | 'password'
  | 'confirmPassword'
  | 'firstName'
  | 'lastName'
  | 'company'
  | 'rememberMe'
  | 'forgotPassword'
  | 'loginSuccess'
  | 'registerSuccess'
  | 'passwordMismatch'
  | 'marketingOptIn'
  | 'privacyPolicy'
  | 'termsAndPrivacy'
  | 'serviceWelcome'
  | 'serviceSubtitle'
  | 'platformDescription'
  | 'noAccount'
  | 'haveAccount'
  | 'backToLogin'
  | 'resetPassword'
  | 'resetPasswordDescription'
  | 'resetEmailHelper'
  | 'resetButtonDescription'
  | 'cancel'
  | 'resetLinkSent'
  | 'checkEmailInbox'
  | 'passwordTooltip'
  | 'confirmPasswordTooltip'
  | 'companyTooltip'
  | 'discoverPlans'
  | 'plansSubtitle'
  | 'month'
  | 'monthly'
  | 'yearly'
  | 'save15'
  | 'saveWithYearly'
  | 'recommended'
  | 'contact'
  | 'custom'
  | 'starterDescription'
  | 'starterSubtitle'
  | 'advancedDescription'
  | 'advancedSubtitle'
  | 'enterpriseDescription'
  | 'enterpriseSubtitle'
  | 'selectOption'
  | 'selectPlan'
  | 'contactSales'
  | 'allDetails'
  | 'additionalFeatures'
  | 'chooseModule'
  | 'clipsModule'
  | 'clipsModuleDesc'
  | 'liveShoppingModule'
  | 'liveShoppingModuleDesc'
  | 'starterModule'
  | 'starterModuleTooltip'
  | 'starterViews'
  | 'starterUploads'
  | 'starterAccounts'
  | 'basicAnalytics'
  | 'playerIntegration'
  | 'playerIntegrationTooltip'
  | 'selfBranding'
  | 'selfBrandingTooltip'
  | 'allFromStarter'
  | 'allFromAdvanced'
  | 'fullVideoCommerce'
  | 'fullVideoCommerceTooltip'
  | 'advancedViews'
  | 'advancedUploads'
  | 'advancedUserAccounts'
  | 'advancedAnalytics'
  | 'advancedAnalyticsTooltip'
  | 'extendedApiAccess'
  | 'extendedApiAccessTooltip'
  | 'aiBot'
  | 'aiBotTooltip'
  | 'enterpriseViews'
  | 'unlimitedUploads'
  | 'unlimitedAccounts'
  | 'enterpriseSupport'
  | 'enterpriseSupportTooltip'
  | 'successManager'
  | 'successManagerTooltip'
  | 'videoHosting'
  | 'customPlayer'
  | 'basicSupport'
  | 'sslSecurity'
  | 'mobileOptimized'
  | 'prioritySupport'
  | 'advancedIntegrations'
  | 'customBranding'
  | 'teamCollaboration'
  | 'advancedReporting'
  | 'dedicatedInfrastructure'
  | 'slaGuarantee'
  | 'onPremiseOption'
  | 'customDevelopment'
  | 'trainingIncluded';

type Translations = {
  [key in TranslationKey]: string;
};

const translations: Record<'de' | 'en' | 'es' | 'zh', Translations> = {
  de: {
    welcome: 'Willkommen',
    welcomeSubtitle: 'Anmelden oder neues Konto erstellen',
    platformDescription: 'Greifen Sie auf interaktive Live-Streams, shoppable Clips und intelligente KI-Features auf unserer Video-Commerce-Plattform zu.',
    signIn: 'Anmelden',
    signInHeadline: 'Anmelden',
    register: 'Registrieren',
    registerHeadline: 'Registrierung',
    createAccount: 'Konto erstellen',
    emailAddress: 'E-Mail-Adresse',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    firstName: 'Vorname',
    lastName: 'Nachname',
    company: 'Unternehmen',
    rememberMe: 'Angemeldet bleiben',
    forgotPassword: 'Passwort vergessen?',
    loginSuccess: 'Sie wurden erfolgreich angemeldet.',
    registerSuccess: 'Ihr Konto wurde erfolgreich erstellt.',
    passwordMismatch: 'Passwörter stimmen nicht überein.',
    marketingOptIn: 'Ich möchte Nachrichten, Angebote und Updates per E-Mail erhalten. Diese Einwilligung kann jederzeit widerrufen werden.',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsAndPrivacy: 'Mit der Registrierung stimmen Sie unserer Nutzungsbedingungen & Datenschutzrichtlinie zu.',
    serviceWelcome: 'Willkommen bei unserem Service',
    serviceSubtitle: 'Greifen Sie auf interaktive Live-Streams, shoppable Clips und intelligente KI-Features auf unserer Video-Commerce-Plattform zu.',
    noAccount: 'Noch kein Konto? Hier registrieren',
    haveAccount: 'Bereits ein Konto? Hier anmelden',
    backToLogin: 'Zurück zur Anmeldung',
    resetPassword: 'Passwort zurücksetzen',
    resetPasswordDescription: 'Geben Sie Ihre E-Mail-Adresse ein, um einen Link zum Zurücksetzen des Passworts zu erhalten',
    resetEmailHelper: 'Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts',
    resetButtonDescription: 'Sendet einen Passwort-Reset-Link an Ihre E-Mail-Adresse',
    cancel: 'Abbrechen',
    resetLinkSent: 'Reset-Link an Ihre E-Mail gesendet!',
    checkEmailInbox: 'Überprüfen Sie Ihren Posteingang und folgen Sie dem Link, um Ihr Passwort zurückzusetzen',
    passwordTooltip: 'Geben Sie Ihr Passwort ein',
    confirmPasswordTooltip: 'Wiederholen Sie Ihr Passwort zur Bestätigung',
    companyTooltip: 'Optional: Geben Sie Ihren Firmennamen ein',
    discoverPlans: 'Entdecken Sie die Pläne',
    plansSubtitle: 'Wählen Sie den perfekten Plan für Ihr Unternehmen und starten Sie noch heute',
    month: 'Monat',
    monthly: 'Monatlich',
    yearly: 'Jährlich',
    save15: '15% sparen',
    saveWithYearly: 'Spare 15% bei Jahresabo',
    recommended: 'EMPFOHLEN',
    contact: 'Kontakt',
    custom: 'Custom',
    starterDescription: 'Einstieg in professionellen Video-Commerce',
    starterSubtitle: 'Für Einsteiger',
    advancedDescription: 'Erweiterte Lösungen für Video-Commerce',
    advancedSubtitle: 'Für Teams',
    enterpriseDescription: 'Für umfassende Video-Commerce-Strategien',
    enterpriseSubtitle: 'Für Konzerne',
    selectOption: 'Wählen Sie eine Option:',
    selectPlan: 'Plan auswählen',
    contactSales: 'Kontakt aufnehmen',
    allDetails: 'Alle Details anzeigen',
    additionalFeatures: 'Zusätzliche Features',
    chooseModule: 'Wählen Sie Ihr Modul',
    clipsModule: 'Clips Modul',
    clipsModuleDesc: 'Ideal für Highlight-Videos',
    liveShoppingModule: 'Live Shopping Modul',
    liveShoppingModuleDesc: 'Ideal für Livestream Sales',
    starterModule: 'inkl. 1 Modul (Live Shopping oder Clips)',
    starterModuleTooltip: 'Wählen Sie zwischen Live Shopping oder Clips Modul',
    starterViews: 'inkl. 1.000 kostenlose Aufrufe/Monat',
    starterUploads: 'inkl. 60 kostenlose Clip-Uploads',
    starterAccounts: 'Bis zu 3 Benutzerkonten',
    basicAnalytics: 'Basis-Analytik',
    playerIntegration: '1-Code-Player-Integration',
    playerIntegrationTooltip: '1-Code Integration in Ihre Website',
    selfBranding: 'Self-Branding-Optionen',
    selfBrandingTooltip: 'Personalisieren Sie das Aussehen',
    allFromStarter: 'Alles aus Starter +',
    allFromAdvanced: 'Alles aus Advanced +',
    fullVideoCommerce: 'inkl. vollständiger Video-Commerce (Live Shopping & Clips)',
    fullVideoCommerceTooltip: 'Beide Module: Live Shopping & Clips',
    advancedViews: 'inkl. 2.500 kostenlose Aufrufe/Monat',
    advancedUploads: 'inkl. 240 kostenlose Clip-Uploads',
    advancedUserAccounts: 'Bis zu 10 Benutzerkonten',
    advancedAnalytics: 'Erweiterte Analytik (inkl. Export)',
    advancedAnalyticsTooltip: 'Detaillierte Berichte mit Export-Funktion',
    extendedApiAccess: 'Option für erweiterten API-Zugang',
    extendedApiAccessTooltip: 'Erweiterte API-Funktionen verfügbar',
    aiBot: 'inkl. AI Bot (kostenlos 1.000 Chats/Monat)',
    aiBotTooltip: 'KI-gestützter Chatbot für Kunden',
    enterpriseViews: 'inkl. 5.000 kostenlose Aufrufe/Monat',
    unlimitedUploads: '∞ Clip-Uploads',
    unlimitedAccounts: '∞ Benutzerkonten',
    enterpriseSupport: 'Enterprise Support',
    enterpriseSupportTooltip: 'Prioritärer 24/7 Support',
    successManager: 'Dedicated Success Manager',
    successManagerTooltip: 'Persönlicher Ansprechpartner',
    videoHosting: 'Professionelles Video-Hosting',
    customPlayer: 'Anpassbarer Video-Player',
    basicSupport: 'Basis-Support (E-Mail)',
    sslSecurity: 'SSL-Verschlüsselung',
    mobileOptimized: 'Mobile-optimiert',
    prioritySupport: 'Priority Support',
    advancedIntegrations: 'Erweiterte Integrationen',
    customBranding: 'Vollständiges Custom Branding',
    teamCollaboration: 'Team-Kollaboration Tools',
    advancedReporting: 'Erweiterte Reporting-Tools',
    dedicatedInfrastructure: 'Dedizierte Infrastruktur',
    slaGuarantee: 'SLA-Garantie (99.9% Uptime)',
    onPremiseOption: 'On-Premise Option',
    customDevelopment: 'Custom Development',
    trainingIncluded: 'Training & Onboarding inklusive'
  },
  en: {
    welcome: 'Welcome',
    welcomeSubtitle: 'Sign in or create a new account',
    platformDescription: 'Access interactive live streams, shoppable clips, and intelligent AI features on our video commerce platform.',
    signIn: 'Login',
    signInHeadline: 'Sign In',
    register: 'Register',
    registerHeadline: 'Registration',
    createAccount: 'Create Account',
    emailAddress: 'Email Address',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    company: 'Company',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loginSuccess: 'You have been successfully logged in.',
    registerSuccess: 'Your account has been created successfully.',
    passwordMismatch: 'Passwords do not match.',
    marketingOptIn: 'I would like to receive news, offers and updates via email. This consent can be withdrawn at any time.',
    privacyPolicy: 'Privacy Policy',
    termsAndPrivacy: 'By registering, you agree to our Terms of Service & Privacy Policy.',
    serviceWelcome: 'Welcome to our Service',
    serviceSubtitle: 'Access interactive live streams, shoppable clips, and intelligent AI features on our video commerce platform.',
    noAccount: 'No account yet? Sign up here',
    haveAccount: 'Already have an account? Sign in here',
    backToLogin: 'Back to Login',
    resetPassword: 'Reset Password',
    resetPasswordDescription: 'Enter your email address to receive a password reset link',
    resetEmailHelper: 'We will send you a password reset link',
    resetButtonDescription: 'Sends a password reset link to your email address',
    cancel: 'Cancel',
    resetLinkSent: 'Reset link sent to your email!',
    checkEmailInbox: 'Check your inbox and follow the link to reset your password',
    passwordTooltip: 'Enter your password',
    confirmPasswordTooltip: 'Repeat your password to confirm',
    companyTooltip: 'Optional: Enter your company name',
    discoverPlans: 'Discover our Plans',
    plansSubtitle: 'Choose the perfect plan for your business and get started today',
    month: 'Month',
    monthly: 'Monthly',
    yearly: 'Yearly',
    save15: 'Save 15%',
    saveWithYearly: 'Save 15% with yearly billing',
    recommended: 'RECOMMENDED',
    contact: 'Contact',
    custom: 'Custom',
    starterDescription: 'Getting started with professional video commerce',
    starterSubtitle: 'For Beginners',
    advancedDescription: 'Advanced solutions for video commerce',
    advancedSubtitle: 'For Teams',
    enterpriseDescription: 'For comprehensive video commerce strategies',
    enterpriseSubtitle: 'For Enterprises',
    selectOption: 'Select an option:',
    selectPlan: 'Select Plan',
    contactSales: 'Contact Sales',
    allDetails: 'Show all details',
    additionalFeatures: 'Additional Features',
    chooseModule: 'Choose your module',
    clipsModule: 'Clips Module',
    clipsModuleDesc: 'Perfect for highlight videos',
    liveShoppingModule: 'Live Shopping Module',
    liveShoppingModuleDesc: 'Perfect for livestream sales',
    starterModule: 'incl. 1 module (live shopping or clips)',
    starterModuleTooltip: 'Choose between Live Shopping or Clips module',
    starterViews: 'incl. 1,000 free views/month',
    starterUploads: 'incl. 60 free clip uploads',
    starterAccounts: 'Up to 3 user accounts',
    basicAnalytics: 'Basic analytics',
    playerIntegration: '1-code player integration',
    playerIntegrationTooltip: '1-code integration into your website',
    selfBranding: 'Self-branding options',
    selfBrandingTooltip: 'Customize the appearance',
    allFromStarter: 'All from Starter +',
    allFromAdvanced: 'All from Advanced +',
    fullVideoCommerce: 'incl. full Video Commerce (Live Shopping & Clips)',
    fullVideoCommerceTooltip: 'Both modules: Live Shopping & Clips',
    advancedViews: 'incl. 2,500 free views/month',
    advancedUploads: 'incl. 240 free clip uploads',
    advancedUserAccounts: 'Up to 10 user accounts',
    advancedAnalytics: 'Advanced analytics (incl. export)',
    advancedAnalyticsTooltip: 'Detailed reports with export function',
    extendedApiAccess: 'Option for extended API access',
    extendedApiAccessTooltip: 'Extended API functions available',
    aiBot: 'incl. AI Bot (free 1,000 chats/month)',
    aiBotTooltip: 'AI-powered chatbot for customers',
    enterpriseViews: 'incl. 5,000 free views/month',
    unlimitedUploads: '∞ Clip uploads',
    unlimitedAccounts: '∞ User accounts',
    enterpriseSupport: 'Enterprise Support',
    enterpriseSupportTooltip: 'Priority 24/7 support',
    successManager: 'Dedicated Success Manager',
    successManagerTooltip: 'Personal point of contact',
    videoHosting: 'Professional video hosting',
    customPlayer: 'Customizable video player',
    basicSupport: 'Basic support (email)',
    sslSecurity: 'SSL encryption',
    mobileOptimized: 'Mobile optimized',
    prioritySupport: 'Priority Support',
    advancedIntegrations: 'Advanced integrations',
    customBranding: 'Full custom branding',
    teamCollaboration: 'Team collaboration tools',
    advancedReporting: 'Advanced reporting tools',
    dedicatedInfrastructure: 'Dedicated infrastructure',
    slaGuarantee: 'SLA guarantee (99.9% uptime)',
    onPremiseOption: 'On-premise option',
    customDevelopment: 'Custom development',
    trainingIncluded: 'Training & onboarding included'
  },
  es: {
    welcome: 'Bienvenido',
    welcomeSubtitle: 'Iniciar sesión o crear una nueva cuenta',
    platformDescription: 'Accede a transmisiones en vivo interactivas, clips comprables e funciones inteligentes de IA en nuestra plataforma de comercio de video.',
    signIn: 'Iniciar Sesión',
    signInHeadline: 'Iniciar Sesión',
    register: 'Registrarse',
    registerHeadline: 'Registro',
    createAccount: 'Crear Cuenta',
    emailAddress: 'Dirección de Correo',
    password: 'Contraseña',
    confirmPassword: 'Confirmar Contraseña',
    firstName: 'Nombre',
    lastName: 'Apellido',
    company: 'Empresa',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidaste la contraseña?',
    loginSuccess: 'Has iniciado sesión exitosamente.',
    registerSuccess: 'Tu cuenta ha sido creada exitosamente.',
    passwordMismatch: 'Las contraseñas no coinciden.',
    marketingOptIn: 'Me gustaría recibir noticias, ofertas y actualizaciones por correo electrónico. Este consentimiento puede retirarse en cualquier momento.',
    privacyPolicy: 'Política de Privacidad',
    termsAndPrivacy: 'Al registrarte, aceptas nuestros Términos de Servicio y Política de Privacidad.',
    serviceWelcome: 'Bienvenido a nuestro Servicio',
    serviceSubtitle: 'Accede a transmisiones en vivo interactivas, clips comprables e funciones inteligentes de IA en nuestra plataforma de comercio de video.',
    noAccount: '¿No tienes cuenta? Regístrate aquí',
    haveAccount: '¿Ya tienes cuenta? Inicia sesión aquí',
    backToLogin: 'Volver al Login',
    resetPassword: 'Restablecer Contraseña',
    resetPasswordDescription: 'Ingrese su dirección de correo electrónico para recibir un enlace de restablecimiento de contraseña',
    resetEmailHelper: 'Le enviaremos un enlace para restablecer su contraseña',
    resetButtonDescription: 'Envía un enlace de restablecimiento de contraseña a su dirección de correo electrónico',
    cancel: 'Cancelar',
    resetLinkSent: '¡Enlace de restablecimiento enviado a su correo!',
    checkEmailInbox: 'Revise su bandeja de entrada y siga el enlace para restablecer su contraseña',
    passwordTooltip: 'Ingrese su contraseña',
    confirmPasswordTooltip: 'Repita su contraseña para confirmar',
    companyTooltip: 'Opcional: Ingrese el nombre de su empresa',
    discoverPlans: 'Descubre nuestros Planes',
    plansSubtitle: 'Elija el plan perfecto para su negocio y comience hoy',
    month: 'Mes',
    monthly: 'Mensual',
    yearly: 'Anual',
    save15: 'Ahorra 15%',
    saveWithYearly: 'Ahorra 15% con facturación anual',
    recommended: 'RECOMENDADO',
    contact: 'Contacto',
    custom: 'Personalizado',
    starterDescription: 'Comenzando con comercio de video profesional',
    starterSubtitle: 'Para Principiantes',
    advancedDescription: 'Soluciones avanzadas para comercio de video',
    advancedSubtitle: 'Para Equipos',
    enterpriseDescription: 'Para estrategias integrales de comercio de video',
    enterpriseSubtitle: 'Para Empresas',
    selectOption: 'Selecciona una opción:',
    selectPlan: 'Seleccionar Plan',
    contactSales: 'Contactar Ventas',
    allDetails: 'Mostrar todos los detalles',
    additionalFeatures: 'Características Adicionales',
    chooseModule: 'Elige tu módulo',
    clipsModule: 'Módulo de Clips',
    clipsModuleDesc: 'Perfecto para videos destacados',
    liveShoppingModule: 'Módulo Live Shopping',
    liveShoppingModuleDesc: 'Perfecto para ventas en livestream',
    starterModule: 'incl. 1 módulo (compras en vivo o clips)',
    starterModuleTooltip: 'Elige entre módulo Live Shopping o Clips',
    starterViews: 'incl. 1,000 visualizaciones gratuitas/mes',
    starterUploads: 'incl. 60 subidas de clips gratuitas',
    starterAccounts: 'Hasta 3 cuentas de usuario',
    basicAnalytics: 'Análisis básico',
    playerIntegration: 'Integración de reproductor de 1 código',
    playerIntegrationTooltip: 'Integración de 1 código en su sitio web',
    selfBranding: 'Opciones de marca propia',
    selfBrandingTooltip: 'Personaliza la apariencia',
    allFromStarter: 'Todo de Starter +',
    allFromAdvanced: 'Todo de Advanced +',
    fullVideoCommerce: 'incl. Comercio de Video completo (Compras en Vivo y Clips)',
    fullVideoCommerceTooltip: 'Ambos módulos: Live Shopping y Clips',
    advancedViews: 'incl. 2,500 visualizaciones gratuitas/mes',
    advancedUploads: 'incl. 240 subidas de clips gratuitas',
    advancedUserAccounts: 'Hasta 10 cuentas de usuario',
    advancedAnalytics: 'Análisis avanzado (incl. exportación)',
    advancedAnalyticsTooltip: 'Informes detallados con función de exportación',
    extendedApiAccess: 'Opción para acceso API extendido',
    extendedApiAccessTooltip: 'Funciones API extendidas disponibles',
    aiBot: 'incl. Bot de IA (gratuito 1,000 chats/mes)',
    aiBotTooltip: 'Chatbot impulsado por IA para clientes',
    enterpriseViews: 'incl. 5,000 visualizaciones gratuitas/mes',
    unlimitedUploads: '∞ Subidas de clips',
    unlimitedAccounts: '∞ Cuentas de usuario',
    enterpriseSupport: 'Soporte Enterprise',
    enterpriseSupportTooltip: 'Soporte prioritario 24/7',
    successManager: 'Gerente de Éxito Dedicado',
    successManagerTooltip: 'Punto de contacto personal',
    videoHosting: 'Hosting de video profesional',
    customPlayer: 'Reproductor de video personalizable',
    basicSupport: 'Soporte básico (email)',
    sslSecurity: 'Encriptación SSL',
    mobileOptimized: 'Optimizado para móviles',
    prioritySupport: 'Soporte Prioritario',
    advancedIntegrations: 'Integraciones avanzadas',
    customBranding: 'Marca personalizada completa',
    teamCollaboration: 'Herramientas de colaboración en equipo',
    advancedReporting: 'Herramientas de reportes avanzados',
    dedicatedInfrastructure: 'Infraestructura dedicada',
    slaGuarantee: 'Garantía SLA (99.9% uptime)',
    onPremiseOption: 'Opción on-premise',
    customDevelopment: 'Desarrollo personalizado',
    trainingIncluded: 'Entrenamiento e integración incluidos'
  },
  zh: {
    welcome: '欢迎',
    welcomeSubtitle: '登录或创建新账户',
    platformDescription: '在我们的视频商务平台上访问互动直播、可购物剪辑和智能AI功能。',
    signIn: '登录',
    signInHeadline: '登录',
    register: '注册',
    registerHeadline: '注册',
    createAccount: '创建账户',
    emailAddress: '电子邮箱地址',
    password: '密码',
    confirmPassword: '确认密码',
    firstName: '名',
    lastName: '姓',
    company: '公司',
    rememberMe: '记住我',
    forgotPassword: '忘记密码？',
    loginSuccess: '您已成功登录。',
    registerSuccess: '您的账户已成功创建。',
    passwordMismatch: '密码不匹配。',
    marketingOptIn: '我希望通过电子邮件接收新闻、优惠和更新。此同意可随时撤回。',
    privacyPolicy: '隐私政策',
    termsAndPrivacy: '注册即表示您同意我们的服务条款和隐私政策。',
    serviceWelcome: '欢迎使用我们的服务',
    serviceSubtitle: '在我们的视频商务平台上访问互动直播、可购物剪辑和智能AI功能。',
    noAccount: '还没有账户？在这里注册',
    haveAccount: '已有账户？在这里登录',
    backToLogin: '返回登录',
    resetPassword: '重置密码',
    resetPasswordDescription: '输入您的电子邮箱地址以接收密码重置链接',
    resetEmailHelper: '我们将向您发送密码重置链接',
    resetButtonDescription: '向您的电子邮箱地址发送密码重置链接',
    cancel: '取消',
    resetLinkSent: '重置链接已发送到您的邮箱！',
    checkEmailInbox: '检查您的收件箱并点击链接重置密码',
    passwordTooltip: '输入您的密码',
    confirmPasswordTooltip: '重复输入密码以确认',
    companyTooltip: '可选：输入您的公司名称',
    discoverPlans: '发现我们的计划',
    plansSubtitle: '为您的企业选择完美的计划，今天就开始',
    month: '月',
    monthly: '月付',
    yearly: '年付',
    save15: '节省15%',
    saveWithYearly: '年付节省15%',
    recommended: '推荐',
    contact: '联系',
    custom: '定制',
    starterDescription: '开始专业视频商务',
    starterSubtitle: '适合初学者',
    advancedDescription: '视频商务高级解决方案',
    advancedSubtitle: '适合团队',
    enterpriseDescription: '全面的视频商务策略',
    enterpriseSubtitle: '适合企业',
    selectOption: '选择一个选项：',
    selectPlan: '选择计划',
    contactSales: '联系销售',
    allDetails: '显示所有详情',
    additionalFeatures: '附加功能',
    chooseModule: '选择您的模块',
    clipsModule: '剪辑模块',
    clipsModuleDesc: '完美适用于精彩视频',
    liveShoppingModule: '直播购物模块',
    liveShoppingModuleDesc: '完美适用于直播销售',
    starterModule: '包含1个模块（直播购物或剪辑）',
    starterModuleTooltip: '在直播购物或剪辑模块中选择',
    starterViews: '包含每月1,000次免费观看',
    starterUploads: '包含60次免费剪辑上传',
    starterAccounts: '最多3个用户账户',
    basicAnalytics: '基础分析',
    playerIntegration: '一键播放器集成',
    playerIntegrationTooltip: '一键集成到您的网站',
    selfBranding: '自主品牌选项',
    selfBrandingTooltip: '自定义外观',
    allFromStarter: '包含入门版所有功能 +',
    allFromAdvanced: '包含高级版所有功能 +',
    fullVideoCommerce: '包含完整视频商务（直播购物和剪辑）',
    fullVideoCommerceTooltip: '两个模块：直播购物和剪辑',
    advancedViews: '包含每月2,500次免费观看',
    advancedUploads: '包含240次免费剪辑上传',
    advancedUserAccounts: '最多10个用户账户',
    advancedAnalytics: '高级分析（包含导出）',
    advancedAnalyticsTooltip: '详细报告和导出功能',
    extendedApiAccess: '扩展API访问选项',
    extendedApiAccessTooltip: '提供扩展API功能',
    aiBot: '包含AI机器人（每月免费1,000次聊天）',
    aiBotTooltip: '为客户提供AI驱动的聊天机器人',
    enterpriseViews: '包含每月5,000次免费观看',
    unlimitedUploads: '∞ 剪辑上传',
    unlimitedAccounts: '∞ 用户账户',
    enterpriseSupport: '企业级支持',
    enterpriseSupportTooltip: '优先24/7支持',
    successManager: '专属成功经理',
    successManagerTooltip: '个人联系点',
    videoHosting: '专业视频托管',
    customPlayer: '可定制视频播放器',
    basicSupport: '基础支持（邮件）',
    sslSecurity: 'SSL加密',
    mobileOptimized: '移动端优化',
    prioritySupport: '优先支持',
    advancedIntegrations: '高级集成',
    customBranding: '完整定制品牌',
    teamCollaboration: '团队协作工具',
    advancedReporting: '高级报告工具',
    dedicatedInfrastructure: '专用基础设施',
    slaGuarantee: 'SLA保证（99.9%正常运行时间）',
    onPremiseOption: '本地部署选项',
    customDevelopment: '定制开发',
    trainingIncluded: '包含培训和入门指导'
  }
};

export const useTranslations = () => {
  const [language, setLanguage] = useState<'de' | 'en' | 'es' | 'zh'>('de');

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return {
    language,
    setLanguage,
    t
  };
};
