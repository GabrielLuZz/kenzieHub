import { Route, Switch } from "react-router-dom";
import Authenticate from "../pages/Authenticate";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/authenticate">
        <Authenticate />
      </Route>
    </Switch>
  );
};

export default Routes;
