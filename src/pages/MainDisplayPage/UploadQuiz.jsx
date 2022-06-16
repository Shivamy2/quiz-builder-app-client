import { memo } from "react";
import { useFormik } from "formik";
import InputField from "../../components/InputField";
import { MdTitle } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import Button from "../../components/Button";
import { store } from "../../store/store";
import { uploadQuiz } from "../../thunk/quiz.thunk";
import { useSelector } from "react-redux";
import {
  quizUploadErrorSelector,
  quizUploadLoadingSelector,
} from "../../selectors/quiz.selector";
import "../style/dashboard.css";
import * as yup from "yup";

const UploadQuiz = () => {
  const errorMessage = useSelector(quizUploadErrorSelector);
  const loading = useSelector(quizUploadLoadingSelector);
  const {
    handleSubmit,
    handleChange,
    values,
    setValues,
    setFieldValue,
    resetForm,
    handleBlur,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      title: "",
      questions: [
        {
          optionType: "",
          question: "",
          option: [],
          answers: [],
        },
      ],
    },
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .required("Title is required field")
        .min(3, ({ min }) => `This should be atleast ${min} chars`),
      questions: yup.array().of(
        yup.object().shape({
          optionType: yup.string().required("This is required"),
          question: yup
            .string()
            .required("This is required field")
            .min(8, ({ min }) => `This should be min ${min} chars`),
          option: yup
            .array()
            .of(yup.string().required("This field is required")),
          answers: yup.array().required("Choose the answer"),
        })
      ),
    }),
    onSubmit: (data) => {
      console.log("sending data", data);
      var isValidated = true;
      for (var i = 0; i < data.questions.length; ++i) {
        var flag = false;
        for (var answer of data.questions[i].answers) {
          if (answer === 1) {
            flag = true;
            break;
          }
        }
        if (flag === false) {
          isValidated = false;
          alert("Please check all the answers, then only you can proceed");
          break;
        }
      }
      if (isValidated) {
        store.dispatch(uploadQuiz(data));
        resetForm();
      }
    },
  });

  console.log("ErrorMessage", errors);
  console.log("Touched", touched);
  const handleMoreQuestionClick = (index) => {
    console.log("Index is: ", index);
    const data = [...values.questions];
    data[index].option.push("");
    data[index].answers.push(0);
    setValues({
      ...values,
      questions: data,
    });
  };
  const handleRemoveOptions = (index) => {
    console.log("Index is: ", index);
    const data = [...values.questions];
    data[index].option.pop();
    data[index].answers.pop();
    setValues({
      ...values,
      questions: data,
    });
  };
  const handleSelectClick = (index) => {
    console.log("Index is: ", index);
    const data = [...values.questions];
    data[index].option = [""];
    data[index].answers = [0];
    setValues({
      ...values,
      questions: data,
    });
  };
  console.log("Values", values);
  return (
    <div>
      {loading && (
        <div
          style={{ height: "25vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="pulse "></div>
        </div>
      )}
      {errorMessage && (
        <div className="position-relative mt-2 w-50 mx-auto">
          <div className="position-absolute text-capitalize bg-success w-100 px-2 py-2 text-white rounded-3">
            {errorMessage + " visit HomePage" || "Error Occured!!"}
          </div>
        </div>
      )}
      <div className="mx-auto text-center dashboard">
        <h1 className="pt-5 fw-bold text-muted">Create Quiz</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="mt-4">
            <InputField
              type="text"
              touched={touched.title}
              onBlur={handleBlur}
              errorMessage={errors.title}
              placeholder="Enter Title"
              onChange={handleChange}
              value={values.title}
              name="title"
            >
              <MdTitle size={25} className="mt-2" />
            </InputField>
          </div>
          <div>
            {values.questions.map((item, index) => (
              <div key={index} className="mt-5">
                <div>
                  <span className="fs-4 fw-bold bg-dark rounded-circle text-white mx-auto px-2 py-1">
                    {index + 1}
                  </span>
                  <div className="mt-1">
                    <InputField
                      placeholder="Question Title"
                      type="text"
                      onBlur={handleBlur}
                      touched={
                        touched.questions
                          ? touched?.questions[index]?.question
                          : false
                      }
                      errorMessage={
                        errors.questions
                          ? errors?.questions[index]?.question
                          : ""
                      }
                      onChange={handleChange}
                      value={values.questions[index].question}
                      name={`questions[${index}].question`}
                    >
                      <AiFillQuestionCircle size={25} />
                    </InputField>
                  </div>
                  <div>
                    <select
                      onBlur={handleBlur}
                      onChange={(event) => {
                        handleSelectClick(index);
                        if (event.target.value === "") {
                          setFieldValue(`questions[${index}].option`, []);
                          setFieldValue(`questions[${index}].answers`, []);
                        }
                        setFieldValue(
                          `questions[${index}].optionType`,
                          event.target.value
                        );
                      }}
                      value={values.questions[index]?.optionType}
                      className="form-select w-50 mx-auto mb-2"
                      name={`questions[${index}].optionType`}
                    >
                      <option value="">Select</option>
                      <option value="mcqs">MCQ</option>
                      <option value="objective">Objective</option>
                    </select>
                    {touched &&
                      touched.questions &&
                      touched.questions[index] &&
                      touched.questions[index]?.optionType && (
                        <div className="inputfield__warning mt-2">
                          <div className="d-flex text-warning justify-content-center">
                            {errors &&
                              errors.questions &&
                              errors.questions[index] &&
                              errors.questions[index]?.optionType && (
                                <>
                                  *
                                  <p className="ms-2 my-auto">
                                    {errors.questions[index]?.optionType}
                                  </p>
                                </>
                              )}
                          </div>
                        </div>
                      )}
                  </div>
                  {values?.questions[index]?.option?.map(
                    (item, optionsIndex) => (
                      <div
                        key={optionsIndex}
                        className="d-flex justify-content-center my-2"
                      >
                        <div>
                          <input
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={
                              values.questions[index]?.option[optionsIndex] ||
                              ""
                            }
                            className="form-control border-dark w-75"
                            type="text"
                            placeholder={`Option ${optionsIndex + 1}`}
                            name={`questions.[${index}].option[${optionsIndex}]`}
                          />
                          {touched &&
                            touched.questions &&
                            touched.questions[index] &&
                            touched.questions[index]?.option &&
                            touched.questions[index]?.option[optionsIndex] && (
                              <div className="inputfield__warning mt-1">
                                <div className="d-flex text-warning justify-content-center">
                                  {errors &&
                                    errors.questions &&
                                    errors.questions[index] &&
                                    errors.questions[index]?.option &&
                                    errors.questions[index]?.option[
                                      optionsIndex
                                    ] && (
                                      <>
                                        *
                                        <p className="ms-2 my-auto">
                                          {
                                            errors.questions[index]?.option[
                                              optionsIndex
                                            ]
                                          }
                                        </p>
                                      </>
                                    )}
                                </div>
                              </div>
                            )}
                        </div>
                        {values.questions[index].optionType === "mcqs" ? (
                          <input
                            checked={
                              values.questions[index].answers[optionsIndex]
                            }
                            className="my-auto ms-2"
                            style={{ height: "20px", width: "20px" }}
                            onChange={(event) =>
                              setFieldValue(
                                `questions.[${index}].answers[${optionsIndex}]`,
                                event.target.checked ? 1 : 0
                              )
                            }
                            type="checkbox"
                            name={`questions.[${index}].answers[${optionsIndex}]`}
                          />
                        ) : (
                          <input
                            className="my-auto ms-2"
                            style={{ height: "20px", width: "20px" }}
                            onChange={(event) => {
                              let answers = new Array(
                                values.questions[index].answers.length
                              ).fill(0);
                              answers[optionsIndex] = 1;
                              setFieldValue(
                                `questions.[${index}].answers`,
                                answers
                              );
                            }}
                            type="radio"
                            name={`questions.[${index}].answers`}
                            required
                          />
                        )}
                      </div>
                    )
                  )}
                  {values.questions[index].option.length > 0 &&
                    values.questions[index].option.length < 5 && (
                      <div>
                        <Button
                          isPlus={true}
                          type={"button"}
                          text="Add Option"
                          className={"btn-dark"}
                          onClick={(event) => {
                            event.preventDefault();
                            handleMoreQuestionClick(index);
                          }}
                        />
                      </div>
                    )}
                  {values.questions[index].option.length > 1 && (
                    <div>
                      <Button
                        isPlus={false}
                        type={"button"}
                        text="Remove Option"
                        className={"btn-danger mt-1"}
                        onClick={(event) => {
                          event.preventDefault();
                          handleRemoveOptions(index);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {values.questions.length < 10 && (
            <div className="my-4">
              <Button
                isPlus={true}
                className={"dashboard-add-questions"}
                type={"button"}
                text="Add Question"
                onClick={(event) => {
                  event.preventDefault();
                  setValues({
                    ...values,
                    questions: [
                      ...values.questions,
                      {
                        optionType: "",
                        question: "",
                        option: [],
                        answers: [],
                      },
                    ],
                  });
                }}
              />
            </div>
          )}
          {values.questions.length > 1 && (
            <div className="my-4">
              <Button
                isPlus={false}
                className={"dashboard-remove-questions btn-danger"}
                type={"button"}
                text="Remove Question"
                onClick={(event) => {
                  event.preventDefault();
                  const data = [...values.questions];
                  data.pop();
                  setValues({
                    ...values,
                    questions: data,
                  });
                }}
              />
            </div>
          )}
          <div>
            <Button
              isPlus={true}
              type={"submit"}
              text="Upload"
              className={"questions-upload btn-success"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(UploadQuiz);
