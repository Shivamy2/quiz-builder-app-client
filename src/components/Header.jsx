import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userDataSelector } from "../selectors/auth.selector";
import { FiLogOut } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import "./style/header.css";
import fields from "../services/httpService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const history = useHistory();
  const firstLetter = useSelector(userDataSelector)[0].first_name.substring(
    0,
    1
  );
  return (
    <div className="header bg-primary dashboard-header sticky-top">
      <div className="pt-2 d-flex justify-content-between px-2 px-md-4">
        <div className="my-auto">
          <Link
            className="text-uppercase text-decoration-none fw-bold fs-3 text-white"
            to={"/dashboard"}
          >
            Quiz Builder App
          </Link>
        </div>
        <div className="d-flex">
          <div
            className="my-auto me-2 me-md-3"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/dashboard")}
          >
            <AiFillHome size={25} color="white" />
          </div>
          <div
            className="my-auto me-2 me-md-3"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/upload")}
          >
            <BsUpload size={25} color="white" />
          </div>
          <div
            className="my-auto me-2 me-md-3"
            style={{ cursor: "pointer" }}
            onClick={() => fields.logout()}
          >
            <FiLogOut size={25} color="white" />
          </div>
          <div className="dashboard-header__profile bg-warning rounded-circle my-auto">
            <div className="d-flex justify-content-center fs-3 fw-bold text-primary">
              {firstLetter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
