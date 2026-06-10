"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Title Header */}
      <section className="section-alt" style={{ padding: "4rem 0", textAlign: "center", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Reach Out</span>
          <h1 style={{ fontSize: "3rem", fontFamily: "var(--font-playfair)" }}>Contact Us</h1>
          <p style={{ maxWidth: "600px", margin: "1rem auto 0 auto", fontSize: "1.1rem" }}>
            Have a question? Get in touch with our administration office. We are happy to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-2" style={{ gap: "4rem", alignItems: "flex-start" }}>
            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1rem" }}>
                  Get In Touch
                </h2>
                <p style={{ lineHeight: 1.6, color: "var(--text-muted)" }}>
                  Our administrative office is open from Monday through Saturday. Drop by the campus or reach us via phone or email.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--color-secondary)", background: "rgba(205,162,80,0.1)", padding: "0.75rem", borderRadius: "12px" }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Address</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                      Ocean View Campus, Beach Road, Visakhapatnam, Andhra Pradesh, 530003, India
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--accent-coral)", background: "rgba(255,110,84,0.1)", padding: "0.75rem", borderRadius: "12px" }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Phone Lines</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                      Main: +91 891 234 5678<br />
                      Admissions Desk: +91 891 234 5679
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--accent-mint)", background: "rgba(62,193,211,0.1)", padding: "0.75rem", borderRadius: "12px" }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Email Address</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                      General Queries: info@visakhaelite.edu.in<br />
                      Admissions: admissions@visakhaelite.edu.in
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ color: "var(--accent-blue)", background: "rgba(69,123,157,0.1)", padding: "0.75rem", borderRadius: "12px" }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Office Hours</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                      Monday - Friday: 8:30 AM - 4:30 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: "3rem" }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                    Send Us a Message
                  </h3>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ 
                        width: "100%", 
                        padding: "0.9rem 1.2rem", 
                        border: "2px solid var(--border-color)", 
                        borderRadius: "12px", 
                        outline: "none", 
                        background: "var(--bg-primary)" 
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ 
                        width: "100%", 
                        padding: "0.9rem 1.2rem", 
                        border: "2px solid var(--border-color)", 
                        borderRadius: "12px", 
                        outline: "none", 
                        background: "var(--bg-primary)" 
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter message subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={{ 
                        width: "100%", 
                        padding: "0.9rem 1.2rem", 
                        border: "2px solid var(--border-color)", 
                        borderRadius: "12px", 
                        outline: "none", 
                        background: "var(--bg-primary)" 
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--color-primary)" }}>Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Type your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ 
                        width: "100%", 
                        padding: "0.9rem 1.2rem", 
                        border: "2px solid var(--border-color)", 
                        borderRadius: "12px", 
                        outline: "none", 
                        background: "var(--bg-primary)",
                        resize: "vertical" 
                      }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem", alignSelf: "flex-start" }}>
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignSelf: "center", alignItems: "center", gap: "1.5rem", padding: "2rem 0" }}>
                  <div style={{ color: "var(--accent-mint)", backgroundColor: "rgba(62,193,211,0.1)", padding: "1.5rem", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.8rem" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "300px" }}>
                    Thank you, <strong>{name}</strong>. Your message regarding <em>{subject}</em> has been sent to our administrative team. We will revert shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    }} 
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Mockup Section */}
      <section style={{ height: "400px", width: "100%", position: "relative", backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          zIndex: 1,
          padding: "2rem"
        }}>
          <div className="glass-card" style={{ textAlign: "center", maxWidth: "350px", border: "2px solid var(--color-secondary)" }}>
            <MapPin size={24} style={{ color: "var(--color-secondary)", marginBottom: "0.5rem" }} />
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>Visakha Elite School</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Ocean View Campus, Beach Road, Vizag</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-coral" 
              style={{ marginTop: "1rem", padding: "0.4rem 1rem", fontSize: "0.75rem" }}
            >
              Get Directions
            </a>
          </div>
        </div>
        
        {/* Background visual elements representing map grids */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.15, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "10%", left: "20%", width: "150px", height: "10px", backgroundColor: "var(--color-primary)" }} />
          <div style={{ position: "absolute", top: "25%", left: "45%", width: "200px", height: "12px", backgroundColor: "var(--color-primary)" }} />
          <div style={{ position: "absolute", top: "70%", left: "60%", width: "180px", height: "10px", backgroundColor: "var(--color-primary)" }} />
          <div style={{ position: "absolute", top: 0, left: "30%", width: "10px", height: "100%", backgroundColor: "var(--color-primary)" }} />
          <div style={{ position: "absolute", top: 0, left: "75%", width: "12px", height: "100%", backgroundColor: "var(--color-primary)" }} />
          {/* Sea Shore Graphic Mockup */}
          <div style={{ 
            position: "absolute", 
            bottom: 0, 
            left: 0, 
            width: "100%", 
            height: "40%", 
            background: "linear-gradient(to top, rgba(62,193,211,0.2), transparent)" 
          }} />
        </div>
      </section>
    </>
  );
}
