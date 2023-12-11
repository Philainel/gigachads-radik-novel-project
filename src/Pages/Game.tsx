import SayLayout from "../Components/Layouts/SayLayout.tsx";
import {ReactElement} from "react";
import {actions, layouts} from "../Types";
import Script from "../Script";
import {useDispatch, useSelector, useStore} from "react-redux";
import {nextStep, selectStep} from "../Store/step.ts";
import {AppDispatch, RootState} from "../Store";
import FinalLayout from "../Components/Layouts/FinalLayout.tsx";
import {setScreen} from "../Store/screen.ts";
import {selectLayout, setLayout} from "../Store/layout.ts";
import useSave from "../GameData/useSave.ts";
import {selectScript} from "../Store/script.ts";
import {selectIfState} from "../Store/ifState.ts";
import {IScriptable} from "../Types/Script/IScriptable.ts";
import {processScriptable} from "../GameData/ProcessScriptable.tsx";
import ChoiceLayout from "../Components/Layouts/ChoiceLayout.tsx";

function Game() {
	useSave()
	let layout = useSelector(selectLayout)
	let step = useSelector(selectStep)
	let script = useSelector(selectScript)
	let store = useStore()
	let ifState = useSelector(selectIfState)
	let dispatch: AppDispatch = useDispatch()
	const scriptable = Script.get(script).get(step);

	function getLayout(layout: layouts, scriptable: IScriptable) {
		let comps: {
			[key: string]: ReactElement
		} = {
			"say": SayLayout({onClick, scriptable}),
			"choice": ChoiceLayout({onClick, scriptable}),
			"final": FinalLayout({onClick, scriptable})
		}
		if (!(layout in comps)) console.error(new Error("Layout not found"))
		return comps[layout as string]
	}

	processScriptable(scriptable, onClick, dispatch, store.getState() as RootState, ifState, layout);

	function onClick(action: actions) {
		console.log(action)
		if (action == "next") {
			if (!Script.get(script).exists(step + 1)) {
				console.log(step)
				console.log("SCRIPT ENDED.")
				dispatch(setLayout("final"))
				console.log(layout)
				return
			}
			console.log("SCRIPT TO NEXT STAGE")
			dispatch(nextStep())
		}
		if (action == "quit") {
			console.log("GAME FINISHED")
			dispatch(setScreen("main"))
		}
	}

	return (
		<>
			{getLayout(layout as layouts, scriptable)}
		</>
	)
}

export default Game;