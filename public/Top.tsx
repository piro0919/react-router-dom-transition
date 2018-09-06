import * as React from 'react';
import { Link } from 'react-router-dom';

const Top: React.SFC = () => (
  <div style={{ backgroundColor: 'red' }}>
    <Link to="/">top</Link>
    <Link to="/a">a</Link>
    <Link to="/b">b</Link>
    <Link to="/c">c</Link>
    <p>top</p>
  </div>
);

export default Top;
