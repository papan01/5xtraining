import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container">
    <div className="row">
      <h1 style={{ fontSize: '2rem' }}>Not found :(</h1>
      <div>
        <Link to="/">
          <i className="far fa-arrow-alt-circle-left fa-3x" />
          <span style={{ fontSize: '2rem' }}>回到首頁</span>
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
