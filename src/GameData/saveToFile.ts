import {fs, path} from "@tauri-apps/api"

export default async function SaveToFile(name: string, data: string) {
	if (!(await fs.exists("saves", {dir: fs.BaseDirectory.AppData}))) {
		await fs.createDir("saves", {dir: fs.BaseDirectory.AppData})
	}
	await fs.writeTextFile(await path.join("saves", `${name}.grnp`), data + '\n', {dir: fs.BaseDirectory.AppData})
}
