import { FC, memo } from "react";

interface Props {}

const NotFoundpage: FC<Props> = (props) => {
  return (
    <div className="h-screen bg-green-600">Sorry the page does not exist</div>
  );
};

NotFoundpage.defaultProps = {};

export default NotFoundpage;
