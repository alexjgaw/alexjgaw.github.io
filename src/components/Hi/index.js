import React from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import CircleImg from '../CircleImg';
import alex from '../../images/alex.jpg';

const Hi = () => {
  return (
    <div id="Hi">
      <Jumbotron>
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
