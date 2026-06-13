import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { submitEnquiry, type EnquiryPayload } from '../services/api';

type FormState = EnquiryPayload;
type Errors = Partial<Record<keyof FormState, string>>;
type Status = 'idle' | 'loading' | 'success' | 'error';

const INITIAL: FormState = { name: '', email: '', phone: '' };

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Full name is required';
  if (!f.email.trim()) e.email = 'Email address is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid email address';
  if (!f.phone.trim()) e.phone = 'Phone number is required';
  else if (!/^[0-9+\-\s]{7,15}$/.test(f.phone)) e.phone = 'Enter a valid phone number';
  return e;
}

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('loading');
    try {
      const res = await submitEnquiry(form);
      setServerMsg(res.data.message);
      setStatus('success');
      setForm(INITIAL);
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { message?: string } } };
      setServerMsg(axiosErr.response?.data?.message ?? 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const fields: { name: keyof FormState; label: string; type: string; placeholder: string }[] = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Arjun Sharma' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'e.g. arjun@email.com' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'e.g. 9876543210' },
  ];

  return (
    <section id="register" className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-40px] w-64 h-64 rounded-full bg-purple-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-block bg-white/10 border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              Reserve Your Seat
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
              Start Your Child's<br />
              <span className="text-yellow-300">AI Journey Today! 🚀</span>
            </h2>
            <p className="text-purple-200 leading-relaxed mb-8">
              Fill in the form and our team will reach out within 24 hours with batch details, payment link, and your welcome kit.
            </p>

            <div className="space-y-3">
              {[
                { icon: '✅', text: 'Free orientation session before you commit' },
                { icon: '🔒', text: 'Secure payment — 100% refund within 48 hrs' },
                { icon: '📩', text: 'Instant confirmation on email & WhatsApp' },
                { icon: '🎁', text: 'Free AI starter kit on enrollment' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-purple-200">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Urgency nudge */}
            <div className="mt-8 inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-4 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Only 15 seats per batch · 9 seats left!
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/30">

              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-extrabold text-[#1E1B4B] mb-2">You're In!</h3>
                  <p className="text-gray-500 text-sm mb-4">{serverMsg}</p>
                  <p className="text-gray-400 text-xs mb-5">
                    We'll reach out within 24 hours with all the details.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-purple-600 hover:underline text-sm font-medium"
                  >
                    ← Submit another response
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-extrabold text-[#1E1B4B] mb-1">Enroll Now</h3>
                    <p className="text-gray-400 text-sm">Workshop starting 15 July 2026 · ₹2,999</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {fields.map(({ name, label, type, placeholder }) => (
                      <div key={name}>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                          {label}
                        </label>
                        <input
                          name={name}
                          type={type}
                          value={form[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className={`w-full border-2 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200
                            focus:ring-0
                            ${errors[name]
                              ? 'border-red-400 bg-red-50 focus:border-red-500'
                              : 'border-gray-200 bg-gray-50 focus:border-purple-500 focus:bg-white hover:border-purple-300'
                            }`}
                        />
                        {errors[name] && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                            <span>⚠️</span> {errors[name]}
                          </p>
                        )}
                      </div>
                    ))}

                    {status === 'error' && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm flex items-start gap-2">
                        <span className="shrink-0 mt-0.5">❌</span>
                        {serverMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 disabled:opacity-60 text-white font-extrabold py-4 rounded-2xl text-base shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:scale-[1.02] active:scale-100 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Secure My Seat — ₹2,999 🚀'
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-[11px]">
                      🔒 Your details are 100% secure. We'll never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
