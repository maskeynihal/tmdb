import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

const Loading = (props) => {
  return (
    <Skeleton className="skeleton" {...props}>
      {props.children}
    </Skeleton>
  );
};

export default Loading;
