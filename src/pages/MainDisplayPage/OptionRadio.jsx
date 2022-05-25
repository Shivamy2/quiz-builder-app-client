import { memo } from "react";

const OptionRadio = ({ name, onChange, value, option }) => {
  return (
    <div>
      <input type="radio" name={name} onChange={onChange} value={value} />{" "}
      <span className="ps-3">{option}</span>
    </div>
  );
};

export default memo(OptionRadio);
