import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useInView } from './hooks/useInView';

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-8">צור קשר</h2>
          <p className="text-xl mb-12 opacity-90">
            מעוניין לשמוע עוד? אשמח לשוחח
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <a
              href="mailto:nissim.tg@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>nissim.tg@gmail.com</span>
            </a>
            <a
              href="tel:052-8513368"
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span dir="ltr">052-8513368</span>
            </a>
            <a
              href="https://linkedin.com/in/nissim-tugendhaft"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75" dir="rtl">
              © 2026 נסים טוגנדהפט. כל הזכויות שמורות.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
