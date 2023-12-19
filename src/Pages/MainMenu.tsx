import './MainMenu.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../Store";
import {useEffect, useState} from "react";
import listSaves from "../GameData/listSaves.ts";
import readSaveFromFile from "../GameData/readSaveFromFile.ts";
import startGame from "../GameData/startGame.ts";
import {appWindow} from "@tauri-apps/api/window";
import {selectScreen} from "../Store/screen.ts";

function MainMenu() {
	let dispatch: AppDispatch = useDispatch()
	let screen = useSelector(selectScreen)
	let [save, setSave] = useState("")
	useEffect(() => {
		listSaves().then((saves) => {
			console.log(saves)
			if (saves.length > 0)
				readSaveFromFile(saves[0]).then((save) => {
					console.log(save)
					setSave(save)
				})
		})
	}, [screen])

	function start(newGame: boolean = false) {
		startGame(dispatch, newGame ? "" :save )
	}

	return (
		<div className="menu">
			<div className="buttons">
				<div className="button" onClick={() => start(true)}>Начать</div>
				<div className="button" onClick={() => start()}>Загрузить</div>
				<div className="button">Настройки</div>
				<div className="button">Об игре</div>
				<div className="button">Помощь</div>
				<div className="button" onClick={() => appWindow.close()}>Выйти</div>
			</div>
		</div>
	)
}

export default MainMenu