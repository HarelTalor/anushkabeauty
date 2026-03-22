import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg.png" 
          alt="Luxury Clinic Background" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layered overlay for luxury feel */}
        <div className="absolute inset-0 bg-neutral-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/20"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        <div className="flex flex-col items-center space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {/* Logo in Hero - wide on mobile, better prominence with subtle glow */}
          <div className="relative animate-in fade-in zoom-in duration-1000 w-full flex justify-center mt-[-20px] md:mt-0">
             <img 
               src={logo} 
               alt="Anushka Logo" 
               className="w-[95%] max-w-[500px] h-auto max-h-[160px] md:max-h-none md:h-44 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] filter" 
             />
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 text-white text-sm font-bold tracking-widest uppercase">
              מעל 20 שנות ניסיון במקצוע
            </div>

            <h1 className="text-4xl md:text-7xl font-serif font-light tracking-tight leading-tight italic drop-shadow-2xl">
              Unleash Your Natural Glow
            </h1>
            
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed tracking-wide">
              טיפולי פנים מתקדמים, אסתטיקה רפואית ותוצאות ללא פשרות.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <Button 
               asChild 
               size="lg" 
               className="w-[85%] max-w-[200px] sm:w-[180px] rounded-full px-6 h-12 md:h-14 text-base md:text-lg font-medium bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-md transition-all active:scale-95"
            >
              <Link to="/treatments">השירותים שלנו</Link>
            </Button>
            
            <Button 
               asChild 
               size="lg" 
               className="w-[85%] max-w-[220px] sm:w-[200px] rounded-full px-6 h-12 md:h-14 text-base md:text-lg font-bold gradient-brand shimmer text-white shadow-[0_0_20px_rgba(197,165,138,0.4)] transition-all hover:scale-105 active:scale-95 border-none"
            >
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer">
                קבעו תור עכשיו
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
