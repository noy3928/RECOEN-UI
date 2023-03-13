/// <reference types="react" />
interface ButtonProps {
    text: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface Props {
    text: string;
}
declare const Card: (props: Props) => JSX.Element;

export { Button, Card };
