interface ProjectUrlProps {
  url: string;
  icon: string | undefined;
}
const ProjectUrl = ({ url, icon }: ProjectUrlProps) => {
  return (
    <a href={url} target="_blank">
      <img
        style={{ width: "40px", height: "40px", objectFit: "cover" }}
        src={icon}
        alt=""
      />
    </a>
  );
};

export default ProjectUrl;
