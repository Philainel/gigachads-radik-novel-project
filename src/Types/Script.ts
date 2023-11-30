import {IScriptable} from "./Interfaces/IScriptable.ts";

export default class Script {
	private step = -1;
	constructor(
		private readonly actions: IScriptable[] = []
	) {
	}

	public next(): IScriptable {
		console.log(this.step)
		console.log(new Error());
		this.step++;
		return this.actions[this.step];
	}

}