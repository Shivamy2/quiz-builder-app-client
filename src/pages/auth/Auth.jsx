import { memo } from "react";
import { Switch, Route } from "react-router-dom";
import LogInPage from "./LogIn.page";
import SignUpPage from "./SignUp.page";

const Auth = () => {
  return (
    <div className="d-flex h-100">
      <Switch>
        <Route path={"/login"}>
          <LogInPage />
        </Route>
        <Route path={"/signup"}>
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  );
};

export default memo(Auth);
