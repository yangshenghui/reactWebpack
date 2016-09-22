/**
 * Created by xiajing on 2016/9/21.
 */
import './css/lib/bootstrap.min.css'
import React from 'react'
import { Router, Route, Link ,hashHistory, IndexRoute  } from 'react-router'
import  ReactDOM from 'react-dom';
import routes from './router/routeConfigTwo.js';
import './css/main.css';
ReactDOM.render(<Router routes={routes}  history={hashHistory}/>,  document.getElementById('entryTwo'))


