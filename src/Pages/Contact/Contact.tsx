import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div style={{ paddingTop: "100px", color: "white" }}>
      <h1
        style={{
          color: "var(--secondary-theme-color)",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Contact Me
      </h1>

      <p style={{ textAlign: "center" }}>I will reply as soon as possible.</p>
      <div
        style={{
          display: "flex",
          marginTop: "90px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ContactInfo
          label="Email"
          info="yousef.hnaty@gmail.com"
          icon={faEnvelope}
          href="mailto:yousefkmail169@gmail.com"
        />
        <ContactInfo
          href="https://www.facebook.com/yousefkma/"
          label="Facebook"
          info="Yousef Kmail"
          icon={faFacebook}
        />
        <ContactInfo
          href="https://www.linkedin.com/in/yousef-kmail-6b7277245/"
          label="Linked in"
          info="Yousef Kmail"
          icon={faLinkedin}
        />
        <ContactInfo
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
