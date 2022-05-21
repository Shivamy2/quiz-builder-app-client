import { memo } from "react";
import InputField from "../../components/InputField";
import { MdTitle } from "react-icons/md";
import "../style/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard w-50 mx-auto text-center">
      <h1 className="mt-2 fw-bold text-muted">Create Quiz</h1>
      <div className="mt-4">
        <InputField type="text" placeholder="Enter Title">
          <MdTitle size={25} className="mt-2" />
        </InputField>
      </div>
    </div>
  );
};

export default memo(Dashboard);
