import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ children }) => {
	return (
		<View className='bg-slate-200 p-5 pt-2 rounded-2xl shadow-xl my-2 dark:bg-gray-700'>
			{children}
		</View>
	);
};

export const CardHeader = ({ title }) => {
	return (
		<View className='flex'>
			<Text className='text-black font-bold text-base mb-4 dark:text-white'>{title}</Text>
		</View>
	);
};

export const CardBody = ({ children }) => {
	return <View className='flex'>{children}</View>;
};

export const CardFooter = ({ children }) => {
	return <View className='flex mt-4'>{children}</View>;
};

export default Card;
