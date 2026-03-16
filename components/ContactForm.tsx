export default function ContactForm() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            נשמח לדברך אתכם,
            <br />
            השאירו פרטים ונחזור אליכם בהקדם.
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg px-2">
            אנחנו מייצרים עבורכם את כל הטפסים בעזרת מערכת חכמה וחדשנית וחוסכים לכם את כל הכאב ראש והבירוקרטיה
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center sm:items-end">
          <div className="w-full sm:flex-1 sm:max-w-xs">
            <input
              placeholder="שם"
              className="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-right text-sm md:text-base"
              type="text"
            />
          </div>
          <div className="w-full sm:flex-1 sm:max-w-xs">
            <input
              placeholder="טלפון"
              className="w-full px-4 md:px-6 py-2.5 md:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-right text-sm md:text-base"
              type="tel"
            />
          </div>
          <button className="rounded-xl transition-all duration-200 flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base shadow-lg shadow-primary/20 whitespace-nowrap">
            שליחה
          </button>
        </form>
      </div>
    </section>
  );
}
