"use client";

import { useState } from "react";

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
          <span className="bg-gradient-to-l from-fuchsia-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
            שאלות
          </span>{" "}
          שאולי יש לכם
        </h2>

        <div className="space-y-3">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl bg-white/95 transition-all duration-300 animate-fade-in-up ${isOpen
                    ? "shadow-[0_18px_40px_rgba(15,23,42,0.07)] ring-1 ring-pink-100"
                    : "shadow-[0_8px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                  }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-right md:px-8"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="text-sm font-bold text-slate-900 md:text-lg">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${isOpen
                        ? "border-pink-400 bg-pink-500 text-white"
                        : "border-pink-100 bg-white text-pink-500"
                      }`}
                  >
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-1 border-t border-pink-50 px-6 pb-5 pt-3 text-sm leading-relaxed text-slate-600 md:px-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
