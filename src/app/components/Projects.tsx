import { motion } from 'motion/react';
import { Award, Camera, Radar, Grid3x3, Users2 } from 'lucide-react';
import { useInView } from './hooks/useInView';

const projects = [
  {
    icon: Camera,
    title: 'זיהוי פנים',
    description: 'מצלמת HD מבוססת סוללות עם מודל AI לזיהוי פנים המוטמע ב-MCU'
  },
  {
    icon: Radar,
    title: 'מערכת בטיחות לבריכות',
    description: 'מערכת מכ"ם IOT לסיווג מטרות המתריעה לנייד ולהפעלת סירנה'
  },
  {
    icon: Grid3x3,
    title: 'מכשיר רב-חיישני',
    description: 'התקן בעל 5 חיישנים המאפשר 21 יכולות שונות במכשיר אחד'
  },
  {
    icon: Users2,
    title: 'מונה אנשים',
    description: 'גלאי PIR המשמש לספירת כניסות ויציאות בנקודות מעבר'
  }
];

const patents = [
  'פטנט (בהמתנה) למערכת מכ"ם בצריכת חשמל נמוכה (חיי סוללה ל-3 שנים)',
  'פטנט לאלגוריתם זיהוי חבלה (Tamper) וזעזוע למכשירי אבטחה',
  'פטנט לפונקציונליות מגנטית באמצעות מגנטומטר'
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 bg-white/50 pdf-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center">פרויקטים ופטנטים</h2>

          <div className="mb-16">
            <h3 className="text-3xl mb-8 text-center text-blue-600">פרויקטים נבחרים</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4" dir="rtl">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2">{project.title}</h4>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-8 text-center text-blue-600">פרסים ופטנטים</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-4" dir="rtl">
                {patents.map((patent, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{patent}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
