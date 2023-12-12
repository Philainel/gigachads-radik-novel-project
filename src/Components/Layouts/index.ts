import {LayoutProps} from "../../Types/Props.ts";
import {ReactElement} from "react";
import Default from "./Default";
import {layouts} from "../../Types";

export default function GetLayoutInGroup(layoutGroup: string, layout: layouts, data: LayoutProps): ReactElement {
	const groups: {[key: string]: {GetLayout(layout: string, data: LayoutProps): ReactElement | null}} = {
		"default": Default
	}
	return groups[layoutGroup].GetLayout(layout, data) || Default.GetLayout(layout, data)
}