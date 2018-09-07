import TransitionSwitch from '../src';
import styled from 'styled-components';

const Switch = styled(TransitionSwitch)`
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
`;

export default Switch;
