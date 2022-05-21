import React, { memo } from "react";
import { Link } from "react-router-dom";

const Direction = ({ className, textClassName, text, path }) => {
  return (
    <div className={`${className}`}>
      <Link to={path} className="text-decoration-none">
        <span className={`${textClassName}`}>{text}</span>
      </Link>
    </div>
  );
};
export default memo(Direction);
