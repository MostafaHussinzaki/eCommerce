import { createSlice } from "@reduxjs/toolkit";
import { addToLocalStorage, getFromLocalStorage } from "../../utils/helper";

let initialState = getFromLocalStorage("cart") || [];

export const cartReducer = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const itemId = action.payload.item.id;
			const itemObjIndex = state.findIndex((item) => itemId === item.id);
			const updatedState = [...state];

			if (itemObjIndex > -1) {
				const existingItem = updatedState[itemObjIndex];

				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity + action.payload.quantity,
				};

				updatedState[itemObjIndex] = updatedItem;
			} else {
				updatedState.push({
					...action.payload.item,
					quantity: action.payload.quantity,
				});
			}
			addToLocalStorage(updatedState);
			return [...updatedState];
		},
		removeItem(state, action) {
			const itemId = action.payload.id;
			const itemObjIndex = state.findIndex((item) => itemId === item.id);

			const updatedState = [...state];

			const existingItem = updatedState[itemObjIndex];
			if (existingItem.quantity === 1) {
				updatedState.splice(itemObjIndex, 1);
			} else {
				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity - 1,
				};
				updatedState[itemObjIndex] = updatedItem;
			}
			addToLocalStorage(updatedState);
			return [...updatedState];
		},
		removeProduct(state, action) {
			const itemId = action.payload.id;
			const itemObjIndex = state.findIndex((item) => itemId === item.id);

			const updatedState = [...state];
			updatedState.splice(itemObjIndex, 1);
			addToLocalStorage(updatedState);
			return [...updatedState];
		},
	},
});

export const cartAction = cartReducer.actions;
