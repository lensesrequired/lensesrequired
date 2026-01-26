import Project from '@/components/Project';

export default function Projects() {
  const projects = [
    {
      name: 'CineMates',
      link: 'https://cinemates.lensesrequired.com',
      src: 'https://cinemates.lensesrequired.com',
      git: 'https://github.com/lensesrequired/movie-night',
      description:
        'A NextJS/React application for creating movie watchlists and sharing them with friends!',
    },
  ];

  return (
    <div>
      <main>
        <h2>Projects</h2>
        {projects.map((data) => (
          <Project key={data.name} {...data} />
        ))}
      </main>
    </div>
  );
}
