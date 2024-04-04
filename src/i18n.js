import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';

// Import translations
import enTranslation from './locales/en/translation.json';

// Language detection
const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS
    : NativeModules.I18nManager.localeIdentifier; // Android

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
        const storedLanguage = await AsyncStorage.getItem('language');
        if (storedLanguage) {
            callback(storedLanguage);
            return;
        }
        callback(deviceLanguage);
    },
    init: () => {},
    cacheUserLanguage: () => {},
};

i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en: {
                translation: enTranslation,
            }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
