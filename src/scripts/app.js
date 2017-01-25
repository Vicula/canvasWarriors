// console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Home from './pages/home'
import Landing from './pages/landing'
import Test from './pages/test'

const app = document.getElementById('mount');


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Landing}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="test" component={Test}></Route>
    </Route>
  </Router>,
app)
