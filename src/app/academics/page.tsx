import React from "react";
import { BookOpen, Check, ShieldAlert, Zap, Layers, Cpu } from "lucide-react";

export default function AcademicsPage() {
  const levels = [
    {
      title: "Primary School (Nursery - Grade 5)",
      badge: "Foundational Years",
      badgeType: "mint",
      desc: "Focuses on sensory learning, active play, language fluency, and numeric principles. We employ the Montessori methodology combined with standard lessons to trigger curiosity in our young scholars.",
      features: [
        "Play-based learning blocks",
        "Sensory and motor skill activities",
        "Introduction to languages & math",
        "Visual arts, music & rhythmic movement",
      ],
    },
    {
      title: "Middle School (Grade 6 - Grade 8)",
      badge: "Discovery Years",
      badgeType: "gold",
      desc: "Introduces children to analytical thinking, experimental sciences, social studies, and languages. Children begin hands-on sessions in our robotics and computer laboratories, training on block coding.",
      features: [
        "In-depth mathematics & sciences",
        "Introduction to scratch & python coding",
        "Interactive social sciences workshops",
        "Active athletic coaching & club selections",
      ],
    },
    {
      title: "High School (Grade 9 - Grade 10)",
      badge: "Success Years",
      badgeType: "coral",
      desc: "Provides strict academic preparation following the CBSE curriculum. High School is focused on deep subject mastery, competitive-exam foundation layouts (with special emphasis on IIT foundation), robotics certifications, and university prep guidance.",
      features: [
        "CBSE aligned Board curriculum",
        "Advanced physics, chemistry & bio labs",
        "Computer science, AI & Robotics certifications",
        "Leadership skills & MUN (Model United Nations) club",
      ],
    },
  ];

  const facilities = [
    {
      title: "Collaborative Smart Classrooms",
      desc: "Every room is equipped with dual-touch smart screens, projection systems, and flexible seating, creating a space for interactive discussions and digital lectures.",
      image: "/images/school_image_1.jpeg",
    },
    {
      title: "STEM & Robotics Innovation Lab",
      desc: "A creative workshop designed for electrical circuits, drone-programming, 3D printing, and Arduino microcontrollers under tech instructors.",
      image: "/images/school_image_2.jpeg",
    },
    {
      title: "Semi-Olympic Swimming Pool & Arena",
      desc: "Featuring a state-of-the-art indoor pool, tennis courts, grass football pitches, and indoor badminton courts with professional coaches.",
      image: "/images/school_image_3.jpeg",
    },
  ];

  return (
    <>
      {/* Title Header */}
      <section className="section-alt" style={{ padding: "4rem 0", textAlign: "center", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Elite Curriculums</span>
          <h1 style={{ fontSize: "3rem", fontFamily: "var(--font-playfair)" }}>Academics & Curriculum</h1>
          <p style={{ maxWidth: "600px", margin: "1rem auto 0 auto", fontSize: "1.1rem" }}>
            A structured, holistic educational pathway that balances board excellence with practical skills.
          </p>
        </div>
      </section>

      {/* Curriculum Levels */}
      <section className="section section-light" id="curriculum">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-coral" style={{ marginBottom: "1rem" }}>Grade Systems</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Educational Milestones</h2>
            <p>We divide our curriculum into three stages tailored to child psychological developments.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {levels.map((lvl, index) => (
              <div 
                key={index} 
                className="glass-card" 
                style={{ padding: "3rem" }}
              >
                <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                  <div>
                    <span className={`badge badge-${lvl.badgeType}`} style={{ marginBottom: "1rem" }}>{lvl.badge}</span>
                    <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1.5rem" }}>{lvl.title}</h3>
                    <p style={{ marginBottom: "1.5rem", fontSize: "1.05rem" }}>{lvl.desc}</p>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <h4 style={{ color: "var(--color-primary)", fontWeight: 700, marginBottom: "0.5rem" }}>Key Features:</h4>
                    {lvl.features.map((feat, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem" }}>
                        <div style={{ color: "var(--accent-mint)" }}><Check size={18} /></div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="section section-alt" id="facilities">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-mint" style={{ marginBottom: "1rem" }}>Campus Assets</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Elite Learning Spaces</h2>
            <p>Our campus is built to stimulate visual, kinesthetic, and logical learning pathways.</p>
          </div>

          <div className="grid-3">
            {facilities.map((fac, i) => (
              <div key={i} className="glass-card" style={{ padding: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={fac.image} alt={fac.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{fac.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
