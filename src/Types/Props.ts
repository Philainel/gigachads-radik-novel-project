import {IScriptable} from "./Interfaces/IScriptable.ts";

export type LayoutProps = {
	onClick: (id: string) => any,
	scriptable: IScriptable
}

export type SayStatement = LayoutProps & {
	author: {
		name: string | undefined,
	},
	expression: string,
}
export enum screenToProps {

}