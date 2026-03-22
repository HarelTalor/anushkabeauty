import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const treatmentPreviews = [
  {
    title: "טיפול פנים קלאסי",
    description: "ניקוי עמוק, הזנה והחזרת החיוניות לעור הפנים.",
    image: "/images/classic_facial.png",
  },
  {
    title: "טיפול אנטי-אייג'ינג",
    description: "טשטוש קמטים ומיצוק העור בטכניקות מתקדמות.",
    image: "/images/anti_aging.png",
  },
  {
    title: "טיפול באקנה",
    description: "פתרונות ממוקדים לריפוי והרגעה של עור בעייתי.",
    image: "/images/acne_treatment.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function TreatmentPreview() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic">הטיפולים הנבחרים שלנו</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              מגוון טיפולים מקצועיים המותאמים אישית למטרות שלך.
            </p>
          </motion.div>
          <Button variant="outline" className="hidden md:flex rounded-full border-primary/20 hover:bg-primary/5" asChild>
            <Link to="/treatments">כל הטיפולים</Link>
          </Button>
        </div>

        {/* Desktop Grid / Mobile Horizontal Scroll with Pop Animation */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 hide-scrollbar snap-x snap-mandatory"
        >
          {treatmentPreviews.map((treatment, index) => (
            <motion.div key={index} variants={item} className="flex-shrink-0 w-[85vw] md:w-full snap-center">
              <Card className="h-full border-none shadow-lg rounded-3xl overflow-hidden glass-card hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-bold">{treatment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {treatment.description}
                  </p>
                  <div className="flex gap-4">
                    <Button variant="link" className="p-0 h-auto text-primary font-bold" asChild>
                      <Link to="/treatments">פרטים נוספים ←</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Button variant="outline" className="w-full md:hidden mt-8 rounded-full border-primary/20" asChild>
          <Link to="/treatments">כל הטיפולים</Link>
        </Button>
      </div>
    </section>
  );
}
