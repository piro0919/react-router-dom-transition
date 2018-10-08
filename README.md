# react-router-dom-transition

[`react-router-dom-transition`](https://www.npmjs.com/package/react-router-dom-transition) uses [`react-router-dom`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to enable transition.

## install

`npm i --save react-router-dom-transition`

## usage

``` js
import { BrowserRouter, Route } from 'react-router-dom';
import TransitionSwitch from 'react-router-dom-transition';

render() {
  return (
    <BrowserRouter>
      /* replace with Switch of react-router-dom */
      <TransitionSwitch duration={300}>
        <Route component="Top" path="/" />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
      </TransitionSwitch>
    </BrowserRouter>
  );
}

```

## example

[react-router-dom-transition](https://piro0919.github.io/react-router-dom-transition/)

## props

- children: Route Components from react-router-dom
- className?: To be added to parent dom
- duration: duration time(ms)

## classNames

- transition-switch: parent dom
- current: wrapper dom of current route component
- next: wrapper dom of next route component
- push: wrapper doms of route components at PUSH
- pop: wrapper doms of route components at POP
- do: wrapper doms of route components at transition start

## style example

``` css
.transition-switch {
  > .current {
    top: 0;

    &.push.do {
      top: -100%;
    }

    &.pop.do {
      top: 100%;
    }
  }

  > .next {
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
```
