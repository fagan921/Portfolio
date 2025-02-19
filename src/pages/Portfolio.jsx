import Project from "../components/Project";

const projects = [
  { title: "Project 1", image: "link-to-image", deployedLink: "link-to-live", repoLink: "link-to-repo" },
  { title: "Project 2", image: "link-to-image", deployedLink: "link-to-live", repoLink: "link-to-repo" },
  // Add more projects
];

function Portfolio() {
  return (
    <section>
      <h2>My Work</h2>
      <div className="portfolio-grid">
        {projects.map((proj, index) => <Project key={index} {...proj} />)}
      </div>
    </section>
  );
}

export default Portfolio;