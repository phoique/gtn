import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Card, { CardBody, CardHeader } from '../../../components/Card/Card';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Button';

const NumberEnterFormCard = () => {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader title={t('screens.game.numberEnterCardTitle')} />
			<CardBody>
				<View className='flex flex-row'>
					<View className='w-5/6 mr-3'>
						<Input
							placeholder={t('screens.game.numberEnterPlaceholder')}
							keyboardType='numeric'
						/>
					</View>
					<Button color='info' icon='Play' />
				</View>
			</CardBody>
		</Card>
	);
};

export default NumberEnterFormCard;
