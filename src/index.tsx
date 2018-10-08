import * as React from 'react';
import {
  match,
  matchPath,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import Div from './styles';

export interface SwitchProps extends RouteComponentProps<any> {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

interface SwitchState {
  action: string;
  currentDom: React.ReactElement<any> | null;
  nextDom: React.ReactElement<any> | null;
}

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

class TransitionSwitch extends React.Component<SwitchProps, SwitchState> {
  refCurrent: React.RefObject<HTMLDivElement>;
  refNext: React.RefObject<HTMLDivElement>;
  refSwitch: React.RefObject<HTMLDivElement>;

  constructor(props: SwitchProps) {
    super(props);

    this.refCurrent = React.createRef<HTMLDivElement>();
    this.refNext = React.createRef<HTMLDivElement>();
    this.refSwitch = React.createRef<HTMLDivElement>();
    this.state = {
      action: '',
      currentDom: getCloneElement(props),
      nextDom: null
    };
  }

  componentDidUpdate(prevProps: SwitchProps) {
    const {
      location: { pathname: prevPathname }
    } = prevProps;
    const {
      duration,
      history: { action },
      location: { pathname }
    } = this.props;
    const { action: stateAction, nextDom } = this.state;

    if (prevPathname === pathname && stateAction === '') {
      return;
    }

    if (prevPathname !== pathname) {
      this.setState({
        action: action.toLowerCase(),
        nextDom: getCloneElement(this.props)
      });

      return;
    }

    if (!stateAction.includes('do')) {
      setTimeout(() => {
        this.refCurrent.current!.style.transitionDuration = duration
          ? `${duration}ms`
          : null;
        this.refNext.current!.style.transitionDuration = duration
          ? `${duration}ms`
          : null;
        this.refSwitch.current!.style.transitionDuration = duration
          ? `${duration}ms`
          : null;

        this.setState({ action: `${stateAction} do` });
      }, 250); // ここをなんとか…

      return;
    }

    setTimeout(() => {
      this.refCurrent.current!.style.transitionDuration = null;
      this.refNext.current!.style.transitionDuration = null;
      this.refSwitch.current!.style.transitionDuration = null;

      this.setState({
        action: '',
        currentDom: nextDom,
        nextDom: null
      });
    }, duration || 0);
  }

  render() {
    const { className, ...props } = this.props;
    const { action, currentDom, nextDom } = this.state;

    return (
      <Div
        {...props}
        className={`transition-switch ${className || ''} ${action}`}
        innerRef={this.refSwitch}
      >
        <div className={`next ${action}`} ref={this.refNext}>
          {nextDom}
        </div>
        <div className={`current ${action}`} ref={this.refCurrent}>
          {currentDom}
        </div>
      </Div>
    );
  }
}

export default withRouter(TransitionSwitch);
