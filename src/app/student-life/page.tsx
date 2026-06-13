"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, BookOpen, Music, Users, Trophy } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function StudentLifePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sanityGallery, setSanityGallery] = useState<any[]>([]);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const data = await client.fetch(`*[_type == "gallery"] | order(_createdAt asc)`);
        if (data) setSanityGallery(data);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      }
    }
    fetchGallery();
  }, []);

  const clubs = [
    {
      title: "Robotics & AI Club",
      icon: <Users size={20} />,
      desc: "For students fascinated by electronics and microcontrollers. Members construct functional robots and compete in national olympiads.",
    },
    {
      title: "Orchestra & Symphony",
      icon: <Music size={20} />,
      desc: "Nurturing auditory brilliance. Guided by professional musicians, students practice string, brass, and percussion instruments.",
    },
    {
      title: "Model United Nations (MUN)",
      icon: <BookOpen size={20} />,
      desc: "Focuses on global diplomacy, debate, and consensus-building. Students simulate UN assemblies to debate real global conflicts.",
    },
    {
      title: "Elite Swimming Club",
      icon: <Trophy size={20} />,
      desc: "Utilizing our heated pool, members learn advanced swim strokes, endurance training, and represent the school in aquatic championships.",
    },
  ];

  const houses = [
    {
      name: "Agni (Fire)",
      color: "#ff6e54",
      symbol: "Courage & Strength",
      desc: "Represented by a deep coral, Agni House inspires leadership, athletic passion, and absolute resilience.",
    },
    {
      name: "Jal (Water)",
      color: "#457b9d",
      symbol: "Calmness & Adaptability",
      desc: "Represented by calm sky blue, Jal House nurtures fluid intelligence, structural focus, and emotional empathy.",
    },
    {
      name: "Prithvi (Earth)",
      color: "#3ec1d3",
      symbol: "Stability & Honor",
      desc: "Represented by fresh mint green, Prithvi House emphasizes grounding values, ecological care, and support.",
    },
    {
      name: "Vayu (Wind)",
      color: "#f4d03f",
      symbol: "Creativity & Intellect",
      desc: "Represented by bright sunny yellow, Vayu House champions creative arts, logic debates, and computational thinking.",
    },
  ];

  const galleryCategories = ["All", "Campus", "STEM", "Sports", "Arts", "Academics"];

  const galleryItems = sanityGallery.length > 0 ? sanityGallery.map((item, index) => ({
    id: item._id || index,
    src: item.image ? urlFor(item.image).url() : "",
    title: item.title,
    category: item.category
  })) : [
    { id: 1, src: "/images/school_image_1.jpeg", title: "Campus Exploration", category: "Campus" },
    { id: 2, src: "/images/school_image_2.jpeg", title: "Interactive Learning", category: "Academics" },
    { id: 3, src: "/images/school_image_3.jpeg", title: "Science Experiment", category: "STEM" },
    { id: 4, src: "/images/school_image_4.jpeg", title: "Athletic Meet", category: "Sports" },
    { id: 5, src: "/images/school_image_5.jpeg", title: "Cultural Performance", category: "Arts" },
    { id: 6, src: "/images/school_image_6.jpeg", title: "Library Study", category: "Academics" },
    { id: 7, src: "/images/school_image_7.jpeg", title: "Robotics Workshop", category: "STEM" },
    { id: 8, src: "/images/school_image_8.jpeg", title: "Basketball Court", category: "Sports" },
    { id: 9, src: "/images/school_image_9.jpeg", title: "Music Practice", category: "Arts" },
    { id: 10, src: "/images/school_image_10.jpeg", title: "Campus View", category: "Campus" },
    { id: 11, src: "/images/school_image_11.jpeg", title: "Math Olympiad", category: "Academics" },
    { id: 12, src: "/images/school_image_12.jpeg", title: "Coding Session", category: "STEM" },
    { id: 13, src: "/images/school_image_13.jpeg", title: "Tennis Match", category: "Sports" },
    { id: 14, src: "/images/school_image_14.jpeg", title: "Art Exhibition", category: "Arts" },
    { id: 15, src: "/images/school_image_15.jpeg", title: "Outdoor Assembly", category: "Campus" },
    { id: 16, src: "/images/school_image_16.jpeg", title: "Classroom Discussion", category: "Academics" },
    { id: 17, src: "/images/school_image_17.jpeg", title: "Chemistry Lab", category: "STEM" },
    { id: 18, src: "/images/school_image_18.jpeg", title: "Swimming Pool", category: "Sports" },
    { id: 19, src: "/images/school_image_19.jpeg", title: "Drama Rehearsal", category: "Arts" },
    { id: 20, src: "/images/school_image_20.jpeg", title: "School Grounds", category: "Campus" },
    { id: 21, src: "/images/school_image_21.jpeg", title: "Study Hall", category: "Academics" },
    { id: 22, src: "/images/school_image_22.jpeg", title: "Physics Demo", category: "STEM" },
    { id: 23, src: "/images/school_image_23.jpeg", title: "Football Field", category: "Sports" },
    { id: 24, src: "/images/school_image_24.jpeg", title: "Pottery Class", category: "Arts" },
    { id: 25, src: "/images/school_image_25.jpeg", title: "Main Entrance", category: "Campus" },
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Title Header */}
      <section className="section-alt" style={{ padding: "4rem 0", textAlign: "center", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <span className="badge badge-mint" style={{ marginBottom: "1rem" }}>Campus Living</span>
          <h1 style={{ fontSize: "3rem", fontFamily: "var(--font-playfair)" }}>Student Life</h1>
          <p style={{ maxWidth: "600px", margin: "1rem auto 0 auto", fontSize: "1.1rem" }}>
            A dynamic, active environment where children discover their hobbies, build friendships, and cultivate sportsmanship.
          </p>
        </div>
      </section>

      {/* House System */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Fraternities</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>The House System</h2>
            <p>Students are allocated to one of four houses, stimulating healthy competitive spirit, community duty, and peer mentorship.</p>
          </div>

          <div className="grid-4">
            {houses.map((house, i) => (
              <div 
                key={i} 
                className="glass-card" 
                style={{ 
                  borderTop: `5px solid ${house.color}`, 
                  display: "flex", 
                  flexDirection: "column",
                  gap: "1rem" 
                }}
              >
                <h3 style={{ color: "var(--color-primary)", fontSize: "1.3rem" }}>{house.name}</h3>
                <span style={{ fontSize: "0.8rem", color: house.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                  Symbol: {house.symbol}
                </span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{house.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-coral" style={{ marginBottom: "1rem" }}>Co-Curriculars</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Clubs & Activities</h2>
            <p>Every student is encouraged to participate in at least one club to learn leadership, team cooperation, and domain mastery.</p>
          </div>

          <div className="grid-2">
            {clubs.map((club, i) => (
              <div key={i} className="glass-card" style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div style={{ 
                  color: "var(--text-light)", 
                  backgroundColor: "var(--color-primary)", 
                  padding: "0.85rem", 
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  {club.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{club.title}</h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Photo Gallery */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem auto" }}>
            <span className="badge badge-mint" style={{ marginBottom: "1rem" }}>Visual Campus</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Campus Photo Gallery</h2>
            <p>Click on the categories below to browse various sections of our elite infrastructure and student engagements.</p>
          </div>

          {/* Filter Buttons */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            flexWrap: "wrap", 
            gap: "0.75rem", 
            marginBottom: "3rem" 
          }}>
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`btn ${activeFilter === cat ? "btn-primary" : "btn-outline"}`}
                style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", borderRadius: "30px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid-3" style={{ minHeight: "350px" }}>
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="glass-card animate-fade-in" 
                style={{ 
                  padding: "0", 
                  overflow: "hidden", 
                  display: "flex", 
                  flexDirection: "column",
                  animationDuration: "0.5s"
                }}
              >
                <div style={{ overflow: "hidden", position: "relative", height: "240px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }} 
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)" }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1.0)" }}
                  />
                  <span style={{ 
                    position: "absolute", 
                    top: "1rem", 
                    right: "1rem", 
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "var(--color-primary)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    fontWeight: 700
                  }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.1rem", color: "var(--color-primary)" }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "3rem 0" }}>
              No images available in this category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
