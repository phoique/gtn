import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	number: 0,
	isNumberError: false,
	isStart: false,
	answers: [],
};

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		resetSlice: () => initialState,
		setNumber: (state, action) => {
			state.number = action.payload;
		},
		setIsStart: (state, action) => {
			state.isStart = action.payload;
		},
		setAnswer: (state, action) => {
			state.answers = [action.payload, ...state.answers];
		},
		setIsNumberError: (state, action) => {
			state.isNumberError = action.payload;
		},
	},
});

export default gameSlice;
