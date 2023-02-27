import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          {/*HomePage*/}
          <Route exact path="/">
            <NavBar/>
            <HomePage/>
          </Route>
          {/*AboutUs*/}
          <Route exact path="/AboutUs">
          <NavBar/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
