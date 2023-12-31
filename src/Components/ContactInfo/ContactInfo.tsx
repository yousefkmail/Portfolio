import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ContactInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconProp;
  label: string;
  info: string;
  href?: string;
}
const ContactInfo = ({
  icon,
  label,
  info,
  href,
  ...rest
}: ContactInfoProps) => {
  return (
    <div
      {...rest}
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        width: "200px",
      }}
    >
      <a href={href}>
        <div
          style={{
            width: "100px ",
            height: "100px",
            display: "grid",
            placeItems: "center",
            borderRadius: "9999px",
            backgroundColor: "#323232",
            color: "white",
          }}
        >
          <FontAwesomeIcon
            size="2x"
            style={{ backgroundColor: "#323232" }}
            icon={icon}
          />
        </div>
      </a>
      <p
        style={{
          color: "var(--secondary-theme-color)",
          textAlign: "center",
          padding: "10px",
        }}
      >
        {label}
      </p>
      <h6>{info}</h6>
    </div>
  );
};

export default ContactInfo;
