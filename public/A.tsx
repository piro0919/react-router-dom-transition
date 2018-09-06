import * as React from 'react';
import { Link } from 'react-router-dom';

const A: React.SFC = () => (
  <div style={{ backgroundColor: 'yellow' }}>
    <Link to="/">top</Link>
    <Link to="/a">a</Link>
    <Link to="/b">b</Link>
    <Link to="/c">c</Link>
    <p>a</p>
  </div>
);

export default A;
