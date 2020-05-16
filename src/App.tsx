import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import UserPage from "./components/user-page/UserPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/user-page" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
