import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface BackgroundSlice {
	value: string
}

const initialState: BackgroundSlice = {
	value: "#000000"
}

const backgroundSlice = createSlice({
	name: "background",
	initialState,
	reducers: {
		setBackground: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
		removeBackground: (state) => {
			state.value = initialState.value
		}
	}
})

export const {setBackground, removeBackground} = backgroundSlice.actions
export const selectBackground = (state: RootState) => state.background.value
export default backgroundSlice.reducer