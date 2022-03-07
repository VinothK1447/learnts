import { GreetProps } from "./componentProps"

const Greet = (props: GreetProps) => {
	const { name, msgCount } = props
	return (
		<div>
			<h2>
				Greetings {name}!, You have {msgCount} unread messages.
			</h2>
		</div>
	)
}

export default Greet
