import React from 'react';
import { View, Text, TextInput } from 'react-native';
import classnames from 'classnames';
import { useColorScheme } from 'nativewind';

const Input = ({ placeholder, value, onChangeText, keyboardType, editable, onFocus, error }) => {
	const { colorScheme } = useColorScheme();
	return (
		<View>
			<TextInput
				className={classnames(
					'border border-gray-300 rounded p-2 text-black dark:text-white',
					{
						'border-red-500': error,
					},
				)}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				editable={editable}
				onFocus={onFocus}
				placeholderTextColor={
					colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'
				}
			/>
			{error && <Text className='text-xs text-red-500 mt-1 ml-2'>{error}</Text>}
		</View>
	);
};

export default Input;
