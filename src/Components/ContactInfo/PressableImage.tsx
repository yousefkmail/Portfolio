import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnchorHTMLAttributes } from "react";
import style from "./ContactInfo.module.css";
import { cx } from "class-variance-authority";
interface PressableImage extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconDefinition;
}

const PressableImage = ({ icon, className, ...rest }: PressableImage) => {
  return (
    <a className={cx(style["pressable-image"], className)} {...rest}>
      <FontAwesomeIcon
        size="2x"
        style={{ backgroundColor: "#323232" }}
        icon={icon}
      />
    </a>
  );
};

export default PressableImage;
