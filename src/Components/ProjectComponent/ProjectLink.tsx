import { AnchorHTMLAttributes } from "react";
interface ProjectLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  image: string;
}

const PorjectLink = ({ target, image, ...rest }: ProjectLinkProps) => {
  return (
    <a target={target ?? "_blank"} {...rest}>
      <img src={image} alt="No Image" />
    </a>
  );
};

export default PorjectLink;
