# react-router-dom-transition

[`react-router-dom-transition`](https://www.npmjs.com/package/react-router-dom-transition) uses [`react-router-dom`](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to enable transition.

## install

`npm i --save react-router-dom-transition`

## usage

```
import { BrowserRouter, Route } from 'react-router-dom';
import TransitionSwitch from 'react-router-dom-transition';

render() {
  return (
    <BrowserRouter>
      /* replace with Switch of react-router-dom */
      <TransitionSwitch duration={300}>
        <Route component="Top" path="/">
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
```
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

## coding image
```
// Your Code
<BrowserRouter>
  <TransitionSwitch duration={300}>
    <Route exact path="/" component={Top} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/about" component={About} />
  </TransitionSwitch>
</BrouserRouter>

// Internal Code
<BrowserRouter>
  <div className={`transition-switch ${className}`} style={{position: relative}}>
    <div className="current" style={{position: absolute}}>
      <Top />
    </div>
  </div>
</BrouserRouter>

// ↓ at PUSH or POP
<BrowserRouter>
  <div className={`transition-switch ${className}`}>
    /* className added is push or pop */
    <div className="next push">
      <Profile />
    </div>
    /* className added is push or pop */
    <div className="current push">
      <Top />
    </div>
  </div>
</BrouserRouter>

// ↓ transition start
<BrowserRouter>
  <div className={`transition-switch ${className}`}>
    /* push or pop */
    <div className="next push do">
      <Profile/ >
    </div>
    /* push or pop */
    <div className="current push do">
      <Top />
    </div>
  </div>
</BrouserRouter>

// ↓ 300ms later, transition complete
<BrowserRouter>
  <div className={`transition-switch ${className}`}>
    <div className="current">
      <Profile />
    </div>
  </div>
</BrouserRouter>
```
