import Script from "../Types/Script";
import {Back, Hide, Say, Show} from "../Types/Script/schortcut.ts";

export default {
	start: new Script([
		Say("", "вот я и тут"),
		Back("MainMenuBackground.png"),
		Show("Rita.png"),
		Say("Рита", "Привет"),
		Say("", "Привет"),
		Say("Рита", "Привет!"),
		Say("", "Привет!"),
		Say("Рита", "Привет?"),
		Say("", "Привет?"),
		Say("Рита", "Привет :D"),
		Say("", "Привет :D"),
		Hide("Rita.png"),
		Say("","пойду домой...")
	])
}