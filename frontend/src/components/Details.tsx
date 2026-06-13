import { motion } from 'framer-motion';

const details = [
  { icon: '👦', label: 'Age Group', value: '8 – 14 Years', color: 'from-purple-500 to-violet-600', bg: 'bg-purple-50', border: 'border-purple-200' },
  { icon: '⏱️', label: 'Duration', value: '4 Weeks', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50', border: 'border-blue-200' },
  { icon: '💻', label: 'Mode', value: 'Online (Live)', color: 'from-green-500 to-emerald-500', bg: 'bg-green-50', border: 'border-green-200' },
  { icon: '💰', label: 'Workshop Fee', value: '₹2,999', color: 'from-orange-500 to-amber-500', bg: 'bg-orange-50', border: 'border-orange-200' },
  { icon: '🗓️', label: 'Start Date', value: '15 July 2026', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50', border: 'border-pink-200' },
];

export default function Details() {
  return (
    <section id="details" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Workshop Details
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
            Everything You Need to Know
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Quick glance at what's included in this carefully crafted workshop experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-hover ${d.bg} border ${d.border} rounded-2xl p-5 text-center cursor-default`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center shadow-lg text-2xl`}>
                {d.icon}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                {d.label}
              </div>
              <div className="font-extrabold text-[#1E1B4B] text-sm leading-tight">{d.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
