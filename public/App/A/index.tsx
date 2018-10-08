import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  background-color: pink;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const A: React.SFC = () => <Div>A</Div>;

export default A;
