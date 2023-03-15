/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/react"

export interface ButtonProps {
  text: string
}

const Button = (props: ButtonProps) => {
  return <button css={style}>{props.text}</button>
}

export default Button

const style = css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
