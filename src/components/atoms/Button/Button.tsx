/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/react"
import styled from "@emotion/styled"

export interface ButtonProps {
  text: string
}

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.text}</StyledButton>
}

export default Button

const StyledButton = styled.button`
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
