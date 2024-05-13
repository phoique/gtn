import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({ children, safeAreaTop = true, safeAreaBottom, style }) => {
	const insets = useSafeAreaInsets();

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			paddingTop: safeAreaTop ? insets.top : 0,
			paddingBottom: safeAreaBottom ? insets.bottom : 0,
			paddingRight: insets.right,
			paddingLeft: insets.left,
			...style,
		},
	});

	return <View style={styles.container}>{children}</View>;
};

export default React.memo(Container);
