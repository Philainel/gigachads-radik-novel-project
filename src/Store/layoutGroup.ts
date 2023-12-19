import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface LayoutGroupSlice {
	value: string
}

const initialState: LayoutGroupSlice = {
	value: "default"
}

const layoutGroupSlice = createSlice({
	name: 'layoutGroup',
	initialState,
	reducers: {
		setLayoutGroup: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		},
		resetLayoutGroup: (state) => {
			state.value = initialState.value
		}
	}
})

export const {setLayoutGroup, resetLayoutGroup} = layoutGroupSlice.actions
export const selectLayoutGroup = (state: RootState) => state.layoutGroup.value
export default layoutGroupSlice.reducer