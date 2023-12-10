import {states} from "../Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface StateSlice {
	value: states
}

const initialState: StateSlice = {
	value: null
}

const stateSlice = createSlice({
	name: 'state', initialState,
	reducers: {
		setState(state, action: PayloadAction<states>) {
			state.value = action.payload
		}
	}
})

export const {setState} = stateSlice.actions
export const selectState = (state: RootState) => state.state.value
export default stateSlice.reducer