import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'ress';
import A from './A';
import B from './B';
import C from './C';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/a" render={A} />
      <Route exact path="/b" render={B} />
      <Route exact path="/c" render={C} />
      <Route path="/">
        {() => (
          <>
            <Link to="/a">a</Link>
            <Link to="/b">b</Link>
            <Link to="/c">c</Link>
          </>
        )}
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
