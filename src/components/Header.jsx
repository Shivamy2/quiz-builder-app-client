import { memo } from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

const Header = () => {
  return (
    <div className="header bg-primary dashboard-header">
      <div className="pt-2 d-flex justify-content-between px-2 px-md-4">
        <div>
          <Link
            className="text-uppercase text-decoration-none fw-bold fs-3 text-white"
            to={"/dashboard"}
          >
            Quiz Builder App
          </Link>
        </div>
        <div>
          <div className="dashboard-header__profile bg-warning rounded-circle">
            <span className="d-flex justify-content-center fs-3 fw-bold text-primary">
              S
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
