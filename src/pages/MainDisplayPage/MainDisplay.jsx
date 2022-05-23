import { memo } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Header from "../../components/Header";
import DashboardPage from "./Dashboard.page";
import QuizContent from "./QuizContent";

const MainDisplay = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
        <Route exact path="/quiz">
          <QuizContent />
        </Route>
      </Switch>
    </>
  );
};

export default memo(MainDisplay);
