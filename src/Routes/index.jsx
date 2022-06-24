import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Authenticate from "../pages/Authenticate";
import Home from "../pages/Home";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Hub:token"));
    console.log(token);

    if (token) {
      setAuthenticated(true);
    } else {
      history.push("/authenticate");
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/authenticate">
        <Authenticate
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
