import testLogo from "../images/quiz-card.png";
import { BiRightArrow } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { memo } from "react";

const TestCard = ({ title, onClick, numberOfQuestions }) => {
  return (
    <div className="p-6 mx-auto bg-gray-100 w-96 rounded-xl border-2 border-black ">
      <div className="flex">
        <div>
          <img
            className="w-72 rounded-full border-2 border-black"
            src={testLogo}
            alt="test-logo"
          />
        </div>
        <div className="ml-3">
          <p className="font-bold text-xl">{title}</p>
        </div>
      </div>
      <hr className="mt-5 border-2 border-black border-dotted" />
      <div className="pt-4 flex justify-between font-bold" onClick={onClick}>
        <div className="flex">
          <div className="my-auto">
            <BiRightArrow fontSize={20} color="blue" />
          </div>
          <p className="ml-2 my-auto">{numberOfQuestions} Questions</p>
        </div>
        <div className="flex cursor-pointer bg-orange-600 text-white px-8 py-4 rounded-full">
          <div className="my-auto">
            <AiOutlinePlayCircle fontSize={25} color="green" />
          </div>
          <em className="ml-2">Take Test</em>
        </div>
      </div>
    </div>
  );
};

export default memo(TestCard);
