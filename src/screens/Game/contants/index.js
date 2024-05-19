import i18n from '../../../languages';

export const questionActionButton = {
	true: {
		type: 'true',
		text: i18n.t('screens.game.answerYes'),
		icon: 'Check',
		color: 'success',
	},
	null: {
		type: 'null',
		text: i18n.t('screens.game.answerNull'),
		icon: 'QuestionMark',
		color: 'secondary',
	},
	false: {
		type: 'false',
		text: i18n.t('screens.game.answerNo'),
		icon: 'Close',
		color: 'danger',
	},
};
