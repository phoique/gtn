import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ children }) => {
	return <View className='bg-slate-200 p-5 pt-2 rounded-2xl shadow-xl'>{children}</View>;
};

export const CardHeader = ({ title }) => {
	return (
		<View className='flex'>
			<Text className='text-black font-bold text-base'>{title}</Text>
		</View>
	);
};

export const CardBody = ({ children }) => {
	return <View className='flex my-6'>{children}</View>;
};

export const CardFooter = ({ children }) => {
	return <View className='flex'>{children}</View>;
};

export default Card;
