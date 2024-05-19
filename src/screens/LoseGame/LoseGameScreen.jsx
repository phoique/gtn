import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import gameSlice from '../../store/gameSlice';

const LoseGameScreen = () => {
	const { t } = useTranslation();
	const navigation = useNavigation();
	const dispatch = useDispatch();

	const handleRedirect = () => {
		dispatch(gameSlice.actions.resetSlice());
		navigation.navigate('Home');
	};

	return (
		<Container>
			<View className='flex flex-1 items-center justify-around my-12'>
				<Text className='text-5xl text-center font-bold  dark:text-gray-300'>
					{t('screens.loseGame.title')}
				</Text>
				<Icon name='Dislike' height={164} width={164} className='text-red-500 mb-4' />
				<Button
					title={t('screens.winGame.playAgain')}
					color='info'
					onPress={handleRedirect}
					icon='Home'
				/>
			</View>
		</Container>
	);
};

export default LoseGameScreen;
