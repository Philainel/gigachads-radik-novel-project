export type screens = "main" | "game"
export type layouts = "say" | "choice" | "final"
export type actions = "next" | "quit"
export type states = "pause" | "play" | null
export type ifStates = "none" | "skip"
export type overlays = "" | "save" | "load" | "pause"

export type choiceOption = {
	text: string,
	value: string
}

export type characterPosition = {
	file: string,
	position: "center" | "left" | "right"
}