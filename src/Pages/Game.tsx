import {actions} from "../Types";
import Script from "../Script";
import {useDispatch, useSelector, useStore} from "react-redux";
import {nextStep, selectStep} from "../Store/step.ts";
import {AppDispatch, RootState} from "../Store";
import {setScreen} from "../Store/screen.ts";
import {selectLayout, setLayout} from "../Store/layout.ts";
import useSave from "../GameData/useSave.ts";
import {selectScript} from "../Store/script.ts";
import {selectIfState} from "../Store/ifState.ts";
import {processScriptable} from "../GameData/ProcessScriptable.tsx";
import GetLayoutInGroup from "../Components/Layouts";
import {selectLayoutGroup} from "../Store/layoutGroup.ts";

function Game() {
	useSave()
	let layout = useSelector(selectLayout)
	let layoutGroup = useSelector(selectLayoutGroup)
	let step = useSelector(selectStep)
	let script = useSelector(selectScript)
	let store = useStore()
	let ifState = useSelector(selectIfState)
	let dispatch: AppDispatch = useDispatch()
	const scriptable = Script.get(script).get(step);

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
			{GetLayoutInGroup(layoutGroup, layout, {onClick, scriptable})}
		</>
	)
}

export default Game;