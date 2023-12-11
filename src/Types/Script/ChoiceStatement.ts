import {IScriptable} from "./IScriptable.ts";
import {choiceOption} from "../index.ts";

export default class ChoiceStatement implements IScriptable {
	constructor(
		public readonly question: string,
		public readonly key: string,
		public readonly choices: choiceOption[]
	) {
	}
}