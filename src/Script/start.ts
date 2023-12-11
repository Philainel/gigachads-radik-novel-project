import Script from "../Types/Script";
import {Back, Choice, Done, Else, Hide, If, Say, Show, Switch} from "../Types/Script/schortcut.ts";

export default new Script([
	Say("", "вот я и тут"),
	Choice("", "key", [{
		text: "Пойди",
		value: "true"
	},{
		text: "Пройти мимо",
		value: "false"
	}]),
	Back("MainMenuBackground.png"),
	Show("Rita.png"),
	Say("Рита", "Привет"),
	Say("", "Привет"),
	Say("Рита", "Привет!"),
	Say("", "Привет!"),

	If(() => true),
	Switch("end"),
	Else(),
	Say("Рита", "Это сработал else"),
	Done(),

	Say("Рита", "Привет?"),
	Say("", "Привет?"),
	Say("Рита", "Привет :D"),
	Say("", "Привет :D"),
	Hide("Rita.png"),
	Say("", "пойду домой...")
]);