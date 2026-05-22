import useScrollReveal from "../hooks/useScrollReveal";

const ongoingProjects = [
  {
    title: "Clean panadura beach SRI LANKA",
    progress: 46,
    theme: "seabed",
    summary: "A coastal cleanup effort focused on reducing waste, protecting the shoreline, and building stronger community action around a cleaner beach environment.",
    highlights: ["Beach cleanup", "Volunteer action", "Coastal protection"]
  },
  {
    title: "plants donation campaign",
    progress: 84,
    theme: "plant",
    image: "/images/plant.PNG",
    summary: "A greening campaign that encourages communities to plant, nurture, and protect young trees for a healthier and cleaner future.",
    highlights: ["Plant today", "Nurture growth", "Protect nature"]
  }
];

function OngoingProjectCard({ project, delay }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <article
      ref={ref}
      className={`ongoing-project-card scroll-reveal ${isVisible ? "is-visible" : ""}`}
      style={{ "--delay": delay }}
    >
      <div className={`ongoing-project-art ongoing-project-card-${project.theme}`} aria-hidden="true">
        {project.theme === "seabed" ? (
          <div className="project-art-seabed">
            <div className="seabed-cup" />
            <span>Cleaner panadura beach SRI LANKA</span>
          </div>
        ) : project.theme === "plant" ? (
          <div className="ongoing-project-image-frame">
            <img
              className="ongoing-project-image"
              src={project.image}
              alt=""
            />
          </div>
        ) : (
          <div className="project-art-nurdle">
            <span className="nurdle-title">Plants donetion</span>
            <span className="nurdle-subtitle">
              volunteer campaign against plastic pellets
            </span>
          </div>
        )}

        <div className="ongoing-project-titlebar">
          <h3>{project.title}</h3>
        </div>
      </div>

      <div className={`project-detail-panel ${isVisible ? "is-visible" : ""}`}>
        <p>{project.summary}</p>

        <div className="project-detail-tags">
          {project.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="project-progress-block">
        <div className="project-progress-head">
          <strong>Project Progress</strong>
        </div>
        <div
          className="project-progress-track"
          aria-label={`${project.title} project progress`}
        >
          <span
            className={`project-progress-fill ${isVisible ? "is-visible" : ""}`}
            style={{ width: `${project.progress}%` }}
          >
            Complete
          </span>
        </div>
      </div>
    </article>
  );
}

export default function OngoingProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="ongoing-projects-section" id="projects">
      <div className="container">
        <div
          ref={ref}
          className={`ongoing-projects-head scroll-reveal ${isVisible ? "is-visible" : ""}`}
        >
          <h2>Ongoing Projects</h2>
        </div>

        <div className="ongoing-projects-grid">
          {ongoingProjects.map((project, index) => (
            <OngoingProjectCard
              key={project.title}
              project={project}
              delay={`${index * 140}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
