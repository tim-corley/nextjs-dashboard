function GitHub({ projects }) {
  const githubRepos = projects.map((project) => (
    <li key={project.id}>{project.name}</li>
  ));
  return (
    <div>
      <h1>My Github Repos</h1>
      <ul>{githubRepos}</ul>
    </div>
  );
}

GitHub.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/tim-corley/repos');
  const json = await res.json();
  const projects = json;
  return { projects };
};

export default GitHub;
