import { memo, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import "./style/inputfield.css";

const InputField = ({
  children,
  className,
  name,
  touched,
  errorMessage,
  innerClass,
  outerClass,
  ...rest
}) => {
  const [isInputFieldClicked, setIsInputFieldClicked] = useState(false);
  return (
    <div className={"w-100 py-4 " + outerClass}>
      <div className={`d-flex position-relative w-100 inputfield ${className}`}>
        <div className="d-flex align-items-center">{children}</div>
        <label htmlFor={name}></label>
        <input
          {...rest}
          size={100}
          onFocus={() => {
            setIsInputFieldClicked(true);
          }}
          type={rest.type}
          name={name}
          placeholder={rest.placeholder}
          className={`w-100 pt-1 pb-1 my-auto fs-6 me-5 ${innerClass}`}
        />
      </div>
      <hr
        className={
          "w-100 " + (isInputFieldClicked ? "border-primary" : "border-success")
        }
      />
      {touched && (
        <div className="position-relative inputfield__warning">
          <div className="position-absolute d-flex text-warning">
            {errorMessage && (
              <IoWarningOutline className={"react-icon-class"} />
            )}
            <p className="ms-2 my-auto">{errorMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

InputField.defaultProps = {
  innerClass: "ps-3",
};

export default memo(InputField);
