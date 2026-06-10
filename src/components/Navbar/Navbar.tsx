"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Search, Menu, X, Globe, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Student Life", path: "/student-life" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className="container">
          {/* Top Bar for portal links - hidden on scroll */}
          <div className={styles.topBar}>
            <Link href="#parents" className={styles.topLink}>Parents Portal</Link>
            <Link href="#students" className={styles.topLink}>Students Portal</Link>
            <Link href="#staff" className={styles.topLink}>Staff Portal</Link>
            <span style={{ color: "rgba(10, 37, 64, 0.2)" }}>|</span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <Globe size={14} />
              <span className={styles.topLink} style={{ cursor: "pointer" }}>English / Trans</span>
            </div>
          </div>

          <div className={styles.navContainer}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <GraduationCap size={36} strokeWidth={1.5} />
              </div>
              <div className={styles.logoText}>
                <span>VISAKHA ELITE</span>
                <span className={styles.logoSub}>School of Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.navMenu}>
              <ul className={styles.menuList}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <li key={link.path} className={styles.menuItem}>
                      <Link
                        href={link.path}
                        className={`${styles.menuLink} ${isActive ? styles.menuLinkActive : ""}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions */}
            <div className={styles.actions}>
              <button 
                className={styles.searchBtn} 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search menu"
              >
                <Search size={20} />
              </button>
              
              <Link href="/admissions" className="btn btn-coral" style={{ padding: "0.6rem 1.4rem", fontSize: "0.85rem" }}>
                <span>Admissions Open</span>
                <ArrowRight size={14} />
              </Link>

              {/* Mobile Burger Button */}
              <button
                className={styles.mobileToggle}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-over */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuActive : ""}`}>
        <button
          className={styles.mobileCloseBtn}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          <X size={28} />
        </button>

        <Link href="/" className={styles.logo} style={{ marginBottom: "2rem" }}>
          <div className={styles.logoIcon}>
            <GraduationCap size={40} strokeWidth={1.5} />
          </div>
          <div className={styles.logoText}>
            <span>VISAKHA ELITE</span>
            <span className={styles.logoSub}>School of Excellence</span>
          </div>
        </Link>

        <nav>
          <ul className={styles.mobileMenuList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${styles.mobileMenuLink} ${isActive ? styles.mobileMenuLinkActive : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/admissions" className="btn btn-coral" style={{ marginTop: "2rem" }}>
          <span>Apply Online</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Search Modal Overlay */}
      <div className={`${styles.searchModal} ${isSearchOpen ? styles.searchModalActive : ""}`}>
        <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
          <button
            type="button"
            className={styles.searchModalClose}
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={20} />
            <span>Close</span>
          </button>
          <input
            type="text"
            placeholder="Search academic programs, admission events, campus news..."
            className={styles.searchInput}
            autoFocus={isSearchOpen}
          />
          <button type="submit" className="btn btn-primary" style={{ borderRadius: "30px" }}>
            Search
          </button>
        </form>
      </div>
    </>
  );
}
