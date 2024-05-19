import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { questionActionButton } from '../contants';

const useGptMessage = () => {
	const { t } = useTranslation();
	const answers = useSelector((state) => state.game.answers);

	const messages = React.useMemo(() => {
		const response = [
			{
				role: 'system',
				content: t('screens.game.gptSystemText', {
					min: process.env.MIN_NUMBER,
					max: process.env.MAX_NUMBER,
				}),
			},
		];

		if (answers && answers.length) {
			const reversedAnswers = answers.slice().reverse();
			reversedAnswers.forEach((answer) => {
				response.push(
					...[
						{ role: 'assistant', content: answer.question },
						{ role: 'user', content: questionActionButton[answer.answerType].text },
					],
				);
			});
		}
		return response;
	}, [answers, t]);

	return { messages, answers };
};

export default useGptMessage;
