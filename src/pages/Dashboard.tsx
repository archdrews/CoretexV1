import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Mic, 
  Brain, 
  Target,
  Plus,
  PlayCircle,
  Users,
  AlertCircle
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { theme } = useTheme();

  // Sample data
  const dailyQuote = {
    text: "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    author: "Stephen Covey"
  };

  const todayStats = {
    tasksCompleted: 7,
    totalTasks: 12,
    focusHours: 4.2,
    meetingsToday: 6
  };

  const upcomingEvents = [
    { time: "2:00 PM", title: "Team Standup", type: "meeting" },
    { time: "3:30 PM", title: "Client Presentation", type: "important" },
    { time: "4:30 PM", title: "Focus Block - Project Alpha", type: "focus" },
    { time: "6:00 PM", title: "Weekly Review", type: "personal" }
  ];

  const quickTasks = [
    { id: 1, title: "Review Q4 budget proposal", priority: "high", completed: false },
    { id: 2, title: "Schedule dentist appointment", priority: "medium", completed: false },
    { id: 3, title: "Update team on project status", priority: "high", completed: true },
    { id: 4, title: "Book flight for conference", priority: "medium", completed: false }
  ];

  const conflicts = [
    {
      time: "Tomorrow 2:00 PM",
      issue: "Double booking detected: Client call vs Team meeting",
      severity: "high"
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Good afternoon! 👋</h1>
          <p className="text-xl opacity-80">Welcome to your Unified Life Hub™</p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Daily Quote */}
            <NeumorphicCard className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-[#CDC1FF]' : 'bg-[#A99BEF]'
                }`}>
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Daily Inspiration</h3>
                  <blockquote className="text-lg italic opacity-90 mb-2">
                    "{dailyQuote.text}"
                  </blockquote>
                  <cite className="text-sm opacity-70">— {dailyQuote.author}</cite>
                </div>
              </div>
            </NeumorphicCard>

            {/* Today's Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <NeumorphicCard className="p-6 text-center">
                <CheckCircle className={`h-8 w-8 mx-auto mb-3 ${
                  theme === 'light' ? 'text-green-600' : 'text-green-400'
                }`} />
                <div className="text-2xl font-bold">{todayStats.tasksCompleted}/{todayStats.totalTasks}</div>
                <div className="text-sm opacity-70">Tasks Done</div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6 text-center">
                <Target className={`h-8 w-8 mx-auto mb-3 ${
                  theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                }`} />
                <div className="text-2xl font-bold">{todayStats.focusHours}h</div>
                <div className="text-sm opacity-70">Focus Time</div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6 text-center">
                <Calendar className={`h-8 w-8 mx-auto mb-3 ${
                  theme === 'light' ? 'text-purple-600' : 'text-purple-400'
                }`} />
                <div className="text-2xl font-bold">{todayStats.meetingsToday}</div>
                <div className="text-sm opacity-70">Meetings</div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6 text-center">
                <TrendingUp className={`h-8 w-8 mx-auto mb-3 ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-400'
                }`} />
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm opacity-70">Efficiency</div>
              </NeumorphicCard>
            </div>

            {/* Conflicts Alert */}
            {conflicts.length > 0 && (
              <NeumorphicCard className={`p-6 border-l-4 ${
                theme === 'light' ? 'border-red-500 bg-red-50' : 'border-red-400 bg-red-900/20'
              }`}>
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-red-700 dark:text-red-300">
                      Schedule Conflict Detected!
                    </h3>
                    {conflicts.map((conflict, index) => (
                      <div key={index} className="mb-2">
                        <p className="font-medium">{conflict.time}</p>
                        <p className="opacity-80">{conflict.issue}</p>
                      </div>
                    ))}
                    <NeumorphicButton size="sm" variant="accent" className="mt-4">
                      Resolve Conflict
                    </NeumorphicButton>
                  </div>
                </div>
              </NeumorphicCard>
            )}

            {/* Quick Tasks */}
            <NeumorphicCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Today's Priority Tasks</h3>
                <NeumorphicButton size="sm" variant="primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </NeumorphicButton>
              </div>
              <div className="space-y-3">
                {quickTasks.map((task) => (
                  <div key={task.id} className={`flex items-center space-x-3 p-3 rounded-2xl ${
                    task.completed ? 'opacity-60' : ''
                  } ${theme === 'light' ? 'bg-[#FFF6E3]/50' : 'bg-[#2A2A2A]/50'}`}>
                    <button className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      task.completed
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 hover:border-green-500'
                    }`}>
                      {task.completed && <CheckCircle className="h-3 w-3 text-white" />}
                    </button>
                    <div className="flex-1">
                      <p className={`${task.completed ? 'line-through' : ''}`}>
                        {task.title}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.priority === 'high'
                        ? theme === 'light' ? 'bg-red-100 text-red-800' : 'bg-red-900 text-red-200'
                        : theme === 'light' ? 'bg-yellow-100 text-yellow-800' : 'bg-yellow-900 text-yellow-200'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Quick Actions */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <NeumorphicButton variant="primary" className="flex flex-col items-center py-4">
                  <Mic className="h-6 w-6 mb-2" />
                  <span className="text-sm">Voice Note</span>
                </NeumorphicButton>
                <NeumorphicButton variant="secondary" className="flex flex-col items-center py-4">
                  <PlayCircle className="h-6 w-6 mb-2" />
                  <span className="text-sm">Focus Mode</span>
                </NeumorphicButton>
                <NeumorphicButton variant="primary" className="flex flex-col items-center py-4">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span className="text-sm">Schedule</span>
                </NeumorphicButton>
                <NeumorphicButton variant="secondary" className="flex flex-col items-center py-4">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="text-sm">Team Hub</span>
                </NeumorphicButton>
              </div>
            </NeumorphicCard>

            {/* Upcoming Events */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Next Up</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`px-3 py-1 rounded-2xl text-sm font-medium ${
                      event.type === 'important'
                        ? theme === 'light' ? 'bg-[#FFCCEA] text-gray-800' : 'bg-[#EBAFCC] text-gray-900'
                        : event.type === 'focus'
                        ? theme === 'light' ? 'bg-[#CDC1FF] text-gray-800' : 'bg-[#A99BEF] text-gray-900'
                        : theme === 'light' ? 'bg-[#BFECFF] text-gray-800' : 'bg-[#80CFE8] text-gray-900'
                    }`}>
                      {event.time}
                    </div>
                    <div>
                      <p className="font-medium">{event.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>

            {/* AI Insights */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-4">AI Insights</h3>
              <div className="space-y-4 text-sm">
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-green-50' : 'bg-green-900/20'
                }`}>
                  <p className="font-medium text-green-700 dark:text-green-300">
                    Great focus today! You've maintained 2.1x longer focus sessions than last week.
                  </p>
                </div>
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
                }`}>
                  <p className="font-medium text-blue-700 dark:text-blue-300">
                    Suggested optimal time for deep work: 9:00-11:00 AM based on your energy patterns.
                  </p>
                </div>
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-orange-50' : 'bg-orange-900/20'
                }`}>
                  <p className="font-medium text-orange-700 dark:text-orange-300">
                    Consider blocking Thursday 2-4 PM for "Project Alpha" to meet your deadline.
                  </p>
                </div>
              </div>
            </NeumorphicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;