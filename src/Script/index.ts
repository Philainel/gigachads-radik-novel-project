import Script from "../Types/Script";
import {Back, Done, Else, Hide, If, Say, Show} from "../Types/Script/schortcut.ts";
import ScriptBatch from "../Types/ScriptBatch.ts";

export default new ScriptBatch({
	start: new Script([
		Say("", "вот я и тут"),
		Back("MainMenuBackground.png"),
		Show("Rita.png"),
		Say("Рита", "Привет"),
		Say("", "Привет"),
		Say("Рита", "Привет!"),
		Say("", "Привет!"),

		If(() => false),
		Say("Рита", "Это сработал if"),
		Else(),
		Say("Рита", "Это сработал else"),
		Done(),

		Say("Рита", "Привет?"),
		Say("", "Привет?"),
		Say("Рита", "Привет :D"),
		Say("", "Привет :D"),
		Hide("Rita.png"),
		Say("", "пойду домой...")
	]),
	end: new Script([])
})