import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar.js";
import HelloWorld from "./components/helloworld.js"
function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <NavBar/>
            <HelloWorld />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
