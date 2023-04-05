import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import DeleteUser from "./DeleteUser";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route path='/' exact ><App /></Route>
      <Route path='/add'><Form /></Route>
      <Route path='/delete'><DeleteUser /></Route>
    </Switch>
  </Router>

);