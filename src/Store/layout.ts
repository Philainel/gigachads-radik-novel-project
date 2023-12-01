import {layouts} from "../Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface LayoutSlice {
	value: layouts
}

const initialState: LayoutSlice = {
	value: "say"
}

const layoutSlice = createSlice({
	name: 'screen',
	initialState,
	reducers: {
		setLayout: (state, action: PayloadAction<layouts>) => {
			state.value = action.payload
		},
		resetLayout: (state) => {
			state.value = initialState.value
		}
	}
})

export const {setLayout, resetLayout} = layoutSlice.actions
export const selectLayout = (state: RootState) => state.screen.value
export default layoutSlice.reducer