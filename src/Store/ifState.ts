import {ifStates} from "../Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface IfStateSlice {
	value: ifStates
}

const initialState: IfStateSlice = {
	value: "none"
}

const ifStateSlice = createSlice({
	name: "ifState",
	initialState,
	reducers: {
		setIfState(state, action: PayloadAction<ifStates>) {
			state.value = action.payload
		}
	}
})

export const {setIfState} = ifStateSlice.actions
export const selectIfState = (state: RootState) => state.ifState.value
export default ifStateSlice.reducer