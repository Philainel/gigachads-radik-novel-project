export type screens = "main" | "game"
export type layouts = "say" | "final"
export type actions = "next" | "quit"

export type characterPosition = {
	file: string,
	position: "center" | "left" | "right"
}