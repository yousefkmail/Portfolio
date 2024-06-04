import { HTMLAttributes } from "react";
import style from "./ContactInfo.module.css";
import { cx } from "class-variance-authority";
import Info from "./Info";
import PressableImage from "./PressableImage";
import Label from "./Label";
const ContactInfo = ({ ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...rest} />;
};

ContactInfo.DefaultLayout = ({ className, children }: any) => (
  <div className={cx(style["container"], className)}>{children}</div>
);

ContactInfo.Info = Info;
ContactInfo.PressableImage = PressableImage;
ContactInfo.label = Label;

export default ContactInfo;
