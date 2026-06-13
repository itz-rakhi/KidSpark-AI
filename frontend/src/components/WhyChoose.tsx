import { motion } from 'framer-motion';

const features = [
  { icon: '🎥', title: 'Live Interactive Sessions', desc: 'Real-time classes with screen share, polls, and instant Q&A — no boring videos.', color: 'bg-purple-100 text-purple-700' },
  { icon: '👨‍🏫', title: 'Expert Mentors', desc: 'Learn from industry professionals with 5+ years in AI/Robotics and a passion for teaching kids.', color: 'bg-blue-100 text-blue-700' },
  { icon: '🔬', title: 'Project-Based Learning', desc: 'Every concept is reinforced with a hands-on mini-project, so skills stick for life.', color: 'bg-green-100 text-green-700' },
  { icon: '👥', title: 'Small Batch Size', desc: 'Maximum 15 students ensures every child gets personal attention and guidance.', color: 'bg-orange-100 text-orange-700' },
  { icon: '🏆', title: 'Certificate of Completion', desc: 'Receive a shareable digital certificate recognised in school portfolios and contests.', color: 'bg-pink-100 text-pink-700' },
  { icon: '💬', title: 'Doubt Support', desc: 'Dedicated WhatsApp group with mentors available for doubt resolution every day.', color: 'bg-cyan-100 text-cyan-700' },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Why KidSpark AI?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
            Built for Kids Who Want to{' '}
            <span className="gradient-text">Build the Future</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We combine world-class curriculum with a nurturing environment that makes every child feel like a genius.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-hover bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:border-purple-200 flex items-start gap-3"
            >
              <div className={`w-9 h-9 shrink-0 rounded-xl ${f.color} flex items-center justify-center text-lg shadow-sm`}>
                {f.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[#1E1B4B] text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
