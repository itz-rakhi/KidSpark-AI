// Central mock data — replace with real API calls when backend is ready

export const student = {
  name: 'Arjun Sharma',
  parentName: 'Rajesh Sharma',
  enrollmentId: 'KSA-2026-0342',
  batch: 'Batch B · July 2026',
  avatar: 'AS',
  avatarBg: '#7C3AED',
  overallProgress: 68,
  completionStatus: 'In Progress',
  joinDate: '15 July 2026',
};

export const months = [
  {
    id: 1,
    label: 'Week 1',
    title: 'Foundations of AI & Robotics',
    color: 'purple',
    progress: 100,
    status: 'Completed',
    stats: [
      { label: 'Completed Lessons', value: '5 / 5', done: true },
      { label: 'Assignments Submitted', value: '2 / 2', done: true },
      { label: 'Quiz Score', value: '88%', done: true },
    ],
  },
  {
    id: 2,
    label: 'Week 2',
    title: 'Building Blocks of Robotics',
    color: 'blue',
    progress: 70,
    status: 'In Progress',
    stats: [
      { label: 'Completed Modules', value: '3 / 5', done: false },
      { label: 'Practical Activities', value: '2 / 3', done: false },
      { label: 'Project Progress', value: '70%', done: false },
    ],
  },
  {
    id: 3,
    label: 'Week 3',
    title: 'AI in Action (Smart Systems)',
    color: 'green',
    progress: 0,
    status: 'Upcoming',
    stats: [
      { label: 'Lessons', value: 'Not Started', done: false },
      { label: 'Activities', value: 'Not Started', done: false },
      { label: 'Quiz', value: 'Pending', done: false },
    ],
  },
  {
    id: 4,
    label: 'Week 4',
    title: 'Final Project & Innovation Week',
    color: 'purple',
    progress: 0,
    status: 'Upcoming',
    stats: [
      { label: 'Final Project', value: 'Not Started', done: false },
      { label: 'Presentation', value: 'Not Started', done: false },
      { label: 'Demo Showcase', value: 'Pending', done: false },
    ],
  },
];

export const quizScores = [
  { week: 'Wk 1', score: 82 },
  { week: 'Wk 2', score: 90 },
  { week: 'Wk 3', score: 75 },
  { week: 'Wk 4', score: 88 },
  { week: 'Wk 5', score: 92 },
  { week: 'Wk 6', score: 85 },
  { week: 'Wk 7', score: 78 },
  { week: 'Wk 8', score: 95 },
];

export const monthlyAssessments = [
  { month: 'Week 1', score: 88, max: 100, grade: 'A' },
  { month: 'Week 2', score: 74, max: 100, grade: 'B+' },
  { month: 'Week 3', score: null, max: 100, grade: '—' },
  { month: 'Week 4', score: null, max: 100, grade: '—' },
];

export const skillScores = [
  { skill: 'AI Concepts', score: 85 },
  { skill: 'Robotics Skills', score: 72 },
  { skill: 'Problem Solving', score: 90 },
  { skill: 'Computational Thinking', score: 78 },
  { skill: 'Creativity', score: 88 },
  { skill: 'Teamwork', score: 95 },
];

