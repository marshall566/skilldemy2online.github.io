import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, BarChart, Database, Terminal, PieChart, LineChart } from "lucide-react";

const COURSES = [
  {
    id: "python-data",
    title: "Python for Data Analysis",
    level: "Intermediate",
    duration: "8 weeks",
    icon: Terminal,
    desc: "Master pandas, NumPy, and matplotlib. Learn to clean, transform, and analyze massive datasets with Python.",
    color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
  },
  {
    id: "sql-pro",
    title: "SQL for Data Professionals",
    level: "Beginner",
    duration: "4 weeks",
    icon: Database,
    desc: "From basic SELECTs to advanced window functions. Learn how to extract and manipulate data directly from relational databases.",
    color: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800"
  },
  {
    id: "excel-master",
    title: "Excel Masterclass",
    level: "Beginner",
    duration: "4 weeks",
    icon: BarChart,
    desc: "Go beyond VLOOKUP. Master Power Query, Pivot Tables, advanced charting, and foundational VBA automation.",
    color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
  },
  {
    id: "powerbi",
    title: "Power BI Business Intelligence",
    level: "Intermediate",
    duration: "6 weeks",
    icon: PieChart,
    desc: "Build interactive dashboards, master DAX measures, and create automated reporting pipelines that impress stakeholders.",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800"
  },
  {
    id: "tableau",
    title: "Tableau Data Visualization",
    level: "Intermediate",
    duration: "6 weeks",
    icon: LineChart,
    desc: "Tell compelling stories with data. Learn calculated fields, level of detail expressions, and advanced dashboard design.",
    color: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
  },
  {
    id: "spss",
    title: "SPSS Statistical Analysis",
    level: "Advanced",
    duration: "6 weeks",
    icon: BarChart,
    desc: "Conduct rigorous statistical testing, regression modeling, and multivariate analysis for academic or market research.",
    color: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
  },
  {
    id: "sas",
    title: "SAS Programming",
    level: "Advanced",
    duration: "8 weeks",
    icon: Terminal,
    desc: "Prepare for clinical or financial data roles. Master Base SAS, macro programming, and predictive modeling.",
    color: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800"
  },
  {
    id: "ga4",
    title: "Google Analytics & Digital Marketing",
    level: "Beginner",
    duration: "4 weeks",
    icon: LineChart,
    desc: "Navigate GA4, set up custom event tracking, analyze conversion funnels, and optimize marketing spend.",
    color: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
  },
  {
    id: "data-science-r",
    title: "Data Science with R",
    level: "Advanced",
    duration: "10 weeks",
    icon: Terminal,
    desc: "Tidyverse, ggplot2, and machine learning models in R. Build predictive algorithms for complex business problems.",
    color: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800"
  },
  {
    id: "ml-essentials",
    title: "Machine Learning Essentials",
    level: "Advanced",
    duration: "12 weeks",
    icon: Database,
    desc: "Scikit-learn, classification, clustering, and deep learning basics. Train models that can predict future outcomes.",
    color: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 dark:border-fuchsia-800"
  }
];

export default function Courses() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Course Catalog</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Intensive, skill-focused training designed to make you invaluable. Choose your weapon.
        </p>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 group" data-testid={`card-course-${course.id}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${course.color}`}>
                      <course.icon className="w-6 h-6" />
                    </div>
                    <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"}>
                      {course.level}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {course.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-slate-50 dark:bg-slate-800/50 w-fit px-3 py-1.5 rounded-md">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link href={`/contact?course=${encodeURIComponent(course.title)}`} className="w-full">
                    <Button className="w-full font-semibold group-hover:bg-primary/90" data-testid={`button-enroll-${course.id}`}>
                      Enroll Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
