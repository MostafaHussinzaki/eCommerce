import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./slice/uiSlice";
import { cartReducer } from "./slice/cartSlice";

export const store = configureStore({
	reducer: {
		ui: uiReducer.reducer,
		cart: cartReducer.reducer,
	},
});
