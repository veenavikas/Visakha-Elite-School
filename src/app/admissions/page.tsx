import React from "react";
import InquiryForm from "@/components/Interactive/InquiryForm";
import Accordion from "@/components/Interactive/Accordion";
import { Info, HelpCircle, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdmissionsPage() {
  const steps = [
    {
      num: "01",
      title: "Online Inquiry",
      desc: "Fill out our multi-step Admissions Inquiry Form below with student details and parent contact information.",
    },
    {
      num: "02",
      title: "Campus Interaction",
      desc: "Our counselor will invite you for a campus tour, classroom inspection, and a friendly assessment interaction with the child.",
    },
    {
      num: "03",
      title: "Document Submission",
      desc: "Upload or submit birth certificate, previous school reports, transfer certificates, and passport photos.",
    },
    {
      num: "04",
      title: "Enrollment & Fee Payment",
      desc: "Upon selection, secure the seat by paying the admission fee and completing the registration paperwork.",
    },
  ];

  const faqs = [
    {
      question: "What is the age requirement for Nursery admissions?",
      answer: "A child must be 3 years of age as of March 31st of the academic year in which admission is sought. For Grade 1, the minimum age requirement is 6 years.",
    },
    {
      question: "What is the student-to-teacher ratio at VDA Elite?",
      answer: "We maintain a luxury ratio of 10:1 overall, and sections are strictly limited to an average of 20 students to guarantee tailored mentoring and individual attention.",
    },
    {
      question: "Does the school offer school transportation?",
      answer: "Yes, we operate GPS-tracked, air-conditioned school buses across all major zones in Visakhapatnam. Every vehicle is staffed with a professional driver, a security guard, and a female helper, and has onboard CCTV surveillance.",
    },
    {
      question: "What board curriculum is followed?",
      answer: "VDA Elite School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Our curriculum is enriched with international STEM (Science, Technology, Engineering, Math) modules and coding.",
    },
    {
      question: "Are extracurricular programs mandatory?",
      answer: "Yes. Holistic development is central to our ethos. Every student participates in one sport (e.g., swimming, tennis, basketball) and one creative/performing art (e.g., coding, music, pottery, dance) as part of the daily timetable.",
    },
  ];

  return (
    <>
      {/* Title Header */}
      <section className="section-alt" style={{ padding: "4rem 0", textAlign: "center", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container">
          <span className="badge badge-coral" style={{ marginBottom: "1rem" }}>Enroll Now</span>
          <h1 style={{ fontSize: "3rem", fontFamily: "var(--font-playfair)" }}>Admissions 2026-27</h1>
          <p style={{ maxWidth: "600px", margin: "1rem auto 0 auto", fontSize: "1.1rem" }}>
            Secure a place for your child in Visakhapatnam's premier institution. We welcome you to join the Elite family.
          </p>
        </div>
      </section>

      {/* Admissions Procedure Roadmap */}
      <section className="section section-light" id="procedure">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 4rem auto" }}>
            <span className="badge badge-gold" style={{ marginBottom: "1rem" }}>Roadmap</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Admissions Procedure</h2>
            <p>Our four-step enrollment process is simplified to ensure parent convenience.</p>
          </div>

          <div className="grid-4">
            {steps.map((step, i) => (
              <div key={i} className="glass-card" style={{ position: "relative", paddingTop: "3rem" }}>
                {/* Big Number Label */}
                <div style={{ 
                  position: "absolute", 
                  top: "1.5rem", 
                  left: "2rem", 
                  fontSize: "3rem", 
                  fontWeight: 900, 
                  color: "rgba(205,162,80,0.15)",
                  fontFamily: "var(--font-playfair)"
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "var(--color-primary)" }}>{step.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section section-alt" id="inquiry">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", margin: "0 auto 3rem auto" }}>
            <span className="badge badge-coral" style={{ marginBottom: "1rem" }}>Enquiry Form</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Admission Inquiry Form</h2>
            <p>Please share basic student details below to schedule a campus interaction with our admissions head.</p>
          </div>

          <InquiryForm />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="section section-light" id="faq">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", margin: "0 auto 3rem auto" }}>
            <span className="badge badge-mint" style={{ marginBottom: "1rem" }}>Questions & Answers</span>
            <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-playfair)", marginBottom: "1rem" }}>Admissions FAQ</h2>
            <p>Frequently asked questions regarding fee structures, guidelines, and school facilities.</p>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
