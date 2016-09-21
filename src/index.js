/**
 * Created by xiajing on 2016/9/21.
 */
import './css/lib/bootstrap.min.css'
import React from 'react'
import { Router, Route, Link ,hashHistory, Redirect, IndexRoute  } from 'react-router'
import  ReactDOM from 'react-dom';
import routes from './router/routeConfigOne.js';

ReactDOM.render(<Router routes={routes}  history={hashHistory}/>,  document.getElementById('app'))