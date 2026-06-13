import { projects } from '../data/mockData';

const colorMap: Record<string, { bg: string; border: string; badge: string; text: string; bar: string }> = {
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-600', text: 'text-purple-700', bar: 'bg-purple-500' },
  green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-600', text: 'text-green-700', bar: 'bg-green-500' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-500', text: 'text-orange-700', bar: 'bg-orange-400' },
};

const gradeColor: Record<string, string> = {
  A: 'bg-green-100 text-green-700 border-green-300',
  'B+': 'bg-blue-100 text-blue-700 border-blue-300',
  '—': 'bg-gray-100 text-gray-500 border-gray-200',
};

const statusColor: Record<string, string> = {
  Graded: 'bg-green-100 text-green-700',
  'In Progress': 'bg-orange-100 text-orange-700',
};

export default function Projects() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Project Showcase</h1>
        <p className="text-sm text-gray-500 mt-0.5">Projects submitted, grades, and mentor feedback</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Projects', value: projects.length, icon: '🔨' },
          { label: 'Graded', value: projects.filter(p => p.status === 'Graded').length, icon: '✅' },
          { label: 'In Progress', value: projects.filter(p => p.status === 'In Progress').length, icon: '🔄' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-extrabold text-2xl text-[#1E1B4B]">{s.value}</div>
            <div className="text-[11px] text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {projects.map((p) => {
          const c = colorMap[p.color];
          return (
            <div key={p.id} className={`bg-white border ${c.border} rounded-2xl overflow-hidden shadow-sm`}>
              {/* Header */}
              <div className={`${c.bg} px-5 py-4 flex items-start justify-between gap-4`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl ${c.badge} flex items-center justify-center text-2xl shadow`}>
                    {p.emoji}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1E1B4B] text-base">{p.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Submitted: {p.submittedOn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.score !== null && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${gradeColor[p.grade]}`}>
                      Grade: {p.grade}
                    </span>
                  )}
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="px-5 py-4 space-y-4">
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>

                {/* Score bar */}
                {p.score !== null && (
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Project Score</span>
                      <span className="font-bold text-[#1E1B4B]">{p.score}/100</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${c.bar} rounded-full`} style={{ width: `${p.score}%` }} />
                    </div>
                  </div>
                )}

                {/* Mentor comment */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 flex items-start gap-2.5">
                  <span className="text-lg shrink-0">💬</span>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Mentor Comment</p>
                    <p className="text-sm text-gray-600 italic">"{p.mentorComment}"</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
