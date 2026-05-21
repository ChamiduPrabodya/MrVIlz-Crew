const services = [
  {
    number: "01",
    title: "Brand Campaign Strategy",
    text: "Shape a clear public identity for Mr Vilz across every platform with messaging that connects environmental action and audience growth."
  },
  {
    number: "02",
    title: "Content Production",
    text: "Turn clean-up days, planting drives, and volunteer stories into sharper short-form and long-form content."
  },
  {
    number: "03",
    title: "Community Promotion",
    text: "Promote events, grow visibility, and help supporters feel part of a real environmental movement."
  }
];

const projects = [
  {
    title: "Beach Cleaning",
    tag: "Community Action",
    text: "Document coastal clean-ups with stronger storytelling, campaign visuals, and event visibility."
  },
  {
    title: "One Follower = One Plant",
    tag: "Signature Campaign",
    text: "Transform the brand promise into a campaign people instantly understand and want to support."
  },
  {
    title: "Tree Planting Drives",
    tag: "Environmental Impact",
    text: "Show planting progress, volunteer moments, and long-term impact in a more polished public format."
  }
];

const channels = ["TikTok", "Instagram", "Facebook", "YouTube"];

const highlights = [
  "Mission-first presentation",
  "Professional public image",
  "Creative campaign energy"
];

export default function App() {
  return (
    <div className="site-shell" id="home">
      <header className="site-header">
        <div className="container topbar">
          <a className="brand" href="#home">
            <img src="/mrvilz-logo.jpeg" alt="Mr Vilz logo" />
            <div className="brand-text">
              <strong>Mr Vilz</strong>
              <span>Social Impact Media Group</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-button" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Environmental brand. Media movement. Real impact.</p>
              <h1>
                A sharper digital presence for a group that cleans beaches,
                plants trees, and turns followers into action.
              </h1>
              <p className="hero-text">
                This direction mixes a professional structure with a stronger
                campaign feel, so Mr Vilz looks credible, modern, and memorable
                from the first screen.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#services">
                  Explore services
                </a>
                <a className="button button-secondary" href="#projects">
                  See projects
                </a>
              </div>

              <div className="channel-list">
                {channels.map((channel) => (
                  <span key={channel}>{channel}</span>
                ))}
              </div>
            </div>

            <div className="hero-stack">
              <article className="pledge-card">
                <p className="card-label">Campaign promise</p>
                <h2>One follower = one plant</h2>
                <p>
                  A simple message with campaign power. Easy to understand. Easy
                  to share. Hard to ignore.
                </p>
              </article>

              <article className="visual-card">
                <div className="visual-image">
                  <img src="/mrvilz-logo.jpeg" alt="Mr Vilz emblem" />
                </div>
                <div className="visual-meta">
                  <span>Creative identity</span>
                  <p>Built to feel bold, trusted, and movement-driven.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="impact-ribbon">
          <div className="container ribbon-layout">
            <div className="ribbon-copy">
              <p className="eyebrow">Positioning</p>
              <h2>Professional enough for partners. Creative enough for campaigns.</h2>
            </div>

            <div className="highlight-list">
              {highlights.map((item) => (
                <div className="highlight-item" key={item}>
                  <span className="highlight-dot" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Services</p>
                <h2>What the brand should communicate with confidence.</h2>
              </div>
              <p className="section-copy">
                The website should present Mr Vilz like a serious impact brand,
                not just a social page. These service blocks define that
                message.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Projects</p>
                <h2>Real work on the ground deserves stronger presentation online.</h2>
              </div>
              <p className="section-copy">
                These projects should feel like active campaigns with identity,
                not placeholder content blocks.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="project-tag">{project.tag}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="about-copy">
              <p className="eyebrow">About</p>
              <h2>Mr Vilz should feel like a modern movement, not an unfinished page.</h2>
              <p className="section-copy">
                This direction uses more discipline in the layout, stronger
                typography, and cleaner section structure while keeping some
                campaign energy in the visuals.
              </p>
            </div>

            <div className="about-panel">
              <div className="about-stat">
                <strong>4</strong>
                <span>core channels</span>
              </div>
              <div className="about-stat">
                <strong>1</strong>
                <span>mission-led brand</span>
              </div>
              <div className="about-stat">
                <strong>100%</strong>
                <span>community-based impact</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-banner">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>After this look is approved, we can build the full website properly.</h2>
              <p className="section-copy">
                Next steps can include uploads, event pages, progress counters,
                galleries, admin tools, and campaign management.
              </p>
            </div>

            <a className="button button-primary" href="#home">
              Back to top
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
