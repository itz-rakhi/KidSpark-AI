import { months } from '../data/mockData';

const colorMap = {
  purple: { badge: 'bg-purple-600', bar: 'bg-purple-500', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', dot: 'bg-purple-500' },
  blue: { badge: 'bg-blue-600', bar: 'bg-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
  green: { badge: 'bg-green-600', bar: 'bg-green-400', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', dot: 'bg-green-500' },
};

const statusIcon: Record<string, string> = { Completed: '✅', 'In Progress': '🔄', Upcoming: '🔒' };

export default function ProgressTracker() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Learning Journey</h1>
        <p className="text-sm text-gray-500 mt-0.5">Detailed progress across all 4 weeks of the workshop</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connector */}
        <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-300 via-blue-300 to-green-300 rounded-full hidden sm:block" />

        <div className="space-y-6">
          {months.map((m) => {
            const c = colorMap[m.color as keyof typeof colorMap];
            return (
              <div key={m.id} className="sm:flex gap-8 items-start">
                {/* Timeline dot */}
                <div className={`hidden sm:flex w-10 h-10 shrink-0 rounded-full ${c.badge} text-white items-center justify-center text-sm font-extrabold shadow-lg z-10`}>
                  {m.id}
                </div>

                {/* Card */}
                <div className={`flex-1 bg-white border ${c.border} rounded-2xl overflow-hidden shadow-sm`}>
                  {/* Header */}
                  <div className={`${c.bg} px-5 py-4 flex items-center justify-between`}>
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${c.text}`}>{m.label}</span>
                      <h3 className="font-extrabold text-[#1E1B4B] text-base mt-0.5">{m.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{statusIcon[m.status]}</span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
                        {m.status}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="px-5 pt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span>Progress</span>
                      <span className="font-bold text-[#1E1B4B]">{m.progress}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${c.bar} rounded-full transition-all duration-700`}
                        style={{ width: `${m.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats checklist */}
                  <div className="px-5 py-4 grid sm:grid-cols-3 gap-3">
                    {m.stats.map((s) => (
                      <div key={s.label} className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5">
                        <span className={`w-5 h-5 shrink-0 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${s.done ? c.badge : 'bg-gray-300'}`}>
                          {s.done ? '✓' : '·'}
                        </span>
                        <div>
                          <p className="text-[10px] text-gray-400 font-medium leading-tight">{s.label}</p>
                          <p className="text-xs font-bold text-[#1E1B4B]">{s.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
