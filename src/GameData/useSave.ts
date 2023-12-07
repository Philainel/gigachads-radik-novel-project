import {useEffect} from "react";
import SaveToFile from "./saveToFile.ts";
import {useStore} from "react-redux";
import {stateToSave} from "./transformData.ts";
import {RootState} from "../Store";

export default function useSave(frequency: number = 1000 * 60) {
	let state = useStore()
	useEffect(() => {
		const i = setInterval(async () => {
			console.log("Auto saving")
			console.log(state.getState())
			await SaveToFile(`Autosave`, JSON.stringify(stateToSave(state.getState() as RootState)))
		}, frequency)
		return () => clearInterval(i)
	})
	return async (name: string = "") => {
		console.log(`Saving in file saves/${name}.grnp`)
		console.log(state.getState())
		await SaveToFile(name, JSON.stringify(stateToSave(state.getState() as RootState)))
	}
}