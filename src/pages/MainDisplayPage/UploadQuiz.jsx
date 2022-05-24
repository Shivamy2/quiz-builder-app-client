import { memo } from "react";
import { useFormik } from "formik";
import InputField from "../../components/InputField";
import { MdTitle } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import Button from "../../components/Button";
import { store } from "../../store/store";
import { uploadQuiz } from "../../thunk/quiz.thunk";

const UploadQuiz = () => {
  const {
    handleSubmit,
    handleChange,
    values,
    setValues,
    setFieldValue,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      questions: [
        {
          optionType: "",
          question: "",
          option: [""],
          answers: [0],
        },
      ],
    },
    onSubmit: (data) => {
      console.log("sending data", data);
      store.dispatch(uploadQuiz(data));
      resetForm();
    },
  });

  const handleMoreQuestionClick = (index) => {
    console.log("Index is: ", index);
    const data = [...values.questions];
    // data[index] = { ...data[index], option: [...data[index].option, ""] };
    data[index].option.push("");
    data[index].answers.push(0);
    setValues({
      ...values,
      questions: data,
    });
  };
  console.log("Values", values);
  return (
    <div>
      <div className="dashboard w-50 mx-auto text-center">
        <h1 className="mt-2 fw-bold text-muted">Create Quiz</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className="mt-4">
            <InputField
              type="text"
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
                      onChange={handleChange}
                      value={values.questions[index].question}
                      name={`questions[${index}].question`}
                    >
                      <AiFillQuestionCircle size={25} />
                    </InputField>
                  </div>
                  <div>
                    <select
                      onChange={(event) =>
                        setFieldValue(
                          `questions[${index}].optionType`,
                          event.target.value
                        )
                      }
                      value={values.questions[index]?.optionType}
                      className="form-select w-50 mx-auto mb-2"
                      name={`questions[${index}].optionType`}
                    >
                      <option value="select">Select</option>
                      <option value="mcqs">MCQs</option>
                      <option value="objective">Objective</option>
                    </select>
                  </div>
                  {values.questions[index].option.map((item, optionsIndex) => (
                    <div
                      key={optionsIndex}
                      className="d-flex justify-content-center my-2"
                    >
                      <input
                        onChange={handleChange}
                        value={
                          values.questions[index]?.option[optionsIndex] || ""
                        }
                        className="form-control border-dark w-75"
                        type="text"
                        placeholder={`Option ${optionsIndex + 1}`}
                        name={`questions.[${index}].option[${optionsIndex}]`}
                      />
                      <input
                        className="my-auto ms-2"
                        style={{ height: "20px", width: "20px" }}
                        onChange={(event) =>
                          setFieldValue(
                            `questions.[${index}].answers[${optionsIndex}]`,
                            +event.target.value + 1
                          )
                        }
                        type="checkbox"
                        name={`questions.[${index}].answers[${optionsIndex}]`}
                        value={values.questions[index].answers[optionsIndex]}
                      />
                    </div>
                  ))}
                  {values.questions[index].option.length < 5 && (
                    <div>
                      <Button
                        submitting={isSubmitting}
                        type={"button"}
                        text="Add Options"
                        className={"btn-dark"}
                        onClick={(event) => {
                          event.preventDefault();
                          handleMoreQuestionClick(index);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="my-4">
            <Button
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
                      option: [""],
                      answers: [0],
                    },
                  ],
                });
              }}
            />
          </div>
          <div>
            <Button
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
