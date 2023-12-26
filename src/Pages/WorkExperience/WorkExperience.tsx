import style from "./WorkExperience.module.css";
import { Outlet } from "react-router-dom";
const WorkExperience = () => {
  return (
    <div className={style.experiencecontainer}>
      <div className={style.navcontainer}>
        {/* <nav className={style.nav}>
          <Link className={style.link} to={"gamedevelopment"}>
            Game Dev
          </Link>

          <Link className={style.link} to={"webdevelopment"}>
            Web Dev
          </Link>
        </nav> */}
      </div>
      <Outlet />
    </div>
  );
};

export default WorkExperience;
