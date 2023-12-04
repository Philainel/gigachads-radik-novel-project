import {IScriptable} from "./IScriptable.ts";

export default class HideStatement implements IScriptable {
	constructor(
		public readonly image: string
	) {
	}
}