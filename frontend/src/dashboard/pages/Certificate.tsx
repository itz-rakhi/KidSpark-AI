import { student, badges } from '../data/mockData';
import certificateImg from '../../assets/certificate.jpg';

export default function Certificate() {
  const isCompleted = student.overallProgress === 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Certificate & Achievements</h1>
        <p className="text-sm text-gray-500 mt-0.5">Download your certificate and track earned badges</p>
      </div>

      {/* Certificate preview */}
      <div className="bg-gradient-to-br from-[#1E1B4B] to-[#4C1D95] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />
        <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-white">
            <span className="inline-block bg-white/10 border border-white/20 text-purple-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              🏆 Certificate of Completion
            </span>
            <h2 className="text-2xl font-extrabold mb-2">AI &amp; Robotics Summer Workshop</h2>
            <p className="text-purple-300 text-sm mb-1">Awarded to: <span className="text-white font-bold">{student.name}</span></p>
            <p className="text-purple-300 text-sm mb-1">Enrollment ID: <span className="text-white font-mono">{student.enrollmentId}</span></p>
            <p className="text-purple-300 text-sm mb-6">Batch: <span className="text-white">{student.batch}</span></p>

            {isCompleted ? (
              <a
                href={certificateImg}
                download="KidSpark-AI-Certificate.jpg"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-200 text-sm"
              >
                ⬇️ Download Certificate
              </a>
            ) : (
              <div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-3">
                  <p className="text-purple-200 text-sm mb-2">Complete the workshop to unlock your certificate</p>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: `${student.overallProgress}%` }} />
                  </div>
                  <p className="text-purple-300 text-xs mt-1">{student.overallProgress}% / 100% complete</p>
                </div>
                <button
                  disabled
                  className="inline-flex items-center gap-2 bg-white/20 text-white/60 font-bold px-6 py-3 rounded-full cursor-not-allowed text-sm"
                >
                  🔒 Locked — Complete Workshop First
                </button>
              </div>
            )}
          </div>

          {/* Certificate image preview */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-yellow-400/20 blur-xl scale-95 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400/40 shadow-2xl">
              <img src={certificateImg} alt="Certificate of Completion" className="w-full h-auto object-cover" />
              {!isCompleted && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm rounded-2xl">
                  <div className="text-center text-white">
                    <p className="text-3xl mb-2">🔒</p>
                    <p className="font-bold text-sm">Complete to unlock</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Achievement badges */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[#1E1B4B] text-sm mb-5">Achievement Badges</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`flex flex-col items-center text-center p-3 rounded-2xl border transition-all duration-200 ${
                b.unlocked
                  ? 'bg-purple-50 border-purple-200 shadow-sm'
                  : 'bg-gray-50 border-gray-200 opacity-50 grayscale'
              }`}
            >
              <span className="text-3xl mb-2">{b.icon}</span>
              <p className="text-[11px] font-bold text-[#1E1B4B] leading-tight">{b.title}</p>
              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{b.desc}</p>
              {b.unlocked && (
                <span className="mt-2 text-[9px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-full">Earned!</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
