import React from 'react';
import { View, Text, Pressable } from 'react-native';
import classnames from 'classnames';

const colors = {
	primary: 'bg-blue-500 hover:bg-blue-600',
	secondary: 'bg-gray-500 hover:bg-gray-600',
	success: 'bg-green-500 hover:bg-green-600',
	info: 'bg-blue-500 hover:bg-blue-400',
	warning: 'bg-yellow-500 hover:bg-yellow-600',
	danger: 'bg-red-500 hover:bg-red-600',
	light: 'bg-gray-400 hover:bg-gray-400 font-bold py-2 px-4 rounded',
	dark: 'bg-gray-800 hover:bg-gray-900',
};

const Button = ({ title, onPress, color = 'light' }) => {
	if (!title) return null;
	return (
		<View className='flex-row'>
			<Pressable
				onPress={onPress}
				className={classnames('py-2 px-4', {
					[colors[color]]: color in colors,
				})}>
				<Text className='text-base font-bold text-white'>{title}</Text>
			</Pressable>
		</View>
	);
};

export default Button;
