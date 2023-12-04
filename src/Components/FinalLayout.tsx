import {LayoutProps} from "../Types/Props.ts";
import "./FinalLayout.scss"
function FinalLayout({onClick}: LayoutProps) {
	return(
		<div className="final-layout" onClick={() => onClick("quit")}>
			Игра закончена.
		</div>
	)
}

export default FinalLayout