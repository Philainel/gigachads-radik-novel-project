import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface ScriptState {
	value: string;
}
const initialState: ScriptState = {
	value: "start"
}
const scriptSlice = createSlice({
	name: 'script',
	initialState,
	reducers: {
		switchScript: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		}
	}
})

export const { switchScript } = scriptSlice.actions
export const selectScript = (state: RootState) => state.script.value
export default scriptSlice.reducer