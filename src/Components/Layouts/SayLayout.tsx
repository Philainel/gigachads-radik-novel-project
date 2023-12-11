import './SayLayout.scss'
import {LayoutProps} from "../../Types/Props.ts";
import SayStatement from "../../Types/Script/SayStatement.ts";
import {useSelector} from "react-redux";
import {selectCharacters} from "../../Store/characters.ts";
import {selectBackground} from "../../Store/background.ts";
import {MouseEventHandler} from "react";

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
	let say: SayStatement | null = null
	if (scriptable instanceof SayStatement)
		say = scriptable
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