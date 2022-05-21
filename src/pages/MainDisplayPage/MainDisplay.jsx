import { memo } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "../../components/Header";
import DashboardPage from "./Dashboard.page";

const MainDisplay = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route to="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </>
  );
};

export default memo(MainDisplay);
