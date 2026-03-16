"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50" dir="ltr">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center">
        {/* Mobile */}
        <div className="flex md:hidden w-full items-center justify-between">
          <button className="transition-all duration-200 flex items-center justify-center gap-2 shadow-primary/20 py-2 rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-[0_8px_20px_rgba(245,67,135,0.35)] text-sm">
            התחילו
          </button>
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-primary leading-none">בירוקליק</span>
            <span className="text-[9px] text-gray-500">בירוקרטיה בקליק</span>
          </div>
          <button
            className="p-2 text-secondary hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex w-full items-center justify-between">
          <button className="transition-all duration-200 flex items-center justify-center gap-2 shadow-primary/20 py-2 text-sm rounded-full px-5 bg-primary hover:bg-primary/90 text-white shadow-[0_8px_20px_rgba(245,67,135,0.35)]">
            התחילו עכשיו
          </button>
          <nav className="flex-1 flex items-center justify-center gap-10 text-sm text-secondary/80">
            <button className="hover:text-primary transition-colors">הכלים שלנו</button>
            <button className="hover:text-primary transition-colors">המלצות</button>
            <button className="hover:text-primary transition-colors">הגבלת עמלות</button>
            <button className="hover:text-primary transition-colors">ראשי</button>
          </nav>
          <div className="flex flex-col items-end">
            <span className="text-xl md:text-2xl font-bold text-primary leading-none">בירוקליק</span>
            <span className="text-[10px] text-gray-500 tracking-[0.18em]">בירוקרטיה בקליק</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 text-center text-sm text-secondary/80">
          <button className="block w-full py-2 hover:text-primary transition-colors">ראשי</button>
          <button className="block w-full py-2 hover:text-primary transition-colors">הגבלת עמלות</button>
          <button className="block w-full py-2 hover:text-primary transition-colors">המלצות</button>
          <button className="block w-full py-2 hover:text-primary transition-colors">הכלים שלנו</button>
        </div>
      )}
    </header>
  );
}
