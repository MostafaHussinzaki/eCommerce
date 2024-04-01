import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menu: false,
	categoryMenu: false,
};

export const uiReducer = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggleMenu(state) {
			state.menu ? (state.menu = false) : (state.menu = true);
		},
		toggleCategoryMenu(state) {
			state.categoryMenu
				? (state.categoryMenu = false)
				: (state.categoryMenu = true);
		},
	},
});

export const uiActions = uiReducer.actions;
