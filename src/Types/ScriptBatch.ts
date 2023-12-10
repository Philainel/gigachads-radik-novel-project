import Script from "./Script";

export default class ScriptBatch {
	constructor(private readonly list: {[key: string]: Script}) {
	}

	public get(script: string): Script {
		return this.list[script]
	}
}