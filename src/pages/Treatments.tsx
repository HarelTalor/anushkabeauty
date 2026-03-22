import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const allTreatments = [
  {
    category: "טיפולי פנים קלאסיים",
    items: [
      { name: "ניקוי עמוק יסודי", price: "₪350", desc: "טיפול הכולל אבחון, ניקוי, קומדונים, מסכה והזנה." },
      { name: "טיפול זוהר (Glow)", price: "₪400", desc: "טיפול מהיר ואינטנסיבי לאירועים להחזרת הברק והחיות." },
      { name: "טיפול פנים משולב עיסוי", price: "₪450", desc: "שילוב של טיפול פנים קלאסי עם עיסוי לימפטי ומרגיע." }
    ]
  },
  {
    category: "טיפולים מתקדמים",
    items: [
      { name: "טיפול אנטי-אייג'ינג עוצמתי", price: "₪550", desc: "שימוש בחומרים פעילים למיצוק וחיחידוש העור." },
      { name: "טיפול פוטו-רייג'וביניישן", price: "₪600", desc: "שימוש בטכנולוגיית אור לשיפור מרקם העור ופיגמנטציה." },
      { name: "טיפול באקנה פעיל", price: "₪400", desc: "טיפול רפואי ממוקד להרגעת העור ומניעת צלקות." }
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function Treatments() {
  return (
    <div className="bg-background min-h-screen py-16 pt-32">
      <div className="container px-4 mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary italic">תפריט טיפולים</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            בחרי את הטיפול המתאים לך. כל הטיפולים מתבצעים באמצעות המכשירים והחומרים האיכותיים ביותר.
          </p>
        </motion.header>

        <div className="space-y-24">
          {allTreatments.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <motion.h2 variants={item} className="text-2xl md:text-3xl font-serif font-bold border-b border-primary/20 pb-2 inline-block italic">
                {category.category}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((treatment, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-surface group">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{treatment.name}</CardTitle>
                        <span className="text-primary font-bold text-xl">{treatment.price}</span>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed min-h-[60px]">{treatment.desc}</p>
                        <Button variant="link" className="p-0 h-auto mt-6 text-primary font-bold group-hover:translate-x-[-4px] transition-transform" asChild>
                          <a href={`https://wa.me/972500000000?text=היי אנושקה, אשמח לקבוע תור ל${treatment.name}`}>
                            קבעי תור עכשיו ←
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[2rem] gradient-brand text-white text-center shadow-2xl relative overflow-hidden group/cta"
        >
          {/* Subtle decorative glow */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 italic">לא בטוחה מה מתאים לך?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            אני מזמינה אותך לשיחת ייעוץ אישית ללא עלות, בה נאבחן את סוג העור שלך ונתאים את התוכנית הטובה ביותר עבורך.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-lg font-bold shadow-xl shimmer gradient-brand border-none hover:scale-105 active:scale-95 transition-all">
            <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
              צרי קשר בווצאפ
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
