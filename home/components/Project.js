import React from 'react';
import { Col, Image, Row, Badge } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';

export default ({ name, link, description, git, src }) => (
  <Row className='project'>
    <Col className='image'>
      <iframe src={ src } height={ 200 } width={ 350 }/>
    </Col>
    <Col>
      <a href={ link }>{ name }</a>
      <Badge variant='light'>
        <a href={ git }><AiFillGithub size={ '1.25em' }/> GitHub</a>
      </Badge>
      <p>{ description }</p>
    </Col>
  </Row>
);
