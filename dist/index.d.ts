/// <reference types="react" />
import { jsx } from '@emotion/react';

interface ButtonProps {
    text: string;
}
declare const Button: (props: ButtonProps) => jsx.JSX.Element;

interface Props {
    text: string;
}
declare const Card: (props: Props) => JSX.Element;

export { Button, Card };
