import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
		},
		setStep: (state, action: PayloadAction<number>) => {
			state.value = action.payload
		}
	}
})

export const {nextStep, prevStep, resetStep, setStep} = stepSlice.actions
export const selectStep = (state: RootState) => state.step.value
export default stepSlice.reducer