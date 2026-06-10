"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.css";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.itemActive : ""}`}
          >
            <button
              className={styles.trigger}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${index}`}
              id={`faq-trigger-${index}`}
            >
              <span className={styles.question}>{item.question}</span>
              <ChevronDown className={styles.icon} size={20} />
            </button>
            <div
              id={`faq-content-${index}`}
              className={`${styles.panel} ${isOpen ? styles.panelActive : ""}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
            >
              <div className={styles.panelInner}>
                <div className={styles.content}>
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
