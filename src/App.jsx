import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from 'react-error-boundary';
import Toast from 'react-native-toast-message';
import MainNavigation from './navigation/MainNavigation';
import 'react-native-gesture-handler';
import './languages';
import ErrorScreen from './screens/Error/ErrorScreen';

const App = () => {
	return (
		<SafeAreaProvider>
			<ErrorBoundary FallbackComponent={ErrorScreen}>
				<MainNavigation />
			</ErrorBoundary>
			<Toast />
		</SafeAreaProvider>
	);
};

export default App;
