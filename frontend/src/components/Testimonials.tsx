import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Mehta',
    role: 'Parent of Rohan, 12',
    avatar: '👩🏽',
    rating: 5,
    quote: "Rohan was glued to every session! He now explains machine learning to us at dinner — we can't believe a 12-year-old built an actual AI project.",
    tag: 'Parent',
  },
  {
    name: 'Aarav Sharma',
    role: 'Student, Age 13',
    avatar: '👦🏽',
    rating: 5,
    quote: "This was the best summer I've had! Building a robot that could detect objects felt like magic. The mentors made everything super fun and easy to understand.",
    tag: 'Student',
  },
  {
    name: 'Kavitha Nair',
    role: 'Parent of Ananya, 10',
    avatar: '👩🏾',
    rating: 5,
    quote: "I was worried it'd be too hard for Ananya, but the instructors were incredibly patient. She got her certificate and is already asking about the next batch!",
    tag: 'Parent',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F8F7FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
            Loved by Kids &amp; Parents
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Don't take our word for it — hear from the families who've experienced it firsthand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="card-hover bg-white border border-gray-100 rounded-3xl p-6 shadow-sm relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-5xl text-purple-100 font-serif leading-none select-none">"</div>

              <Stars count={t.rating} />

              <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[#1E1B4B] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
                <span className="ml-auto bg-purple-100 text-purple-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
