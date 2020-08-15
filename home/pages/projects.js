import React, { Component } from 'react';
import Project from '../components/Project';
import axios from 'axios';

export class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'ArmyBuilder',
          link: '/armybuilder',
          src: 'https://armybuilder.lensesrequired.com',
          git: 'https://github.com/lensesrequired/armybuilder',
          description: 'An app that allows you to build armies from the WarHammer 40k indexes'
        }, {
          name: 'FicDesigner',
          link: '/ficdesigner',
          src: 'https://ficdesigner.lensesrequired.com',
          git: 'https://github.com/lensesrequired/ficdesigner',
          description: 'An app for tracking writing projects'
        }, {
          name: 'Deck Building Game',
          link: '/deckbuilder',
          src: 'https://deckbuilder.lensesrequired.com',
          git: 'https://github.com/lensesrequired/deck-builder-ui',
          description: 'An app for creating and playing custom deck building cards and games'
        }
      ]
    };
  }

  render() {
    const { projects } = this.state;

    return (<div>
      <h2>Projects</h2>
      {
        projects.map((data) => (
          <Project { ...data }/>
        ))
      }
    </div>);
  }
}

export default ProjectsPage;
