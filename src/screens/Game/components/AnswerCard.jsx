import React from 'react';
import { Text, View } from 'react-native';
import Card, { CardBody } from '../../../components/Card/Card';
import Button from '../../../components/Button';

const AnswerCard = () => {
	return (
		<Card>
			<CardBody>
				<View className='flex flex-row items-center'>
					<Text className='text-black text-base font-normal mr-3 dark:text-white'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Text>
					<Button color='success' icon='Check' />
				</View>
			</CardBody>
		</Card>
	);
};

export default AnswerCard;
