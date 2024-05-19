import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useGptMessage = () => {
	const { t } = useTranslation();
	const answers = useSelector((state) => state.game.answers);

	const messages = React.useMemo(() => {
		const response = [
			{
				role: 'system',
				content: t('screens.game.gptSystemText'),
			},
		];

		if (answers && answers.length) {
			const reversedAnswers = answers.slice().reverse();
			reversedAnswers.forEach((answer) => {
				response.push(
					...[
						{
							role: 'assistant',
							content: answer.question,
						},
						{
							role: 'user',
							content: answer.answer,
						},
					],
				);
			});
		}
		return response;
	}, [answers]);

	return { messages, answers };
};

export default useGptMessage;
