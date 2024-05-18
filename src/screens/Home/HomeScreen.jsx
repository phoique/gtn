import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import packageJson from '../../../package.json';

const HomeScreen = () => {
	const { t } = useTranslation();
	const navigation = useNavigation();

	const handleRedirect = () => {
		navigation.navigate('Game');
	};
	return (
		<Container safeAreaBottom>
			<View className='flex flex-1'>
				<View className='flex-1'>
					<Text className='text-5xl text-center font-bold mt-10 dark:text-gray-300'>
						{t('screens.home.title')}
					</Text>
				</View>
				<View className='flex flex-1 items-center'>
					<Button
						title={t('screens.home.startButton')}
						color='info'
						onPress={handleRedirect}
						icon='Play'
					/>
				</View>
				<Text className='text-sm font-bold text-right mr-5 text-black dark:text-white'>
					{t('screens.home.version', { version: `v${packageJson.version}` })}
				</Text>
			</View>
		</Container>
	);
};

export default HomeScreen;
