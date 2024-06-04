import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import style from "./Contact.module.css";
import DefaultContactInfo from "../../Components/ContactInfo/DefaultContactInfo";
const Contact = () => {
  return (
    <div className={style["container"]}>
      <h1 className={style["h1"]}>Contact Me</h1>
      <p className={style["p"]} style={{ textAlign: "center" }}>
        {"I will reply as soon as possible."}
      </p>
      <div className={style["contact-container"]}>
        <DefaultContactInfo
          label="Email"
          info="yousefkmail169@gmail.com"
          icon={faEnvelope}
          href="mailto:yousefkmail169@gmail.com"
        />
        <DefaultContactInfo
          href="https://www.facebook.com/yousefkma/"
          label="Facebook"
          info="Yousef Kmail"
          icon={faFacebook}
        />
        <DefaultContactInfo
          href="https://www.linkedin.com/in/yousef-kmail-6b7277245/"
          label="Linked in"
          info="Yousef Kmail"
          icon={faLinkedin}
        />
        <DefaultContactInfo
          label="Number"
          info="+970568550124"
          icon={faPhone}
          href="tel:+970568550124"
        />
      </div>
    </div>
  );
};

export default Contact;
