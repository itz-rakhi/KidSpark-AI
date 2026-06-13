import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  { icon: '📈', label: 'Live Progress Tracking', desc: 'Month-by-month completion with lesson & assignment stats' },
  { icon: '📊', label: 'Quiz & Assessment Results', desc: 'Weekly quiz scores, monthly grades, skill-wise analysis' },
  { icon: '📅', label: 'Attendance Reports', desc: 'Session log, attendance %, and missed class alerts' },
  { icon: '🔨', label: 'Project Showcase', desc: 'Submitted projects, mentor grades, and comments' },
  { icon: '👨🏫', label: 'Mentor Feedback', desc: 'Strengths, improvement areas, and personalised notes' },
  { icon: '🏆', label: 'Certificate & Badges', desc: 'Unlock and download certificate on completion' },
];

export default function DashboardPreview() {
  return (
    <section id="dashboard-preview" className="py-16 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-40px] right-[-40px] w-64 h-64 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[-40px] w-56 h-56 rounded-full bg-pink-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Parent Dashboard · Live Demo Available
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Track Every Step of Your{' '}
              <span className="text-yellow-300">Child's Journey</span>
            </h2>

            <p className="text-purple-200 text-sm leading-relaxed mb-6">
              Enrolled parents get access to a dedicated progress portal — see quiz scores, attendance, project grades, and mentor feedback all in one place, in real time.
            </p>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 bg-white/10 border border-white/15 rounded-xl p-3"
                >
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">{f.label}</p>
                    <p className="text-purple-300 text-[11px] mt-0.5 leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-extrabold px-6 py-3 rounded-xl text-sm shadow-xl hover:scale-105 transition-all duration-200"
              >
                👀 Preview Dashboard (Demo)
              </Link>
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow-lg hover:scale-105 transition-all duration-200"
              >
                Enroll to Get Access 🚀
              </a>
            </div>
          </motion.div>

          {/* Right — dashboard mockup card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-purple-400/20 blur-2xl scale-95 pointer-events-none" />

            {/* Mock dashboard window */}
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/40">
              {/* Window bar */}
              <div className="bg-[#1E1B4B] px-4 py-2.5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-purple-300 text-[10px] font-mono">kidsparkai.com/dashboard</span>
                <span className="text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-bold">● Live</span>
              </div>

              {/* Mock dashboard content */}
              <div className="p-4 space-y-3">
                {/* Student info bar */}
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-extrabold text-xs">AS</div>
                  <div>
                    <p className="text-white font-bold text-xs">Arjun Sharma</p>
                    <p className="text-purple-200 text-[10px]">KSA-2026-0342 · Batch B</p>
                  </div>
                  <div className="ml-auto bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-full">68% Complete</div>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Avg Score', value: '86%', color: 'text-purple-600' },
                    { label: 'Attendance', value: '83%', color: 'text-blue-600' },
                    { label: 'Projects', value: '2/3', color: 'text-green-600' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-2.5 text-center border border-gray-100">
                      <p className={`font-extrabold text-sm ${s.color}`}>{s.value}</p>
                      <p className="text-[10px] text-gray-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="bg-white rounded-xl p-3 border border-gray-100 space-y-2">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Monthly Progress</p>
                  {[
                    { label: 'Month 1 — AI Foundations', pct: 100, color: 'bg-purple-500' },
                    { label: 'Month 2 — Robotics', pct: 70, color: 'bg-blue-500' },
                    { label: 'Month 3 — Innovation', pct: 0, color: 'bg-green-400' },
                  ].map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                        <span>{b.label}</span><span className="font-bold text-gray-700">{b.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Last notification */}
                <div className="bg-purple-50 border border-purple-100 rounded-xl px-3 py-2.5 flex items-center gap-2.5">
                  <span className="text-base">🔔</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-purple-700 truncate">Quiz Result: 95/100 🎉</p>
                    <p className="text-[10px] text-gray-400">Week 8 score available · 1d ago</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shrink-0" />
                </div>
              </div>

              {/* Overlay CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-transparent to-transparent flex items-end p-4">
                <Link
                  to="/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-purple-50 font-extrabold py-2.5 rounded-xl text-xs shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  👀 Open Full Dashboard Preview →
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
