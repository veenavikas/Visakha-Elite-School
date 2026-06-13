import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Info */}
          <div className={styles.infoCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Image src="/images/logo.jpeg" alt="VDA Elite School Logo" width={40} height={40} style={{ borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div className={styles.logoText}>
                <span>VDA Elite</span>
                <span className={styles.logoSub}>School</span>
              </div>
            </Link>
            <p className={styles.desc}>
              Empowering students to achieve academic excellence, develop character, and embrace innovation in a supportive, luxury learning environment.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={18} />
                <span>D.No: 10-7-97, Main Road, opposite Babu Textiles, Kailash Nagar, New Gajuwaka, Visakhapatnam, Andhra Pradesh 530026</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={18} />
                <span>+91 9848677745 / +91 9848577745</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={18} />
                <span>info@visakhaelite.edu.in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academics */}
          <div>
            <h3 className={styles.title}>Academics</h3>
            <ul className={styles.links}>
              <li className={styles.linkItem}>
                <Link href="/academics#curriculum"><ChevronRight size={14} /> Curriculum Overview</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/academics#primary"><ChevronRight size={14} /> Primary School</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/academics#middle"><ChevronRight size={14} /> Middle School</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/academics#high"><ChevronRight size={14} /> High School</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/academics#facilities"><ChevronRight size={14} /> Facilities & Labs</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div>
            <h3 className={styles.title}>Admissions</h3>
            <ul className={styles.links}>
              <li className={styles.linkItem}>
                <Link href="/admissions#procedure"><ChevronRight size={14} /> How to Apply</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/admissions#guidelines"><ChevronRight size={14} /> Guidelines & Policy</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/admissions#fees"><ChevronRight size={14} /> Fee Structure</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/admissions#inquiry"><ChevronRight size={14} /> Online Inquiry</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/admissions#faq"><ChevronRight size={14} /> Frequently Asked FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className={styles.title}>Connect With Us</h3>
            <p className={styles.desc} style={{ marginBottom: "1rem" }}>
              Stay updated with school events, newsletters, and announcements.
            </p>
            <div className={styles.socials}>
              <a href="#facebook" className={styles.socialBtn} aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/vdaeliteschool/" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#twitter" className={styles.socialBtn} aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#youtube" className={styles.socialBtn} aria-label="Youtube"><Youtube size={18} /></a>
            </div>
            <ul className={styles.links} style={{ marginTop: "1.5rem" }}>
              <li className={styles.linkItem}>
                <Link href="/student-life"><ChevronRight size={14} /> Gallery & Events</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/contact"><ChevronRight size={14} /> Work With Us (Careers)</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span>© 2026 VDA Elite School. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
