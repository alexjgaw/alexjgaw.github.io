import React from 'react';
import './index.css';
import hill from '../../images/hill.svg';

const Hill = (props) => {
  return (
      <div id="hill">
        <object type="image/svg+xml" data={hill}>Your browser does not support SVG</object>
      </div>
  );
};

export default Hill;
