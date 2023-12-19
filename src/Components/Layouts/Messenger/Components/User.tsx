export default function User({avatar, name, message}: {avatar: string, name: string, message: string}) {
	return (
		<div className="user">
			<img className="avatar" src={avatar} alt={""}/>
			<div className="text">
				<div className="name">{name}</div>
				<div className="message">{message}</div>
			</div>
		</div>
	)
}