import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Globe, Heart } from 'lucide-react';
import { useInView } from './hooks/useInView';

const education = [
  {
    institution: 'אוניברסיטת בר-אילן',
    degree: 'קורסים לקראת תואר שני (M.Sc) במתמטיקה',
    icon: GraduationCap
  },
  {
    institution: 'הטכניון',
    degree: 'תואר ראשון (B.Sc) במתמטיקה ובקרה בחשמל',
    icon: GraduationCap
  },
  {
    institution: 'אוניברסיטת Jussieu (VI) בפריז',
    degree: 'לימודי מדעים מדויקים (DEUG)',
    icon: GraduationCap
  }
];

const courses = [
  'עיבוד אותות ב-MatLab',
  'סקריפטים ב-Python',
  'פיתוח מודלי UML עבור VR-Forces',
  'ניהול מערכות Solaris/Unix',
  'בסיסי נתונים Oracle/SQL'
];

const languages = [
  { language: 'צרפתית', level: 'שפת אם' },
  { language: 'עברית', level: 'ברמת שפת אם' },
  { language: 'אנגלית', level: 'שוטפת' },
  { language: 'פורטוגזית', level: 'ידע טוב' }
];

export function Education() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 pdf-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center">השכלה וקורסים</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl mb-6 text-center text-blue-600">קורסים מקצועיים</h3>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <ul className="space-y-3" dir="rtl">
                  {courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-6">
                      <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-center text-blue-600">השכלה אקדמית</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4" dir="rtl">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <edu.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg mb-1">{edu.institution}</h4>
                        <p className="text-gray-600">{edu.degree}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-center text-blue-600">שפות</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="text-center" dir="rtl">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-semibold mb-1">{lang.language}</p>
                    <p className="text-sm text-gray-600">{lang.level}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl mb-6 text-center text-blue-600">התנדבות</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-center gap-3" dir="rtl">
                <Heart className="w-6 h-6 text-red-500" />
                <p className="text-lg text-gray-700">מגן דוד אדום (מד"א) | פרמדיק, חיפה</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
