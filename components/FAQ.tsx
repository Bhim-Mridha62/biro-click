"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const faqData = [
  {
    question: "האם השירות באמת חינם?",
    answer: "כן. חלק מהכלים מוצעים בחינם, וחלק במחיר סמלי כדי לכסות עלויות עיבוד.",
  },
  {
    question: "כמה זמן לוקח התהליך?",
    answer: "התהליך לוקח בממוצע כ-4 דקות. פשוט ממלאים שאלון קצר ומקבלים מסמך מוכן.",
  },
  {
    question: "האם המידע שלי מאובטח?",
    answer: "בהחלט. אנו משתמשים בהצפנה מתקדמת ולא שומרים מידע רגיש לאחר סיום התהליך.",
  },
  {
    question: "איך מקבלים את הכסף?",
    answer: "לאחר הגשת המסמכים, הכסף מועבר ישירות לחשבון הבנק שלכם על ידי הגורם המשלם.",
  },
  {
    question: "האם צריך ידע משפטי?",
    answer: "לא. המערכת שלנו מנחה אתכם בכל שלב ויוצרת מסמכים מקצועיים בלי שתצטרכו ידע משפטי.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`rounded-2xl bg-white/95 transition-all duration-300 ${inView ? "translate-y-0 opacity-100" : "translate-y-[40px] opacity-0"
        } ${isOpen
          ? "shadow-[0_18px_40px_rgba(15,23,42,0.07)] ring-1 ring-pink-100"
          : "shadow-[0_8px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-right md:px-8 cursor-pointer"
        onClick={onToggle}
      >
        <span className="text-sm font-bold text-slate-900 md:text-lg">
          {faq.question}
        </span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
            ? "border-pink-400 bg-pink-500 text-white rotate-0"
            : "border-pink-100 bg-white text-pink-500 rotate-0"
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path
              d="M12 5v14"
              className="origin-center transition-transform duration-300"
              style={{
                transform: isOpen ? "scaleY(0)" : "scaleY(1)",
              }}
            />
          </svg>
        </div>
      </button>

      {/* Animated answer container */}
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight ?? 200}px`
            : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="border-t border-pink-50 px-6 pb-5 pt-3 text-sm text-slate-600 md:px-8"
        >
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-[#fff7fc] py-20">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full border border-pink-100/60" />
      <div className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full border border-pink-100/40" />
      <div className="pointer-events-none absolute right-0 top-40 h-48 w-48 rounded-full border border-pink-100/30" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          <span className="bg-linear-to-l from-fuchsia-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
            שאלות
          </span>{" "}
          שאולי יש לכם
        </h2>

        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

