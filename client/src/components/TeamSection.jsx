import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./TeamSection.css";

const teamMembers = [
  {
    id: "chamidu",
    name: "Chamidu",
    role: "Co-Founder & Head of Media Production",
    image: "/images/chamidu.jpeg",
    bio: "Chamidu shapes the visual storytelling of MrVilz Nature Team, guiding media direction, campaign execution, and documentary-style content that connects people with conservation.",
    focus: ["Field visuals", "Campaign direction", "Media production"]
  },
  {
    id: "nethmin",
    name: "Nethmin",
    role: "Head of Creative Production",
    image: "/images/nethmin.svg",
    bio: "Nethmin develops creative concepts, keeps production flowing across shoots and digital content, and helps turn ideas into polished public-facing experiences.",
    focus: ["Creative concepts", "Production planning", "Visual coordination"]
  },
  {
    id: "nadeesha",
    name: "Nadeesha",
    role: "Founder & Creative Director",
    image: "/images/nadeesha.svg",
    bio: "Nadeesha leads the team vision, brand voice, and long-term direction, making sure every initiative feels intentional, credible, and rooted in nature-driven impact.",
    focus: ["Creative leadership", "Brand vision", "Strategic direction"]
  },
  {
    id: "pabodha",
    name: "Pabodha",
    role: "Head of Operations Manager & Brand Partnerships",
    image: "/images/pabodha.svg",
    bio: "Pabodha keeps operations aligned while building partnerships that help MrVilz grow its reach, coordinate collaborations, and move projects forward with structure.",
    focus: ["Operations", "Partnerships", "Team coordination"]
  }
];

function TeamCard({ member, onSelect }) {
  return (
    <motion.article
      layoutId={`card-${member.id}`}
      className="mr-team-card"
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      onClick={() => onSelect(member)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(member);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <motion.div layoutId={`image-shell-${member.id}`} className="mr-team-card-media">
        <motion.img
          layoutId={`image-${member.id}`}
          src={member.image}
          alt={member.name}
          className="mr-team-card-image"
        />
      </motion.div>

      <div className="mr-team-card-copy">
        <motion.h3 layoutId={`name-${member.id}`}>{member.name}</motion.h3>
        <motion.p layoutId={`role-${member.id}`}>{member.role}</motion.p>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="mr-team-section" id="team">
      <div className="container mr-team-shell">
        <div className="mr-team-heading">
          <p className="mr-team-kicker">MrVilz Nature Team</p>
          <h2>The Team</h2>
          <p className="mr-team-intro">
            A creative field team blending storytelling, visual direction, and
            production energy to shape a stronger public identity for nature-led
            work.
          </p>
        </div>

        <div className="mr-team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} onSelect={setSelectedMember} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember ? (
          <motion.div
            className="mr-team-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="mr-team-overlay-backdrop"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
            >
              <motion.article
                layoutId={`card-${selectedMember.id}`}
                className="mr-team-detail-card"
                onClick={(event) => event.stopPropagation()}
              >
                <motion.div
                  layoutId={`image-shell-${selectedMember.id}`}
                  className="mr-team-detail-media"
                >
                  <motion.img
                    layoutId={`image-${selectedMember.id}`}
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="mr-team-detail-image"
                  />
                </motion.div>

                <div className="mr-team-detail-copy">
                  <p className="mr-team-detail-label">Selected team member</p>
                  <motion.h3 layoutId={`name-${selectedMember.id}`}>
                    {selectedMember.name}
                  </motion.h3>
                  <motion.p layoutId={`role-${selectedMember.id}`}>
                    {selectedMember.role}
                  </motion.p>

                  <p className="mr-team-detail-bio">{selectedMember.bio}</p>

                  <div className="mr-team-focus-list">
                    {selectedMember.focus.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <button
                    className="mr-team-close"
                    type="button"
                    onClick={() => setSelectedMember(null)}
                  >
                    Close
                  </button>
                </div>
              </motion.article>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
