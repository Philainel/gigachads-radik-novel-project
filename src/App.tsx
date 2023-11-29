import {screens} from "./Types.ts";
import {useState} from "react";
import Menu from "./Components/Menu.tsx";
import Say from "./Components/Say.tsx";

function App() {
	let [screen, _] = useState<screens>(screens.say)

	return(
		<>
			{getComponent(screen)()}
		</>
	);
}

function getComponent(screen: screens) {
	switch (screen) {
		case screens.say:
			return Say;
		case screens.mainMenu:
		default:
			return Menu;
	}
}

export default App;
