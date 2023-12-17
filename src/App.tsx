import {screens} from "./Types";
import MainMenu from "./Pages/MainMenu.tsx";
import Game from "./Pages/Game.tsx";
import {useEffect, ReactElement} from "react";
import {useSelector} from "react-redux";
import {selectScreen} from "./Store/screen.ts";
import {invoke} from '@tauri-apps/api/tauri';
import Overlay from "./Components/Overlay";

function App() {
	let screen = useSelector(selectScreen)

	useEffect(() => {
		invoke('close_splashscreen').catch(console.error)
	}, [])

	function getComponent(screen: screens) {

		let comps: { [key: string]: ReactElement } = {
			"main": MainMenu(),
			"game": Game()
		}

		return comps[screen as string] || MainMenu()
	}

	return (
		<>
			{getComponent(screen as screens)}
			<Overlay/>
		</>
	);
}


export default App;
