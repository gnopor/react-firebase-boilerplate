import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Update from "./pages/Update/Update";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// credential instance:
// email: blaise@blaise.com
// password: 123456789

export default function App() {
  return (
    <AuthProvider>
      <div id="app">
        <BrowserRouter>
          <Header></Header>

          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/update-profile" component={Update} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>

          <Footer></Footer>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}
