import {IScriptable} from "./IScriptable.ts";

export default class SetLayoutGroupStatement implements IScriptable {
	constructor(
		public readonly group: string = "default"
	) {}
}