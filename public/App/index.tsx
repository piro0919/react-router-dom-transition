import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import SimpleReactPopup from 'simple-react-popup';
import A from './A';
import B from './B';
import C from './C';
import Div, { PopupDiv } from './styles';
import TransitionSwitch from '../../src';

const duration = 500;
const routes = [
  <Route component={B} exact={true} key="b" path="/b" />,
  <Route component={C} exact={true} key="c" path="/c" />,
  <Route component={A} key="a" path="/" />
];
const App = () => (
  <Div>
    <main className="main">
      <h1>react-router-dom-transition examples</h1>
      <dl className="wrapper">
        <dt>
          example 1 (
          <SimpleReactPopup
            contents={
              <PopupDiv>
                <div
                  className="inner"
                  dangerouslySetInnerHTML={{
                    __html: `
.example1 {
  .current {
    opacity: 1;

    &.push,
    &.pop {
      &.do {
        opacity: 0;
      }
    }
  }

  .next {
    &.push,
    &.pop {
      opacity: 0;

      &.do {
        opacity: 1;
      }
    }
  }
}
              `
                      .replace(/ /g, '\u00a0\u00a0')
                      .replace(/[\n\r]/g, '<br />')
                  }}
                />
              </PopupDiv>
            }
          >
            code
          </SimpleReactPopup>
          )
        </dt>
        <dd>
          <div className="content">
            <TransitionSwitch className="example1" duration={duration}>
              {routes}
            </TransitionSwitch>
          </div>
        </dd>
        <dt>
          example 2 (
          <SimpleReactPopup
            contents={
              <PopupDiv>
                <div
                  className="inner"
                  dangerouslySetInnerHTML={{
                    __html: `
.example2 {
  .current {
    top: 0;

    &.push.do {
      top: -100%;
    }

    &.pop.do {
      top: 100%;
    }
  }

  .next {
    &.push {
      top: 100%;
    }

    &.pop {
      top: -100%;
    }

    &.push,
    &.pop {
      &.do {
        top: 0;
      }
    }
  }
}
              `
                      .replace(/ /g, '\u00a0\u00a0')
                      .replace(/[\n\r]/g, '<br />')
                  }}
                />
              </PopupDiv>
            }
          >
            code
          </SimpleReactPopup>
          )
        </dt>
        <dd>
          <div className="content">
            <TransitionSwitch className="example2" duration={duration}>
              {routes}
            </TransitionSwitch>
          </div>
        </dd>
        <dt>
          example 3 (
          <SimpleReactPopup
            contents={
              <PopupDiv>
                <div
                  className="inner"
                  dangerouslySetInnerHTML={{
                    __html: `
.example3 {
  .current {
    left: 0;

    &.push.do {
      left: -100%;
    }

    &.pop.do {
      left: 100%;
    }
  }
}
              `
                      .replace(/ /g, '\u00a0\u00a0')
                      .replace(/[\n\r]/g, '<br />')
                  }}
                />
              </PopupDiv>
            }
          >
            code
          </SimpleReactPopup>
          )
        </dt>
        <dd>
          <div className="content">
            <TransitionSwitch className="example3" duration={duration}>
              {routes}
            </TransitionSwitch>
          </div>
        </dd>
        <dt>
          example 4 (
          <SimpleReactPopup
            contents={
              <PopupDiv>
                <div
                  className="inner"
                  dangerouslySetInnerHTML={{
                    __html: `
.example4 {
  .current {
    transform: rotateZ(0deg);
    transform-origin: bottom right;

    &.push.do {
      transform: rotateZ(-90deg);
    }

    &.pop.do {
      transform: rotateZ(90deg);
    }
  }

  .next {
    transform-origin: bottom right;

    &.push {
      transform: rotateZ(90deg);
    }

    &.pop {
      transform: rotateZ(-90deg);
    }

    &.push,
    &.pop {
      &.do {
        transform: rotateZ(0deg);
      }
    }
  }
}
              `
                      .replace(/ /g, '\u00a0\u00a0')
                      .replace(/[\n\r]/g, '<br />')
                  }}
                />
              </PopupDiv>
            }
          >
            code
          </SimpleReactPopup>
          )
        </dt>
        <dd>
          <div className="content">
            <TransitionSwitch className="example4" duration={duration}>
              {routes}
            </TransitionSwitch>
          </div>
        </dd>
        <dt>
          example 5 (
          <SimpleReactPopup
            contents={
              <PopupDiv>
                <div
                  className="inner"
                  dangerouslySetInnerHTML={{
                    __html: `
.example5 {
  &::before {
    top: -50%;
    transition-duration: 500ms;
  }

  &::after {
    bottom: -50%;
    transition-duration: 500ms;
  }

  &::before,
  &::after {
    background-color: gray;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  &.do {
    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }
}
                    `
                      .replace(/ /g, '\u00a0\u00a0')
                      .replace(/[\n\r]/g, '<br />')
                  }}
                />
              </PopupDiv>
            }
          >
            code
          </SimpleReactPopup>
          )
        </dt>
        <dd>
          <div className="content">
            <TransitionSwitch className="example5" duration={duration}>
              {routes}
            </TransitionSwitch>
          </div>
        </dd>
      </dl>
    </main>
    <nav className="menu">
      <ul>
        <li>
          <Link to="a">A</Link>
        </li>
        <li>
          <Link to="b">B</Link>
        </li>
        <li>
          <Link to="c">C</Link>
        </li>
      </ul>
    </nav>
  </Div>
);

export default App;
