"use client";

import { useEffect, useRef } from "react";

export default function Features() {
  const features = [
    {
      title: "פשטות",
      desc: "הופכים תהליכים בירוקרטיים מסובכים לקלים וברורים.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: "טכנולוגיה",
      desc: "בינה מלאכותית שעובדת בשבילכם, לא להפך.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M12 20v2" /><path d="M12 2v2" /><path d="M17 20v2" /><path d="M17 2v2" />
          <path d="M2 12h2" /><path d="M2 17h2" /><path d="M2 7h2" />
          <path d="M20 12h2" /><path d="M20 17h2" /><path d="M20 7h2" />
          <path d="M7 20v2" /><path d="M7 2v2" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="8" y="8" width="8" height="8" rx="1" />
        </svg>
      ),
    },
    {
      title: "חיסכון",
      desc: "בזמן, באנרגיה ובכסף שמגיע לכם.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" />
          <path d="M16 10h.01" />
          <path d="M2 8v1a2 2 0 0 0 2 2h1" />
        </svg>
      ),
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            כל הסיבות{" "}
            <span className="bg-linear-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              לבחור בנו
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="flex flex-col items-center text-center p-6 translate-y-[60px] opacity-0 transition-all duration-700 ease-out [&.in-view]:translate-y-0 [&.in-view]:opacity-100"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-linear-to-br text-white from-[#EC4899] to-[#DB2777]">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

