import Project from "../../Components/ProjectComponent/Project";
import style from "./WorkExperience.module.css";
import RazerLOGO from "../../assets/Razer-Logo-700x394.png";
import VFXSS from "../../assets/VFXSS.png";
import PLIGSS from "../../assets/Wee-02.png";
const WorkExperience = () => {
  return (
    <div className={style.experiencecontainer}>
      <div className={style["projectscontainer"]}>
        <Project
          bgimage={VFXSS}
          youtubeURL="https://www.youtube.com/watch?v=J39ThUsYzQo&list=PLpup303vWKZD7sx0HMq2MDYb-Xt-851v9"
          title="Unity VFX"
        />
        <Project
          bgimage={
            "https://assets2.razerzone.com/images/pnx.assets/05575b50e6ed9a1d9a5615c544f6bc63/holiday-gift-guide-rgb-homepage-large-2x.webp"
          }
          githubURL="https://github.com/yousefkmail/Razer-Clone"
          title="Razer clone"
        />
        <Project
          bgimage={PLIGSS}
          playstoreURL="https://play.google.com/store/apps/details?id=com.cuebat.plig&hl=en&gl=US"
          title="PLIG"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
