import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';

type ProjectProps = {
  name: string;
  link: string;
  description: string;
  git: string;
  src: string;
};

export default ({ name, link, description, git, src }: ProjectProps) => (
  <Row className="project">
    <Col className="image">
      <iframe src={src} height={200} width={350} />
    </Col>
    <Col>
      <a href={link}>{name}</a>
      <Badge bg="light">
        <a href={git}>
          <AiFillGithub size={'1.25em'} /> GitHub
        </a>
      </Badge>
      <p>{description}</p>
    </Col>
  </Row>
);
