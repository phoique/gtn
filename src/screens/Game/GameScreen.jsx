import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../../components/Container';
import NumberEnterCard from './components/NumberEnterCard';
import NumberEnterFormCard from './components/NumberEnterFormCard';
import QuestionCard from './components/QuestionCard';
import AnswerCard from './components/AnswerCard';

const GameScreen = () => {
	const { t } = useTranslation();

	const renderItem = () => {
		return <AnswerCard />;
	};

	return (
		<Container>
			<FlatList
				ListHeaderComponent={
					<>
						<NumberEnterFormCard />
						<NumberEnterCard />
						<QuestionCard />
						<View className='mt-5'>
							<Text className='text-black text-lg font-bold ml-4 dark:text-white'>
								{t('screens.game.answerTitle')}
							</Text>
						</View>
					</>
				}
				data={Array(10)}
				renderItem={renderItem}
			/>
		</Container>
	);
};

export default GameScreen;
