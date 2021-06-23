import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from './pages/About/AboutUs';
import Community from './pages/Community/Community';
import Wall from './pages/Wall/Wall';
import Funding from './pages/Funding/Funding';
import FAQ from './pages/FAQ/FAQ';
import Contest from './pages/Contest/Contest';
import NotFound from './pages/NotFound/NotFound';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


import 'bulma/css/bulma.min.css';


ReactDOM.render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/about" component={AboutUs} />
            <Route path="/community" component={Community} />
            <Route path="/dreams" component={Wall} />
            <Route path="/funding" component={Funding} />
            <Route path="/faq" component={FAQ} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
