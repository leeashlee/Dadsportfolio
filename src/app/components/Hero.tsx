import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pdf-section">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4">
            נסים טוגנדהפט
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 mb-8">
            מהנדס מערכות בכיר
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            ארכיטקט מערכת בכיר עם ניסיון מוכח בפיתוח מערכות אבטחה, סימולציה ומערכות מורכבות
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="mailto:nissim.tg@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Mail className="w-5 h-5 text-blue-600" />
            <span>nissim.tg@gmail.com</span>
          </a>
          <a
            href="tel:052-8513368"
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Phone className="w-5 h-5 text-blue-600" />
            <span dir="ltr">052-8513368</span>
          </a>
          <a
            href="https://linkedin.com/in/nissim-tugendhaft"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
