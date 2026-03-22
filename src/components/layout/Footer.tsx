import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-surface py-16 border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-right">
          <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-4">
            <Link to="/">
              <img src={logo} alt="Anushka Beauty Boutique" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground max-w-md">
              הבית שלך ליופי, מקצוענות ויחס אישי. מתמחה בטיפולים רפואיים מתקדמים לתוצאות מוכחות.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">יצירת קשר</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>רחוב הירקון 12, תל אביב</li>
              <li>050-0000000</li>
              <li>anushka@beauty.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">עקבו אחרינו</h4>
            <a 
              href="https://www.instagram.com/anushka.beauty.boutique/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} className="ml-2" />
              אינסטגרם
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/5 flex flex-col md:row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Anushka Beauty Boutique. כל הזכויות שמורות.</p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link to="/" className="hover:text-primary">פרטיות</Link>
            <Link to="/" className="hover:text-primary">תנאי שימוש</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
