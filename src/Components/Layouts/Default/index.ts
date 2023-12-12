import {LayoutProps} from "../../../Types/Props.ts";
import {ReactElement} from "react";
import SayLayout from "./SayLayout.tsx";
import ChoiceLayout from "./ChoiceLayout.tsx";
import FinalLayout from "./FinalLayout.tsx";
import {layouts} from "../../../Types";

export default {
	GetLayout(layout: layouts, {onClick, scriptable}: LayoutProps): ReactElement {
		let comps: {
			[key: string]: ReactElement
		} = {
			"say": SayLayout({onClick, scriptable}),
			"choice": ChoiceLayout({onClick, scriptable}),
			"final": FinalLayout({onClick, scriptable})
		}
		if (!(layout in comps)) console.error(new Error("Layout not found"))
		return comps[layout as string]
	}
}