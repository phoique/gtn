import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import classnames from 'classnames';

const Container = ({ children, safeAreaTop = true, safeAreaBottom = true, className }) => {
	const insets = useSafeAreaInsets();

	const styles = StyleSheet.create({
		container: {
			paddingTop: safeAreaTop ? insets.top : 0,
			paddingBottom: safeAreaBottom ? insets.bottom : 0,
			paddingRight: insets.right,
			paddingLeft: insets.left,
		},
	});

	return (
		<View
			className={classnames(`bg-slate-200 flex flex-1 dark:bg-gray-800 ${className}`)}
			style={styles.container}>
			{children}
		</View>
	);
};

export default React.memo(Container);
