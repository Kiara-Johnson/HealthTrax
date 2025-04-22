import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Landing from "./landing";
import Log from "./symptom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={Home} />
        <Route path="/landing" element={Landing} />
        <Route path="/symptom" element={Log} />
      </Switch>
    </Router>
  );
}

export default App;

//login auth

//login upon successful auth goes to landing.html



