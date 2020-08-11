import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

export default ({ name, link, description, git }) => (
  <Row className='project'>
    <Col className='image'>
      <Image height={ 200 } width={ 350 } src={ 'static/website_preview.png' }/>
    </Col>
    <Col>
      <a href={ link }>{ name }</a>
      <a href={ git }><Image src='static/zeit.png' height={ 20 }/></a>
      <p>{ description }</p>
    </Col>
  </Row>
);