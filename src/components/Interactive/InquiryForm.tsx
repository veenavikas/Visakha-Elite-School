"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import styles from "./InquiryForm.module.css";

export default function InquiryForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form states
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [dob, setDob] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");

  const handleNext = () => {
    // Basic validation
    if (step === 1) {
      if (!studentName || !grade || !dob) {
        alert("Please fill in all student information.");
        return;
      }
    } else if (step === 2) {
      if (!parentName || !phone || !email) {
        alert("Please fill in all parent contact details.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const fillPercentage = ((step - 1) / 2) * 100;

  return (
    <div className={styles.formCard}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          {/* Progress Indicator */}
          <div className={styles.progressContainer}>
            <div className={styles.progressLine}>
              <div className={styles.progressFill} style={{ width: `${fillPercentage}%` }} />
            </div>
            <div
              className={`${styles.stepNode} ${step >= 1 ? styles.stepNodeActive : ""} ${
                step > 1 ? styles.stepNodeCompleted : ""
              }`}
            >
              {step > 1 ? <Check size={18} /> : "1"}
            </div>
            <div
              className={`${styles.stepNode} ${step >= 2 ? styles.stepNodeActive : ""} ${
                step > 2 ? styles.stepNodeCompleted : ""
              }`}
            >
              {step > 2 ? <Check size={18} /> : "2"}
            </div>
            <div
              className={`${styles.stepNode} ${step >= 3 ? styles.stepNodeActive : ""} ${
                step > 3 ? styles.stepNodeCompleted : ""
              }`}
            >
              "3"
            </div>
          </div>

          {/* Form Step Contents */}
          {step === 1 && (
            <div className={styles.stepContent}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                Student Information
              </h3>
              <div className={styles.group}>
                <label className={styles.label}>Student's Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter student's full name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label className={styles.label}>Class / Grade Applying For *</label>
                  <select
                    required
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className={styles.select}
                  >
                    <option value="">Select Grade</option>
                    <option value="Nursery">Nursery / Playgroup</option>
                    <option value="LKG">LKG / Junior KG</option>
                    <option value="UKG">UKG / Senior KG</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                Parent/Guardian Contact Details
              </h3>
              <div className={styles.group}>
                <label className={styles.label}>Parent/Guardian Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter parent or guardian's full name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label className={styles.label}>Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.group}>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                Further Details
              </h3>
              <div className={styles.group}>
                <label className={styles.label}>How did you hear about VDA Elite School?</label>
                <select
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className={styles.select}
                >
                  <option value="">Select option</option>
                  <option value="Newspaper">Newspaper / Ads</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friends/Family">Friends / Family Recommendation</option>
                  <option value="Website">Search Engine / Website</option>
                  <option value="Hoarding">Hoardings & Signages</option>
                </select>
              </div>
              <div className={styles.group}>
                <label className={styles.label}>Additional Message / Special Queries</label>
                <textarea
                  placeholder="Enter any additional queries or remarks"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={styles.textarea}
                />
              </div>
            </div>
          )}

          {/* Buttons Navigation */}
          <div className={styles.footerButtons}>
            {step > 1 ? (
              <button type="button" onClick={handlePrev} className="btn btn-outline">
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : (
              <div /> // Placeholder to keep Next right aligned
            )}

            {step < 3 ? (
              <button type="button" onClick={handleNext} className="btn btn-primary">
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button type="submit" className="btn btn-secondary">
                <span>Submit Inquiry</span>
                <Check size={16} />
              </button>
            )}
          </div>
        </form>
      ) : (
        /* Success Screen */
        <div className={styles.successView}>
          <div className={styles.successIcon}>
            <Check size={40} />
          </div>
          <h2 className={styles.successTitle}>Inquiry Submitted!</h2>
          <p className={styles.successText}>
            Thank you for expressing interest in **VDA Elite School**. Our admissions officer will review the details and contact you at <strong>{phone}</strong> or <strong>{email}</strong> within the next 24 working hours.
          </p>
          <button 
            type="button" 
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setStudentName("");
              setGrade("");
              setDob("");
              setParentName("");
              setPhone("");
              setEmail("");
              setSource("");
              setMessage("");
            }}
            className="btn btn-primary"
          >
            Submit Another Inquiry
          </button>
        </div>
      )}
    </div>
  );
}
