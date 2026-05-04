import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 pdf-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center">תמצית מקצועית</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6" dir="rtl">
              ארכיטקט מערכת בכיר, המשלב מיומנויות מקצועיות גבוהות עם יכולת לתרגם צורכי לקוח לתכנונים טכניים ואתגרים במוצר.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6" dir="rtl">
              מהנדס בעל תודעת שירות גבוהה, יכולת תקשורת ושיתוף פעולה מצוינים.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6" dir="rtl">
              ליווי והנחיית תהליכי פיתוח וייצור באמצעות דרישות HLD הכוללות תוכנה, חומרה, מכניקה וRF.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700" dir="rtl">
              בעל יכולות טכניות חזקות במערכות הפעלה וניהול בסיסי נתונים, כישורי ניהול פרויקטים ויכולת אנליטית מוכחת.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
