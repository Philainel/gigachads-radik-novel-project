import {fs} from "@tauri-apps/api";

export default async function listSaves() {
	let entries =
		await fs.exists("saves", {dir: fs.BaseDirectory.AppData}) ?
			await fs.readDir("saves", {dir: fs.BaseDirectory.AppData}) :
			[]

	entries = entries.filter((s) =>
		s.children == undefined && s.name != undefined && s.name.endsWith(".grnp")
	)
	return entries
}