import {screens} from "./Types";
import MainMenu from "./Pages/MainMenu.tsx";
import Game from "./Pages/Game.tsx";
import {ReactElement} from "react";
import {useSelector} from "react-redux";
import {selectScreen} from "./Store/screen.ts";

function App() {
	let screen = useSelector(selectScreen)
	function getComponent(screen: screens) {

		let comps: {[key: string]: ReactElement} = {
			"main": MainMenu(),
			"game": Game()
		}

		return comps[screen as string] || MainMenu()
	}

	return (
		<>
			{getComponent(screen as screens)}
		</>
	);
}


export default App;
