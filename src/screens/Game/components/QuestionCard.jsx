import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Card, { CardBody, CardHeader } from '../../../components/Card/Card';
import Button from '../../../components/Button';

const QuestionCard = () => {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader title={t('screens.game.questionCardTitle')} />
			<CardBody>
				<Text className='text-black text-base font-normal dark:text-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Text>
				<View className='flex flex-row mt-3 justify-around'>
					<Button color='success' icon='Check' />
					<Button color='danger' icon='Close' />
				</View>
			</CardBody>
		</Card>
	);
};

export default QuestionCard;
