import {IScriptable} from "./IScriptable.ts";

export default class Script {
	constructor(
		private readonly actions: IScriptable[] = []
	) {
	}
	public get(i: number) {
		return this.actions[i]
	}
	public exists(i: number) {
		return i >= 0 && i < this.actions.length
	}
}
