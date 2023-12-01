import {SayStatement} from "../Types/Script/SayStatement.ts";
import Script from "../Types/Script";

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