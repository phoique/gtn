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
		en: {
			translation: en,
		},
		tr: {
			translation: tr,
		},
	},
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false,
	},
});

export default i18n;
