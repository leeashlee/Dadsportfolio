import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const experiences = [
  {
    company: 'Security Essence',
    role: 'ארכיטקט מערכת',
    location: 'הרצליה',
    period: 'נובמבר 2016 – ספטמבר 2025',
    highlights: [
      'פיתוח מכשירי אבטחה ובטיחות חדשים (פנימיים וחיצוניים) בצריכת חשמל נמוכה מאוד',
      'פיתוח מכשיר מכ"ם (RADAR) חיצוני חדש הכולל מצלמה וסיווג מטרות PIR, מעקב אחר פולשים וקישור RF',
      'פיתוח מצלמת HD המופעלת בסוללות הכוללת בינה מלאכותית (AI) מובנית לזיהוי פנים',
      'כתיבת דרישות HLD רב-תחומיות הכוללות מכניקה, חומרה, RF ותוכנה',
      'כתיבת PRD למערכת אבטחה שלמה הפרוסה באתרים מרובים עם ממשק שרת ואפליקציה לנייד'
    ]
  },
  {
    company: 'רפאל מערכות לחימה מתקדמות',
    role: 'פיתוח מוצר וסימולציה',
    location: 'חיפה',
    period: 'אפריל 2008 – אוקטובר 2015',
    highlights: [
      'הגדרת דרישות למערכות סימולציה ארציות לתרגילים צבאיים אסטרטגיים',
      'הובלת צוותים חוצי-ארגון להבטחת ביצוע פרויקטים',
      'עבודה מול הנהלה בכירה, דיווחי סטטוס וסנכרון מאמצי הפיתוח',
      'ניהול תהליכי QA, כולל סקרי תכנון (CDR) וסקרי מוכנות לבדיקות (TRR)'
    ]
  },
  {
    company: 'TACT',
    role: 'מהנדס מערכת',
    location: '',
    period: 'נובמבר 2007 – אפריל 2008',
    highlights: [
      'הקמת מעבדת בדיקות ואינטגרציה עבור פרויקט ההגנה הלאומי "קלע דוד"'
    ]
  },
  {
    company: 'Texas Instruments (TI)',
    role: 'מהנדס פיתוח',
    location: 'הרצליה',
    period: 'מרץ 2006 – נובמבר 2007',
    highlights: [
      'פיתוח בדיקות אוטומטיות כחלק ממחזורי הפיתוח של פרוטוקולי Wi-Fi ו-DSL',
      'אימות חומרה ותוכנה (שימוש בכלים: Test Director, Clear Case)'
    ]
  },
  {
    company: 'אלביט מערכות',
    role: 'מהנדס מערכת',
    location: 'חיפה',
    period: 'אפריל 2005 – מרץ 2007',
    highlights: [
      'תכנון דרישות למערכת סימולציה בזמן אמת המשלבת סביבות אימון ומאמנים',
      'פיתוח מודלים התנהגותיים באמצעות פרוטוקולי HLA/DIS',
      'כתיבת מסמכי ATP ו-ATR עבור צוותי QA ותיקוף'
    ]
  },
  {
    company: 'צה"ל | פיקוד המרכז',
    role: 'ראש מדור סימולציה במכללות הצבאיות',
    location: '',
    period: '',
    highlights: [
      'קצין בענף משחקי מלחמה להכשרת פיקוד השדה ותפקידי שליטה ובקרה (C3)',
      'תכנון והפעלת תרגילים טקטיים ברמת מטכ"ל',
      'ניהול צוותי חיילים בהפעלת תוכנות וסימולציות',
      'הקמת מערכת מבוססת ידע ואתר האינטרנט של כתב העת "מערכות"'
    ]
  }
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center">ניסיון תעסוקתי</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex-1" dir="rtl">
                  <h3 className="text-2xl mb-2">{exp.company}</h3>
                  <p className="text-xl text-blue-600 mb-1">{exp.role}</p>
                  {exp.location && <p className="text-gray-600 mb-1">{exp.location}</p>}
                  <p className="text-gray-500 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
