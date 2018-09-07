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
    font-size: 14px;
    width: 200px;
  }

  dt {
    width: calc(100% - 200px);

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

    &.horizontal-slide .transition-switch {
      > .current {
        left: 0;

        &.push.do {
          left: -100%;
        }

        &.pop.do {
          left: 100%;
        }
      }

      > .next {
        &.push {
          left: 100%;
        }

        &.pop {
          left: -100%;
        }

        &.push,
        &.pop {
          &.do {
            left: 0;
          }
        }
      }
    }

    &.vertical-cover .transition-switch {
      > .current {
        top: 0;

        &.push.do {
          top: -100%;
        }

        &.pop.do {
          top: 100%;
        }
      }
    }

    &.horizontal-cover .transition-switch {
      > .current {
        left: 0;

        &.push.do {
          left: -100%;
        }

        &.pop.do {
          left: 100%;
        }
      }
    }

    &.vertical-wrapper .transition-switch {
      > .next {
        top: 100%;

        &.push,
        &.pop {
          z-index: 2;

          &.do {
            top: 0;
          }
        }
      }
    }

    &.horizontal-wrapper .transition-switch {
      > .next {
        left: 100%;

        &.push,
        &.pop {
          z-index: 2;

          &.do {
            left: 0;
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
