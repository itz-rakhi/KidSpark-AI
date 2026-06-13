import { motion } from 'framer-motion';

const outcomes = [
  { icon: '🧠', text: 'Understand AI fundamentals' },
  { icon: '🤖', text: 'Learn robotics concepts' },
  { icon: '🔨', text: 'Build beginner AI projects' },
  { icon: '⚙️', text: 'Explore automation & sensors' },
  { icon: '💡', text: 'Improve logical thinking' },
  { icon: '🧩', text: 'Develop problem-solving skills' },
  { icon: '🗂️', text: 'Create a mini project portfolio' },
  { icon: '💪', text: 'Gain confidence in technology' },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[250px] h-[250px] rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-white/10 text-purple-200 border border-white/20 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Learning Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            What Your Child Will Walk Away With
          </h2>
          <p className="text-purple-300 max-w-xl mx-auto">
            Real, measurable skills that build confidence and set the stage for a tech-forward future.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 rounded-xl p-3 flex items-center gap-3 transition-all duration-200 cursor-default"
            >
              <div className="text-xl shrink-0 group-hover:scale-110 transition-transform duration-200">
                {o.icon}
              </div>
              <p className="text-white text-xs font-semibold leading-snug">{o.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
