
import { useState } from 'react';

export type TranslationKey = 
  | 'welcome'
  | 'welcomeSubtitle'
  | 'signIn'
  | 'register'
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
  | 'serviceSubtitle';

type Translations = {
  [key in TranslationKey]: string;
};

const translations: Record<'de' | 'en' | 'es', Translations> = {
  de: {
    welcome: 'Willkommen! 👋',
    welcomeSubtitle: 'In Ihr Konto anmelden oder neues Konto erstellen',
    signIn: 'In Ihr Konto anmelden',
    register: 'Registrieren',
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
    serviceSubtitle: 'Greifen Sie auf interaktive Live-Streams, shoppable Clips und intelligente KI-Features auf unserer Video-Commerce-Plattform zu.'
  },
  en: {
    welcome: 'Welcome! 👋',
    welcomeSubtitle: 'Sign in to your account or create a new account',
    signIn: 'Sign in to your account',
    register: 'Register',
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
    serviceSubtitle: 'Access interactive live streams, shoppable clips, and intelligent AI features on our video commerce platform.'
  },
  es: {
    welcome: '¡Bienvenido! 👋',
    welcomeSubtitle: 'Iniciar sesión en su cuenta o crear una nueva cuenta',
    signIn: 'Iniciar sesión en su cuenta',
    register: 'Registrarse',
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
    serviceSubtitle: 'Accede a transmisiones en vivo interactivas, clips comprables e funciones inteligentes de IA en nuestra plataforma de comercio de video.'
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
