import style from "./Project.module.css";
import { HTMLAttributes } from "react";
import ProjectUrl from "./ProjectUrl";
import { cx } from "class-variance-authority";

const Project = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cx(style["projectcontainer"], className)}>
      {children}
    </div>
  );
};

Project.ProjectUrl = ProjectUrl;
Project.ImagePreview = ({ image, url }: any) => (
  <div className={style["image-container"]}>
    <a target="_blank" href={url}>
      <img className={style["preview-image"]} src={image} alt="" />
    </a>
  </div>
);

Project.Title = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div>
    <h2 style={{ textAlign: "center", margin: "10px", color: "white" }}>
      {children}
    </h2>
  </div>
);
export default Project;
