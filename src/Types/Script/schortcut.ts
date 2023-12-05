import SayStatement from "./SayStatement.ts";
import ShowStatement from "./ShowStatement.ts";
import HideStatement from "./HideStatement.ts";
import SwitchStatement from "./SwitchStatement.ts";

export const Say = (name: string, expression: string) => new SayStatement(name, expression)
export const Show = (name: string, position: "center" | "left" | "right" = "center") => new ShowStatement(name, position)
export const Hide = (name: string, position: "center" | "left" | "right" = "center") => new HideStatement(name, position)
export const Switch = (script: string) => new SwitchStatement(script)
