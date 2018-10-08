import styled from 'styled-components';

export const PopupDiv = styled.div`
  align-items: center;
  display: flex;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  height: 100%;
  justify-content: center;

  .inner {
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    color: white;
    padding: 0px 40px;
  }
`;

const Div = styled.div`
  display: flex;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;

  .main {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    width: calc(100% - 100px);

    > h1 {
      padding: 40px 0;
    }

    > h1,
    .wrapper {
      max-width: 640px;
      width: 100%;
    }

    .wrapper {
      dt {
        display: flex;
        padding-bottom: 10px;
      }

      dd {
        margin-bottom: 40px;
        position: relative;

        &::before {
          content: '';
          display: block;
          padding-top: 56.25%;
        }

        .content {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;

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
        }
      }
    }
  }

  .menu {
    background-color: darkgray;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    width: 100px;

    > ul {
      list-style: none;

      > li {
        height: 50px;
        line-height: 50px;
        text-align: center;

        a {
          color: white;
          display: block;
        }
      }
    }
  }
`;

export default Div;
