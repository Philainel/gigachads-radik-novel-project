import SayLayout from "../Components/SayLayout.tsx";
import {ReactElement} from "react";
import {actions, layouts} from "../Types";
import Script from "../Script";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectStep} from "../Store/step.ts";
import {AppDispatch} from "../Store";
import FinalLayout from "../Components/FinalLayout.tsx";
import {setScreen} from "../Store/screen.ts";
import {selectLayout, setLayout} from "../Store/layout.ts";
import useSave from "../GameData/useSave.ts";
import {selectScript} from "../Store/script.ts";

function Game() {
	// let [layout, setLayout] = useState<layouts>("say");
	useSave()
	let layout = useSelector(selectLayout)
	let step = useSelector(selectStep)
	let script = useSelector(selectScript)
	let dispatch: AppDispatch = useDispatch()

	function getLayout(layout: layouts) {
		let comps: { [key: string]: ReactElement } = {
			"say": SayLayout({onClick, scriptable: Script.get(script).get(step)}),
			"final": FinalLayout({onClick, scriptable: Script.get(script).get(step)})
		}

		return comps[layout as string] || SayLayout
	}

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
			{getLayout(layout as layouts)}
		</>
	)
}

export default Game;