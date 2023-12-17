import {overlays} from "../Types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface OverlaySlice {
	value: overlays
}

const initialState: OverlaySlice = {
	value: ""
}

const overlaySlice = createSlice({
	name: 'overlay',
	initialState,
	reducers: {
		setOverlay: (state, action: PayloadAction<overlays>) => {
			state.value = action.payload
		},
		resetOverlay: (state) => {
			state.value = initialState.value
		}
	}
})

export const {setOverlay, resetOverlay} = overlaySlice.actions
export const selectOverlay = (state: RootState) => state.overlay.value
export default overlaySlice.reducer