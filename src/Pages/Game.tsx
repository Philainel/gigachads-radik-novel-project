import SayLayout from "../Components/SayLayout.tsx";
import {useStorage} from "../GameData/storage.ts";
import {ReactElement, useState} from "react";
import {layouts} from "../Types";
import {LayoutProps} from "../Types/Props.ts";
import {IScriptable} from "../Types/Interfaces/IScriptable.ts";
import Script from "../Script";

function Game() {
	let [layout, _] = useStorage("layout", "say")
	let [scriptable, setScriptable] = useState<IScriptable>(Script.start.next())

	function getLayout(layout: layouts) {
		let comps: { [key: string]: (data: LayoutProps) => ReactElement } = {
			"say": SayLayout
		}

		return comps[layout as string] || SayLayout
	}

	function onClick(id: string) {
		if (id == "0") {
			console.log("SCRIPT TO NEXT STAGE")
			setScriptable(Script.start.next())
		}
		console.log(id)
	}

	return (
		<>
			{getLayout(layout as layouts)({onClick, scriptable})}
		</>
	)
}

export default Game;