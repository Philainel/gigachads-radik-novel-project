import {ReactElement, useState} from "react";
import Message from "./Message.tsx";
import './MessengerForm.scss'
import {useSelector} from "react-redux";
import {selectFlags} from "../../../../Store/flags.ts";

export default function MessengerForm({messages}: {
	messages: { message: string, author: string, timestamp: number, id: number }[]
}) {
	let owner = useSelector(selectFlags)["messenger/owner"]

	function renderMessages() {
		let res: ReactElement[] = []
		for (let i = 0; i < messages.length; i++) {
			let msg = messages[i]
			res.push(<Message text={msg.message} own={msg.author == owner} start={messages[i - 1]?.author != msg.author}
							  end={messages[i + 1]?.author != msg.author}/>)
		}
		return res
	}

	return (
		<div className="messenger-form">
			<div className="messages">
				{/*{messages.map(m => <Message text={m.message} own={false} key={m.id} start={true} end={true}/>)}*/}
				{renderMessages()}
			</div>
		</div>
	)
}