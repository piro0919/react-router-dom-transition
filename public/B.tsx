import * as React from 'react';
import { Link } from 'react-router-dom';

const B: React.SFC = () => (
  <div style={{ backgroundColor: 'gray' }}>
    <Link to="/">top</Link>
    <Link to="/a">a</Link>
    <Link to="/b">b</Link>
    <Link to="/c">c</Link>
    <p>b</p>
    <input />
  </div>
);

export default B;
