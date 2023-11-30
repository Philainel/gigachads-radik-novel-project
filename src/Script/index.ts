import {SayStatement} from "../Types/SayStatement.ts";
import Script from "../Types/Script.ts";

export default {
	"start": new Script([
		new SayStatement("Рита", "Привет"),
		new SayStatement("", "Привет"),
		new SayStatement("Рита", "Привет!"),
		new SayStatement("", "Привет!"),
		new SayStatement("Рита", "Привет?"),
		new SayStatement("", "Привет?"),
		new SayStatement("Рита", "Привет :D"),
		new SayStatement("", "Привет :D"),
	])
}