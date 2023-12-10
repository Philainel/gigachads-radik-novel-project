export type screens = "main" | "game"
export type layouts = "say" | "final"
export type actions = "next" | "quit"
export type states = "pause" | "play" | null
export type ifStates = "none" | "skip"

export type characterPosition = {
	file: string,
	position: "center" | "left" | "right"
}