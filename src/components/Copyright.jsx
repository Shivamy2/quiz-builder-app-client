import { memo } from "react";

const Copyright = ({ className }) => {
  return (
    <div className={`${className}`}>
      <p className="mt-5 fs-6 text-muted">
        &copy; 2022 All Rights Reserved.{" "}
        <span className="text-primary"> Quiz-Builder </span> is a product of
        Designreset.
        <span className="text-primary">Cookie Preferences, Privacy</span>, and{" "}
        <span className="text-primary">Terms.</span>
      </p>
    </div>
  );
};

export default memo(Copyright);
