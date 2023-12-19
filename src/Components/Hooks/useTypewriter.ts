import {useState, useEffect} from 'react';

export default function useTypewriter(text: string, speed = 50): string {
	const [displayText, setDisplayText] = useState('')

	useEffect(() => {
		const interval = setInterval(() => {
			let enabled = true
			if (enabled) {
				setDisplayText(previous => {
					enabled = previous.length == displayText.length - 1
					return previous + text.charAt(previous.length)
				})
			} else {
				clearInterval(interval)
			}
		}, speed)

		return () => {
			clearInterval(interval)
		}
	}, [text, speed])

	useEffect(() => {
		setDisplayText("")
	}, [text]);

	return displayText
}