import { memo } from "react";
import TestCard from "../../components/TestCard";

const QuizContent = () => {
  return (
    <div>
      <TestCard />
    </div>
  );
};

export default memo(QuizContent);
