import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./components/pages/saved";
import Searched from "./components/pages/searched";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Background> */}
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route exact path="/searched">
              <Searched />
            </Route>
            <Route exact path="/">
              <Saved />
            </Route>
          {/* </Background> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
