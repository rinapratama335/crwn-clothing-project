import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/hompage/homepage";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
