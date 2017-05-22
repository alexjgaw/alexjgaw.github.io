import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const CircleImg = (props) => {
  return (
    <div className="CircleImg big">
      <img src={props.path} alt={props.altString} />
    </div>
  );
};

export default CircleImg;

CircleImg.propTypes = {
  path: PropTypes.string.isRequired,
  altString: PropTypes.string.isRequired
};
