import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/auth" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
