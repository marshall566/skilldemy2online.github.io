import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              We build data practitioners, <span className="text-primary">not theorists.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 leading-relaxed"
            >
              SkilldemyOnline was founded on a simple premise: traditional education is too slow for the modern data landscape. We cut the academic bloat and focus entirely on applied skills.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Our Research-Backed Approach</h2>
            <div className="space-y-6">
              {[
                { title: "Project-Based Learning", desc: "You retain 80% more information when applying it immediately. Every module ends with a hands-on project." },
                { title: "Industry-Vetted Curriculum", desc: "We constantly update our courses based on what hiring managers in top tech firms are actually looking for." },
                { title: "Active Mentorship", desc: "Learn directly from our team of practicing data analysts who bring real-world experience into every lesson." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl">
                <Users className="w-10 h-10 text-primary mb-4" />
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">10k+</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">Students Trained</div>
              </div>
              <div className="bg-primary p-8 rounded-2xl text-white">
                <TrendingUp className="w-10 h-10 mb-4" />
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-primary-foreground/90 font-medium">Career Advancement Rate</div>
              </div>
            </div>
            <div className="bg-slate-950 p-8 rounded-2xl text-white mt-8">
              <Award className="w-10 h-10 text-accent mb-4" />
              <div className="text-2xl font-bold mb-4">"The fastest path to a data career."</div>
              <div className="text-slate-400">- DataTech Magazine</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Learn from the Best</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our instructors aren't just teachers—they are active, senior data practitioners shaping the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Phelimon Ashirifie Ofei",
                role: "CEO, Data Analyst & Research Consultant",
                bio: "Founder and CEO of SkilldemyOnline. A seasoned data analyst and research consultant passionate about equipping professionals with real-world, practical data skills.",
                initials: "PAO"
              },
              {
                name: "Panti Sarkwah Jesus",
                role: "Head of Department (HOD), Data Analyst",
                bio: "Head of Department at SkilldemyOnline. A dedicated data analyst focused on delivering structured, hands-on training that prepares students for the demands of modern data careers.",
                initials: "PSJ"
              }
            ].map((instructor, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                <div className="w-24 h-24 mx-auto bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-2xl font-bold text-slate-500 dark:text-slate-400 mb-6">
                  {instructor.initials}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{instructor.name}</h3>
                <div className="text-primary font-medium mb-4">{instructor.role}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {instructor.bio}
                </p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
