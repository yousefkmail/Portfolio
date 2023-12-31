import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Project.module.css";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import image from "../../assets/google-play-png-logo-3798.png";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
interface ProjectProps {
  bgimage: string;
  title: string;
  githubURL?: string;
  youtubeURL?: string;
  playstoreURL?: string;
  TwitterURL?: string;
}

const Project = ({
  title,
  githubURL,
  youtubeURL,
  TwitterURL,
  bgimage,
  playstoreURL,
}: ProjectProps) => {
  return (
    <div className={style["projectcontainer"]}>
      <div>
        <img
          style={{
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src={bgimage}
          alt=""
        />
      </div>
      <div>
        <h2 style={{ textAlign: "center", margin: "10px", color: "white" }}>
          {title}
        </h2>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {githubURL && (
          <a href={githubURL} target="_blank">
            <FontAwesomeIcon color="white" size="2x" icon={faGithub} />
          </a>
        )}
        {youtubeURL && (
          <a href={youtubeURL} target="_blank">
            <FontAwesomeIcon
              style={{ color: "red" }}
              size="2x"
              icon={faYoutube}
            />
          </a>
        )}
        {playstoreURL && (
          <a href={playstoreURL} target="_blank">
            <img style={{ width: "40px" }} src={image} alt="" />
          </a>
        )}
        {TwitterURL && (
          <a href={TwitterURL} target="_blank">
            <FontAwesomeIcon color="white" size="2x" icon={faXTwitter} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
