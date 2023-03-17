/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import React from "react"

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
  onClick?: () => void
}

const Card = ({ article, width, onClick }: Props) => {
  return (
    <div css={[S.card, { width }]} onClick={onClick}>
      {article.image ? article.image : null}
      <div css={S.wrapper}>
        <div>
          <h2 css={S.title}>{article.title}</h2>
          <p css={S.desc(article)}>{article.description}</p>
        </div>
        <time css={S.time}>{article.createdAt}</time>
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

const S = {
  card: css`
    position: relative;
    width: 350px;
    height: 380px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    cursor: pointer;
    margin: 0;

    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 768px) {
      width: 315px;
    }
  `,
  wrapper: css`
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
  `,
  title: css`
    font-size: 1rem;
    overflow: hidden;
    color: #f3f3f3;
    width: 100%;
    max-width: 350px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 768px) {
      width: 315px;
    }
  `,
  desc: (article: Article) => css`
    font-weight: 200;
    font-size: 0.9rem;
    color: #9599a0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${article.image ? "3" : null};
    -webkit-box-orient: vertical;
    line-height: 1.4;
    letter-spacing: 0.3px;
    max-width: 350px;

    @media screen and (max-width: 768px) {
      width: 315px;
    }
  `,
  time: css`
    font-weight: 200;
    font-size: 0.9rem;
    color: #9599a0;
  `,
}
