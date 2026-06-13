import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend,
} from 'recharts';
import { quizScores, monthlyAssessments, skillScores } from '../data/mockData';

const gradeColor: Record<string, string> = { A: 'text-green-600 bg-green-100', 'B+': 'text-blue-600 bg-blue-100', '—': 'text-gray-400 bg-gray-100' };

export default function Assessments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Assessments & Results</h1>
        <p className="text-sm text-gray-500 mt-0.5">Quiz scores, monthly assessments, and skill performance</p>
      </div>

      {/* Summary stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Avg Quiz Score', value: `${Math.round(quizScores.reduce((a, b) => a + b.score, 0) / quizScores.length)}%`, icon: '📝', color: 'border-l-purple-500' },
          { label: 'Best Quiz', value: `${Math.max(...quizScores.map(q => q.score))}%`, icon: '🏆', color: 'border-l-yellow-500' },
          { label: 'Month 1 Grade', value: 'A', icon: '📋', color: 'border-l-green-500' },
          { label: 'Month 2 Grade', value: 'B+', icon: '📋', color: 'border-l-blue-500' },
        ].map((s) => (
          <div key={s.label} className={`bg-white rounded-2xl p-4 border border-gray-100 border-l-4 ${s.color} shadow-sm`}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-extrabold text-2xl text-[#1E1B4B]">{s.value}</div>
            <div className="text-[11px] text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weekly quiz line chart */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h2 className="font-bold text-[#1E1B4B] text-sm mb-4">Weekly Quiz Scores</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={quizScores} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#9ca3af' }} />
            <YAxis domain={[60, 100]} tick={{ fontSize: 11, fill: '#9ca3af' }} />
            <Tooltip
              contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: 12 }}
              formatter={(v) => [`${v}%`, 'Score']}
            />
            <Line type="monotone" dataKey="score" stroke="#7C3AED" strokeWidth={2.5} dot={{ fill: '#7C3AED', r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly assessments + skill bars side by side */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Monthly assessment bar chart */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[#1E1B4B] text-sm mb-4">Monthly Assessment Scores</h2>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={monthlyAssessments} margin={{ left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ca3af' }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#9ca3af' }} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: 12 }}
                formatter={(v) => [`${v}/100`]}
              />
              <Bar dataKey="score" fill="#7C3AED" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          {/* Grade table */}
          <div className="mt-4 space-y-2">
            {monthlyAssessments.map((a) => (
              <div key={a.month} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <span className="text-sm font-medium text-gray-600">{a.month}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{a.score !== null ? `${a.score}/100` : 'Pending'}</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${gradeColor[a.grade]}`}>{a.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill-wise performance */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[#1E1B4B] text-sm mb-4">Skill-wise Performance</h2>
          <div className="space-y-3.5">
            {skillScores.map((s, i) => {
              const colors = ['#7C3AED', '#3B82F6', '#10B981', '#F97316', '#EC4899', '#06B6D4'];
              return (
                <div key={s.skill}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-600">{s.skill}</span>
                    <span className="font-bold text-[#1E1B4B]">{s.score}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${s.score}%`, background: colors[i] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
