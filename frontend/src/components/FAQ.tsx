import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Is prior coding experience required?',
    a: 'Absolutely not! This workshop is designed from the ground up for complete beginners. We start from the very basics and move at a pace comfortable for every child aged 8–14.',
  },
  {
    q: 'Will session recordings be available?',
    a: 'Yes! Every live session is recorded in HD and uploaded to the student portal within 24 hours. Students can re-watch as many times as they need throughout the workshop duration and for 30 days after.',
  },
  {
    q: 'Is a certificate provided?',
    a: 'Every student who completes the workshop and submits the final project receives a verified digital certificate. It can be downloaded, printed, and added to school portfolios or competition entries.',
  },
  {
    q: 'What device does my child need?',
    a: 'A laptop or desktop with a stable internet connection is ideal. All software used is free and entirely browser-based — no installations or special hardware required.',
  },
  {
    q: 'How are the classes conducted?',
    a: 'Classes are conducted live via Zoom in small batches of max 15 students. Each 90-minute session includes a lesson, live demo, mini-activity, and open Q&A. A dedicated WhatsApp group provides daily support between sessions.',
  },
];

function FAQRow({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-purple-50/50 transition-colors duration-200 group"
      >
        <span className="font-semibold text-[#1E1B4B] text-sm md:text-base">{faq.q}</span>
        <span
          className={`w-8 h-8 shrink-0 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:bg-purple-200 ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 bg-purple-50/40 border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E1B4B] mb-3">
            Questions? We've Got Answers.
          </h2>
          <p className="text-gray-500">
            Everything parents and students want to know before enrolling.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQRow key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-6"
        >
          <p className="text-gray-700 font-medium mb-3">Still have questions?</p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:scale-105 transition-all duration-200"
          >
            💬 Reach out to us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
