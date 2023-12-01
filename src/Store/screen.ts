import {screens} from "../Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface ScreenSlice {
	value: screens
}

const initialState: ScreenSlice = {
	value: "main"
}

const screenSlice = createSlice({
	name: 'screen',
	initialState,
	reducers: {
		setScreen: (state, action: PayloadAction<screens>) => {
			state.value = action.payload
		}
	}
})

export const {setScreen} = screenSlice.actions
export const selectScreen = (state: RootState) => state.screen.value
export default screenSlice.reducer