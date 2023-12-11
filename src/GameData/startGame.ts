import {AppDispatch} from "../Store";
import {resetStep} from "../Store/step.ts";
import {resetLayout} from "../Store/layout.ts";
import {setScreen} from "../Store/screen.ts";
import {resetCharacters} from "../Store/characters.ts";
import {removeBackground} from "../Store/background.ts";
import {dispatchFromSave, SaveData} from "./transformData.ts";
import {setState} from "../Store/state.ts";
import {setIfState} from "../Store/ifState.ts";
import {switchScript} from "../Store/script.ts";

export default function startGame(dispatch: AppDispatch, save: string = "") {
	const fromSave = save != "";
	console.log(`starting game${fromSave && `with save =>`}`)
	fromSave && console.log(save)
	if (!fromSave) {
		dispatch(resetStep())
		dispatch(resetLayout())
		dispatch(removeBackground())
		dispatch(resetCharacters())
		dispatch(setIfState("none"))
		dispatch(switchScript("start"))
	} else {
		let saveData = JSON.parse(save) as SaveData
		dispatchFromSave(dispatch, {
			background: saveData.background,
			step: saveData.step,
			characters: saveData.characters,
			layout: saveData.layout,
			script: saveData.script,
			ifState: saveData.ifState
		})
	}
	dispatch(setState("play"))
	dispatch(setScreen("game"))
}
