import React from "react";
import { Link } from "react-router-dom";
import style from "./InlineLink.module.css";
interface InLineLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  to: string;
}
const InlineLink = ({ to, children }: InLineLinkProps) => {
  return (
    <Link className={style["link"]} to={to}>
      {children}
    </Link>
  );
};

export default InlineLink;
