"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HowItWorks() {
  const imageRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

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

    [imageRef, step1Ref, step2Ref, step3Ref].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative -mt-10 z-10 rounded-t-[40px] bg-white py-16 shadow-sm overflow-hidden" dir="ltr">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-12 text-center" dir="rtl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            איך זה עובד?{" "}
            <span className="bg-linear-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
              פשוט.
            </span>
          </h2>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
          {/* Image — slides in from left */}
          <div
            ref={imageRef}
            className="flex justify-center md:justify-start translate-x-[-80px] opacity-0 transition-all duration-700 ease-out [&.in-view]:translate-x-0 [&.in-view]:opacity-100"
          >
            <div className="relative h-64 w-64 overflow-visible rounded-full bg-white md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full border border-slate-100" />
              <div className="absolute inset-6 rounded-full border border-slate-100" />
              <div className="absolute inset-12 overflow-hidden rounded-full bg-slate-100">
                <Image
                  alt="אישה עובדת מול מחשב נייד"
                  className="h-full w-full object-cover"
                  src="/assets/pexels-photo-1181681.jpeg"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>

          {/* Steps — each slides in from right, staggered */}
          <div
            className="relative"
            dir="rtl"
          >
            <div className="pointer-events-none absolute right-[30px] top-3 hidden h-[calc(100%-3rem)] w-px bg-slate-100 md:block" />

            <div className="space-y-10">
              {/* Step 1 */}
              <div
                ref={step1Ref}
                className="relative flex gap-4 md:gap-6 translate-x-[80px] opacity-0 transition-all duration-700 ease-out [&.in-view]:translate-x-0 [&.in-view]:opacity-100"
              >
                <div className="relative z-10 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white shadow-none md:h-14 md:w-14 bg-blue-50 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
                      <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1.5">
                  <span className="mb-1 block text-sm font-bold text-pink-500">שלב 1</span>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 md:text-xl">מילוי פרטים</h3>
                  <p className="text-sm text-slate-600 md:text-base">
                    מילוי מהיר של פרטי התביעה והנתונים האישיים עם ליווי בוט AI שמנחה בכל צעד.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                ref={step2Ref}
                className="relative flex gap-4 md:gap-6 translate-x-[80px] opacity-0 transition-all duration-700 ease-out delay-200 [&.in-view]:translate-x-0 [&.in-view]:opacity-100"
              >
                <div className="relative z-10 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white shadow-none md:h-14 md:w-14 bg-purple-50 text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
                      <path d="M12 13v8" />
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                      <path d="m8 17 4-4 4 4" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1.5">
                  <span className="mb-1 block text-sm font-bold text-pink-500">שלב 2</span>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 md:text-xl">צירוף מסמכים</h3>
                  <p className="text-sm text-slate-600 md:text-base">
                    העלאת מסמכים ותמונות בקלות, ישירות מהמחשב או מהטלפון.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                ref={step3Ref}
                className="relative flex gap-4 md:gap-6 translate-x-[80px] opacity-0 transition-all duration-700 ease-out delay-400 [&.in-view]:translate-x-0 [&.in-view]:opacity-100"
              >
                <div className="relative z-10 shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white shadow-none md:h-14 md:w-14 bg-green-50 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="pt-1.5">
                  <span className="mb-1 block text-sm font-bold text-pink-500">שלב 3</span>
                  <h3 className="mb-1 text-lg font-bold text-slate-900 md:text-xl">הגשה וסיום</h3>
                  <p className="text-sm  text-slate-600 md:text-base">
                    סקירה סופית, תשלום מאובטח והגשה מקוונת של התביעה בלחיצה אחת.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex">
              <button className="transition-all hover:scale-[1.02] duration-200 flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 rounded-full px-10 py-2.5 text-sm md:px-12 md:text-base">
                התחילו עכשיו
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
