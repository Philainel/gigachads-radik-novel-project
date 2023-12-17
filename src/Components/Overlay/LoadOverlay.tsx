import "./LoadOverlay.scss"
import {useEffect, useState} from "react";
import listSaves from "../../GameData/listSaves.ts";
import {FileEntry} from "@tauri-apps/api/fs";
import {OverlayProps} from "../../Types/Props.ts";

function LoadOverlay({ onClick }: OverlayProps) {

	let [saves, setSaves] = useState<FileEntry[] | null>(null)

	useEffect(() => {
		listSaves().then((saves) => {
			console.log(saves)
			setSaves(saves)
		})
	}, [])
	return (
		<>
			<h1>Загрузить</h1>
			{saves && saves.length > 0 &&
                <div className="list">{
					saves.map(() => <div className="save">
						<h4 className="name">Save 1</h4>
						<p className="desc">{new Date().toDateString()}</p>
					</div>)
				}</div>
			}
			{!saves && <div className="loader-box"><div className="loader"></div></div>}
		</>
	)
}

export default LoadOverlay