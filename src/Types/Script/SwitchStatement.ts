import {IScriptable} from "./IScriptable.ts";

export default class SwitchStatement implements IScriptable {
	constructor(
		public readonly screen: string
	) {
	}
}