/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { useRef } from "react"

type Article = {
  title: string
  description: string
  createdAt: string
  image?: React.ReactNode
}

export interface Props {
  /** 카드의 너비를 임의로 설정합니다. */
  width?: string | number
  /** 카드에 들어갈 값들을 설정합니다. */
  article: Article
}

const Card = ({ article, width }: Props) => {
  return (
    <div css={[cardStyle, { width }]}>
      {article.image ? article.image : null}
      <div css={wrapperStyle}>
        <div>
          <h2 css={titleStyle}>{article.title}</h2>
          <p css={descStyle(article)}>{article.description}</p>
        </div>
        <time css={timeStyle}>{article.createdAt}</time>
      </div>
    </div>
  )
}

Card.defaultProps = {
  article: {
    title: "[리액트 고급패턴]Props Getters Pattern",
    description:
      "npm에 라이브러리를 배포하고 버전을 관리하는 방법을 자세히 설명합니다. npm 계정 만들기, 패키지 정보 입력, 배포하는 방법부터 버전 관리와 np 라이브러리 사용법까지 쉽고 간결하게 안내합니다. 개발자들은 이 글을 통해 npm 배포와 버전 관리에 대한 이해를 높일 수 있습니다",
    createdAt: "2021-01-01",
  },
}

export default Card

const cardStyle = css`
  position: relative;
  width: 350px;
  height: 380px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`

const wrapperStyle = css`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`

const titleStyle = css`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f3f3f3;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`

const descStyle = (article: Article) => css`
  font-weight: 200;
  font-size: 0.9rem;
  color: #9599a0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${article.image ? "3" : null};
  -webkit-box-orient: vertical;
  line-height: 1.4;
  letter-spacing: 0.3px;

  @media screen and (max-width: 768px) {
    width: 315px;
  }
`

// const descStyle = css`
//   font-weight: 200;
//   font-size: 0.9rem;
//   color: #9599a0;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   line-height: 1.4;
//   letter-spacing: 0.3px;

//   @media screen and (max-width: 768px) {
//     width: 315px;
//   }
// `

const timeStyle = css`
  font-weight: 200;
  font-size: 0.9rem;
  color: #9599a0;
`
