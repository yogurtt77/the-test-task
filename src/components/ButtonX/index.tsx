import { FC, ButtonHTMLAttributes } from "react";
import s from "./ButtonX.module.scss";
import clsx from "clsx";

interface ButtonXProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonX: FC<ButtonXProps> = ({
  className,
  children = "HomePage",
  ...rest
}) => {
  return (
    <button className={clsx(s.wrap, className)} {...rest}>
      {children}
    </button>
  );
};
