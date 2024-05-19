import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './locales/tr.json';

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	lng: 'tr',
	fallbackLng: 'tr',
	debug: false,
	resources: {
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
