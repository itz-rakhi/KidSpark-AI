import { motion } from 'framer-motion';

interface Mentor {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  skills: string[];
  avatarBg: string;
  avatarFg: string;
  gradientFrom: string;
  gradientTo: string;
  border: string;
  skillColor: string;
  social: { linkedin: string; twitter: string };
}

const mentors: Mentor[] = [
  {
    name: 'Sarah Mehta',
    role: 'AI Engineer & Lead Instructor',
    experience: '7 Years Experience',
    specialization: 'Artificial Intelligence & Machine Learning',
    bio: 'Former ML engineer at a top tech firm, Sarah has a gift for breaking down complex AI concepts into bite-sized, fun lessons that every child can grasp.',
    skills: ['Machine Learning', 'NLP', 'Python', 'TensorFlow'],
    avatarBg: '7C3AED',
    avatarFg: 'ffffff',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-violet-600',
    border: 'border-purple-200',
    skillColor: 'bg-purple-100 text-purple-700',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Arjun Sharma',
    role: 'Robotics Expert & Instructor',
    experience: '6 Years Experience',
    specialization: 'Robotics & Embedded Systems',
    bio: 'Arjun has built robots from scratch for national-level competitions and loves teaching kids how sensors, motors, and code come together to create real machines.',
    skills: ['Robotics', 'Arduino', 'Sensors', 'Automation'],
    avatarBg: '0EA5E9',
    avatarFg: 'ffffff',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-500',
    border: 'border-blue-200',
    skillColor: 'bg-blue-100 text-blue-700',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Priya Nair',
    role: 'Computer Vision Specialist',
    experience: '5 Years Experience',
    specialization: 'Computer Vision & Deep Learning',
    bio: 'Priya specialises in image recognition and computer vision projects. She makes hands-on demos — like face detection and object tracking — incredibly accessible for young learners.',
    skills: ['OpenCV', 'Deep Learning', 'Python', 'Image AI'],
    avatarBg: 'EC4899',
    avatarFg: 'ffffff',
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-500',
    border: 'border-pink-200',
    skillColor: 'bg-pink-100 text-pink-700',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Rohan Verma',
    role: 'Full-Stack & AI Projects Mentor',
    experience: '8 Years Experience',
    specialization: 'AI Applications & Project Mentorship',
    bio: 'Rohan has mentored 300+ students across AI bootcamps. He guides the final capstone projects, helping each child bring their idea to life with real code and creativity.',
    skills: ['AI Projects', 'Mentorship', 'JavaScript', 'APIs'],
    avatarBg: '10B981',
    avatarFg: 'ffffff',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
    border: 'border-green-200',
    skillColor: 'bg-green-100 text-green-700',
    social: { linkedin: '#', twitter: '#' },
  },
];

function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=${mentor.avatarBg}&color=${mentor.avatarFg}&size=128&font-size=0.4&bold=true&rounded=true`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card-hover group bg-white border ${mentor.border} rounded-3xl overflow-hidden shadow-sm flex flex-col`}
    >
      {/* Compact banner */}
      <div className={`bg-gradient-to-br ${mentor.gradientFrom} ${mentor.gradientTo} px-4 pt-5 pb-10 relative`}>
        <div className="absolute top-[-16px] right-[-16px] w-16 h-16 rounded-full bg-white/10 pointer-events-none" />
        <div className="relative z-10 flex items-start justify-between">
          <span className="inline-block bg-white/20 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">
            {mentor.experience}
          </span>
          <div className="flex gap-1.5">
            <a href={mentor.social.linkedin} aria-label={`${mentor.name} LinkedIn`}
              className="w-6 h-6 bg-white/20 hover:bg-white/35 rounded-lg flex items-center justify-center transition-colors duration-200 text-[10px] font-bold text-white">
              in
            </a>
            <a href={mentor.social.twitter} aria-label={`${mentor.name} Twitter`}
              className="w-6 h-6 bg-white/20 hover:bg-white/35 rounded-lg flex items-center justify-center transition-colors duration-200 text-[10px] font-bold text-white">
              𝕏
            </a>
          </div>
        </div>
      </div>

      {/* Avatar overlap */}
      <div className="relative px-4 -mt-8 mb-3">
        <div className={`w-14 h-14 rounded-xl border-3 border-white shadow-lg overflow-hidden bg-gradient-to-br ${mentor.gradientFrom} ${mentor.gradientTo} group-hover:scale-105 transition-transform duration-300`}>
          <img src={avatarUrl} alt={mentor.name} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pb-4 flex-1 flex flex-col gap-2.5">
        <div>
          <h3 className="text-[#1E1B4B] font-extrabold text-sm leading-tight">{mentor.name}</h3>
          <p className="text-gray-400 text-[11px] font-medium mt-0.5">{mentor.role}</p>
        </div>
        <p className="text-[11px] font-semibold text-gray-600">{mentor.specialization}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {mentor.skills.map((skill) => (
            <span key={skill} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${mentor.skillColor}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Mentors() {
  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            👨🏫 Meet Your Mentors
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
            Learn from{' '}
            <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our mentors are working professionals who bring real-world AI and Robotics experience into every session — making learning relevant, exciting, and practical.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <MentorCard key={mentor.name} mentor={mentor} index={i} />
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-3xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap justify-center sm:justify-start gap-8 text-center sm:text-left">
            {[
              { value: '26+', label: 'Years Combined Experience' },
              { value: '1,200+', label: 'Students Mentored' },
              { value: '4.9★', label: 'Average Mentor Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-[#1E1B4B]">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="#register"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-purple-200 hover:scale-105 transition-all duration-200 text-sm"
          >
            Learn from the Best 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
}
