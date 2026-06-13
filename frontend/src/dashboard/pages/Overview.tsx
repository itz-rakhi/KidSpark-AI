import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';
import { student, months, skillScores, notifications, badges } from '../data/mockData';

const colorMap: Record<string, string> = {
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  green: 'bg-green-100 text-green-700 border-green-200',
};

const progressColorMap: Record<string, string> = {
  purple: 'bg-purple-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
};

const radialData = skillScores.map((s, i) => ({
  name: s.skill,
  value: s.score,
  fill: ['#7C3AED', '#3B82F6', '#10B981', '#F97316', '#EC4899', '#06B6D4'][i],
}));

export default function Overview() {
  return (
    <div className="space-y-6">
      {/* Page title */}
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Parent Dashboard</h1>
        <p className="text-sm text-gray-500 mt-0.5">Tracking {student.name}'s learning journey · {student.batch}</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: '🎓', label: 'Enrollment ID', value: student.enrollmentId, sub: student.batch, color: 'border-l-purple-500' },
          { icon: '📈', label: 'Overall Progress', value: `${student.overallProgress}%`, sub: student.completionStatus, color: 'border-l-blue-500' },
          { icon: '📅', label: 'Joined On', value: student.joinDate, sub: '4-Week Program', color: 'border-l-green-500' },
          { icon: '🏆', label: 'Badges Earned', value: `${badges.filter(b => b.unlocked).length} / ${badges.length}`, sub: 'Achievement badges', color: 'border-l-orange-500' },
        ].map((s) => (
          <div key={s.label} className={`bg-white rounded-2xl p-4 border border-gray-100 border-l-4 ${s.color} shadow-sm`}>
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</div>
            <div className="font-extrabold text-[#1E1B4B] text-base mt-0.5">{s.value}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Overall progress bar */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-[#1E1B4B] text-sm">Workshop Completion</h2>
          <span className="text-xs font-bold text-purple-600">{student.overallProgress}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700"
            style={{ width: `${student.overallProgress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
          <span>Start</span><span>Week 1 ✓</span><span>Week 2 ...</span><span>Week 3</span><span>Week 4</span>
        </div>
      </div>

      {/* Month progress + skill chart */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Month cards */}
        <div className="lg:col-span-2 space-y-3">
          <h2 className="font-bold text-[#1E1B4B] text-sm">Week-by-Week Progress</h2>
          {months.map((m) => (
            <div key={m.id} className={`bg-white rounded-2xl p-4 border ${colorMap[m.color].split(' ')[2]} shadow-sm`}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-bold text-gray-500">{m.label}</span>
                  <p className="font-bold text-[#1E1B4B] text-sm">{m.title}</p>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${colorMap[m.color]}`}>
                  {m.status}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${progressColorMap[m.color]} rounded-full transition-all duration-700`}
                  style={{ width: `${m.progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">{m.progress}% complete</p>
            </div>
          ))}
        </div>

        {/* Skill radial chart */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[#1E1B4B] text-sm mb-4">Skill Radar</h2>
          <ResponsiveContainer width="100%" height={180}>
            <RadialBarChart cx="50%" cy="50%" innerRadius={20} outerRadius={80} data={radialData} startAngle={180} endAngle={-180}>
              <RadialBar dataKey="value" cornerRadius={4} background={{ fill: '#f3f4f6' }} />
              <Tooltip formatter={(v) => [`${v}%`]} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {skillScores.map((s, i) => (
              <div key={s.skill} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: radialData[i].fill }} />
                  <span className="text-gray-600">{s.skill}</span>
                </div>
                <span className="font-bold text-[#1E1B4B]">{s.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications preview */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-[#1E1B4B] text-sm">Recent Notifications</h2>
          <a href="/dashboard/notifications" className="text-xs font-bold text-purple-600 hover:underline">View all →</a>
        </div>
        <div className="space-y-2">
          {notifications.slice(0, 4).map((n) => (
            <div key={n.id} className={`flex items-start gap-3 p-3 rounded-xl ${n.unread ? 'bg-purple-50 border border-purple-100' : 'bg-gray-50'}`}>
              <span className="text-lg shrink-0">{[...n.icon][0]}</span>
              <div className="flex-1 min-w-0">
                <p className={`text-xs font-bold ${n.unread ? 'text-purple-700' : 'text-gray-700'}`}>{n.title}</p>
                <p className="text-[11px] text-gray-500 truncate">{n.message}</p>
              </div>
              <span className="text-[10px] text-gray-400 shrink-0">{n.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
