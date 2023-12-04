import Script from "../Types/Script";
import SayStatement from "../Types/Script/SayStatement.ts";
import ShowStatement from "../Types/Script/ShowStatement.ts";
import HideStatement from "../Types/Script/HideStatement.ts";

export default {
	start: new Script([
		new SayStatement("", "вот я и тут"),
		new ShowStatement("Rita.png"),
		new SayStatement("Рита", "Привет"),
		new SayStatement("", "Привет"),
		new SayStatement("Рита", "Привет!"),
		new SayStatement("", "Привет!"),
		new SayStatement("Рита", "Привет?"),
		new SayStatement("", "Привет?"),
		new SayStatement("Рита", "Привет :D"),
		new SayStatement("", "Привет :D"),
		new HideStatement("Rita.png"),
		new SayStatement("","пойду домой...")
	])
}