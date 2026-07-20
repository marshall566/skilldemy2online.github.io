import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Zap, Briefcase, Star, Quote, PieChart } from "lucide-react";
import { SiPython, SiMysql, SiGoogleanalytics, SiR } from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Upgrade Your Career<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  With Data Analytics.
                </span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-400 mb-10 leading-relaxed"
            >
              Data skills will help you make better decisions, improve results, and grow professionally. Skilldemy helps you build the analytical skills employers are looking for.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/courses">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto" data-testid="button-hero-explore">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold w-full sm:w-auto bg-transparent border-slate-700 text-white hover:bg-slate-800 hover:text-white" data-testid="button-hero-about">
                  Our Approach
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div className="mt-24 border-y border-slate-800 bg-slate-900/50 py-8 overflow-hidden relative">
          <div className="flex gap-16 items-center px-4 animate-[marquee_30s_linear_infinite] w-max">
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><SiPython className="w-8 h-8 text-[#3776AB]" /> Python</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><SiMysql className="w-8 h-8 text-[#4479A1]" /> SQL</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><span className="font-bold text-2xl text-[#217346]">XLS</span> Excel</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><span className="font-bold text-2xl text-[#F2C811]">PBI</span> Power BI</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><span className="font-bold text-2xl text-[#E97627]">TAB</span> Tableau</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><span className="font-bold text-2xl text-[#052FAD]">SPSS</span></div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><span className="font-bold text-2xl text-[#004A99]">SAS</span></div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><SiGoogleanalytics className="w-8 h-8 text-[#E37400]" /> Google Analytics</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><SiR className="w-8 h-8 text-[#276DC3]" /> R</div>
            
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><SiPython className="w-8 h-8 text-[#3776AB]" /> Python</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><SiMysql className="w-8 h-8 text-[#4479A1]" /> SQL</div>
            <div className="flex items-center gap-3 text-slate-400 font-semibold"><span className="font-bold text-2xl text-[#217346]">XLS</span> Excel</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Built for Impact</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We focus on what actually gets you hired. No fluff, no filler. Just the precise skills the industry demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Practical Projects",
                desc: "Every module centers on real-world datasets and scenarios you'll encounter on the job."
              },
              {
                icon: Zap,
                title: "Accelerated Learning",
                desc: "Optimized curriculums designed to get you proficient fast without cutting corners."
              },
              {
                icon: Briefcase,
                title: "Career Ready",
                desc: "Build a portfolio of tangible projects that prove your capabilities to hiring managers."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Popular Pathways</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Start your journey with our most in-demand data skills programs.
              </p>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="hidden md:flex">
                View All Courses
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Python for Data Analysis", tool: "Python", icon: SiPython, color: "#3776AB" },
              { title: "SQL for Data Professionals", tool: "SQL", icon: SiMysql, color: "#4479A1" },
              { title: "Power BI Business Intelligence", tool: "Power BI", icon: PieChart, color: "#F2C811" }
            ].map((course, i) => (
              <div key={i} className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all">
                <div className="mb-6 h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                  <course.icon className="w-6 h-6" style={{ color: course.color }} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{course.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Master {course.tool} through practical, hands-on projects designed for the modern workplace.</p>
                <Link href="/courses" className="text-primary font-semibold flex items-center hover:underline">
                  View Syllabus <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/courses">
              <Button variant="outline" className="w-full">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Don't just take our word for it</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Hear from professionals who accelerated their careers with SkilldemyOnline.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The SQL course completely changed my trajectory. Within 3 months I transitioned from a general analyst to a Data Engineer role.",
                author: "Sarah J.",
                role: "Data Engineer at TechCorp"
              },
              {
                quote: "No fluff, just pure practical knowledge. The Power BI dashboard projects were exactly what I needed to pass my interview.",
                author: "Michael T.",
                role: "Business Analyst"
              },
              {
                quote: "I've tried other platforms but Skilldemy's approach to Python is unmatched. It feels like you're actually doing the job while learning.",
                author: "Elena R.",
                role: "Senior Data Scientist"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to transform your career?</h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have upgraded their data skills and landed their dream roles.
          </p>
          <Link href="/courses">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold text-primary hover:bg-white" data-testid="button-cta-start">
              View All Courses
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
