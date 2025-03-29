import Project from '@/components/Project';
import styles from './page.module.css';

export default function Projects() {
  const projects = [
    {
      name: 'ArmyBuilder',
      link: '/armybuilder',
      src: 'https://armybuilder.lensesrequired.com',
      git: 'https://github.com/lensesrequired/armybuilder',
      description:
        'An app that allows you to build armies from the WarHammer 40k indexes',
    },
    {
      name: 'FicDesigner',
      link: '/ficdesigner',
      src: 'https://ficdesigner.lensesrequired.com',
      git: 'https://github.com/lensesrequired/ficdesigner',
      description: 'An app for tracking writing projects',
    },
    {
      name: 'Deck Building Game',
      link: '/deckbuilder',
      src: 'https://deckbuilder.lensesrequired.com',
      git: 'https://github.com/lensesrequired/deck-builder-ui',
      description:
        'An app for creating and playing custom deck building cards and games',
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Projects</h2>
        {projects.map((data) => (
          <Project {...data} />
        ))}
      </main>
    </div>
  );
}
