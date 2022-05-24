import { memo } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const QuizWindow = () => {
  const { id } = useParams();
  return <div>This is quiz window {id}</div>;
};

export default memo(QuizWindow);
