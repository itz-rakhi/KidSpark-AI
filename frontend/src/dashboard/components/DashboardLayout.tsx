import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { student, notifications } from '../data/mockData';

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: '🏠', end: true },
  { to: '/dashboard/progress', label: 'Learning Journey', icon: '📈' },
  { to: '/dashboard/assessments', label: 'Assessments', icon: '📊' },
  { to: '/dashboard/attendance', label: 'Attendance', icon: '📅' },
  { to: '/dashboard/projects', label: 'My Projects', icon: '🔨' },
  { to: '/dashboard/feedback', label: 'Mentor Feedback', icon: '👨' },
  { to: '/dashboard/certificate', label: 'Certificate', icon: '🏆' },
  { to: '/dashboard/notifications', label: 'Notifications', icon: '🔔' },
];

const unreadCount = notifications.filter((n) => n.unread).length;

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-purple-800/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-base shadow">
            🤖
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-white text-sm tracking-tight">KidSpark</span>
            <span className="font-extrabold text-purple-300 text-sm"> AI</span>
            <div className="text-[9px] text-purple-400 font-semibold uppercase tracking-widest -mt-0.5">Parent Portal</div>
          </div>
        </div>
      </div>

      {/* Student info pill */}
      <div className="mx-3 mt-4 mb-2 bg-purple-800/40 rounded-2xl p-3 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow"
          style={{ background: student.avatarBg }}
        >
          {student.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-white font-bold text-xs truncate">{student.name}</p>
          <p className="text-purple-300 text-[10px] truncate">{student.enrollmentId}</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-white text-purple-700 font-bold shadow-md'
                  : 'text-purple-200 hover:bg-purple-800/50 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="text-base w-5 text-center">{item.icon}</span>
                <span>{item.label}</span>
                {item.to === '/dashboard/notifications' && unreadCount > 0 && (
                  <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-purple-600 text-white' : 'bg-pink-500 text-white'}`}>
                    {unreadCount}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Back to landing */}
      <div className="px-3 py-4 border-t border-purple-800/50">
        <a
          href="/"
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-purple-300 hover:text-white hover:bg-purple-800/50 text-sm font-medium transition-all duration-200"
        >
          <span>←</span> Back to Website
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-60 bg-gradient-to-b from-[#1E1B4B] to-[#312E81] shrink-0 fixed top-0 left-0 bottom-0 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-60 bg-gradient-to-b from-[#1E1B4B] to-[#312E81] h-full z-50 flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
          <div className="px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                ☰
              </button>
              <div>
                <p className="text-xs text-gray-400 hidden sm:block">Welcome back,</p>
                <p className="font-bold text-[#1E1B4B] text-sm">{student.parentName} 👋</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Progress pill */}
              <div className="hidden sm:flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-3 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-bold text-purple-700">{student.overallProgress}% Complete</span>
              </div>
              {/* Notification bell */}
              <a href="/dashboard/notifications" className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-lg">🔔</span>
                {unreadCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-pink-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </a>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
