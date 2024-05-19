import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Card, { CardBody, CardHeader } from '../../../components/Card/Card';
import Button from '../../../components/Button';
import gameSlice from '../../../store/gameSlice';

const question = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const QuestionCard = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const handleAnswer = (answer) => {
		dispatch(
			gameSlice.actions.setAnswer({
				id: new Date().getTime(),
				question,
				answer,
			}),
		);
	};

	return (
		<Card>
			<CardHeader title={t('screens.game.questionCardTitle')} />
			<CardBody>
				<Text className='text-black text-base font-normal dark:text-white'>{question}</Text>
				<View className='flex flex-row mt-3 justify-around'>
					<Button color='success' icon='Check' onPress={() => handleAnswer(true)} />
					<Button color='danger' icon='Close' onPress={() => handleAnswer(false)} />
				</View>
			</CardBody>
		</Card>
	);
};

export default QuestionCard;
