import { HTMLAttributes } from "react";

const Info = ({ ...rest }: HTMLAttributes<HTMLHeadingElement>) => {
  return <h6 {...rest} />;
};

export default Info;
