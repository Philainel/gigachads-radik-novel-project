import {LayoutProps} from "../../../Types/Props.ts";
import './MessengerSayLayout.scss';
import {selectBackground} from "../../../Store/background.ts";
import {useSelector} from "react-redux";
import MessengerForm from "./Components/MessengerForm.tsx";
import {useEffect, useState} from "react";
import SayStatement from "../../../Types/Script/SayStatement.ts";

// @ts-ignore
function MessengerSayLayout({onClick, scriptable}: LayoutProps) {
	let background = useSelector(selectBackground)
	let [messages, setMessages] = useState<{ message: string, author: string, timestamp: number, id: number }[]>([])

	useEffect(() => {
		if (scriptable instanceof SayStatement) {
			let msgs = messages
			msgs.push({
				message: scriptable.expression || "",
				author: scriptable.author?.name || "",
				id: msgs.length,
				timestamp: Date.now()
			})
			setMessages(msgs)
		}
	}, [scriptable]);

	return (
		<div className="messenger-say"
			 style={{background: `${background.startsWith('#') ? background : `url('/${background}')`} no-repeat center center fixed`, zIndex: 2}}
			 onClick={() => onClick("next")}>
			<MessengerForm messages={messages}/>
		</div>
	)
}

export default MessengerSayLayout

/*
[
		{
			id: 1,
			author: 'apple',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
		},
		{
			id: 2,
			author: 'orange',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
		},
		{
			id: 3,
			author: 'orange',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
		},
		{
			id: 4,
			author: 'apple',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
		},
		{
			id: 5,
			author: 'apple',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
		},
		{
			id: 6,
			author: 'apple',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
		},
		{
			id: 7,
			author: 'orange',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
		},
		{
			id: 8,
			author: 'orange',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
		},
		{
			id: 9,
			author: 'apple',
			message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
			timestamp: new Date().getTime()
		},
		{
			id: 10,
			author: 'orange',
			message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
			timestamp: new Date().getTime()
		},
		{
			id: 11,
			author: 'a',
			message: "123",
			timestamp: new Date().getTime()
		},
		{
			id: 12,
			author: 'a',
			message: "123",
			timestamp: new Date().getTime()
		},
		{
			id: 13,
			author: 'a',
			message: "123",
			timestamp: new Date().getTime()
		},
		{
			id: 14,
			author: 'a',
			message: "123",
			timestamp: new Date().getTime()
		},
		{
			id: 15,
			author: 'a',
			message: "123",
			timestamp: new Date().getTime()
		}
	]
 */