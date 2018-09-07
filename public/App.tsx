import * as React from 'react';
import Dl from './styles';
import { Link, Route } from 'react-router-dom';
import Switch from '../src';

const duration = 1000;

const App = () => (
  <React.Fragment>
    <Dl>
      <dd>Fade</dd>
      <dt className="fade">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
      <dd>Vertical Slide</dd>
      <dt className="vertical-slide">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
      <dd>Horizontal Slide</dd>
      <dt className="horizontal-slide">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
      <dd>Vertical Cover</dd>
      <dt className="vertical-cover">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
      <dd>Horizontal Cover</dd>
      <dt className="horizontal-cover">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
      <dd>Vertical Wrapper</dd>
      <dt className="vertical-wrapper">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
      <dd>Horizontal Wrapper</dd>
      <dt className="horizontal-wrapper">
        <Switch duration={duration}>
          <Route
            exact
            path="/"
            render={() => (
              <div className="one">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
          <Route
            exact
            path="/transition"
            render={() => (
              <div className="two">
                <Link to="/">1</Link>
                <Link to="/transition">2</Link>
              </div>
            )}
          />
        </Switch>
      </dt>
    </Dl>
    <p style={{ margin: '10px' }}>
      If you make a good transition, please contact me.
    </p>
  </React.Fragment>
);

export default App;
