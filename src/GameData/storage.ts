import React, {useState} from "react";

const storage: { [key: string]: [string, React.Dispatch<React.SetStateAction<string>>] } = {}

export function useStorage(key: string, initial: string = ""): [string, React.Dispatch<React.SetStateAction<string>>] {
	if (!storage.hasOwnProperty(key)) {
		let [i, sI] = useState<string>(initial)
		storage[key] = [i, sI];
		return [i, sI]
	}
	return storage[key]
}
export function checkStorageKey(key: string) {
	return storage.hasOwnProperty(key)
}
