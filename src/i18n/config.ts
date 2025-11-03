import i18n from 'i18next';
import { initReactI18next } from 'preact-i18next';

const resources = {
  en: {
    translation: {
      app: {
        title: 'Preact Component Library',
      },
      nav: {
        home: 'Home',
        dashboard: 'Dashboard',
        about: 'About',
        settings: 'Settings',
        privacy: 'Privacy',
        uiComponents: 'UI Components',
        formComponents: 'Form Components',
        layoutComponents: 'Layout Components',
      },
      theme: {
        light: 'Light Mode',
        dark: 'Dark Mode',
        auto: 'Auto Mode',
      },
      pages: {
        home: {
          title: 'Welcome to Preact Component Library',
          subtitle: 'A modern, responsive component library built with Preact',
        },
        dashboard: {
          title: 'Component Dashboard',
          subtitle: 'Explore our collection of reusable components',
        },
        about: {
          title: 'About',
          description: 'This is a modern Preact application showcasing a responsive component library.',
        },
        settings: {
          title: 'Settings',
          description: 'Configure your application preferences',
        },
        privacy: {
          title: 'Privacy Policy',
          description: 'Your privacy matters to us',
        },
        notFound: {
          title: '404 - Page Not Found',
          message: 'The page you are looking for does not exist.',
          backHome: 'Back to Home',
        },
        error: {
          title: '500 - Server Error',
          message: 'Something went wrong. Please try again later.',
          backHome: 'Back to Home',
        },
      },
    },
  },
  pl: {
    translation: {
      app: {
        title: 'Biblioteka Komponentów Preact',
      },
      nav: {
        home: 'Start',
        dashboard: 'Panel',
        about: 'O nas',
        settings: 'Ustawienia',
        privacy: 'Prywatność',
        uiComponents: 'Komponenty UI',
        formComponents: 'Komponenty Formularzy',
        layoutComponents: 'Komponenty Layoutu',
      },
      theme: {
        light: 'Tryb Jasny',
        dark: 'Tryb Ciemny',
        auto: 'Tryb Automatyczny',
      },
      pages: {
        home: {
          title: 'Witaj w Bibliotece Komponentów Preact',
          subtitle: 'Nowoczesna, responsywna biblioteka komponentów zbudowana z Preact',
        },
        dashboard: {
          title: 'Panel Komponentów',
          subtitle: 'Odkryj naszą kolekcję komponentów wielokrotnego użytku',
        },
        about: {
          title: 'O nas',
          description: 'To jest nowoczesna aplikacja Preact prezentująca responsywną bibliotekę komponentów.',
        },
        settings: {
          title: 'Ustawienia',
          description: 'Skonfiguruj preferencje aplikacji',
        },
        privacy: {
          title: 'Polityka Prywatności',
          description: 'Twoja prywatność jest dla nas ważna',
        },
        notFound: {
          title: '404 - Strona nie znaleziona',
          message: 'Strona, której szukasz, nie istnieje.',
          backHome: 'Powrót do strony głównej',
        },
        error: {
          title: '500 - Błąd serwera',
          message: 'Coś poszło nie tak. Spróbuj ponownie później.',
          backHome: 'Powrót do strony głównej',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
