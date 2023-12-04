import {IScriptable} from "./Script/IScriptable.ts";
import {actions} from "./index.ts";

export type LayoutProps = {
	onClick: (action: actions) => any,
	scriptable: IScriptable
}
