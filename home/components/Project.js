import React from 'react';
import { Col, Image, Row, Badge } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';

export default ({ name, link, description, git }) => (
  <Row className='project'>
    <Col className='image'>
      <Image height={ 200 } width={ 350 } src={ 'static/website_preview.png' }/>
    </Col>
    <Col>
      <a href={ link }>{ name }</a>
      <Badge variant='light'>
        <a href={ git }><AiFillGithub size={ '1.25em' }/> Git</a>
      </Badge>
      <p>{ description }</p>
    </Col>
  </Row>
);
