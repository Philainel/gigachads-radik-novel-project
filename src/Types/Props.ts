import {IScriptable} from "./Script/IScriptable.ts";

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