import {layouts} from "../../../Types";
import {LayoutProps} from "../../../Types/Props.ts";
import {ReactElement} from "react";
import MessengerSayLayout from "./MessengerSayLayout.tsx";

export default ({onClick, scriptable}: LayoutProps) => {
	let comps: {
		[key: string]: ReactElement
	} = {
		"say": MessengerSayLayout({onClick, scriptable})
	}
	return {
		GetLayout(layout: layouts): ReactElement {
			return comps[layout as string]
		}
	}
}