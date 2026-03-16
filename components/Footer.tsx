export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-white to-gray-50 pt-12 md:pt-16 pb-6 md:pb-8 border-t border-gray-100" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo */}
          <div className="flex flex-col items-end col-span-1">
            <div className="flex flex-col items-end">
              <span className="text-3xl md:text-4xl font-bold bg-linear-to-l from-fuchsia-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
                ביירוקלידי
              </span>
              <span className="text-xs text-slate-600 tracking-wide mt-1">בירוקרטיה בקליק</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-end gap-3 md:gap-4">
            <h4 className="font-bold text-slate-900 text-xs md:text-sm">קויו</h4>
            <div className="flex flex-col items-end gap-2 md:gap-3 text-right">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">ראשי</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">איך זה עובד</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">הקלים שלנו</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">לדיוקויות משפחיות</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">שאלות נשאלות</a>
            </div>
          </div>

          {/* Privacy */}
          <div className="flex flex-col items-end gap-3 md:gap-4">
            <h4 className="font-bold text-slate-900 text-xs md:text-sm">פרטיות</h4>
            <div className="flex flex-col items-end gap-2 md:gap-3 text-right">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">תקנון שימוש</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">מדיניות פרטיות</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm">שעות</a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-end gap-3 md:gap-4">
            <h4 className="font-bold text-slate-900 text-xs md:text-sm">יצירת קשר</h4>
            <div className="flex flex-col items-end gap-2 md:gap-3 text-right">
              <a
                href="mailto:shushanran@gmail.com"
                className="text-slate-600 hover:text-primary transition-colors text-xs md:text-sm break-all"
              >
                shushanran@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-slate-600">בתביעקים 2025 כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
