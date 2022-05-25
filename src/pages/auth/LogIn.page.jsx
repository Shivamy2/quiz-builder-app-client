import React, { memo } from "react";
import Direction from "../../components/Direction";
import Copyright from "../../components/Copyright";
import InputField from "../../components/InputField";
import { useFormik } from "formik";
import * as yup from "yup";
import "../style/login.css";
import { store } from "../../store/store";
import { loginUser } from "../../thunk/auth.thunk";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { loginUserError } from "../../selectors/auth.selector";

const LogInPage = () => {
  const error = useSelector(loginUserError);

  const { handleSubmit, errors, touched, getFieldProps, isSubmitting } =
    useFormik({
      initialValues: {
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
      }),
      onSubmit: (data) => {
        console.log("sending data", data);
        store.dispatch(loginUser(data));
      },
    });
  return (
    <div className="w-100 min-vh-100 bg-white login">
      <div className="px-5 py-4 mx-auto">
        <div className="pb-4 login__heading">
          <h1 className="fw-bold fs-3 text-4xl">
            Log In to
            <span className="text-uppercase ms-1 fs-2 text-primary">
              Quiz-Builder
            </span>
          </h1>
          <div className="d-flex fw-light tracking-wider">
            <p>New Here?&nbsp;</p>
            <Direction
              textClassName={"fw-bold text-muted"}
              text="Create an account"
              path="/signup"
            />
          </div>
        </div>
        {error && (
          <div className="position-relative">
            <div className="position-absolute bg-danger w-100 px-2 py-2 text-white rounded-3">
              {error || "Error Occured!!"}
            </div>
          </div>
        )}
        <div className="w-100 fs-5 login__form">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="w-l00 mt-4">
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
                {isSubmitting ? <AiOutlineLoading3Quarters /> : "Log in"}
              </button>
            </div>
          </form>
          <Direction
            className="mt-5 text-center fs-6 login__form-direction"
            textClassName="text-center tracking-widest font-semibold text-primary"
            text="Guest id: test@gmail.com Pass: secret"
          />
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default memo(LogInPage);
