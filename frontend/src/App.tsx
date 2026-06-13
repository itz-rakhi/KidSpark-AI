import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DashboardLayout from './dashboard/components/DashboardLayout';
import Overview from './dashboard/pages/Overview';
import ProgressTracker from './dashboard/pages/ProgressTracker';
import Assessments from './dashboard/pages/Assessments';
import AttendanceReport from './dashboard/pages/AttendanceReport';
import Projects from './dashboard/pages/Projects';
import MentorFeedback from './dashboard/pages/MentorFeedback';
import Certificate from './dashboard/pages/Certificate';
import Notifications from './dashboard/pages/Notifications';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Parent dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="progress" element={<ProgressTracker />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="attendance" element={<AttendanceReport />} />
          <Route path="projects" element={<Projects />} />
          <Route path="feedback" element={<MentorFeedback />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
