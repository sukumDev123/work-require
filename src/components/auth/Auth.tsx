import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../../styles/Auth.css";
const Auth = () =>
  <div className="auth-div">
    <div className="div2auth">
      <div>
        <div>
          <h3 className="text-center">The Work Planning</h3>
          <h5
            className="text-center"
          >
            The Work Planning is created for manage task.
          </h5>
          <p>
            When task are comming. I has my team, and My team is choose some of task to work and update tash to show team.
          </p>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/auth/sign-up" component={SignUp}></Route>
          <Route component={SignIn}></Route>
        </Switch>
      </div>
    </div>
  </div>;
export default Auth;
