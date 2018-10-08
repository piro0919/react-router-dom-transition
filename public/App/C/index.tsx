import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const C: React.SFC = () => <Div>C</Div>;

export default C;
