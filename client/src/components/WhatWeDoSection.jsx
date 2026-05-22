import useScrollReveal from "../hooks/useScrollReveal";

const paragraphs = [
  "MrVilz Nature is a Sri Lankan youth-led environmental team dedicated to protecting nature through beach cleanups, tree planting, and awareness activities.",
  "We believe small actions can create a big change. Through our projects and social media, we inspire people to protect Sri Lanka’s beaches, forests, wildlife, and natural beauty.",
  "Our team consists of passionate individuals and volunteers who are committed to making a positive impact on nature and society.",
  "Would you like to be a part of making Sri Lanka cleaner, greener, and more beautiful?"
];

export default function WhatWeDoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="what-we-do-section" id="what-we-do">
      <div className="what-we-do-backdrop" aria-hidden="true">
        <div className="what-we-do-rays" />
        <div className="what-we-do-depth" />
      </div>

      <div className="container what-we-do-content">
        <div
          ref={ref}
          className={`what-we-do-copy scroll-reveal stagger-group ${isVisible ? "is-visible" : ""}`}
        >
          <h2 className="stagger-item" style={{ "--delay": "40ms" }}>
            What Mr Vilz Does
          </h2>

          <div className="what-we-do-text">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="stagger-item"
                style={{ "--delay": "140ms" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="what-we-do-actions stagger-item" style={{ "--delay": "240ms" }}>
            {/* <a className="button button-outline-water" href="#team">
              Learn More
            </a> */}
            <a className="button button-outline-water" href="#projects">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
