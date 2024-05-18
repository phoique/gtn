import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import GameScreen from '../screens/Game/GameScreen';
import WinGameScreen from '../screens/WinGame/WinGameScreen';
import LoseGameScreen from '../screens/LoseGame/LoseGameScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Game' component={GameScreen} />
				<Stack.Screen name='WinGame' component={WinGameScreen} />
				<Stack.Screen name='LoseGame' component={LoseGameScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
