import { motion } from 'framer-motion';

const points = [
  {
    icon: '🧠',
    title: 'Artificial Intelligence Basics',
    desc: 'Students explore what AI is, how machines learn, and where AI is already present in our daily lives.',
  },
  {
    icon: '🤖',
    title: 'Robotics Fundamentals',
    desc: 'Understand how robots are designed, how they sense their environment, and how code brings them to life.',
  },
  {
    icon: '🎮',
    title: 'Interactive Learning',
    desc: 'Every session is packed with live demos, quizzes, and real-time Q&A so learning never feels like a chore.',
  },
  {
    icon: '🔨',
    title: 'Hands-on Projects',
    desc: 'Build real AI-powered mini-projects throughout the workshop and showcase them in a final presentation.',
  },
  {
    icon: '🚀',
    title: 'Future-Ready Skills',
    desc: 'Students leave with problem-solving ability, computational thinking, and a portfolio-worthy certificate.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#F8F7FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              About The Workshop
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] leading-tight mb-5">
              Where Kids Discover the{' '}
              <span className="gradient-text">Power of AI</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              This isn't just another coding class — it's a 4-week immersive journey designed to spark genuine curiosity. Expert mentors guide every child from "What is AI?" all the way to presenting their own working project.
            </p>

            <div className="space-y-4">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E1B4B] text-sm mb-0.5">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            {/* Big card */}
            <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-3xl p-8 shadow-2xl shadow-purple-900/20 text-white">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-extrabold mb-3">What makes us different?</h3>
              <ul className="space-y-3 text-sm text-purple-200">
                {[
                  'Live sessions — not pre-recorded videos',
                  'Max 15 students per batch',
                  'Mentor-led doubt clearing every day',
                  'Weekly milestone projects',
                  'Parents progress report shared weekly',
                  'Certificate valid for college portfolios',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Small stat cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { val: '15', unit: 'Students / Batch', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { val: '4.9/5', unit: 'Parent Rating', color: 'bg-green-100 text-green-700 border-green-200' },
              ].map((s) => (
                <div key={s.unit} className={`${s.color} border rounded-2xl p-4 text-center`}>
                  <div className="font-extrabold text-2xl">{s.val}</div>
                  <div className="text-xs font-medium mt-1">{s.unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
