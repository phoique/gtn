import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Card, { CardBody, CardHeader } from '../../../components/Card/Card';
import Button from '../../../components/Button';
import gameSlice from '../../../store/gameSlice';
import openAiServices from '../../../services/openAiServices';
import QuestionCardSkeleton from './QuestionCardSkeleton';
import useGptMessage from '../hooks/useGptMessage';
import { questionActionButton } from '../contants';

const QuestionCard = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const number = useSelector((state) => state.game.number);
	const { messages, answers } = useGptMessage();
	const getGptChatQuery = openAiServices.useGetGptChatQuery({ messages });

	const question = getGptChatQuery.data?.choices[0].message.content;
	const remainingQuestion = process.env.MAX_QUESTION_TO_ASK - answers.length;

	const handleAnswer = (answer) => {
		const questionLoweCase = question.toLocaleLowerCase();
		const estimatedNumber = questionLoweCase.match(/\d+/g);
		if (
			questionLoweCase.includes(t('screens.game.estimatedNumber')) &&
			answer === 'true' &&
			estimatedNumber[0] === number
		) {
			navigation.navigate('WinGame');
		} else if (remainingQuestion === 0) {
			navigation.navigate('LoseGame');
		} else {
			dispatch(
				gameSlice.actions.setAnswer({
					id: new Date().getTime(),
					question,
					answerType: questionActionButton[answer].type,
				}),
			);
		}
	};

	if (getGptChatQuery.isFetching) return <QuestionCardSkeleton />;

	return (
		<Card>
			<View className='flex flex-row justify-between'>
				<CardHeader title={t('screens.game.questionCardTitle')} />
				<Text className='font-bold text-xs text-black dark:text-white'>
					{t('screens.game.remainingQuestion', { value: remainingQuestion })}
				</Text>
			</View>
			<CardBody>
				<Text className='text-black text-base font-normal dark:text-white'>{question}</Text>
				<View className='flex flex-row mt-3 justify-around'>
					{Object.values(questionActionButton).map((action) => (
						<Button
							key={`anser-button-${action.type}`}
							color={action.color}
							icon={action.icon}
							onPress={() => handleAnswer(action.type)}
						/>
					))}
				</View>
			</CardBody>
		</Card>
	);
};

export default QuestionCard;
