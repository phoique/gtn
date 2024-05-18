import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Clipboard from '@react-native-clipboard/clipboard';
import deviceInfo from 'react-native-device-info';
import Container from '../../components/Container';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import toast from '../../services/toast';

const ErrorScreen = ({ error }) => {
	const { t } = useTranslation();

	const handleCopyError = () => {
		Clipboard.setString(
			JSON.stringify({
				message: error.message,
				platform: deviceInfo.getSystemName(),
				device: deviceInfo.getModel(),
				time: new Date().toLocaleString(),
			}),
		);
		toast.show({
			message: t('screens.error.toastTitle'),
			type: 'success',
		});
	};

	return (
		<Container>
			<View className='flex flex-1 items-center justify-evenly my-12'>
				<Icon name='Error' height={164} width={164} className='text-red-500' />
				<View className='items-center'>
					<Text className='text-black font-bold text-2xl dark:text-white'>
						{t('screens.error.title')}
					</Text>
					<Text className='text-black font-medium text-lg dark:text-white'>
						{t('screens.error.message')}
					</Text>
				</View>
				<Button
					title={t('screens.error.copyError')}
					color='info'
					onPress={handleCopyError}
					icon='Copy'
				/>
			</View>
		</Container>
	);
};

export default ErrorScreen;
