export default function Hero() {
  return (
    <section className="relative bg-white pt-10 md:pt-16 pb-20 overflow-hidden" dir="ltr">
      {/* Background blurs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-2">
          {/* Animated Circle Illustration */}
          <div className="flex justify-center md:justify-start order-1 md:order-1">
            <div className="relative h-[280px] w-[280px] md:h-[380px] md:w-[380px] animate-fade-in-left">
              {/* Concentric circles */}
              <div className="absolute inset-4 rounded-full border border-gray-200/70" />
              <div className="absolute inset-10 rounded-full border border-gray-200/60" />
              <div className="absolute inset-16 rounded-full border border-gray-100/80" />

              {/* Center logo */}
              <div className="absolute inset-[26%] flex items-center justify-center">
                <div className="flex h-32 w-44 items-center justify-center animate-float">
                  <svg width="120" height="114" viewBox="0 0 424 402" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_12px_30px_rgba(236,72,153,0.4)]">
                    <path d="M80.6069 238.598L413.452 253.282C416.398 253.411 419.111 251.942 420.303 249.574C421.494 247.205 420.921 244.414 418.857 242.529L185.845 29.7127C183.744 27.7937 180.532 27.211 177.787 28.2506C177.194 28.4754 176.649 28.7654 176.161 29.1093C174.392 30.3564 173.374 32.3082 173.509 34.3858L191.809 132.481C194.176 145.17 188.196 157.846 176.388 165.173L76.2077 227.328C73.9396 229 73.0867 231.746 74.0603 234.242C75.0351 236.736 77.6349 238.467 80.6069 238.598Z" fill="#EC4899" />
                  </svg>
                </div>
              </div>

              {/* DOCX badge */}
              <div className="absolute -left-7 top-[40%] flex h-12 w-20 -translate-y-1/2 items-center justify-center rounded-2xl bg-white text-[10px] font-semibold text-slate-600 shadow-lg shadow-slate-200/80 border border-gray-100 animate-float-slow">
                <span className="mr-1 rounded-md bg-slate-900 px-1.5 py-1 text-[9px] font-bold text-white">DOCX</span>
              </div>

              {/* File text icon */}
              <div className="absolute -right-[4%] top-[2%] flex h-13 w-13 items-center justify-center rounded-2xl animate-float-reverse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sky-500">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 9H8" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                </svg>
              </div>

              {/* Spreadsheet icon */}
              <div className="absolute right-2 bottom-[8%] flex h-13 w-13 items-center justify-center border border-gray-100 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-500">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M8 13h2" />
                  <path d="M14 13h2" />
                  <path d="M8 17h2" />
                  <path d="M14 17h2" />
                </svg>
              </div>

              {/* Star icon */}
              <div className="absolute left-4 bottom-[3%] flex h-13 w-13 items-center justify-center animate-float-slow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-amber-400 fill-amber-300">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              </div>

              {/* Sparkles icon */}
              <div className="absolute left-[55%] top-[7%] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-md shadow-slate-200/80 border border-gray-100 animate-float-reverse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-violet-500">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-right md:pr-6 order-2 md:order-2" dir="rtl">
            <div className="mb-3 inline-block tracking-[0.1px] rounded-full bg-pink-100/60 px-3 py-1 text-xs font-semibold text-pink-700 animate-fade-in-up">
              הטכנולוגיה של בירוקליק משנה את המשחק 🚀
            </div>
            <h1 className="mb-4 text-2xl font-light text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl animate-fade-in-up animation-delay-200">
              פחות בירוקרטיה,<br />
              <span className="bg-linear-to-l from-sky-500 via-violet-500 to-pink-500 bg-clip-text font-bold text-transparent">
                יותר כסף בכיס שלך.
              </span>
            </h1>
            <p className="mb-8 ml-auto max-w-md text-sm text-slate-600 sm:text-base md:max-w-lg animate-fade-in-up animation-delay-400">
              בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל את מה שמגיע לך בצורה פשוטה, חכמה ובמינימום מאמץ.
            </p>
            <div className="ml-auto flex max-w-md md:max-w-lg animate-fade-in-up animation-delay-600">
              <button className="flex items-center justify-center gap-2 shadow-primary/20 py-4 font-bold group h-12 rounded-full bg-[#EC4899] px-10 text-sm text-white shadow-[0_18px_45px_rgba(236,72,153,0.55)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[#DB2777] hover:shadow-[0_22px_55px_rgba(236,72,153,0.65)] sm:text-base">
                <span className="flex items-center gap-2" dir="rtl">
                  התחילו עכשיו
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1">
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-16 px-2 py-6 overflow-hidden animate-fade-in-up animation-delay-800">
          <div className="flex items-center justify-center gap-4 md:gap-5">
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 blur-sm opacity-60" />
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 ease-out" />
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 ease-out" />
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 ease-out" />
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 ease-out" />
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 ease-out" />
            <div className="min-w-[80px] flex-1 max-w-[140px] rounded bg-linear-to-b from-gray-200 to-gray-300 transition duration-300 hover:from-gray-300 hover:to-gray-400 h-12 border border-gray-300/50 blur-sm opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
