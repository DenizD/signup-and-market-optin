
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
  | 'companyTooltip';

type Translations = {
  [key in TranslationKey]: string;
};

const translations: Record<'de' | 'en' | 'es', Translations> = {
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
    companyTooltip: 'Optional: Geben Sie Ihren Firmennamen ein'
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
    companyTooltip: 'Optional: Enter your company name'
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
    companyTooltip: 'Opcional: Ingrese el nombre de su empresa'
  }
};

export const useTranslations = () => {
  const [language, setLanguage] = useState<'de' | 'en' | 'es'>('de');

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return {
    language,
    setLanguage,
    t
  };
};
