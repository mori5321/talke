type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps): JSX.Element => <button>{text}</button>;
