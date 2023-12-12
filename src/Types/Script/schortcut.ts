import SayStatement from "./SayStatement.ts";
import ShowStatement from "./ShowStatement.ts";
import HideStatement from "./HideStatement.ts";
import SwitchStatement from "./SwitchStatement.ts";
import SetBackgroundStatement from "./SetBackgroundStatement.ts";
import {RootState} from "../../Store";
import IfStatement from "./IfStatement.ts";
import ElseStatement from "./ElseStatement.ts";
import DoneStatement from "./DoneStatement.ts";
import {choiceOption} from "../index.ts";
import ChoiceStatement from "./ChoiceStatement.ts";
import SetLayoutGroupStatement from "./SetLayoutGroupStatement.ts";

export const Say = (name: string, expression: string) => new SayStatement(name, expression)
export const Choice = (question: string, key: string, options: choiceOption[]) => new ChoiceStatement(question, key, options)
export const Show = (name: string, position: "center" | "left" | "right" = "center") => new ShowStatement(name, position)
export const Hide = (name: string, position: "center" | "left" | "right" = "center") => new HideStatement(name, position)
export const Switch = (script: string) => new SwitchStatement(script)
export const Back = (image: string = "") => new SetBackgroundStatement(image)

export const Group = (group: string = "default") => new SetLayoutGroupStatement(group)

export const If = (condition: (state: RootState) => boolean) => new IfStatement(condition)
export const Else = () => new ElseStatement()
export const Done = () => new DoneStatement()