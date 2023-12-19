import './Message.scss'

export default function Message({text, own, start, end}: {text: string, own: boolean, start?: boolean, end?: boolean}) {
	return (
		<div className={["message", own ? "own" : "", start ? "start" : "", end ? "end" : ""].join(' ')}>
			{text}
		</div>
	)
}