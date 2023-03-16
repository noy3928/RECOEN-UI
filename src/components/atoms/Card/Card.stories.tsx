/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react"
import Card from "./Card"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { jsx, css } from "@emotion/react"

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const DefaultCard = Template.bind({})

export const CardWithImage = Template.bind({})
CardWithImage.storyName = "Card with image"
CardWithImage.args = {
  article: {
    title: "내가 만든 라이브러리 Npm에 배포하기",
    description:
      "npm에 라이브러리를 배포하고 버전을 관리하는 방법을 자세히 설명합니다. npm 계정 만들기, 패키지 정보 입력, 배포하는 방법부터 버전 관리와 np 라이브러리 사용법까지 쉽고 간결하게 안내합니다. 개발자들은 이 글을 통해 npm 배포와 버전 관리에 대한 이해를 높일 수 있습니다",
    createdAt: "2021-01-01",
    image: (
      <img style={{ zIndex: "5" }} src="https://random.imagecdn.app/350/200" />
    ),
  },
}

export const ManyCards: ComponentStory<typeof Card> = args => (
  <div css={gridStyle}>
    <Card
      {...args}
      article={{
        title: "내가 만든 라이브러리 Npm에 배포하기",
        description:
          "라이브러리를 npm에 배포하는 과정에 대해서 알아보겠습니다.",
        createdAt: "2021-01-01",
        image: (
          <img
            style={{ zIndex: "5" }}
            src="https://random.imagecdn.app/350/200"
          />
        ),
      }}
    ></Card>
    <Card {...args}></Card>
    <Card {...args}></Card>
    <Card
      {...args}
      article={{
        title: "내가 만든 라이브러리 Npm에 배포하기",
        description:
          "라이브러리를 npm에 배포하는 과정에 대해서 알아보겠습니다.",
        createdAt: "2021-01-01",
        image: (
          <img
            style={{ zIndex: "5" }}
            src="https://random.imagecdn.app/350/200"
          />
        ),
      }}
    ></Card>
    <Card {...args}></Card>
    <Card
      {...args}
      article={{
        title: "내가 만든 라이브러리 Npm에 배포하기",
        description:
          "npm에 라이브러리를 배포하고 버전을 관리하는 방법을 자세히 설명합니다. npm 계정 만들기, 패키지 정보 입력, 배포하는 방법부터 버전 관리와 np 라이브러리 사용법까지 쉽고 간결하게 안내합니다. 개발자들은 이 글을 통해 npm 배포와 버전 관리에 대한 이해를 높일 수 있습니다",
        createdAt: "2021-01-01",
        image: (
          <img
            style={{ zIndex: "5" }}
            src="https://random.imagecdn.app/350/200"
          />
        ),
      }}
    ></Card>
  </div>
)

const gridStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1200px;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    width: 800px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    width: 380px;
    grid-template-columns: 1fr;
  }
`
