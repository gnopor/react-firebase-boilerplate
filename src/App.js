import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Update from "./pages/Update/Update";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

export default function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/update-profile" component={Update} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
