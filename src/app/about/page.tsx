import React from "react";
import { Award, Compass, Eye, Shield, Users } from "lucide-react";

export default function AboutPage() {
  const leaders = [
    {
      name: "D.S.S. Krishna Kumar (M.Sc)",
      role: "Founder & Managing Director",
      desc: "Establishing Visakha Defence Academy in 2002, D.S.S. Krishna Kumar envisioned VDA Elite School as a premier extension of academic excellence, focusing on discipline and holistic growth.",
      image: "/images/school_image_1.jpeg",
    },
    {
      name: "Prof. Vikram Malhotra",
      role: "Director of Innovation",
      desc: "Former IIT researcher, Prof. Malhotra shapes the school's high-tech robotics, AI, and coding curriculum, establishing student exchange initiatives.",
      image: "/images/school_image_2.jpeg",
    },
  ];

  const milestones = [
    { year: "2018", title: "Foundation Laid", desc: "VDA Elite School was established on a 5-acre ocean-front campus with a goal to deliver premium learning pathways." },
    { year: "2020", title: "CBSE & Global Affiliation", desc: "Received full CBSE affiliation with top ratings in infrastructure and curriculum design." },
    { year: "2022", title: "STEM & Robotics Launch", desc: "Partnered with premier technology institutes to install state-of-the-art electronics and coding laboratories." },
    { year: "2024", title: "Athletic Expansion", desc: "Inaugurated the semi-olympic size pool, basketball arenas, and horse-riding ring." },
    { year: "2026", title: "Next-Gen Digital Upgrade", desc: "Implemented holographic smart boards, VR headsets, and tablet-integrated textbooks across all classes." },
  ];

  return (
    <>
      {/* Title Header */}
      <section className="section-alt" style={{ padding: "4rem 0", textAlign: "center", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Learn More</span>
          <h1 style={{ fontSize: "3rem", fontFamily: "var(--font-playfair)" }}>About Our School</h1>
          <p style={{ maxWidth: "600px", margin: "1rem auto 0 auto", fontSize: "1.1rem" }}>
            A premier holistic CBSE and IIT-oriented educational institution operated under the Tulasi Murari Social and Educational Society (closely affiliated with the established Visakha Defence Academy group).
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-2" style={{ gap: "3rem" }}>
            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ color: "var(--color-secondary)", display: "inline-flex", alignSelf: "flex-start", padding: "0.75rem", borderRadius: "50%", background: "rgba(205,162,80,0.1)" }}>
                <Eye size={24} />
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem" }}>Our Vision</h2>
              <p>
                To be a globally recognized center of learning that inspires young minds to think independently, construct solutions for global challenges, and live with utmost integrity. We endeavor to merge premium holistic schooling with cultural values.
              </p>
            </div>

            <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ color: "var(--accent-coral)", display: "inline-flex", alignSelf: "flex-start", padding: "0.75rem", borderRadius: "50%", background: "rgba(255,110,84,0.1)" }}>
                <Compass size={24} />
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem" }}>Our Mission</h2>
              <p>
                To provide a high-caliber educational atmosphere where student potential is unlocked. We realize this through customized development schemes, cutting-edge technology integrations, and physical training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-mint" style={{ marginBottom: "1rem" }}>Character Foundation</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Our Core Values</h2>
            <p>These values represent the foundation of every student's behavioral, social, and academic growth.</p>
          </div>

          <div className="grid-3">
            <div className="glass-card" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ color: "var(--color-primary)", marginTop: "0.25rem" }}><Shield size={24} /></div>
              <div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Integrity & Honor</h3>
                <p style={{ fontSize: "0.9rem" }}>We prioritize honesty, accountability, and strong moral principles in student relationships and work.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ color: "var(--accent-coral)", marginTop: "0.25rem" }}><Award size={24} /></div>
              <div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Excellence</h3>
                <p style={{ fontSize: "0.9rem" }}>We encourage children to continuously push their boundaries, aiming for high results across all academic subjects.</p>
              </div>
            </div>

            <div className="glass-card" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <div style={{ color: "var(--accent-mint)", marginTop: "0.25rem" }}><Users size={24} /></div>
              <div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Empathy & Community</h3>
                <p style={{ fontSize: "0.9rem" }}>Promoting inclusivity, collaboration, and charity, teaching kids the value of supporting fellow citizens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Academic Leaders</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Our Leadership Team</h2>
            <p>Meet the visionary minds driving the academic and strategic growth of VDA Elite.</p>
          </div>

          <div className="grid-3">
            {leaders.map((leader, i) => (
              <div key={i} className="glass-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  style={{ width: "100%", height: "250px", objectFit: "cover" }} 
                />
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "0.25rem" }}>{leader.name}</h3>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-secondary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1rem" }}>
                    {leader.role}
                  </span>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-coral" style={{ marginBottom: "1rem" }}>Our Journey</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>School History & Milestones</h2>
            <p>A brief look at our achievements and the progress we have made since founding.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative" }}>
            {/* Timeline Line */}
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "2px", backgroundColor: "var(--border-color)" }} />
            
            {milestones.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", position: "relative" }}>
                {/* Milestone Node */}
                <div style={{ 
                  width: "42px", 
                  height: "42px", 
                  borderRadius: "50%", 
                  backgroundColor: "var(--color-primary)", 
                  color: "var(--text-light)",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  zIndex: 2,
                  boxShadow: "0 4px 10px rgba(10,37,64,0.2)",
                  flexShrink: 0,
                  alignSelf: "flex-start",
                  textAlign: "center",
                  justifyContent: "center"
                }}>
                  {item.year}
                </div>
                
                <div className="glass-card" style={{ padding: "1.5rem 2rem", flex: 1, margin: 0 }}>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
