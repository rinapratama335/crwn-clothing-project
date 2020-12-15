import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/hompage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header.components";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
