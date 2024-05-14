import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
				<Stack.Screen name='Home' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigation;
