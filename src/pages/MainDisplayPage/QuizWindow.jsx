import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../components/Button";
import { quizFetchOneSelector } from "../../selectors/quiz.selector";
import { store } from "../../store/store";
import { fetchOneQuiz } from "../../thunk/quiz.thunk";
import OptionRadio from "../MainDisplayPage/OptionRadio";
import OptionCheckbox from "./OptionCheckbox";
import { useFullScreenHandle, FullScreen } from "react-full-screen";

const QuizWindow = () => {
  const { id } = useParams();
  const quiz = useSelector(quizFetchOneSelector);
  const [showQuiz, setShowQuiz] = useState(false);
  const handleFullScreen = useFullScreenHandle();
  console.log("quiz", quiz);
  useEffect(() => {
    store.dispatch(fetchOneQuiz(id));
  }, []); //eslint-disable-line

  const [answerCheck, setAnswerCheck] = useState([]);

  useEffect(() => {
    setAnswerCheck(
      new Array(quiz?.questions?.length).fill().map(() => new Array(5).fill(0))
    );
  }, [quiz]);

  console.log("answers", answerCheck);
  console.log("length", quiz?.questions?.length);
  const handleSubmit = (event) => {
    event.preventDefault();
    var correctAnswer = 0;
    for (var i = 0; i < quiz?.questions?.length; ++i) {
      const answerLength = quiz?.questions[i]?.answers?.length;
      var flag = true;
      for (var j = 0; j < answerLength; ++j) {
        const userChoice = answerCheck[i][j];
        const actualAnswer = quiz?.questions[i]?.answers[j];
        console.log("userChoice", userChoice, "actualAnswer", actualAnswer);
        if (userChoice !== actualAnswer) {
          flag = false;
          break;
        }
      }
      console.log("Is correct", flag);
      if (flag) correctAnswer += 1;
    }
    alert(`Your Score: ${correctAnswer}/${quiz?.questions?.length}`);
    console.log("Final marks", correctAnswer);
  };

  if (!quiz.questions) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="pulse "></div>
      </div>
    );
  }

  return (
    <div id="quiz-window">
      <div>
        <div className="mt-3 text-center">
          {!showQuiz && (
            <Button
              className={"btn-warning"}
              onClick={() => {
                // const quizWindow = document.getElementById("quiz-window");
                // quizWindow.requestFullscreen();
                handleFullScreen.enter();
                setShowQuiz(true);
              }}
              text="Click to enter full screen mode"
            />
          )}
        </div>
        <FullScreen
          handle={handleFullScreen}
          className="min-vh-100 min-vw-100 bg-white overflow-scroll"
        >
          {showQuiz && (
            <form method="get" onSubmit={handleSubmit}>
              <p className="fs-2 fw-bold text-center my-3 text-danger">
                {quiz?.title}
              </p>
              {quiz?.questions?.map((item, index) => (
                <div key={index}>
                  <dl className="ps-4 my-5">
                    <dt style={{ fontSize: "1.15rem" }}>
                      <span>{index + 1}.</span>
                      <span className="ps-3 fw-bold">{item.question}</span>
                    </dt>
                    <dd className="font-bold fs-6 mt-2">
                      {item?.option?.map((option, index2) => {
                        return item?.optionType === "objective" ? (
                          <div key={index2}>
                            <OptionRadio
                              option={option}
                              name={`answerCheck[${index}]`}
                              onChange={(event) => {
                                setAnswerCheck((prev) => {
                                  const data = [...prev];
                                  data[index] = [0, 0, 0, 0, 0];
                                  data[index][index2] = 1;
                                  return data;
                                });
                              }}
                              value={answerCheck[index][index2]}
                            />
                          </div>
                        ) : (
                          <div key={index2}>
                            <OptionCheckbox
                              option={option}
                              name={`answerCheck[${index}]`}
                              onChange={(event) => {
                                setAnswerCheck((prev) => {
                                  const data = [...prev];
                                  if (event.target.checked)
                                    data[index][index2] = 1;
                                  else data[index][index2] = 0;
                                  return data;
                                });
                              }}
                              value={answerCheck[index][index2]}
                            />
                          </div>
                        );
                      })}
                    </dd>
                  </dl>
                </div>
              ))}
              <div className="text-center mb-3">
                <button
                  type="submit"
                  className="btn-success px-3 py-2 rounded-3 fw-bold"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          )}
        </FullScreen>
      </div>
    </div>
  );
};

export default memo(QuizWindow);
