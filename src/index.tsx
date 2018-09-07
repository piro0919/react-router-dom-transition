import * as React from 'react';
import {
  match,
  matchPath,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import styled from 'styled-components';

export interface SwitchProps extends RouteComponentProps<any> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const Div = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  > div {
    height: 100%;
    position: absolute;
    width: 100%;

    &.push,
    &.pop {
      transition: ${({ duration }: SwitchProps) =>
        duration === undefined ? 0 : duration}ms;
    }
  }
`;

const getCloneElement = ({ children, location, match }: SwitchProps) => {
  let computedMatch: match<{}> | null = null;
  let child: React.ReactElement<any> = <React.Fragment />;

  React.Children.forEach(children, element => {
    if (computedMatch !== null || !React.isValidElement(element)) {
      return;
    }

    const { props } = element;

    child = element;
    computedMatch = matchPath(location.pathname, props, match);
  });

  return computedMatch
    ? React.cloneElement(child, { location, computedMatch })
    : null;
};

class TransitionSwitch extends React.Component<SwitchProps, any> {
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
          const { action, nextDom } = this.state;

          this.setState(
            {
              action: `${action} do`
            },
            () => {
              setTimeout(() => {
                this.setState({
                  action: '',
                  currentDom: nextDom,
                  nextDom: null
                });
              }, duration === undefined ? 0 : duration);
            }
          );
        }, 100); // HELP ME!: want to remove...
      }
    );

    return;
  }

  render() {
    const { className, ...props } = this.props;
    const { action, currentDom, nextDom } = this.state;

    return (
      <Div {...props} className={`transition-switch ${className || ''}`}>
        <div className={`next ${action}`}>{nextDom}</div>
        <div className={`current ${action}`}>{currentDom}</div>
      </Div>
    );
  }
}

export default withRouter(TransitionSwitch);
