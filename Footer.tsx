import { Link } from "wouter";
import { Instagram, Facebook, Mail } from "lucide-react";
import logoSrc from "../../assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <img
                src={logoSrc}
                alt="SkilldemyOnline"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Master the world's most powerful data tools with hands-on, job-ready training designed for ambitious professionals.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/skilldemyonline?igsh=" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 transition-colors" data-testid="link-social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/185HrToTKd/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" data-testid="link-social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Courses</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/courses" className="hover:text-primary transition-colors">Python for Data Analysis</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">SQL for Data Professionals</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Power BI Business Intelligence</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Tableau Data Visualization</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Machine Learning Essentials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">Our Catalog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@skilldemyonline.com" className="hover:text-white transition-colors">
                  hello@skilldemyonline.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">📞</span>
                <a href="tel:+233530548696" className="hover:text-white transition-colors">+233 53 054 8696</a>
              </li>
              <li>
                <p>Achimota, Accra</p>
                <p>Ghana</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SkilldemyOnline. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
