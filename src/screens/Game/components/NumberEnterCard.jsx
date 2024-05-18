import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import Card, { CardBody, CardHeader } from '../../../components/Card/Card';

const NumberEnterCard = () => {
	const { t } = useTranslation();
	return (
		<Card>
			<CardHeader title={t('screens.game.numberEnterTitle')} />
			<CardBody>
				<Text className='text-black font-bold text-2xl text-center dark:text-white'>
					99.999
				</Text>
			</CardBody>
		</Card>
	);
};

export default NumberEnterCard;
