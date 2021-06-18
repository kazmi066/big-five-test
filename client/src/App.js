import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prediction from "./Prediction/Prediction";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prediction" component={Prediction} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
