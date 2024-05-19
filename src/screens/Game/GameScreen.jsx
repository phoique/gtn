import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Container from '../../components/Container';
import NumberEnterCard from './components/NumberEnterCard';
import NumberEnterFormCard from './components/NumberEnterFormCard';
import QuestionCard from './components/QuestionCard';
import AnswerCard from './components/AnswerCard';

const GameScreen = () => {
	const { t } = useTranslation();

	const isStart = useSelector((state) => state.game.isStart);
	const answers = useSelector((state) => state.game.answers);

	const renderItem = ({ item }) => {
		return <AnswerCard question={item.question} answer={item.answer} />;
	};

	return (
		<Container>
			<FlatList
				ListHeaderComponent={
					<>
						{!isStart && <NumberEnterFormCard />}
						{isStart && <NumberEnterCard />}
						{isStart && <QuestionCard />}
						{isStart && (
							<View className='mt-5'>
								<Text className='text-black text-lg font-bold ml-4 dark:text-white'>
									{t('screens.game.answerTitle')}
								</Text>
							</View>
						)}
					</>
				}
				data={answers}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</Container>
	);
};

export default GameScreen;
