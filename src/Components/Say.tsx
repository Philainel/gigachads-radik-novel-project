import './Say.scss'

function Say() {
	let buttons = [{
		icon: "",
		action: () => {
		},
	}]
	let statement = {
		name: "Рита",
		exp: "Привет! Lorem ipsum dolor sit amet, consectetur adipiscing"
	}
	return (
		<div className="say">
			<img src="/Rita.png" alt="" className="img center"/>
			<div className="phrase">
				<div className="author">
					{statement.name}
				</div>
				<div className="text">
					{statement.exp}
				</div>
				<div className="buttons">
					{buttons.map(b => <div className="button" key={b.icon}>{b.icon}</div>)}
				</div>
			</div>
		</div>
	)
}

export default Say