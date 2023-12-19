import {LayoutProps} from "../../Types/Props.ts";
import {ReactElement} from "react";
import Default from "./Default";
import {layouts} from "../../Types";
import Messenger from "./Messenger";

	export default function GetLayoutInGroup(layoutGroup: string, layout: layouts, data: LayoutProps): ReactElement {
	let defaultGroup = Default(data);
	const groups: {[key: string]: {GetLayout(layout: string): ReactElement | null}} = {
		"default": defaultGroup,
		"messenger": Messenger(data)
	}
	console.log(layoutGroup)
	return groups[layoutGroup]?.GetLayout(layout) || defaultGroup.GetLayout(layout)
}