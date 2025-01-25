import React from "react";

const ButtonWrapper: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { title: string }
> = ({ title, ...props }) => <button {...props}>{title}</button>;

export default ButtonWrapper;
