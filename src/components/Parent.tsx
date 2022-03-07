import Children from "./Children"
import { parentProps } from "./componentProps"

const Parent = (props: parentProps) => {
  return (
	  <div>
		  <Children children={props.children} />
	</div>
  )
}

export default Parent
