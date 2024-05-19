import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from 'react-error-boundary';
import Toast from 'react-native-toast-message';
import MainNavigation from './navigation/MainNavigation';
import 'react-native-gesture-handler';
import './languages';
import ErrorScreen from './screens/Error/ErrorScreen';
import Store from './store/Store';

const App = () => {
	return (
		<SafeAreaProvider>
			<Store>
				<ErrorBoundary FallbackComponent={ErrorScreen}>
					<MainNavigation />
				</ErrorBoundary>
				<Toast />
			</Store>
		</SafeAreaProvider>
	);
};

export default App;
