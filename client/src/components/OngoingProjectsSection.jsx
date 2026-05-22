import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ongoingProjects = [
  {
    title: "Clean Panadura Beach Sri Lanka",
    progress: 46,
    theme: "seabed",
    summary:
      "A coastal cleanup effort focused on reducing waste, protecting the shoreline, and building stronger community action around a cleaner beach environment.",
    highlights: ["Beach cleanup", "Volunteer action", "Coastal protection"]
  },
  {
    title: "Plants Donation Campaign",
    progress: 84,
    theme: "plant",
    image: "/images/plant.PNG",
    summary:
      "A greening campaign that encourages communities to plant, nurture, and protect young trees for a healthier and cleaner future.",
    highlights: ["Plant today", "Nurture growth", "Protect nature"]
  }
];

function OngoingProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const artY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const artScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <motion.article
      ref={cardRef}
      className="ongoing-project-card"
      initial={{
        opacity: 0,
        y: 90,
        scale: 0.88,
        filter: "blur(10px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className={`ongoing-project-art ongoing-project-card-${project.theme}`}
        aria-hidden="true"
        style={{
          y: artY,
          scale: artScale
        }}
      >
        {project.theme === "seabed" ? (
          <div className="project-art-seabed">
            <motion.div
              className="seabed-cup"
              initial={{ rotate: -15, y: 30 }}
              whileInView={{ rotate: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <span>Cleaner Panadura Beach Sri Lanka</span>
          </div>
        ) : project.theme === "plant" ? (
          <div className="ongoing-project-image-frame">
            <motion.img
              className="ongoing-project-image"
              src={project.image}
              alt=""
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
        ) : (
          <div className="project-art-nurdle">
            <span className="nurdle-title">Plants Donation</span>
            <span className="nurdle-subtitle">
              Volunteer campaign against plastic pellets
            </span>
          </div>
        )}

        <motion.div
          className="ongoing-project-titlebar"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15 + 0.25,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        >
          <h3>{project.title}</h3>
        </motion.div>
      </motion.div>

      <motion.div
        className="project-detail-panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.65,
          delay: index * 0.15 + 0.35
        }}
        viewport={{ once: true }}
      >
        <p>{project.summary}</p>

        <div className="project-detail-tags">
          {project.highlights.map((item, tagIndex) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.15 + tagIndex * 0.08 + 0.45
              }}
              viewport={{ once: true }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="project-progress-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.55
        }}
        viewport={{ once: true }}
      >
        <div className="project-progress-head">
          <strong>Project Progress</strong>
          <span>{project.progress}%</span>
        </div>

        <div
          className="project-progress-track"
          aria-label={`${project.title} project progress`}
        >
          <motion.span
            className="project-progress-fill"
            initial={{ width: "0%" }}
            whileInView={{ width: `${project.progress}%` }}
            transition={{
              duration: 1.2,
              delay: index * 0.15 + 0.7,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            Complete
          </motion.span>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function OngoingProjectsSection() {
  return (
    <section className="ongoing-projects-section" id="projects">
      <div className="container">
        <motion.div
          className="ongoing-projects-head"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2>Ongoing Projects</h2>
        </motion.div>

        <div className="ongoing-projects-grid">
          {ongoingProjects.map((project, index) => (
            <OngoingProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
