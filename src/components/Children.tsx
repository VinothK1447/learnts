import { childrenProps } from "./componentProps"

const Children = (props: childrenProps) => {
  return (
	<div>{props.children}</div>
  )
}

export default Children
