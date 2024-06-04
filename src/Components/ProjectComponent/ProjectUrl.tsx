import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface ProjectUrlProps extends FontAwesomeIconProps {
  url: string;
  icon: IconDefinition;
}
const ProjectUrl = ({ url, icon, ...rest }: ProjectUrlProps) => {
  return (
    <a href={url} target="_blank">
      <FontAwesomeIcon {...rest} icon={icon} />
    </a>
  );
};

export default ProjectUrl;
