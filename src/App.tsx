import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Prioritize from './pages/Prioritize';
import FocusMode from './pages/FocusMode';
import VoiceAssistant from './pages/VoiceAssistant';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import OnboardingPage from './pages/OnboardingPage';
import TeamHub from './pages/TeamHub';
import AdminPanel from './pages/AdminPanel';
import MemberDashboard from './pages/MemberDashboard';
import PersonalAnalytics from './pages/PersonalAnalytics';
import TeamAnalytics from './pages/TeamAnalytics';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="prioritize" element={<Prioritize />} />
            <Route path="focus" element={<FocusMode />} />
            <Route path="voice" element={<VoiceAssistant />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="onboarding" element={<OnboardingPage />} />
            <Route path="team" element={<TeamHub />} />
            <Route path="admin" element={<AdminPanel />} />
            <Route path="member" element={<MemberDashboard />} />
            <Route path="analytics" element={<PersonalAnalytics />} />
            <Route path="team-analytics" element={<TeamAnalytics />} />
            <Route path="settings" element={<AccountSettings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;