import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';

export default () => {
  const projects = [
    {
      name: 'ArmyBuilder',
      link: '/armybuilder',
      src: 'https://armybuilder.lensesrequired.com',
      git: 'https://armybuilder.lensesrequired.com',
      description: 'An app that allows you to build armies from the WarHammer 40k indexes'
    }, {
      name: 'FicDesigner',
      link: '/ficdesigner',
      src: 'https://ficdesigner.lensesrequired.com',
      git: 'https://ficdesigner.lensesrequired.com',
      description: ''
    }, {
      name: 'Deck Building Game',
      link: '/deckbuilder',
      src: 'https://deckbuilder.lensesrequired.com',
      git: 'https://deckbuilder.lensesrequired.com',
      description: ''
    }
  ];

  return (<div>
    <p>For now... here's just links to some projects:</p>
    {
      projects.map((data, index) => (
        <Project { ...data }/>
      ))
    }
  </div>);
}
