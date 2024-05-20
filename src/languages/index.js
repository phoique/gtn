import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	lng: 'tr',
	fallbackLng: 'tr',
	debug: false,
	resources: {
		tr: { translation: tr },
		en: { translation: en },
	},
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
