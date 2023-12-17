import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectOverlay, setOverlay} from "../../Store/overlay.ts";
import {ReactElement} from "react";
import LoadOverlay from "./LoadOverlay.tsx";

function Overlay() {
	let overlay = useSelector(selectOverlay)
	let dispatch = useDispatch()
	let overlays: { [key: string]: ReactElement } = {
		"": (<></>),
		"load": LoadOverlay({ onClick: () => {}})
	}

	return (
		<div className="overlay" style={{display: overlay == "" ? "none" : "flex"}} onClick={() => dispatch(setOverlay(""))}>
			<div className="content">{overlays[overlay]}</div>
		</div>
	)
}

export default Overlay