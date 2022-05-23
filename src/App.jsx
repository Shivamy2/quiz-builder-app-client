import React, { memo, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Auth from "./pages/auth/Auth";
import { axiosRequest, axiosResponse } from "./services/httpService";
import MainDisplay from "./pages/MainDisplayPage/MainDisplay";
import { store } from "./store/store";
import { fetchUser } from "./thunk/auth.thunk";
import { useSelector } from "react-redux";
import { authId } from "./constants/constants";
import { userDataSelector } from "./selectors/auth.selector";

axiosRequest();
axiosResponse();

const App = () => {
  const id = authId;
  const user = useSelector(userDataSelector);
  useEffect(() => {
    if (!id) return;
    store.dispatch(fetchUser());
  }, []); //eslint-disable-line

  console.log("user", user);

  if (id && !user[0]) {
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
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            {user[0] ? (
              <Redirect to={"/dashboard"} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path={["/login", "/signup"]}>
            {user[0] ? <Redirect to={"/dashboard"} /> : <Auth />}
          </Route>
          <Route exact path={["/dashboard", "/quiz"]}>
            {user[0] ? <MainDisplay /> : <Redirect to="/login" />}
          </Route>
          <Route path={"/"}>Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default memo(App);
