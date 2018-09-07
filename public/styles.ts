import styled from 'styled-components';

const Dl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;

  dd,
  dt {
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-top: 20px;
  }

  dd {
    width: 150px;
  }

  dt {
    width: calc(100% - 150px);

    &.fade .transition-switch {
      > .current {
        opacity: 1;

        &.push,
        &.pop {
          &.do {
            opacity: 0;
          }
        }
      }

      > .next {
        &.push,
        &.pop {
          opacity: 0;

          &.do {
            opacity: 1;
          }
        }
      }
    }

    &.vertical-slide .transition-switch {
      > .current {
        &.push.do {
          transform: translateY(-100%);
        }

        &.pop.do {
          transform: translateY(100%);
        }
      }

      > .next {
        &.push {
          transform: translateY(100%);
        }

        &.pop {
          transform: translateY(-100%);
        }

        &.push,
        &.pop {
          &.do {
            transform: translateY(0);
          }
        }
      }
    }

    &.horizontal-slide .transition-switch {
      > .current {
        &.push.do {
          transform: translateX(-100%);
        }

        &.pop.do {
          transform: translateX(100%);
        }
      }

      > .next {
        &.push {
          transform: translateX(100%);
        }

        &.pop {
          transform: translateX(-100%);
        }

        &.push,
        &.pop {
          &.do {
            transform: translateX(0);
          }
        }
      }
    }

    .one {
      background-color: LightBlue;
    }

    .two {
      background-color: LightGreen;
    }

    a {
      margin: 0 10px;
    }
  }
`;

export default Dl;
