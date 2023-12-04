import {IScriptable} from "./IScriptable.ts";

export default class SayStatement implements IScriptable {
	public readonly author: { name: string } | undefined
	public readonly expression: string | undefined

	constructor(name: string, expression: string) {
		this.author = {name}
		this.expression = expression
	}
}