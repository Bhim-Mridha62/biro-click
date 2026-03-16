import Image from "next/image";

const posts = [
  {
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    desc: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
    img: "/assets/photo-1554224155-8d04cb21cd6c.jpg",
    tag: "ביטוח",
    tagColor: "bg-[#FFF4B4]",
    readTime: "8 דקות",
  },
  {
    title: "איך להגיש תביעה קטנה באינטרנט?",
    desc: "המדריך המלא להגשת תביעה קטנה דרך מערכת נט המשפט החדשה",
    img: "/assets/photo-1450101499163-c8848c66ca85.jpg",
    tag: "טיפים",
    tagColor: "bg-[#F0B4FF]",
    readTime: "5 דקות",
  },
  {
    title: "איך מקבלים החזרי מס בלי להסתבך?",
    desc: "מדריך פשוט לבדיקת זכאות להחזרי מס לשכירים ולהגשת הבקשה בצורה דיגיטלית.",
    img: "/assets/photo-1554224155-8d04cb21cd6c.jpg",
    tag: "טיפים",
    tagColor: "bg-[#E0F2FE]",
    readTime: "7 דקות",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            קצת תוכן{" "}
            <span className="bg-gradient-to-l from-fuchsia-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
              שבטוח יעניין
            </span>{" "}
            אתכם
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={i}
              className="mx-auto flex h-full max-w-sm flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_8px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)] group animate-fade-in-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="relative h-52 overflow-hidden md:h-56">
                <Image
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={post.img}
                  width={400}
                  height={224}
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-500" dir="ltr">
                  <span>זמן קריאה • {post.readTime}</span>
                  <span className={`rounded-full px-4 py-1 text-xs font-semibold text-slate-800 ${post.tagColor}`}>
                    {post.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-right text-lg font-bold text-slate-900 md:text-xl">
                  {post.title}
                </h3>
                <p className="text-right text-sm leading-relaxed text-slate-600">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
