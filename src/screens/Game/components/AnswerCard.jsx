import React from 'react';
import { Text, View } from 'react-native';
import Card, { CardBody } from '../../../components/Card/Card';
import Button from '../../../components/Button';
import { questionActionButton } from '../contants';

const AnswerCard = ({ question, answerType }) => {
	const answerProperty = questionActionButton[answerType];

	return (
		<Card>
			<CardBody>
				<View className='flex flex-row items-center'>
					<View className='flex-1'>
						<Text className='text-black text-base font-normal dark:text-white'>
							{question}
						</Text>
					</View>
					<View>
						<Button color={answerProperty.color} icon={answerProperty.icon} />
					</View>
				</View>
			</CardBody>
		</Card>
	);
};

export default AnswerCard;
