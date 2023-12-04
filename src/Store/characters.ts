import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./index.ts";

interface CharactersSlice {
	value: string[]
}

const initialState: CharactersSlice = {
	value: []
}

const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		addCharacter: (state, action: PayloadAction<string>) => {
			state.value.push(action.payload)
		},
		resetCharacters: (state) => {
			state.value = []
		},
		removeCharacter: (state, action: PayloadAction<string>) => {
			let index = state.value.indexOf(action.payload)
			state.value.splice(index,1)
		}
	}
})

export const {addCharacter, resetCharacters, removeCharacter} = charactersSlice.actions
export const selectCharacters = (state: RootState) => state.characters.value
export default charactersSlice.reducer