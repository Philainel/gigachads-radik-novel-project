import './SayLayout.scss'
import {LayoutProps} from "../Types/Props.ts";
import SayStatement from "../Types/Script/SayStatement.ts";
import {useDispatch, useSelector, useStore} from "react-redux";
import {addCharacter, removeCharacter, selectCharacters} from "../Store/characters.ts";
import ShowStatement from "../Types/Script/ShowStatement.ts";
import HideStatement from "../Types/Script/HideStatement.ts";
import SetBackgroundStatement from "../Types/Script/SetBackgroundStatement.ts";
import {removeBackground, selectBackground, setBackground} from "../Store/background.ts";
import {MouseEventHandler} from "react";
import IfStatement from "../Types/Script/IfStatement.ts";
import {RootState} from "../Store";
import {selectIfState, setIfState} from "../Store/ifState.ts";
import ElseStatement from "../Types/Script/ElseStatement.ts";
import DoneStatement from "../Types/Script/DoneStatement.ts";

// import {useState} from "react";

function SayLayout({onClick, scriptable}: LayoutProps) {
	let buttons: {
		icon: string,
		action: MouseEventHandler<HTMLElement>
	}[] = [{
		icon: "bi-arrow-return-right",
		action: (e) => {
			console.log("BUTTON CLICKED")
			onClick("next")
			e.stopPropagation()
		},
	}, {
		icon: "bi-card-text",
		action: (e) => {
			console.log("BUTTON CLICKED")
			e.stopPropagation()
		},
	}, {
		icon: "bi-house",
		action: (e) => {
			console.log("BUTTON CLICKED")
			e.stopPropagation()
		},
	}, {
		icon: "bi-arrow-return-left",
		action: (e) => {
			console.log("BUTTON CLICKED")
			e.stopPropagation()
		},
	}]
	let characters = useSelector(selectCharacters)
	let background = useSelector(selectBackground)
	let store = useStore()
	let ifState = useSelector(selectIfState)
	let dispatch = useDispatch()
	let say: SayStatement | null = null
	if (scriptable instanceof IfStatement) {
		onClick("next")
		dispatch(setIfState(scriptable.condition(store.getState() as RootState) ? "none" : "skip"))
	} else if (scriptable instanceof ElseStatement) {
		onClick("next")
		dispatch(setIfState(ifState == "none" ? "skip" : "none"))
	} else if (scriptable instanceof DoneStatement) {
		onClick("next")
		dispatch(setIfState("none"))
	} else if (ifState == "skip") {
		onClick("next")
	} else if (scriptable instanceof SayStatement) {
		say = scriptable as SayStatement
	} else if (scriptable instanceof ShowStatement) {
		onClick("next")
		dispatch(addCharacter({file: scriptable.image, position: scriptable.position}))
	} else if (scriptable instanceof HideStatement) {
		onClick("next")
		dispatch(removeCharacter({file: scriptable.image, position: scriptable.position}))
	} else if (scriptable instanceof SetBackgroundStatement) {
		onClick("next")
		dispatch(scriptable.image != "" ? setBackground(scriptable.image) : removeBackground())
	}
	// let [expression, setExpression] = useState("")
	return (
		<div className="say"
			 style={{background: `${background.startsWith('#') ? background : `url('/${background}')`} no-repeat center center fixed`}}
			 onClick={() => onClick("next")}>
			{characters.map(c =>
				<img src={`/${c.file}`} alt="" className="img center"/>
			)}
			{(say != null) && <div className="phrase">
				{say.author && (say.author.name != "" && say.author.name != undefined) && <div className="author">
					{say.author.name}
                </div>}
                <div className="text">
					{say.expression}
                </div>
                <div className="buttons">
					{buttons.map(b => <div className="button" key={b.icon} onClick={b.action}><i className={b.icon}/>
					</div>)}
                </div>
            </div>}
		</div>
	)
}

export default SayLayout