import { HTMLAttributes } from "react";
import style from "./ContactInfo.module.css";
import { cx } from "class-variance-authority";
const Label = ({
  className,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...rest} className={cx(style["label"], className)} />;
};

export default Label;
