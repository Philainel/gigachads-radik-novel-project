import {IScriptable} from "./IScriptable.ts";

export default class SetBackgroundStatement implements IScriptable {
	constructor(
		public readonly image: string = ""
	) {
	}
}