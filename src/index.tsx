import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  match,
  matchPath,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import * as $ from 'jquery';
import styled from 'styled-components';

export interface SwitchProps extends RouteComponentProps<any> {
  children: React.ReactNode;
  duration?: number;
}

const Div = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  > .transition {
    height: 100%;
    position: absolute;
    width: 100%;

    &.push,
    &.pop {
      // TODO: どうやって設定するか…
      transition: 1000ms;
    }

    &.current {
      top: 0;

      &.push.do {
        top: -100%;
      }

      &.pop.do {
        top: 100%;
      }
    }

    &.next {
      &.push {
        top: 100%;

        &.do {
          top: 0;
        }
      }

      &.pop {
        top: -100%;

        &.do {
          top: 0;
        }
      }
    }
  }
`;

const getCloneElement = ({ children, location, match }: SwitchProps) => {
  let computedMatch: match<{}> | null = null;
  let child: React.ReactElement<{}> = <React.Fragment />;

  React.Children.forEach(children, element => {
    if (computedMatch !== null || !React.isValidElement(element)) {
      return;
    }

    const { props } = element;

    child = element;
    computedMatch = matchPath(location.pathname, props, match);
  });

  return computedMatch
    ? // TODO: 型が合ってない
      React.cloneElement(child, { location, computedMatch })
    : null;
};

class Switch extends React.Component<SwitchProps, any> {
  constructor(props: SwitchProps) {
    super(props);

    this.state = {
      action: '',
      currentDom: getCloneElement(props),
      nextDom: null
    };
  }

  componentDidUpdate(prevProps: SwitchProps) {
    if (prevProps.location.pathname === this.props.location.pathname) {
      return;
    }

    const {
      duration,
      history: { action }
    } = this.props;

    this.setState(
      {
        action: action.toLowerCase(),
        nextDom: getCloneElement(this.props)
      },
      () => {
        setTimeout(() => {
          $('.transition').addClass('do');

          setTimeout(() => {
            $('.transition').removeClass('do');

            this.setState({
              action: '',
              currentDom: this.state.nextDom,
              nextDom: null
            });
          }, duration === undefined ? 1000 : duration);
        }, 0); // TODO: なんとかしたい
      }
    );

    return;
  }

  render() {
    const { action, currentDom, nextDom } = this.state;

    return (
      <Div>
        <div className={`transition next ${action}`}>{nextDom}</div>
        <div className={`transition current ${action}`}>{currentDom}</div>
      </Div>
    );
  }
}

export default withRouter(Switch);
