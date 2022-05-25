import React, { memo } from "react";
import { useSelector } from "react-redux";
import Direction from "../../components/Direction";
import Copyright from "../../components/Copyright";
import InputField from "../../components/InputField";
import { useFormik } from "formik";
import * as yup from "yup";
import "../style/login.css";
import { createUser } from "../../thunk/auth.thunk";
import { store } from "../../store/store";
import { userSignUpErrorSelector } from "../../selectors/auth.selector";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignUpPage = () => {
  const loginFailedMessage = useSelector(userSignUpErrorSelector);
  console.log("Login Failed Message", loginFailedMessage);

  const { handleSubmit, errors, touched, getFieldProps, isSubmitting } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        age: "",
        email: "",
        password: "",
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .email("Must be a valid email")
          .required("Email is required field!"),
        password: yup
          .string()
          .required("Password is required field!")
          .min(6, ({ min }) => `Password must be atleast ${min} chars`),
        first_name: yup
          .string()
          .required("First Name is required field!")
          .min(3, ({ min }) => `This must be atleast ${min} chars`),
        last_name: yup
          .string()
          .required("Last Name is required field!")
          .min(3, ({ min }) => `This must be atleast ${min} chars`),
        age: yup
          .number()
          .required("Age is required field!")
          .max(80, ({ max }) => `This must be atmax ${max}`),
      }),
      onSubmit: (data) => {
        console.log("sending data", data);
        store.dispatch(createUser(data));
      },
    });
  return (
    <div className="w-100 min-vh-100 bg-white login">
      <div className="px-5 py-4 mx-auto">
        <div className="pb-4 login__heading">
          <h1 className="fw-bold fs-3 text-4xl">
            SignUp
            <span className="text-uppercase ms-1 fs-2 text-primary">
              Quiz-Builder
            </span>
          </h1>
          <div className="d-flex fw-light tracking-wider">
            <p>Already have an account?&nbsp;</p>
            <Direction
              textClassName={"fw-bold text-muted"}
              text="Login"
              path="/login"
            />
          </div>
        </div>
        {loginFailedMessage && (
          <div className="position-relative">
            {/* <Alert
              className="absolute "
              title={loginFailedMessage}
              alertType="error"
            /> */}
            <div className="position-absolute bg-danger w-100 px-2 py-2 text-white rounded-3">
              Error Occured!!
            </div>
          </div>
        )}
        <div className="w-100 pt-2 fs-5 login__form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="w-l00 mt-4">
              <div className="d-md-flex">
                <InputField
                  {...getFieldProps("first_name")}
                  placeholder="First Name"
                  name="first_name"
                  type="text"
                  touched={touched.first_name}
                  errorMessage={errors.first_name}
                  required
                >
                  <svg
                    style={{ right: "10px" }}
                    className="position-absolute text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(27, 85, 226, 0.24)"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </InputField>
                <InputField
                  {...getFieldProps("last_name")}
                  outerClass="ms-md-2"
                  placeholder="Last Name"
                  name="last_name"
                  type="text"
                  touched={touched.last_name}
                  errorMessage={errors.last_name}
                  required
                >
                  <svg
                    style={{ right: "10px" }}
                    className="position-absolute text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(27, 85, 226, 0.24)"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </InputField>
              </div>
              <InputField
                {...getFieldProps("email")}
                placeholder="Email"
                name="email"
                type="email"
                touched={touched.email}
                errorMessage={errors.email}
                required
              >
                <svg
                  style={{ right: "10px" }}
                  className="position-absolute text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(27, 85, 226, 0.24)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </InputField>

              <InputField
                {...getFieldProps("age")}
                placeholder="Age"
                name="age"
                type="text"
                touched={touched.age}
                errorMessage={errors.age}
                required
              >
                <svg
                  style={{ right: "10px" }}
                  className="position-absolute text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(27, 85, 226, 0.24)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </InputField>
              <InputField
                {...getFieldProps("password")}
                placeholder="Password"
                name="password"
                type="password"
                touched={touched.password}
                errorMessage={errors.password}
                required
              >
                <svg
                  style={{ right: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(27, 85, 226, 0.24)"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="position-absolute text-primary"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </InputField>
            </div>
            <div className="d-flex flex-column mt-4 login__form-button md:flex-row md:justify-between">
              <button
                disabled={isSubmitting}
                type="submit"
                className={`btn-primary border-0 rounded-3 px-4 py-2 fs-6`}
              >
                {isSubmitting ? <AiOutlineLoading3Quarters /> : "Sign Up"}
              </button>
            </div>
          </form>
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default memo(SignUpPage);
