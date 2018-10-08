import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  align-items: center;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const B: React.SFC = () => <Div>B</Div>;

export default B;
