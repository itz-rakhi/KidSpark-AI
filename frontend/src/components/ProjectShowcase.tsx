import { motion } from 'framer-motion';

interface Project {
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  border: string;
  bg: string;
  tagColor: string;
}

const projects: Project[] = [
  {
    emoji: '🤖',
    title: 'AI Chatbot for Kids',
    desc: 'A fun conversational chatbot that answers kids\' questions about science, animals, and space using simple NLP concepts.',
    tags: ['NLP', 'Python', 'AI Logic'],
    color: 'from-purple-500 to-violet-600',
    border: 'border-purple-200',
    bg: 'bg-purple-50',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    emoji: '🚦',
    title: 'Smart Traffic Light System',
    desc: 'An AI-powered traffic controller that detects vehicle density and adjusts signal timing to reduce congestion automatically.',
    tags: ['Automation', 'Sensors', 'Logic'],
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    emoji: '👤',
    title: 'Face Recognition Demo',
    desc: 'A beginner face detection app that identifies and labels faces in real-time using a webcam feed and computer vision basics.',
    tags: ['Computer Vision', 'ML', 'OpenCV'],
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-200',
    bg: 'bg-pink-50',
    tagColor: 'bg-pink-100 text-pink-700',
  },
  {
    emoji: '🌱',
    title: 'Smart Plant Watering Robot',
    desc: 'A robot that reads soil moisture sensor data and automatically waters plants when dry — no human needed!',
    tags: ['Robotics', 'Sensors', 'Automation'],
    color: 'from-green-500 to-emerald-500',
    border: 'border-green-200',
    bg: 'bg-green-50',
    tagColor: 'bg-green-100 text-green-700',
  },
  {
    emoji: '🎙️',
    title: 'Voice-Controlled Assistant',
    desc: 'A voice assistant that responds to spoken commands — tell it a joke, ask for the weather, or set a reminder using speech recognition.',
    tags: ['Speech AI', 'Python', 'NLP'],
    color: 'from-orange-500 to-amber-500',
    border: 'border-orange-200',
    bg: 'bg-orange-50',
    tagColor: 'bg-orange-100 text-orange-700',
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#F8F7FF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            📸 Student Projects Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
            Real Projects Built by{' '}
            <span className="gradient-text">Real Kids</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every student walks away with working projects they built themselves — here's a glimpse of what our graduates have created.
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={`card-hover group bg-white border ${p.border} rounded-3xl overflow-hidden shadow-sm flex flex-col`}
            >
              {/* Card top banner */}
              <div className={`${p.bg} px-6 pt-7 pb-5 flex items-start gap-4`}>
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {p.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[#1E1B4B] text-base leading-snug">
                    {p.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="px-6 py-4 flex-1 flex flex-col justify-between gap-4">
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${p.tagColor} border border-current/20`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className={`px-6 py-3 border-t ${p.border} flex items-center justify-between`}>
                <span className="text-xs text-gray-400 font-medium">Built by a student 🧒</span>
                <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Completed
                </span>
              </div>
            </motion.div>
          ))}

          {/* "Your project here" CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.09 }}
            className="card-hover border-2 border-dashed border-purple-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 bg-purple-50/50 hover:bg-purple-50 transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg">
              ✨
            </div>
            <div>
              <h3 className="font-extrabold text-[#1E1B4B] text-base mb-1">Your Project Here!</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Enroll now and build something amazing that could be featured right here.
              </p>
            </div>
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-purple-200 hover:scale-105 transition-all duration-200"
            >
              Start Building 🚀
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
