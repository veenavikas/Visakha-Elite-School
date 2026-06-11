import React from "react";
import Link from "next/link";
import Carousel from "@/components/Interactive/Carousel";
import Counter from "@/components/Interactive/Counter";
import { 
  BookOpen, 
  Award, 
  Heart, 
  Lightbulb, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Palette, 
  Cpu, 
  Users, 
  Compass, 
  Calendar 
} from "lucide-react";

export default function HomePage() {
  const heroSlides = [
    {
      image: "/images/hero_campus.png",
      badgeText: "Admissions 2026-27 Open",
      badgeType: "coral" as const,
      title: "Inspiring Academic Excellence",
      description: "Welcome to VDA Elite School, where we nurture tomorrow's leaders through state-of-the-art infrastructure, value-based learning, and global standards.",
      primaryCtaText: "Apply Online",
      primaryCtaLink: "/admissions",
      secondaryCtaText: "Explore Campus",
      secondaryCtaLink: "/about",
    },
    {
      image: "/images/hero_classroom.png",
      badgeText: "Next-Gen Classrooms",
      badgeType: "gold" as const,
      title: "World Class Architecture",
      description: "Empowering young students with collaborative smart classrooms, immersive tech-integration, and an elite student-to-teacher ratio of 10:1.",
      primaryCtaText: "Academics",
      primaryCtaLink: "/academics",
      secondaryCtaText: "Admission FAQ",
      secondaryCtaLink: "/admissions#faq",
    },
    {
      image: "/images/hero_robotics.png",
      badgeText: "STEM & Innovation",
      badgeType: "mint" as const,
      title: "Nurturing Practical Thinkers",
      description: "Leading school innovation with dedicated coding modules, experimental robotics labs, and comprehensive design thinking workshops.",
      primaryCtaText: "Student Life",
      primaryCtaLink: "/student-life",
      secondaryCtaText: "Locate Us",
      secondaryCtaLink: "/contact",
    },
  ];

  return (
    <>
      {/* Hero Carousel Banner */}
      <Carousel slides={heroSlides} />

      {/* Quick Links Section */}
      <section className="section-light" style={{ padding: "3rem 0", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: "center" }}>
            <Link href="/admissions" className="glass-card" style={{ padding: "1.5rem", borderRadius: "15px" }}>
              <div style={{ color: "var(--accent-coral)", marginBottom: "0.5rem" }}><Award size={32} style={{ margin: "0 auto" }} /></div>
              <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--font-outfit)" }}>Online Admission</h3>
            </Link>
            <Link href="/academics" className="glass-card" style={{ padding: "1.5rem", borderRadius: "15px" }}>
              <div style={{ color: "var(--color-secondary)", marginBottom: "0.5rem" }}><BookOpen size={32} style={{ margin: "0 auto" }} /></div>
              <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--font-outfit)" }}>School Curriculum</h3>
            </Link>
            <Link href="/student-life" className="glass-card" style={{ padding: "1.5rem", borderRadius: "15px" }}>
              <div style={{ color: "var(--accent-mint)", marginBottom: "0.5rem" }}><Calendar size={32} style={{ margin: "0 auto" }} /></div>
              <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--font-outfit)" }}>Events Calendar</h3>
            </Link>
            <Link href="/contact" className="glass-card" style={{ padding: "1.5rem", borderRadius: "15px" }}>
              <div style={{ color: "var(--accent-blue)", marginBottom: "0.5rem" }}><Compass size={32} style={{ margin: "0 auto" }} /></div>
              <h3 style={{ fontSize: "1.05rem", fontFamily: "var(--font-outfit)" }}>Campus Tour</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message / Principal's Desk */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="glass-card" style={{ padding: "3rem", borderLeft: "5px solid var(--color-secondary)" }}>
              <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Message from the Principal</span>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", fontFamily: "var(--font-playfair)" }}>
                "Guiding Minds, Shaping Honorable Futures"
              </h2>
              <p style={{ marginBottom: "1.2rem" }}>
                Welcome to VDA Elite School. Our mission is to foster a safe, premium learning atmosphere where children are stimulated to think independently, innovate responsibly, and excel academically.
              </p>
              <p style={{ marginBottom: "1.8rem", fontStyle: "italic" }}>
                "We believe that every child is unique. Our curated educational pathways allow students to discover their passions, whether in robotics laboratories, athletic stadiums, or music chambers."
              </p>
              <div>
                <h4 style={{ color: "var(--color-primary)", fontWeight: 700 }}>Dr. Ananya S. Rao</h4>
                <p style={{ fontSize: "0.85rem" }}>Principal, VDA Elite School</p>
              </div>
            </div>
            
            <div style={{ position: "relative", height: "100%", minHeight: "400px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/hero_classroom.png" 
                alt="Principal greeting parents"
                style={{ width: "100%", height: "450px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 10px 30px rgba(10, 37, 64, 0.08)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Elite Pillars */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-coral" style={{ marginBottom: "1rem" }}>Our Pillars</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Four Pillars of Elite Education</h2>
            <p>We combine rigorous academic curricula with modern developmental pillars to ensure a well-rounded foundation.</p>
          </div>

          <div className="grid-4">
            <div className="glass-card" style={{ textAlign: "center" }}>
              <div style={{ color: "var(--color-primary)", display: "inline-flex", padding: "1rem", borderRadius: "50%", background: "rgba(10,37,64,0.05)", marginBottom: "1.5rem" }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>Academic Rigor</h3>
              <p style={{ fontSize: "0.9rem" }}>A robust CBSE & Global curriculum that challenges children to achieve scientific and literacy superiority.</p>
            </div>

            <div className="glass-card" style={{ textAlign: "center" }}>
              <div style={{ color: "var(--accent-coral)", display: "inline-flex", padding: "1rem", borderRadius: "50%", background: "rgba(255,110,84,0.05)", marginBottom: "1.5rem" }}>
                <Cpu size={28} />
              </div>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>STEM & Robotics</h3>
              <p style={{ fontSize: "0.9rem" }}>Engaging laboratories where students learn circuit-building, coding, microcontrollers, and automation.</p>
            </div>

            <div className="glass-card" style={{ textAlign: "center" }}>
              <div style={{ color: "var(--accent-mint)", display: "inline-flex", padding: "1rem", borderRadius: "50%", background: "rgba(62,193,211,0.05)", marginBottom: "1.5rem" }}>
                <Activity size={28} />
              </div>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>Elite Athletics</h3>
              <p style={{ fontSize: "0.9rem" }}>Semi-olympic pool, indoor basketball arenas, tennis courts, and track sports under certified coaches.</p>
            </div>

            <div className="glass-card" style={{ textAlign: "center" }}>
              <div style={{ color: "var(--color-secondary)", display: "inline-flex", padding: "1rem", borderRadius: "50%", background: "rgba(205,162,80,0.05)", marginBottom: "1.5rem" }}>
                <Palette size={28} />
              </div>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>Visual & Performing Arts</h3>
              <p style={{ fontSize: "0.9rem" }}>Nurturing creative expression via professional pottery rooms, painting studios, and theater chambers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistic Counter Section */}
      <section className="section" style={{ background: "linear-gradient(135deg, var(--color-primary), #113358)", color: "var(--text-light)" }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, color: "var(--color-secondary)", fontFamily: "var(--font-playfair)" }}>
                <Counter end={10} suffix=":1" />
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 500, marginTop: "0.5rem" }}>Student-Teacher Ratio</p>
            </div>
            
            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, color: "var(--color-secondary)", fontFamily: "var(--font-playfair)" }}>
                <Counter end={100} suffix="%" />
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 500, marginTop: "0.5rem" }}>Academic Board Pass</p>
            </div>

            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, color: "var(--color-secondary)", fontFamily: "var(--font-playfair)" }}>
                <Counter end={15} suffix="+" />
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 500, marginTop: "0.5rem" }}>Advanced Labs & Studios</p>
            </div>

            <div>
              <div style={{ fontSize: "3.5rem", fontWeight: 800, color: "var(--color-secondary)", fontFamily: "var(--font-playfair)" }}>
                <Counter end={25} suffix="+" />
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", fontWeight: 500, marginTop: "0.5rem" }}>Co-curricular Clubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Highlights */}
      <section className="section section-light">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <span className="badge badge-mint" style={{ marginBottom: "1rem" }}>Latest Updates</span>
              <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)" }}>School News & Events</h2>
            </div>
            <Link href="/student-life" className="btn btn-outline" style={{ padding: "0.6rem 1.4rem" }}>
              <span>View All News</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            <div className="glass-card" style={{ padding: "0", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero_robotics.png" alt="Robotics exhibition" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "2rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-secondary)", fontWeight: 700 }}>June 8, 2026</span>
                <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem 0" }}>Annual STEM & Robotics Exhibition 2026</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Our junior engineers presented autonomous robotic cleaners, agricultural sensors, and smart city models.</p>
                <Link href="/student-life" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--color-primary)" }}>
                  <span>Read Story</span> <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "0", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero_classroom.png" alt="Smart learning" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "2rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-secondary)", fontWeight: 700 }}>May 28, 2026</span>
                <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem 0" }}>VDA Elite Unveils Virtual Reality Lab</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>A major upgrade to our digital infrastructure, introducing stereoscopic headsets for immersive biology and geography.</p>
                <Link href="/student-life" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--color-primary)" }}>
                  <span>Read Story</span> <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "0", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero_campus.png" alt="Campus environment" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "2rem" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-secondary)", fontWeight: 700 }}>May 15, 2026</span>
                <h3 style={{ fontSize: "1.25rem", margin: "0.5rem 0 1rem 0" }}>Ecology Club wins Eco-School Green Shield</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Awarded for zero-waste cafeteria compliance, campus composting schemes, and greywater recycling facilities.</p>
                <Link href="/student-life" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem", color: "var(--color-primary)" }}>
                  <span>Read Story</span> <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "3rem", fontFamily: "var(--font-playfair)", color: "var(--color-primary)", marginBottom: "1.5rem" }}>
            Begin Your Child's Elite Journey Today
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "2.5rem" }}>
            Enrollment is open for the upcoming academic year. Formulate a strong intellectual, moral, and physical future for your child.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/admissions" className="btn btn-coral">
              <span>Enroll Now</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Request Prospectus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
