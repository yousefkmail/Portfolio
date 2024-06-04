import Project from "../../Components/ProjectComponent/Project";
import style from "./WorkExperience.module.css";
import VFXSS from "../../assets/VFXSS.png";
import PLIGSS from "../../assets/Wee-02.png";
import XSS from "../../assets/x-social-media-white-icon.png";
import googleplayIcon from "../../assets/google-play-png-logo-3798.png";
import {
  faGithub,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const WorkExperience = () => {
  return (
    <div className={style.experiencecontainer}>
      <div className={style["projectscontainer"]}>
        <Project>
          <Project.ImagePreview
            url={
              "https://www.youtube.com/watch?v=J39ThUsYzQo&list=PLpup303vWKZD7sx0HMq2MDYb-Xt-851v9"
            }
            image={VFXSS}
          ></Project.ImagePreview>
          <Project.Title>Unity VFX</Project.Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Project.ProjectUrl
              icon={faYoutube}
              size="2x"
              color="red"
              url="https://www.youtube.com/watch?v=J39ThUsYzQo&list=PLpup303vWKZD7sx0HMq2MDYb-Xt-851v9"
            ></Project.ProjectUrl>
          </div>
        </Project>

        <Project>
          <Project.ImagePreview
            image={
              "https://assets2.razerzone.com/images/pnx.assets/05575b50e6ed9a1d9a5615c544f6bc63/holiday-gift-guide-rgb-homepage-large-2x.webp"
            }
            url={"https://razer-clone-yousef.netlify.app/"}
          ></Project.ImagePreview>
          <Project.Title>Razer clone</Project.Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Project.ProjectUrl
              icon={faGithub}
              size="2x"
              color="white"
              url="https://github.com/yousefkmail/Razer-Clone"
            ></Project.ProjectUrl>
          </div>
        </Project>
        <Project>
          <Project.ImagePreview
            image={PLIGSS}
            url={
              "https://play.google.com/store/apps/details?id=com.cuebat.plig&hl=en&gl=US"
            }
          ></Project.ImagePreview>
          <Project.Title>PLIG</Project.Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href={
                "https://play.google.com/store/apps/details?id=com.cuebat.plig&hl=en&gl=US"
              }
              target="_blank"
            >
              <img
                src={googleplayIcon}
                style={{ width: "40px", aspectRatio: "1/1" }}
              />
            </a>
          </div>
        </Project>
        <Project>
          <Project.ImagePreview
            image={XSS}
            url={"https://youser-ali-twitter-clone.netlify.app/home"}
          ></Project.ImagePreview>
          <Project.Title>Twitter clone</Project.Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Project.ProjectUrl
              icon={faXTwitter}
              size="2x"
              color="white"
              url="https://youser-ali-twitter-clone.netlify.app/home"
            ></Project.ProjectUrl>
          </div>
        </Project>
      </div>
    </div>
  );
};

export default WorkExperience;
