import {fs} from "@tauri-apps/api";

export default async function readSaveFromFile(file: fs.FileEntry): Promise<string> {
	return await fs.readTextFile(file.path)
}