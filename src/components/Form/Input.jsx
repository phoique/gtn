import React from 'react';
import { View, Text, TextInput } from 'react-native';
import classnames from 'classnames';

const Input = ({ placeholder, value, onChangeText, keyboardType, editable, onFocus, error }) => {
	return (
		<View>
			<TextInput
				className={classnames('border border-gray-300 rounded p-2', {
					'border-red-500': error,
				})}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				editable={editable}
				onFocus={onFocus}
			/>
			{error && <Text className='text-xs text-red-500 mt-1 ml-2'>{error}</Text>}
		</View>
	);
};

export default Input;
