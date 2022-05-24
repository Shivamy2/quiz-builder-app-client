import { memo } from "react";
import "../style/dashboard.css";
import QuizContent from "./QuizContent";

const Dashboard = () => {
  return (
    <div>
      <QuizContent />
    </div>
  );
};

export default memo(Dashboard);
