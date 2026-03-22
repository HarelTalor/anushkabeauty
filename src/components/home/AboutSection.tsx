import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/anushka_portrait.png" 
                alt="Cosmetician at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden md:block border-2 border-accent/20 animate-in fade-in zoom-in duration-700">
              <p className="text-4xl font-bold mb-1 tracking-tighter">20+</p>
              <p className="text-sm uppercase tracking-wider font-bold opacity-90">שנות ניסיון</p>
            </div>
            {/* Quote decoration */}
            <div className="absolute -top-10 -right-10 text-[160px] leading-none text-accent/20 font-serif select-none">
              &ldquo;
            </div>
          </div>

          <div className="max-w-xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">קצת עליי</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary italic leading-tight mb-8">
              מקצוענות, אהבה ואמון <br /> 
              <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8 decoration-wavy">מעל 20 שנות ניסיון</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                היי, אני אנושקה. בשבילי, קוסמטיקה היא לא רק המקצוע שלי - היא השליחות שלי. אני מביאה איתי <span className="text-primary font-bold">מעל 20 שנות ניסיון</span> בטיפולי פנים מתקדמים.
              </p>
              <p>
                אחרי שנים של לימודים והתמחות בשיטות הטיפול המתקדמות ביותר, הקמתי את הבוטיק שלי כדי לתת מקום שמשלב רמה רפואית גבוהה עם חמימות ופינוק.
              </p>
              <p>
                אני משתמשת רק בחומרים האיכותיים ביותר ומתאימה אישית כל טיפול למבנה העור ולצרכים המדויקים שלך. האושר הכי גדול שלי הוא לראות אותך יוצאת מהקליניקה כשהעור שלך זוהר והביטחון העצמי שלך בשמיים.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <Button size="lg" className="rounded-full px-8">
                <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
                  בואי נכיר בוואטסאפ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
