import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useSubmitContact } from "@workspace/api-client-react";

const COURSES = [
  "Python for Data Analysis",
  "SQL for Data Professionals",
  "Excel Masterclass",
  "Power BI Business Intelligence",
  "Tableau Data Visualization",
  "SPSS Statistical Analysis",
  "SAS Programming",
  "Google Analytics & Digital Marketing",
  "Data Science with R",
  "Machine Learning Essentials",
];

export default function Contact() {
  const { toast } = useToast();
  const search = useSearch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(search);
    const courseParam = params.get("course");
    if (courseParam && COURSES.includes(courseParam)) {
      setCourse(courseParam);
    }
  }, [search]);

  const { mutate: submitContact, isPending } = useSubmitContact({
    mutation: {
      onSuccess: () => {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setMessage("");
      },
      onError: () => {
        toast({
          title: "Failed to send message",
          description: "Please try again or reach us on WhatsApp.",
          variant: "destructive",
        });
      },
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [];
    if (course) parts.push(`Course of Interest: ${course}`);
    if (phone) parts.push(`Phone / WhatsApp: ${phone}`);
    parts.push(message);
    submitContact({ data: { name, email, message: parts.join("\n\n") } });
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Have questions about our courses or enterprise training? Our team is here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isPending}
                  data-testid="input-contact-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isPending}
                  data-testid="input-contact-email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={isPending}
                  data-testid="input-contact-phone"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Course of Interest</Label>
                <select
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  disabled={isPending}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-slate-900 dark:text-white dark:bg-slate-950"
                  data-testid="select-contact-course"
                >
                  <option value="">— Select a course (optional) —</option>
                  {COURSES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {course && (
                  <p className="text-xs text-primary font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> {course} selected
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  placeholder="How can we help you?"
                  className="min-h-[130px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isPending}
                  data-testid="input-contact-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full font-semibold h-12"
                disabled={isPending}
                data-testid="button-contact-submit"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">support@skilldemyonline.com</p>
                  <p className="text-slate-600 dark:text-slate-400">enterprise@skilldemyonline.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Achimota, Accra<br />
                    Ghana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+233 53 054 8696</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am-6pm GMT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Response Time</h4>
                  <p className="text-slate-600 dark:text-slate-400">We typically reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-16 max-w-5xl mx-auto"
      >
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Our Location</p>
              <p className="text-sm text-slate-500">Achimota, Accra, Ghana</p>
            </div>
          </div>
          <iframe
            title="SkilldemyOnline Location - Achimota, Accra, Ghana"
            src="https://maps.google.com/maps?q=Achimota+Accra+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  );
}
