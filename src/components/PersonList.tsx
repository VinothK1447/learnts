import { personListProps } from "./componentProps"

const PersonList = (props: personListProps) => {
  return (
	  <div>{props.names.map(name => (
		  <h2>{name.first} {name.last}</h2>
	  ))}</div>
  )
}

export default PersonList
