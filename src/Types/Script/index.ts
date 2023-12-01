import {IScriptable} from "./IScriptable.ts";

export default class Script {
	private step = -1;
	constructor(
		private readonly actions: IScriptable[] = []
	) {
	}

	//@deprecated
	public next(): IScriptable {
		console.log(this.step)
		console.log(new Error());
		this.step++;
		return this.actions[this.step];
	}
	public get(i: number) {
		return this.actions[i]
	}
	public exists(i: number) {
		return i >= 0 && i < this.actions.length
	}
}