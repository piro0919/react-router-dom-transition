import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import A from './A';
import B from './B';
import C from './C';
import Top from './Top';
import TransitionSwitch from './style';

ReactDOM.render(
  <div style={{ height: '300px', width: '300px' }}>
    <BrowserRouter>
      <TransitionSwitch duration={500}>
        <Route exact path="/a" component={A} />
        <Route exact path="/b" component={B} />
        <Route exact path="/c" component={C} />
        <Route path="/" component={Top} />
      </TransitionSwitch>
    </BrowserRouter>
  </div>,
  document.getElementById('app')
);
