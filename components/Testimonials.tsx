"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "הלני זר",
    role: "הכינה מכתב לתביעת קטנה",
    text: "״לא ידעתי איך בכלל להתחיל לכתוב מכתב לתביעה קטנה. בירוקליק הנחתה אותי שלב אחרי שלב ויצרתי מכתב שכאילו נכתב על ידי עורך דין. הרגשתי בטחון שאני מציגה את הסיפור שלי כמו שצריך.״",
    img: "/assets/photo-1524504388940-b1c1722653e1.jpg",
  },
  {
    name: "תומר מזרחי",
    role: "הכין מכתב תביעה",
    text: "״במקום לשבת שעות מול דף ריק, נכנסתי לבירוקליק ותוך דקות היה לי מכתב מסודר וברור להגשה לבית המשפט. אהבתי במיוחד את השפה – מקצועית אבל מובנת. ממש שירות מציל עצבים.״",
    img: "/assets/photo-1544005313-94ddf0286df2.jpg",
  },
  {
    name: "דניאל מתיתיהו",
    role: "קיבל החזר מחברת הביטוח",
    text: "״המערכת של בירוקליק חסכה לי שעות של ניסיונות להבין איך לנסח מכתב לביטוח. מילאתי כמה שאלות קצרות ובסוף יצא מסמך מוכן לשליחה. לא דמיינתי שזה יהיה כל כך קל.״",
    img: "/assets/photo-1525134479668-1bee5c7c6845.jpg",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-1 rounded-3xl bg-[#fafafa] px-6 py-5 text-right shadow-[0_18px_60px_rgba(15,23,42,0.05)] md:px-8 md:py-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold text-slate-900">{t.name}</span>
          <span className="text-xs text-slate-500">{t.role}</span>
        </div>
        <Image
          alt={t.name}
          className="h-10 w-10 rounded-full object-cover"
          src={t.img}
          width={40}
          height={40}
        />
      </div>
      <p className="text-sm text-slate-700 md:text-base">{t.text}</p>
    </div>
  );
}

function StatCard({
  value,
  label,
  className = "",
  top = "",
}: {
  value: string;
  label: string;
  className?: string;
  top?: string;
}) {
  return (
    <div
      className={`rounded-3xl bg-primary px-6 py-8 text-right text-white shadow-[0_24px_70px_rgba(236,72,153,0.5)] ${className}`}
    >
      <span className="text-gray-200">{top}</span>
      <div className="text-3xl font-extrabold leading-tight md:text-4xl">{value}</div>
      <div className="mt-2 text-sm md:text-base">{label}</div>
    </div>
  );
}

export default function Testimonials() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-20" dir="rtl">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="space-y-8">
          {/* Row 1: Testimonial + 1.2 Million */}
          <div
            ref={(el) => { rowRefs.current[0] = el; }}
            className="flex flex-col gap-6 md:flex-row md:items-stretch translate-y-[60px] opacity-0 transition-all duration-700 ease-out [&.in-view]:translate-y-0 [&.in-view]:opacity-100"
          >
            <TestimonialCard t={testimonials[0]} />
            <div className="md:w-80">
              <StatCard
                top="₪"
                value="1.2 מיליון"
                label="כסף שנכנס ללקוחות בירוקליק"
                className="h-full"
              />
            </div>
          </div>

          {/* Row 2: 4 Minutes + Testimonial */}
          <div
            ref={(el) => { rowRefs.current[1] = el; }}
            className="flex flex-col-reverse gap-6 md:flex-row md:items-stretch translate-y-[60px] opacity-0 transition-all duration-700 ease-out delay-150 [&.in-view]:translate-y-0 [&.in-view]:opacity-100"
          >
            <div className="md:w-80">
              <div className="rounded-3xl bg-primary px-6 py-7 text-center text-white shadow-[0_20px_60px_rgba(236,72,153,0.45)] md:text-right h-full flex flex-col justify-center">
                <div className="text-3xl font-extrabold tracking-tight md:text-4xl">4 דקות</div>
                <div className="mt-1 text-xs md:text-sm">זמן ממוצע בתהליך</div>
              </div>
            </div>
            <TestimonialCard t={testimonials[1]} />
          </div>

          {/* Row 3: Testimonial + 130 */}
          <div
            ref={(el) => { rowRefs.current[2] = el; }}
            className="flex flex-col gap-6 md:flex-row md:items-stretch translate-y-[60px] opacity-0 transition-all duration-700 ease-out delay-300 [&.in-view]:translate-y-0 [&.in-view]:opacity-100"
          >
            <TestimonialCard t={testimonials[2]} />
            <div className="md:w-80">
              <StatCard
                value="130"
                label="תהליכים שהושלמו בהצלחה"
                className="h-full md:max-w-sm md:px-9"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

