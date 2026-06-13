import { useState } from 'react';
import { notifications } from '../data/mockData';

const typeColor: Record<string, string> = {
  class: 'bg-purple-100 text-purple-700',
  assignment: 'bg-orange-100 text-orange-700',
  result: 'bg-green-100 text-green-700',
  mentor: 'bg-blue-100 text-blue-700',
};

export default function Notifications() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? notifications : notifications.filter(n => n.type === filter);
  const unread = notifications.filter(n => n.unread).length;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-extrabold text-[#1E1B4B]">Notifications</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {unread > 0 ? `${unread} unread notification${unread > 1 ? 's' : ''}` : 'All caught up!'}
          </p>
        </div>
        {unread > 0 && (
          <span className="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1.5 rounded-full border border-pink-200">
            {unread} New
          </span>
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: 'all', label: 'All', icon: '🔔' },
          { key: 'class', label: 'Classes', icon: '📅' },
          { key: 'assignment', label: 'Assignments', icon: '📝' },
          { key: 'result', label: 'Results', icon: '📊' },
          { key: 'mentor', label: 'Mentor', icon: '👨🏫' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full border transition-all duration-200 ${
              filter === tab.key
                ? 'bg-purple-600 text-white border-purple-600 shadow'
                : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'
            }`}
          >
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* Notification list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center text-gray-400">
            <p className="text-3xl mb-2">🔕</p>
            <p className="text-sm font-medium">No notifications in this category</p>
          </div>
        ) : (
          filtered.map((n) => (
            <div
              key={n.id}
              className={`bg-white rounded-2xl border shadow-sm transition-all duration-200 hover:shadow-md ${
                n.unread ? 'border-purple-200' : 'border-gray-100'
              }`}
            >
              <div className="p-4 flex items-start gap-4">
                <div className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-xl ${typeColor[n.type] || 'bg-gray-100'}`}>
                  {n.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-sm font-bold ${n.unread ? 'text-[#1E1B4B]' : 'text-gray-600'}`}>{n.title}</p>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {n.unread && <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />}
                      <span className="text-[10px] text-gray-400">{n.time}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{n.message}</p>
                  <span className={`inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${typeColor[n.type]}`}>
                    {n.type}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
