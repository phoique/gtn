import React from 'react';
import { Text, View } from 'react-native';
import Card, { CardBody } from '../../../components/Card/Card';
import Button from '../../../components/Button';

const AnswerCard = ({ question, answer }) => {
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
						{answer && <Button color='success' icon='Check' />}
						{!answer && <Button color='danger' icon='Close' />}
					</View>
				</View>
			</CardBody>
		</Card>
	);
};

export default AnswerCard;
