import { HTMLAttributes } from "react";
import ContactInfo from "./ContactInfo";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface DefaultContactInfoProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  icon: IconDefinition;
  info: string;
  href: string;
}
const DefaultContactInfo = ({
  label,
  info,
  icon,
  href,
}: DefaultContactInfoProps) => {
  return (
    <ContactInfo>
      <ContactInfo.DefaultLayout>
        <ContactInfo.PressableImage icon={icon} href={href} />
        <ContactInfo.label>{label}</ContactInfo.label>
        <ContactInfo.Info className="test">{info}</ContactInfo.Info>
      </ContactInfo.DefaultLayout>
    </ContactInfo>
  );
};

export default DefaultContactInfo;
