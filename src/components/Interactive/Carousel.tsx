"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./Carousel.module.css";

interface Slide {
  image: string;
  badgeText: string;
  badgeType: "gold" | "coral" | "mint";
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
          >
            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.image}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className={styles.overlay} />
            </div>

            <div className="container" style={{ position: "relative", zIndex: 3 }}>
              <div className={styles.content}>
                <span className={`badge badge-${slide.badgeType} ${styles.badge}`}>
                  {slide.badgeText}
                </span>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.desc}>{slide.description}</p>
                <div className={styles.ctaGroup}>
                  <Link href={slide.primaryCtaLink} className="btn btn-primary">
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight size={16} />
                  </Link>
                  {slide.secondaryCtaText && slide.secondaryCtaLink && (
                    <Link href={slide.secondaryCtaLink} className="btn btn-outline">
                      {slide.secondaryCtaText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button 
        className={`${styles.arrow} ${styles.prev}`} 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className={`${styles.arrow} ${styles.next}`} 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
