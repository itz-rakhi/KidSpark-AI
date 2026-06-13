import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: '500+', label: 'Happy Students' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '100%', label: 'Certificate Rate' },
  { value: '24/7', label: 'Doubt Support' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8F7FF] via-white to-[#FDF4FF] pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-blob absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-200/40 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-pink-200/40 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full bg-orange-200/30 blur-3xl" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 border border-purple-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Registrations Open · Limited Seats!
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={1} initial="hidden" animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1B4B] leading-[1.1] tracking-tight mb-6"
            >
              AI &amp; Robotics{' '}
              <span className="gradient-text block sm:inline">Summer Workshop</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} custom={2} initial="hidden" animate="show"
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Give your child a head-start in the technology of tomorrow. A fun, live, 4-week online workshop that transforms curious kids into junior AI creators.
            </motion.p>

            {/* Key highlights strip */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" animate="show"
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: '👦', text: 'Ages 8–14' },
                { icon: '📅', text: '4 Weeks' },
                { icon: '💻', text: 'Online Live' },
                { icon: '🗓️', text: '15 Jul 2026' },
              ].map((tag) => (
                <span
                  key={tag.text}
                  className="inline-flex items-center gap-1.5 bg-white border border-purple-100 shadow-sm text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  <span>{tag.icon}</span> {tag.text}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-purple-300/50 hover:shadow-purple-400/60 hover:scale-105 transition-all duration-200"
              >
                Enroll Now — ₹2,999 🚀
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-purple-200 text-purple-700 hover:border-purple-400 hover:bg-purple-50 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200"
              >
                Learn More ↓
              </a>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              variants={fadeUp} custom={5} initial="hidden" animate="show"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center bg-white/80 border border-purple-100 rounded-2xl py-3 px-2 shadow-sm">
                  <div className="font-extrabold text-xl text-[#1E1B4B]">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — illustration card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main card */}
            <div className="relative w-full max-w-md">
              <div className="animate-float bg-gradient-to-br from-[#1E1B4B] to-[#4C1D95] rounded-3xl p-8 shadow-2xl shadow-purple-900/30">

                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-purple-300 text-xs font-mono">robot_workshop.py</span>
                </div>

                {/* Fake code block */}
                <div className="font-mono text-sm space-y-2 mb-6">
                  <div><span className="text-pink-400">import</span> <span className="text-blue-300">robotics</span></div>
                  <div><span className="text-pink-400">import</span> <span className="text-blue-300">ai_engine</span></div>
                  <div className="mt-3">
                    <span className="text-yellow-300">robot</span>
                    <span className="text-white"> = robotics.</span>
                    <span className="text-green-300">create</span>
                    <span className="text-white">()</span>
                  </div>
                  <div>
                    <span className="text-yellow-300">brain</span>
                    <span className="text-white"> = ai_engine.</span>
                    <span className="text-green-300">load</span>
                    <span className="text-white">()</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-yellow-300">robot</span>
                    <span className="text-white">.</span>
                    <span className="text-green-300">think</span>
                    <span className="text-white">(brain)</span>
                  </div>
                  <div>
                    <span className="text-yellow-300">robot</span>
                    <span className="text-white">.</span>
                    <span className="text-green-300">run</span>
                    <span className="text-white">()</span>
                  </div>
                  <div className="mt-3 text-gray-400"># 🎉 Robot is alive!</div>
                </div>

                {/* Output */}
                <div className="bg-black/30 rounded-xl p-3 text-xs font-mono text-green-400">
                  <div className="text-gray-500 mb-1">▶ Output</div>
                  <div>✓ Robot initialized</div>
                  <div>✓ AI brain loaded</div>
                  <div className="flex items-center gap-2">
                    <span>✓ Hello, World!</span>
                    <span className="w-1.5 h-3.5 bg-green-400 animate-pulse rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Floating badges around the card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 bg-white shadow-lg shadow-yellow-100 border border-yellow-200 rounded-2xl px-3 py-2 flex items-center gap-2"
              >
                <span className="text-xl">🏆</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Certificate</div>
                  <div className="text-[10px] text-gray-500">on completion</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white shadow-lg shadow-green-100 border border-green-200 rounded-2xl px-3 py-2 flex items-center gap-2"
              >
                <span className="text-xl">🤖</span>
                <div>
                  <div className="text-xs font-bold text-gray-800">Live Classes</div>
                  <div className="text-[10px] text-gray-500">expert mentors</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-6 -translate-y-1/2 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-200 rounded-2xl px-3 py-2 text-white"
              >
                <div className="text-xs font-bold">₹2,999</div>
                <div className="text-[10px] opacity-80">only!</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
