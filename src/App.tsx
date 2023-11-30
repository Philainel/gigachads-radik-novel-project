import {screens} from "./Types";
import MainMenu from "./Pages/MainMenu.tsx";
import {useStorage} from "./GameData/storage.ts";
import Game from "./Pages/Game.tsx";
import {ReactElement} from "react";

function App() {
	let [screen, _] = useStorage("screen", "game")

	function getComponent(screen: screens) {

		let comps: {[key: string]: () => ReactElement} = {
			"main": MainMenu,
			"game": Game
		}

		return comps[screen as string] || MainMenu
	}

	return (
		<>
			{getComponent(screen as screens)()}
		</>
	);
}


export default App;
