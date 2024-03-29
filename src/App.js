import "./style/app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTER from "./router/router";
import { Basket, Home, Restaurant } from "./pages";

const App = () => {
  const { KORNER, BASKET, HOME } = ROUTER;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={HOME}>
            <Home />
          </Route>
          <Route exact path={KORNER}>
            <Restaurant />
          </Route>
          <Route exact path={BASKET}>
            <Basket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
