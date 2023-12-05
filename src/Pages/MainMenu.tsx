import './MainMenu.scss'
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store";
import {setScreen} from "../Store/screen.ts";
import {resetStep} from "../Store/step.ts";
import {resetLayout} from "../Store/layout.ts";
import {resetCharacters} from "../Store/characters.ts";
import {removeBackground} from "../Store/background.ts";

function MainMenu() {
	let dispatch: AppDispatch = useDispatch()

	function start() {
		dispatch(resetStep())
		dispatch(resetLayout())
		dispatch(setScreen("game"))
		dispatch(resetCharacters())
		dispatch(removeBackground())
	}

	return (
		<div className="menu">
			<div className="buttons">
				<div className="button" onClick={start}>Начать</div>
				<div className="button">Загрузить</div>
				<div className="button">Настройки</div>
				<div className="button">Об игре</div>
				<div className="button">Помощь</div>
				<div className="button">Выйти</div>
			</div>

		</div>
	)
}

export default MainMenu