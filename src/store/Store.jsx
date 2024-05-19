import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// Slices
import gameSlice from './gameSlice';

export const store = configureStore({
	reducer: {
		game: gameSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(),
	devTools: process.env.NODE_ENV !== 'production',
});

const StoreProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

setupListeners(store.dispatch);

export default StoreProvider;