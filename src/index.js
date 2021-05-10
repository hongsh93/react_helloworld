import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./index.css"

// core components
import Dashboard from "./layouts/Dashboard.js"

const hist = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Redirect from="/*" to="/dashboard/home" />
        </Switch>
    </BrowserRouter>,
    document.querySelector('#root')
)
