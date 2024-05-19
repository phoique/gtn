import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card, { CardBody, CardHeader } from '../../../components/Card/Card';
import Input from '../../../components/Form/Input';
import Button from '../../../components/Button';
import gameSlice from '../../../store/gameSlice';

const minNumber = process.env.MIN_NUMBER;
const maxNumber = process.env.MAX_NUMBER;

const NumberEnterFormCard = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const number = useSelector((state) => state.game.number);
	const isNumberError = useSelector((state) => state.game.isNumberError);

	const handleChangeNumber = (value) => {
		dispatch(gameSlice.actions.setNumber(value));
		const isError = value < minNumber || value > maxNumber;
		dispatch(gameSlice.actions.setIsNumberError(isError));
	};
	const handleStartGame = () => {
		dispatch(gameSlice.actions.setIsStart(true));
	};

	return (
		<Card>
			<CardHeader title={t('screens.game.numberEnterCardTitle')} />
			<CardBody>
				<View className='flex flex-row'>
					<View className='w-5/6 mr-3'>
						<Input
							placeholder={t('screens.game.numberEnterPlaceholder')}
							keyboardType='numeric'
							value={number}
							onChangeText={handleChangeNumber}
							error={
								isNumberError &&
								t('form.validation.numberEnterMinMax', {
									min: minNumber,
									max: maxNumber,
								})
							}
						/>
					</View>
					<View>
						<Button
							color='info'
							icon='Play'
							disabled={!number || isNumberError}
							onPress={handleStartGame}
						/>
					</View>
				</View>
			</CardBody>
		</Card>
	);
};

export default NumberEnterFormCard;
