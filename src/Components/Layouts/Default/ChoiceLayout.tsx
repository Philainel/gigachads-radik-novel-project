import {useSelector} from "react-redux";
import {selectBackground} from "../../../Store/background.ts";
import {selectCharacters} from "../../../Store/characters.ts";
import {LayoutProps} from "../../../Types/Props.ts";
import ChoiceStatement from "../../../Types/Script/ChoiceStatement.ts";
import './ChoiceLayout.scss'

function ChoiceLayout({onClick, scriptable}: LayoutProps) {

	let background = useSelector(selectBackground)
	let characters = useSelector(selectCharacters)

	let choice: ChoiceStatement | null = null;

	if (scriptable instanceof ChoiceStatement) {
		choice = scriptable
		console.log(choice)
	}
	function choose(value: string) {
		console.log(value)
		onClick("next")
	}

	return (
		<div className="say"
			 style={{background: `${background.startsWith('#') ? background : `url('/${background}')`} no-repeat center center fixed`}}>
			{characters.map(c =>
				<img src={`/${c.file}`} alt="" className="img center"/>
			)}
			{(choice != null) && <div className="choice">
				{choice.key}
                <div className="options">{
					choice.choices.map((c) =>
						<div className="option" key={c.value} onClick={() => choose(c.value)}>
							{c.text}
						</div>)
				}</div>
            </div>}
		</div>
	)
}

export default ChoiceLayout