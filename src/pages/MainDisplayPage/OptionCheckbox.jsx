import { memo } from "react";

const OptionCheckbox = ({ name, onChange, value, option }) => {
  return (
    <div>
      <input type="checkbox" name={name} onChange={onChange} value={value} />{" "}
      <span className="ps-3">{option}</span>
    </div>
  );
};

export default memo(OptionCheckbox);
