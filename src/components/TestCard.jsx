import testLogo from "../images/quiz-card.png";
import { BiRightArrow } from "react-icons/bi";
import { AiOutlineCopy } from "react-icons/ai";
import { memo } from "react";
import "./style/testCard.css";

const TestCard = ({ title, onClick, numberOfQuestions, className }) => {
  return (
    <div
      className={
        "test-card p-3 mx-auto bg-muted rounded-3 border border-2 border-dark " +
        className
      }
    >
      <div className="d-flex">
        <div>
          <img
            className="test-card__logo rounded-circle border border-2 border-dark"
            src={testLogo}
            alt="test-logo"
          />
        </div>
        <div className="ms-3  my-auto">
          <p className="fw-bold fs-4 my-auto">{title}</p>
        </div>
      </div>
      <hr className="mt-3 border border-1 border-primary" />
      <div
        className="pt-2 d-flex justify-content-between fw-bold"
        onClick={onClick}
      >
        <div className="d-flex">
          <div className="my-auto">
            <BiRightArrow fontSize={20} color="blue" />
          </div>
          <p className="ms-1 my-auto">{numberOfQuestions} Questions</p>
        </div>
        <div
          className="d-flex bg-danger text-white px-3 py-2 rounded-3"
          style={{ cursor: "pointer" }}
        >
          <div className="my-auto">
            <AiOutlineCopy fontSize={25} color="white" />
          </div>
          <em className="ms-2">Copy Link</em>
        </div>
      </div>
    </div>
  );
};

export default memo(TestCard);
