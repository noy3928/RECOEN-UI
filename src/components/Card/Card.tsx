import React from "react"

export interface Props {
  text: string
}

const Card = (props: Props) => {
  return <div>{props.text}</div>
}

export default Card
