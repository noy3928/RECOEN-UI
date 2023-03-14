import React from "react"
import styled from "@emotion/styled"

export interface ButtonProps {
  text: string
}

const Button = (props: ButtonProps) => {
  return <S.Button>{props.text}</S.Button>
}

export default Button

const S = {
  Button: styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `,
}
