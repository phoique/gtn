import React from 'react';
import { Text, View } from 'react-native';
import Card, { CardBody } from '../../../components/Card/Card';
import Button from '../../../components/Button';

const AnswerCard = () => {
	return (
		<Card>
			<CardBody>
				<View className='flex flex-1 flex-row items-center'>
					<View className='flex-1'>
						<Text className='text-black text-base font-normal dark:text-white'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</Text>
					</View>
					<View>
						<Button color='success' icon='Check' />
					</View>
				</View>
			</CardBody>
		</Card>
	);
};

export default AnswerCard;
