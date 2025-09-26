import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Play, 
  Pause, 
  Square, 
  Clock, 
  Shield, 
  Bell,
  BellOff,
  Target,
  TrendingUp,
  Calendar,
  Settings,
  Zap,
  Focus
} from 'lucide-react';

const FocusMode: React.FC = () => {
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [blockedNotifications, setBlockedNotifications] = useState(0);
  const [currentTask, setCurrentTask] = useState('Complete Q4 financial report');

  // Sample data
  const focusStats = {
    todayFocusTime: 142, // minutes
    weeklyAverage: 128,
    totalSessions: 47,
    blockedDistractions: 234
  };

  const sessionPresets = [
    { name: 'Pomodoro', duration: 25, description: 'Classic 25-minute focused work session' },
    { name: 'Deep Work', duration: 90, description: 'Extended focus for complex tasks' },
    { name: 'Quick Focus', duration: 15, description: 'Short burst for smaller tasks' },
    { name: 'Ultra Deep', duration: 120, description: 'Maximum focus for critical work' }
  ];

  const upcomingTasks = [
    'Review team performance metrics',
    'Prepare client presentation slides',
    'Update project timeline',
    'Schedule team one-on-ones'
  ];

  const recentSessions = [
    { task: 'Financial report', duration: 25, completed: true, date: 'Today 10:00 AM' },
    { task: 'Code review', duration: 45, completed: true, date: 'Today 8:30 AM' },
    { task: 'Meeting prep', duration: 15, completed: false, date: 'Yesterday 3:00 PM' }
  ];

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
        // Simulate blocking notifications
        if (Math.random() < 0.1) {
          setBlockedNotifications(prev => prev + 1);
        }
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Focus session completed
    }
    
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  const startFocusSession = () => {
    setIsActive(true);
    setBlockedNotifications(0);
  };

  const pauseSession = () => {
    setIsActive(false);
  };

  const stopSession = () => {
    setIsActive(false);
    setTimeLeft(selectedDuration * 60);
    setBlockedNotifications(0);
  };

  const selectDuration = (minutes: number) => {
    if (!isActive) {
      setSelectedDuration(minutes);
      setTimeLeft(minutes * 60);
    }
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">FocusGuard Mode™</h1>
          <p className="text-xl opacity-80">Distraction blocking and deep focus sessions with real-time analytics</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Focus Timer */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Focus Session Card */}
            <NeumorphicCard className="p-8 text-center">
              <div className="mb-8">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full text-4xl font-bold ${
                  isActive 
                    ? theme === 'light' 
                      ? 'bg-[#BFECFF] text-gray-800 shadow-inner' 
                      : 'bg-[#80CFE8] text-gray-900 shadow-inner'
                    : theme === 'light'
                      ? 'bg-[#FFF6E3] shadow-lg'
                      : 'bg-[#1A1A1A] shadow-lg'
                }`}>
                  {formatTime(timeLeft)}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Current Task</h3>
                <p className="text-lg opacity-80">{currentTask}</p>
              </div>

              <div className="flex justify-center space-x-4">
                {!isActive ? (
                  <NeumorphicButton variant="primary" size="lg" onClick={startFocusSession}>
                    <Play className="h-6 w-6 mr-2" />
                    Start Focus Session
                  </NeumorphicButton>
                ) : (
                  <>
                    <NeumorphicButton variant="secondary" size="lg" onClick={pauseSession}>
                      <Pause className="h-6 w-6 mr-2" />
                      Pause
                    </NeumorphicButton>
                    <NeumorphicButton variant="accent" size="lg" onClick={stopSession}>
                      <Square className="h-6 w-6 mr-2" />
                      Stop
                    </NeumorphicButton>
                  </>
                )}
              </div>

              {isActive && (
                <div className="mt-6 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        Focus Guard Active
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BellOff className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        {blockedNotifications} distractions blocked
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </NeumorphicCard>

            {/* Session Presets */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Focus Session Presets</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {sessionPresets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => selectDuration(preset.duration)}
                    disabled={isActive}
                    className={`p-4 rounded-2xl text-left transition-all ${
                      selectedDuration === preset.duration
                        ? theme === 'light'
                          ? 'bg-[#BFECFF] border-2 border-[#BFECFF]'
                          : 'bg-[#80CFE8] border-2 border-[#80CFE8] text-gray-900'
                        : theme === 'light'
                          ? 'bg-white/50 border-2 border-transparent hover:border-[#BFECFF]/50'
                          : 'bg-gray-800/50 border-2 border-transparent hover:border-[#80CFE8]/50'
                    } ${isActive ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{preset.name}</h4>
                      <span className="text-sm opacity-70">{preset.duration}min</span>
                    </div>
                    <p className="text-sm opacity-80">{preset.description}</p>
                  </button>
                ))}
              </div>
            </NeumorphicCard>

            {/* Do Not Disturb Schedule */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Do Not Disturb Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50">
                  <div>
                    <p className="font-medium">Daily Deep Work Block</p>
                    <p className="text-sm opacity-70">9:00 AM - 11:00 AM</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 dark:text-green-400 text-sm">Active</span>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50">
                  <div>
                    <p className="font-medium">Lunch Focus Hour</p>
                    <p className="text-sm opacity-70">12:30 PM - 1:30 PM</p>
                  </div>
                  <div className="text-sm opacity-60">Scheduled</div>
                </div>

                <NeumorphicButton variant="secondary" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule New Block
                </NeumorphicButton>
              </div>
            </NeumorphicCard>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Today's Focus Stats */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <TrendingUp className="inline h-5 w-5 mr-2" />
                Today's Focus
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {formatDuration(focusStats.todayFocusTime)}
                  </div>
                  <p className="text-sm opacity-70">Total focus time</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold">{focusStats.totalSessions}</div>
                    <p className="opacity-70">Sessions</p>
                  </div>
                  <div>
                    <div className="font-bold">{focusStats.blockedDistractions}</div>
                    <p className="opacity-70">Blocked</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-70">vs. Weekly Avg</span>
                    <span className={`font-medium ${
                      focusStats.todayFocusTime > focusStats.weeklyAverage 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-orange-600 dark:text-orange-400'
                    }`}>
                      {focusStats.todayFocusTime > focusStats.weeklyAverage ? '+' : ''}
                      {focusStats.todayFocusTime - focusStats.weeklyAverage}m
                    </span>
                  </div>
                </div>
              </div>
            </NeumorphicCard>

            {/* Quick Task Selection */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <Target className="inline h-5 w-5 mr-2" />
                Focus Tasks Queue
              </h3>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTask(task)}
                    className={`w-full p-3 text-left rounded-2xl transition-colors ${
                      currentTask === task
                        ? theme === 'light'
                          ? 'bg-[#BFECFF] text-gray-900'
                          : 'bg-[#80CFE8] text-gray-900'
                        : theme === 'light'
                          ? 'bg-white/50 hover:bg-[#BFECFF]/50'
                          : 'bg-gray-800/50 hover:bg-[#80CFE8]/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{task}</span>
                      {currentTask === task && <Focus className="h-4 w-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </NeumorphicCard>

            {/* Recent Sessions */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <Clock className="inline h-5 w-5 mr-2" />
                Recent Sessions
              </h3>
              <div className="space-y-3">
                {recentSessions.map((session, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-2xl bg-white/50 dark:bg-gray-800/50"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{session.task}</span>
                      {session.completed ? (
                        <span className="text-green-600 dark:text-green-400 text-xs">
                          ✓ {session.duration}m
                        </span>
                      ) : (
                        <span className="text-orange-600 dark:text-orange-400 text-xs">
                          ⏸ {session.duration}m
                        </span>
                      )}
                    </div>
                    <p className="text-xs opacity-60">{session.date}</p>
                  </div>
                ))}
              </div>
            </NeumorphicCard>

            {/* Settings */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <Settings className="inline h-5 w-5 mr-2" />
                Focus Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Block notifications</span>
                  <button className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                  }`}>
                    <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Break reminders</span>
                  <button className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                  }`}>
                    <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                  </button>
                </div>

                <NeumorphicButton variant="secondary" size="sm" className="w-full mt-4">
                  <Settings className="h-4 w-4 mr-2" />
                  Advanced Settings
                </NeumorphicButton>
              </div>
            </NeumorphicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusMode;