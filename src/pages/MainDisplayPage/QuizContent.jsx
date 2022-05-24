import { memo, useEffect } from "react";
import TestCard from "../../components/TestCard";
import { store, useAppSelector } from "../../store/store";
import {
  quizDataSelector,
  quizFetchErrorSelector,
  quizFetchLoadingSelector,
} from "../../selectors/quiz.selector";
import { fetchQuiz } from "../../thunk/quiz.thunk";
import copy from "copy-to-clipboard";

const QuizContent = () => {
  const quizes = useAppSelector(quizDataSelector);
  const loading = useAppSelector(quizFetchLoadingSelector);
  const errorMessage = useAppSelector(quizFetchErrorSelector);
  console.log("Quizes", quizes);
  useEffect(() => {
    console.log("UserEffect called");
    store.dispatch(fetchQuiz());
  }, []);

  return (
    <div className="my-5">
      {loading && (
        <div
          style={{ height: "25vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="pulse "></div>
        </div>
      )}
      <div className="mx-auto container p-0 m-0 row g-2">
        {quizes.length ? (
          quizes.map((quiz, index) => (
            <TestCard
              className={"col-10 col-md-5"}
              onClick={() => {
                const link = window.location.origin + "/quiz/" + quiz._id;
                copy(link);
                alert(`Link Copied: ${link}`);
              }}
              key={index}
              title={quiz.title}
              numberOfQuestions={quiz?.questions?.length}
            />
          ))
        ) : (
          <div className="text-center text-danger fs-2 fw-bold">
            You don't have any quiz to share link
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(QuizContent);
