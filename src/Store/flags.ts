import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface FlagsSlice {
	value: {[key: string]: string}
}

const initialState: FlagsSlice = {
	value: {}
}

const flagsSlice = createSlice({
	name: "flags",
	initialState,
	reducers: {
		setFlag: (state, action: PayloadAction<{ key: string, value: string }>) => {
			state.value[action.payload.key] = action.payload.value
		}
	}
})

export const {setFlag} = flagsSlice.actions
export const selectFlags = (state: RootState) => state.flags.value
export default flagsSlice.reducer