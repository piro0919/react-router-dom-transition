import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import Top from './Top';
import Switch from '../src';

ReactDOM.render(
  <div style={{ height: '300px', width: '300px' }}>
    <BrowserRouter>
      <Switch duration={10000}>
        <Route exact path="/a" component={A} />
        <Route exact path="/b" component={B} />
        <Route exact path="/c" component={C} />
        <Route path="/" component={Top} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('app')
);
