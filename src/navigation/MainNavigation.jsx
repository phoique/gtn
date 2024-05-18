import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';
import GameScreen from '../screens/Game/GameScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Game' screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Game' component={GameScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
