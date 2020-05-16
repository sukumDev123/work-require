import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../../styles/Auth.css";
function Auth() {
  return <div className="auth-div">
    <div className="div2auth">
      <div>
        detail
      </div>
      <div>
        <Switch>
          <Route path="/auth/sign-up" component={SignUp}></Route>
          <Route component={SignIn}></Route>
        </Switch>
      </div>
    </div>
  </div>;
}
export default Auth;
