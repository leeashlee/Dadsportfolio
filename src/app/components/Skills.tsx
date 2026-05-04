import { motion } from 'motion/react';
import { Code, Users, Zap, Layout, Brain, GitBranch } from 'lucide-react';
import { useInView } from './hooks/useInView';

const skills = [
  {
    icon: Code,
    title: 'הנדסת מערכת',
    description: 'כתיבת HLD, דרישות מערכת מלאות, PRD וארכיטקטורה'
  },
  {
    icon: Layout,
    title: 'ניהול מוצר',
    description: 'ניהול לוחות זמנים לפיתוח מוצרים חדשים (PowerBuilder)'
  },
  {
    icon: GitBranch,
    title: 'מתודולוגיות Agile',
    description: 'עבודה בסביבת CI/CD לאספקה רציפה'
  },
  {
    icon: Zap,
    title: 'תכנון רב-תחומי',
    description: 'תכנון מכשיר מלא: חומרה, מכניקה ופונקציונליות'
  },
  {
    icon: Brain,
    title: 'יכולת אנליטית',
    description: 'חשיבה מתמטית ואנליטית גבוהה'
  },
  {
    icon: Users,
    title: 'ניהול צוות וסנכרון',
    description: 'הובלת ממשקים בין מחלקות, צוותים ולקוחות'
  }
];

export function Skills() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center">מיומנויות מרכזיות</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center" dir="rtl">
                  <div className="p-4 bg-blue-100 rounded-full mb-4">
                    <skill.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
