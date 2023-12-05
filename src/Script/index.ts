import Script from "../Types/Script";
import {Hide, Say, Show} from "../Types/Script/schortcut.ts";

export default {
	start: new Script([
		Say("", "вот я и тут"),
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