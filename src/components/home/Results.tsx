import BeforeAfterSlider from "../shared/BeforeAfterSlider";
import { ScrollReveal } from "../shared/ScrollReveal";
import { motion } from "framer-motion";

export default function Results() {
  const results = [
    {
      before: "/images/acne_before.png",
      after: "/images/acne_after.png",
      title: "טיפול באקנה וחידוש העור",
      desc: "שיפור משמעותי במרקם העור והעלמת פצעונים לאחר סדרת טיפולים ממוקדת."
    },
    {
      before: "/images/anti_aging_before.png",
      after: "/images/anti_aging_after.png",
      title: "טיפול אנטי-אייג'ינג ומיצוק",
      desc: "טשטוש קמטוטים והחזרת האלסטיות והחיוניות לעור הפנים."
    }
  ];

  return (
    <section className="py-24 bg-surface/30 overflow-hidden border-y border-primary/5">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">תוצאות מדברות בעד עצמן</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              הזיזי את הסמן כדי לראות את השינוי המדהים שעברו הלקוחות שלי.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical Stack on Mobile / Grid on Desktop - Solves gesture conflict */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="w-full max-w-[500px] lg:max-w-none mx-auto space-y-6"
            >
              <div className="shadow-2xl rounded-3xl overflow-hidden border border-white/20">
                <BeforeAfterSlider before={result.before} after={result.after} />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl md:text-2xl font-bold">{result.title}</h3>
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">{result.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
