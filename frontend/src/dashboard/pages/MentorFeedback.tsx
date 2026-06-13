import { mentorFeedback, skillScores } from '../data/mockData';

export default function MentorFeedback() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Mentor Feedback</h1>
        <p className="text-sm text-gray-500 mt-0.5">Personalized observations from your child's lead mentor</p>
      </div>

      {/* Mentor card */}
      <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl p-6 text-white flex items-center gap-4">
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-purple-400 flex items-center justify-center text-2xl font-extrabold shadow-lg">
          SM
        </div>
        <div>
          <p className="font-extrabold text-lg">Sarah Mehta</p>
          <p className="text-purple-300 text-sm">AI Engineer & Lead Instructor</p>
          <p className="text-purple-200 text-xs mt-1">Last updated: 20 August 2026</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Strengths */}
        <div className="bg-white rounded-2xl p-5 border border-green-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center text-lg">💪</span>
            <h2 className="font-bold text-[#1E1B4B] text-sm">Strengths</h2>
          </div>
          <ul className="space-y-2.5">
            {mentorFeedback.strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="w-5 h-5 shrink-0 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px] font-bold mt-0.5">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Areas of improvement */}
        <div className="bg-white rounded-2xl p-5 border border-orange-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center text-lg">📈</span>
            <h2 className="font-bold text-[#1E1B4B] text-sm">Areas of Improvement</h2>
          </div>
          <ul className="space-y-2.5">
            {mentorFeedback.improvements.map((s, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="w-5 h-5 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold mt-0.5">!</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Personal note */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">📝</span>
          <h2 className="font-bold text-[#1E1B4B] text-sm">Personalised Mentor Note</h2>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed italic">"{mentorFeedback.notes}"</p>
      </div>

      {/* Skill development tracker */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[#1E1B4B] text-sm mb-5">Skill Development Tracker</h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {skillScores.map((s, i) => {
            const colors = ['#7C3AED', '#3B82F6', '#10B981', '#F97316', '#EC4899', '#06B6D4'];
            const level = s.score >= 90 ? 'Excellent' : s.score >= 80 ? 'Good' : s.score >= 70 ? 'Developing' : 'Needs Work';
            const levelColor = s.score >= 90 ? 'text-green-600' : s.score >= 80 ? 'text-blue-600' : s.score >= 70 ? 'text-orange-500' : 'text-red-500';
            return (
              <div key={s.skill}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-medium text-gray-700">{s.skill}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold ${levelColor}`}>{level}</span>
                    <span className="text-xs font-extrabold text-[#1E1B4B]">{s.score}%</span>
                  </div>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-700" style={{ width: `${s.score}%`, background: colors[i] }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
