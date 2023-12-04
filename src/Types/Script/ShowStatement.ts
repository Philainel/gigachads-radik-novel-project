import {IScriptable} from "./IScriptable.ts";

export default class ShowStatement implements IScriptable {
	constructor(
		public readonly image: string,
		public readonly position: "center" | "left" | "right" | "bg" = "center"
	) {
	}
}