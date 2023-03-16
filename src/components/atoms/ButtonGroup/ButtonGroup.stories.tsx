import React from "react"
import ButtonGroup from "./ButtonGroup"
import Button from "../Button/Button"

export default {
  title: "components|ButtonGroup",
  component: ButtonGroup,
}

export const buttonGroup = () => {
  return (
    <ButtonGroup>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  )
}

buttonGroup.story = {
  name: "Default",
}

export const rightAlign = () => {
  return (
    <ButtonGroup rightAlign>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  )
}

export const column = () => {
  return (
    <ButtonGroup direction="column">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  )
}

export const customGap = () => {
  return (
    <ButtonGroup gap="1rem">
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  )
}

export const customGapColumn = () => {
  return (
    <ButtonGroup direction="column" gap="1rem">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  )
}
