import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface StepState {
	value: number;
}
const initialState: StepState = {
	value: 0
}
const stepSlice = createSlice({
	name: 'step',
	initialState,
	reducers: {
		nextStep: (state) => {
			state.value++;
		},
		prevStep: (state) => {
			state.value--;
		},
		resetStep: (state) => {
			state.value = 0;
		}
	}
})

export const { nextStep, prevStep, resetStep } = stepSlice.actions
export const selectStep = (state: RootState) => state.step.value
export default stepSlice.reducer