import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificateImg from '../assets/certificate.jpg';

interface Week {
  week: string;
  title: string;
  theme: string;
  icon: string;
  color: string;
  bg: string;
  border: string;
  badge: string;
  dot: string;
  topics: string[];
  activities: string[];
  outcome: string;
}

const weeks: Week[] = [
  {
    week: 'Week 1',
    title: 'Foundations of AI & Robotics',
    theme: 'Getting started + curiosity building',
    icon: '🌱',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    badge: 'bg-purple-600',
    dot: 'border-purple-500',
    topics: [
      'Introduction to Artificial Intelligence',
      'What are Robots? Real-life examples',
      'How machines "think" (basic logic)',
      'Understanding sensors & inputs',
      'Scratch-based programming (beginner level)',
    ],
    activities: [
      'Build a simple "smart decision" game in Scratch',
      'Identify AI in daily life (Google Maps, YouTube, etc.)',
      'Robot behavior simulation activity',
    ],
    outcome: 'Students understand basic AI concepts and robot behavior',
  },
  {
    week: 'Week 2',
    title: 'Building Blocks of Robotics',
    theme: 'Hardware + logic thinking',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-600',
    dot: 'border-blue-500',
    topics: [
      'Parts of a robot (motors, sensors, controllers)',
      'Introduction to Arduino / block-based robotics',
      'Logic gates (AND, OR, NOT – simple explanation)',
      'If-else conditions in programming',
    ],
    activities: [
      'Create a virtual robot movement system',
      'Design a simple obstacle detection logic',
      'Mini coding challenges',
    ],
    outcome: 'Students learn how robots sense and respond to the environment',
  },
  {
    week: 'Week 3',
    title: 'AI in Action (Smart Systems)',
    theme: 'Making machines "intelligent"',
    icon: '🧠',
    color: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    badge: 'bg-pink-600',
    dot: 'border-pink-500',
    topics: [
      'Machine Learning basics (kid-friendly explanation)',
      'Image recognition concept',
      'Voice assistants (how Alexa/Google work)',
      'Data and patterns',
    ],
    activities: [
      'Train a simple AI model (Teachable Machine)',
      'Build a "smart classifier" (cat vs dog / object detection)',
      'Voice command activity simulation',
    ],
    outcome: 'Students understand how AI learns from data',
  },
  {
    week: 'Week 4',
    title: 'Final Project & Innovation Week',
    theme: 'Creativity + real-world application',
    icon: '🚀',
    color: 'from-orange-500 to-amber-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-500',
    dot: 'border-orange-500',
    topics: [
      'Project planning basics',
      'Problem-solving using AI/robotics',
      'Presentation skills',
    ],
    activities: [
      'Final project: "Smart Robot / AI App Idea"',
      'Smart Home Helper Bot',
      'AI Study Assistant',
      'Obstacle Avoidance Robot (simulation)',
      'Group project presentation & demo showcase',
    ],
    outcome: 'Students build confidence + real working project idea',
  },
];

const graduation = [
  { icon: '🎤', text: 'Project Showcase Day' },
  { icon: '👨‍👩‍👦', text: 'Presentation to mentors & parents' },
  { icon: '📝', text: 'Performance feedback' },
  { icon: '🏆', text: 'Certificate of Completion' },
  { icon: '⭐', text: 'Recognition for outstanding projects' },
];

function WeekCard({ w, index }: { w: Week; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`border ${w.border} rounded-2xl overflow-hidden shadow-sm`}
    >
      {/* Header — always visible, clickable */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full ${w.bg} px-3 py-2.5 flex items-center gap-3 text-left hover:opacity-90 transition-opacity duration-200`}
      >
        <div className={`w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br ${w.color} flex items-center justify-center text-base shadow`}>
          {w.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`text-[9px] font-extrabold uppercase tracking-wider text-white ${w.badge} px-2 py-0.5 rounded-full`}>
              {w.week}
            </span>
            <span className="text-[10px] text-gray-400 italic truncate">· {w.theme}</span>
          </div>
          <h3 className="font-extrabold text-[#1E1B4B] text-xs mt-0.5 leading-snug">{w.title}</h3>
        </div>
        <span className={`text-gray-400 text-sm transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden bg-white"
          >
            <div className="px-3 py-3 grid sm:grid-cols-2 gap-3">
              {/* Learning Topics */}
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="text-sm">📘</span>
                  <p className="text-[10px] font-extrabold text-[#1E1B4B] uppercase tracking-wider">Learning Topics</p>
                </div>
                <ul className="space-y-1">
                  {w.topics.map((t) => (
                    <li key={t} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 bg-gradient-to-br ${w.color}`} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Activities */}
              <div>
                <div className="flex items-center gap-1 mb-1.5">
                  <span className="text-sm">🛠</span>
                  <p className="text-[10px] font-extrabold text-[#1E1B4B] uppercase tracking-wider">Activities</p>
                </div>
                <ul className="space-y-1">
                  {w.activities.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                      <span className="text-green-500 shrink-0 text-[10px] mt-0.5">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Outcome */}
            <div className={`mx-3 mb-3 ${w.bg} border ${w.border} rounded-lg px-3 py-2 flex items-center gap-2`}>
              <span className="text-sm shrink-0">🎯</span>
              <p className="text-[11px] font-semibold text-[#1E1B4B]">{w.outcome}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Workshop Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-2">
            🚀 AI &amp; Robotics Summer Workshop
          </h2>
          <p className="text-lg font-bold text-purple-600 mb-2">Roadmap (4 Weeks)</p>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            A structured, week-by-week curriculum — click any week to explore topics, activities, and outcomes.
          </p>
        </motion.div>

        {/* Week accordion cards */}
        <div className="space-y-3 mb-8">
          {weeks.map((w, i) => (
            <WeekCard key={w.week} w={w} index={i} />
          ))}
        </div>

        {/* Graduation & Certification */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="bg-gradient-to-br from-[#1E1B4B] to-[#4C1D95] rounded-2xl p-5 md:p-6 shadow-xl shadow-purple-900/20 relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-2 gap-5 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-lg shadow">
                    🎓
                  </div>
                  <div>
                    <div className="text-white font-extrabold text-base leading-tight">Graduation &amp; Certification</div>
                    <div className="text-purple-300 text-xs">End of Week 4 · Demo Day</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {graduation.map((g) => (
                    <div key={g.text} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3 py-2">
                      <span className="text-base shrink-0">{g.icon}</span>
                      <span className="text-white text-xs font-medium leading-tight">{g.text}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#register"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-5 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all duration-200 text-xs"
                >
                  Enroll &amp; Graduate 🏆
                </a>
              </div>

              {/* Right — certificate image */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-yellow-400/15 blur-lg pointer-events-none" />
                <div className="relative rounded-xl overflow-hidden border border-yellow-400/40 shadow-lg">
                  <img
                    src={certificateImg}
                    alt="KidSpark AI Academy Certificate of Completion"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
                    🏅 Sample
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
