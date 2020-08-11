import React from 'react';
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
    <h2>Projects</h2>
    {
      projects.map((data) => (
        <Project { ...data }/>
      ))
    }
  </div>);
}
