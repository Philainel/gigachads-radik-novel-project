import {IScriptable} from "../Types/Script/IScriptable.ts";
import IfStatement from "../Types/Script/IfStatement.ts";
import SwitchStatement from "../Types/Script/SwitchStatement.ts";
import ShowStatement from "../Types/Script/ShowStatement.ts";
import HideStatement from "../Types/Script/HideStatement.ts";
import SetBackgroundStatement from "../Types/Script/SetBackgroundStatement.ts";
import {actions, ifStates, layouts} from "../Types";
import {setIfState} from "../Store/ifState.ts";
import {AppDispatch, RootState} from "../Store";
import ElseStatement from "../Types/Script/ElseStatement.ts";
import DoneStatement from "../Types/Script/DoneStatement.ts";
import SayStatement from "../Types/Script/SayStatement.ts";
import {setLayout} from "../Store/layout.ts";
import ChoiceStatement from "../Types/Script/ChoiceStatement.ts";
import {setStep} from "../Store/step.ts";
import {switchScript} from "../Store/script.ts";
import {addCharacter, removeCharacter} from "../Store/characters.ts";
import {removeBackground, setBackground} from "../Store/background.ts";

export function processScriptable(scriptable: IScriptable | IfStatement | SwitchStatement | ShowStatement | HideStatement | SetBackgroundStatement, onClick: (action: actions) => void, dispatch: AppDispatch, store: RootState, ifState: ifStates, layout: layouts) {
	if (scriptable instanceof IfStatement) {
		onClick("next")
		dispatch(setIfState(scriptable.condition(store) ? "none" : "skip"))
	} else if (scriptable instanceof ElseStatement) {
		onClick("next")
		dispatch(setIfState(ifState == "none" ? "skip" : "none"))
	} else if (scriptable instanceof DoneStatement) {
		onClick("next")
		dispatch(setIfState("none"))
	} else if (ifState == "skip") {
		onClick("next")
	} else if (scriptable instanceof SayStatement && ["final", "say"].indexOf(layout) == -1) {
		dispatch(setLayout("say"))
	} else if (scriptable instanceof ChoiceStatement && ["final", "choice"].indexOf(layout) == -1) {
		dispatch(setLayout("choice"))
	} else if (scriptable instanceof SwitchStatement) {
		onClick("next")
		dispatch(setStep(-1))
		dispatch(setIfState("none"))
		dispatch(switchScript(scriptable.screen))
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
}