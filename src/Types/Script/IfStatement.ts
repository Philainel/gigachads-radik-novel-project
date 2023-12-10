import {IScriptable} from "./IScriptable.ts";
import {RootState} from "../../Store";

export default class IfStatement implements IScriptable {
	constructor(
		public readonly condition: (state: RootState) => boolean
	) {}
}