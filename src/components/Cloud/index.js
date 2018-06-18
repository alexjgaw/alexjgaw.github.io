import React from 'react';
import './index.css';
import cloud from '../../images/cloud1.svg';

const Cloud = (props) => {
  return (
    <object className="cloud" type="image/svg+xml" data={cloud}>Your browser does not support SVG</object>
  );
};

export default Cloud;
