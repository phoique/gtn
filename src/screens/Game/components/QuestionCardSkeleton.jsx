import React from 'react';
import { View } from 'react-native';
import Card, { CardBody } from '../../../components/Card/Card';

const QuestionCardSkeleton = () => {
	return (
		<Card>
			<CardBody>
				<View className='flex flex-column gap-y-4'>
					<View className='flex flex-1 w-1/3 h-5 bg-slate-300 dark:bg-gray-800' />
					<View className='flex flex-1 w-4/5 h-5 bg-slate-300 dark:bg-gray-800' />
					<View className='flex flex-row justify-around'>
						<View className='w-10 h-8 bg-slate-300 rounded-lg dark:bg-gray-800' />
						<View className='w-10 h-8 bg-slate-300 rounded-lg dark:bg-gray-800' />
					</View>
				</View>
			</CardBody>
		</Card>
	);
};

export default QuestionCardSkeleton;
