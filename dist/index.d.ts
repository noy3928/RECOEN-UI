/// <reference types="react" />
import { jsx } from '@emotion/react';

/** @jsxRuntime classic */

type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: "primary" | "secondary" | "tertiary";
    /** 버튼의 크기를 설정합니다 */
    size: "small" | "medium" | "large";
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 버튼의 너비를 임의로 설정합니다. */
    width?: string | number;
};
/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
declare const Button: {
    ({ children, size, theme, disabled, width, onClick, }: ButtonProps): jsx.JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
};

/** @jsxRuntime classic */

type Article = {
    title: string;
    description: string;
    createdAt: string;
    image?: React.ReactNode;
};
interface Props {
    /** 카드의 너비를 임의로 설정합니다. */
    width?: string | number;
    /** 카드에 들어갈 값들을 설정합니다. */
    article: Article;
}
declare const Card: {
    ({ article, width }: Props): jsx.JSX.Element;
    defaultProps: {
        article: {
            title: string;
            description: string;
            createdAt: string;
        };
    };
};

/** @jsxRuntime classic */

type ButtonGroupProps = {
    /** 버튼을 보여줄 방향 */
    direction: "row" | "column";
    /** 버튼을 우측에 보여줍니다. */
    rightAlign?: boolean;
    /** 버튼과 버튼사이의 간격을 설정합니다. */
    gap: number | string;
    /** 버튼 그룹에서 보여줄 버튼들 */
    children: React.ReactNode;
    className?: string;
};
/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
declare const ButtonGroup: {
    ({ direction, rightAlign, children, gap, className, }: ButtonGroupProps): jsx.JSX.Element;
    defaultProps: {
        direction: string;
        gap: string;
    };
};

export { Button, ButtonGroup, Card };
