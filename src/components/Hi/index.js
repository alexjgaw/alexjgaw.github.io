import React from 'react';
import cloudinary from 'cloudinary';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import CircleImg from '../CircleImg';
import alex from '../../images/alex.jpg';
import './index.css';

const Hi = () => {
  const bgImg = cloudinary.url('cosmic-timetraveler-221383_a0hcsh',
    {
      width: 1500,
      crop: 'crop',
      opacity: 20,
      gravity: 'south'
    });
  const jumbotronStyle = {
    backgroundImage: 'url(' + bgImg + ')',
    backgroundColor: 'rgba(255,255,255,0.1)',
    backgroundBlendMode: 'luminosity'
  };

  return (
    <div id="Hi">
      <Jumbotron style={jumbotronStyle}>
        <Row>
          <Col md={4}>
            <CircleImg path={alex} altString="Picture of Alex's smiling face." />
          </Col>
          <Col md={8}>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style
              component for calling extra attention to featured content or information.
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Hi;
