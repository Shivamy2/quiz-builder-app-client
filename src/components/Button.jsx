import { memo } from "react";
import { AiFillPlusCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ type, className, text, onClick, submitting }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"btn-primary px-3 py-1 rounded-3 " + className}
    >
      {submitting ? (
        <AiOutlineLoading3Quarters size={15} className="my-auto" />
      ) : (
        <AiFillPlusCircle size={25} className="my-auto" />
      )}
      <span className="ms-2 fs-6">{text}</span>
    </button>
  );
};

export default memo(Button);
