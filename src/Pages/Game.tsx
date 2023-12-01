import SayLayout from "../Components/SayLayout.tsx";
import {ReactElement} from "react";
import {layouts} from "../Types";
import {LayoutProps} from "../Types/Props.ts";
import Script from "../Script";
import {useDispatch, useSelector} from "react-redux";
import {nextStep, selectStep} from "../Store/step.ts";
import {AppDispatch} from "../Store";
import FinalLayout from "../Components/FinalLayout.tsx";
import {setScreen} from "../Store/screen.ts";
import {selectLayout, setLayout} from "../Store/layout.ts";

function Game() {
	// let [layout, setLayout] = useState<layouts>("say");
	let layout = useSelector(selectLayout)
	let step = useSelector(selectStep)
	let dispatch: AppDispatch = useDispatch()

	function getLayout(layout: layouts) {
		let comps: { [key: string]: (data: LayoutProps) => ReactElement } = {
			"say": SayLayout,
			"final": FinalLayout
		}

		return comps[layout as string] || SayLayout
	}

	function onClick(id: string) {
		console.log(id)
		if (id == "0") {
			if (!Script.start.exists(step + 1)) {
				console.log("SCRIPT ENDED.")
				dispatch(setLayout("final"))
				return
			}
			console.log("SCRIPT TO NEXT STAGE")
			dispatch(nextStep())
		}
		if (id == "-1") {
			console.log("GAME FINISHED")
			dispatch(setScreen("main"))
		}
	}

	return (
		<>
			{getLayout(layout as layouts)({onClick, scriptable: Script.start.get(step)})}
		</>
	)
}

export default Game;