export const attendance = {
  total: 36,
  attended: 30,
  missed: 6,
  percentage: 83,
  records: [
    { date: '15 Jul', status: 'present', session: 'Intro to AI' },
    { date: '17 Jul', status: 'present', session: 'Machine Learning Basics' },
    { date: '19 Jul', status: 'absent', session: 'Pattern Recognition' },
    { date: '22 Jul', status: 'present', session: 'Logic Building' },
    { date: '24 Jul', status: 'present', session: 'AI Games & Projects' },
    { date: '26 Jul', status: 'present', session: 'Quiz — Month 1 Week 1' },
    { date: '29 Jul', status: 'absent', session: 'Intro to Robotics' },
    { date: '31 Jul', status: 'present', session: 'Sensors & Actuators' },
    { date: '02 Aug', status: 'present', session: 'Robot Movement' },
    { date: '05 Aug', status: 'present', session: 'Control Systems' },
    { date: '07 Aug', status: 'absent', session: 'Automation Concepts' },
    { date: '09 Aug', status: 'present', session: 'Robotics Simulation' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'AI Chatbot for Kids',
    description: 'A conversational chatbot built with Python that answers questions about science and animals using simple NLP patterns.',
    emoji: '🤖',
    grade: 'A',
    score: 92,
    mentorComment: 'Excellent work! The chatbot handles edge cases well. Try adding more topics in the next iteration.',
    status: 'Graded',
    submittedOn: '10 Aug 2026',
    color: 'purple',
  },
  {
    id: 2,
    title: 'Smart Plant Watering Robot',
    description: 'A simulated robot that reads soil moisture levels and triggers a watering cycle automatically using sensor logic.',
    emoji: '🌱',
    grade: 'B+',
    score: 78,
    mentorComment: 'Great concept and clean code. The sensor thresholds could be tuned better — let\'s discuss in the next session.',
    status: 'Graded',
    submittedOn: '18 Aug 2026',
    color: 'green',
  },
  {
    id: 3,
    title: 'Capstone: Smart City Dashboard',
    description: 'Final capstone project combining AI traffic management, smart lighting, and environmental monitoring in one dashboard.',
    emoji: '🏙️',
    grade: '—',
    score: null,
    mentorComment: 'Pending review.',
    status: 'In Progress',
    submittedOn: 'Due: 15 Oct 2026',
    color: 'orange',
  },
];

export const mentorFeedback = {
  strengths: [
    'Exceptional logical thinking and problem decomposition',
    'Quick learner — grasps new concepts within 1–2 sessions',
    'Active participant in group discussions',
    'Code is clean, readable, and well-commented',
  ],
  improvements: [
    'Needs to practise debugging independently before asking for help',
    'Should improve time management for assignment submissions',
    'Presentation confidence can be built with more practice',
  ],
  notes: 'Arjun is one of the most promising students in Batch B. He shows genuine curiosity and goes beyond the curriculum to explore concepts on his own. With consistent effort in Week 4, he is on track for an outstanding final project. — Mentor Sarah Mehta',
};

export const notifications = [
  { id: 1, type: 'class', icon: '📅', title: 'Live Class Tomorrow', message: 'Robotics Control Systems — 5:00 PM IST via Zoom.', time: '2h ago', unread: true },
  { id: 2, type: 'assignment', icon: '📝', title: 'Assignment Due in 2 Days', message: 'Module 7 — Automation Activity submission deadline: 22 Aug.', time: '5h ago', unread: true },
  { id: 3, type: 'result', icon: '📊', title: 'Quiz Result Available', message: 'Week 8 quiz has been graded. You scored 95/100!', time: '1d ago', unread: false },
  { id: 4, type: 'mentor', icon: '👨🏫', title: 'Mentor Announcement', message: 'Sarah Mehta shared notes on Neural Networks — check the portal.', time: '2d ago', unread: false },
  { id: 5, type: 'class', icon: '📅', title: 'Session Recording Available', message: 'Week 8 — Sensor Integration recording has been uploaded.', time: '3d ago', unread: false },
  { id: 6, type: 'result', icon: '🏆', title: 'Monthly Assessment Graded', message: 'Month 2 assessment result: 74/100 · Grade B+', time: '4d ago', unread: false },
];

export const badges = [
  { id: 1, icon: '🤖', title: 'AI Pioneer', desc: 'Completed Week 1', unlocked: true },
  { id: 2, icon: '⚙️', title: 'Robotics Builder', desc: 'Completed Week 2', unlocked: false },
  { id: 3, icon: '🏆', title: 'Innovator', desc: 'Completed Week 4', unlocked: false },
  { id: 4, icon: '💯', title: 'Perfect Score', desc: 'Score 100 on any quiz', unlocked: false },
  { id: 5, icon: '🎯', title: 'Consistent', desc: '90%+ attendance', unlocked: false },
  { id: 6, icon: '⭐', title: 'Star Student', desc: 'Top of the batch', unlocked: false },
];
