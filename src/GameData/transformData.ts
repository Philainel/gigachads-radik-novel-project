import {AppDispatch, RootState} from "../Store";
import {characterPosition, layouts} from "../Types";
import {setBackground} from "../Store/background.ts";
import {setLayout} from "../Store/layout.ts";
import {addCharacter, resetCharacters} from "../Store/characters.ts";
import {setStep} from "../Store/step.ts";

export interface SaveData {
	background: string,
	layout: layouts,
	step: number,
	characters: characterPosition[]
}
export function stateToSave(state: RootState) {
	const data: SaveData = {
		background: state.background.value,
		layout: state.layout.value,
		step: state.step.value,
		characters: state.characters.value
	}
	return data
}
export function dispatchFromSave(dispatch: AppDispatch, data: SaveData) {
	dispatch(setBackground(data.background))
	dispatch(setLayout(data.layout))
	dispatch(setStep(data.step))
	dispatch(resetCharacters())
	for (let i = 0; i < data.characters.length; i++) {
		dispatch(addCharacter(data.characters[i]))
	}
}