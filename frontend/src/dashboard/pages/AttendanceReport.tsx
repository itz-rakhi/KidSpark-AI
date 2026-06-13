import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { attendance } from '../data/mockData';

const pieData = [
  { name: 'Attended', value: attendance.attended, color: '#7C3AED' },
  { name: 'Missed', value: attendance.missed, color: '#E5E7EB' },
];

export default function Attendance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold text-[#1E1B4B]">Attendance Report</h1>
        <p className="text-sm text-gray-500 mt-0.5">Session attendance across the workshop</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Classes', value: attendance.total, icon: '📅', color: 'border-l-purple-500' },
          { label: 'Attended', value: attendance.attended, icon: '✅', color: 'border-l-green-500' },
          { label: 'Missed', value: attendance.missed, icon: '❌', color: 'border-l-red-400' },
          { label: 'Attendance %', value: `${attendance.percentage}%`, icon: '📊', color: 'border-l-blue-500' },
        ].map((s) => (
          <div key={s.label} className={`bg-white rounded-2xl p-4 border border-gray-100 border-l-4 ${s.color} shadow-sm`}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-extrabold text-2xl text-[#1E1B4B]">{s.value}</div>
            <div className="text-[11px] text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Pie chart + status bar */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center">
          <h2 className="font-bold text-[#1E1B4B] text-sm mb-4 self-start">Attendance Overview</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip formatter={(v, n) => [`${v} sessions`, n]} contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          {/* Donut centre label */}
          <div className="text-center -mt-4">
            <p className="text-3xl font-extrabold text-[#1E1B4B]">{attendance.percentage}%</p>
            <p className="text-xs text-gray-400">Attendance Rate</p>
          </div>
          <div className="flex gap-6 mt-4">
            {pieData.map((d) => (
              <div key={d.name} className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                {d.name} ({d.value})
              </div>
            ))}
          </div>
        </div>

        {/* Attendance status indicator */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-[#1E1B4B] text-sm mb-4">Attendance Status</h2>
          <div className={`rounded-2xl p-4 mb-4 ${attendance.percentage >= 85 ? 'bg-green-50 border border-green-200' : attendance.percentage >= 70 ? 'bg-yellow-50 border border-yellow-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-bold text-sm ${attendance.percentage >= 85 ? 'text-green-700' : attendance.percentage >= 70 ? 'text-yellow-700' : 'text-red-700'}`}>
              {attendance.percentage >= 85 ? '✅ Great Attendance!' : attendance.percentage >= 70 ? '⚠️ Attendance Needs Improvement' : '❌ Low Attendance — Action Required'}
            </p>
            <p className={`text-xs mt-1 ${attendance.percentage >= 85 ? 'text-green-600' : attendance.percentage >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
              Minimum required attendance for certification: 75%
            </p>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-gradient-to-r from-purple-500 to-green-500 rounded-full" style={{ width: `${attendance.percentage}%` }} />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400">
            <span>0%</span><span className="text-orange-500 font-bold">75% min</span><span>100%</span>
          </div>
        </div>
      </div>

      {/* Session log */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-50">
          <h2 className="font-bold text-[#1E1B4B] text-sm">Session Log</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {attendance.records.map((r, i) => (
            <div key={i} className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 ${r.status === 'present' ? 'bg-green-100' : 'bg-red-100'}`}>
                  {r.status === 'present' ? '✅' : '❌'}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#1E1B4B]">{r.session}</p>
                  <p className="text-[11px] text-gray-400">{r.date}</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full capitalize ${r.status === 'present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
