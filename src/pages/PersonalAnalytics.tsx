import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Calendar,
  CheckCircle,
  BarChart3,
  PieChart,
  Download,
  Filter,
  RefreshCw,
  Award,
  Zap,
  Focus
} from 'lucide-react';

const PersonalAnalytics: React.FC = () => {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month');

  // Sample analytics data
  const performanceStats = {
    tasksCompleted: 87,
    focusHours: 142,
    meetingsAttended: 23,
    productivityScore: 94,
    conflictsPrevented: 12,
    timeBlocked: 67 // hours of focused work time
  };

  const weeklyProgress = [
    { week: 'Week 1', tasks: 18, focus: 32, meetings: 6 },
    { week: 'Week 2', tasks: 22, focus: 38, meetings: 5 },
    { week: 'Week 3', tasks: 25, focus: 41, meetings: 7 },
    { week: 'Week 4', tasks: 22, focus: 31, meetings: 5 }
  ];

  const focusPatterns = [
    { time: '6 AM', productivity: 40 },
    { time: '8 AM', productivity: 85 },
    { time: '10 AM', productivity: 95 },
    { time: '12 PM', productivity: 70 },
    { time: '2 PM', productivity: 88 },
    { time: '4 PM', productivity: 75 },
    { time: '6 PM', productivity: 45 }
  ];

  const topProjects = [
    { name: 'Q4 Financial Planning', completed: 15, total: 18, hours: 45 },
    { name: 'Product Redesign', completed: 12, total: 15, hours: 38 },
    { name: 'Team Documentation', completed: 8, total: 8, hours: 22 },
    { name: 'Client Presentations', completed: 6, total: 7, hours: 19 }
  ];

  const achievements = [
    {
      title: 'Focus Master',
      description: 'Completed 25+ focus sessions this month',
      icon: <Focus className="h-8 w-8" />,
      earned: true,
      date: 'Dec 10, 2024'
    },
    {
      title: 'Task Crusher',
      description: 'Completed 100 tasks in record time',
      icon: <Target className="h-8 w-8" />,
      earned: true,
      date: 'Dec 5, 2024'
    },
    {
      title: 'Time Optimizer',
      description: 'Prevented 10+ scheduling conflicts',
      icon: <Clock className="h-8 w-8" />,
      earned: true,
      date: 'Nov 28, 2024'
    },
    {
      title: 'Consistency King',
      description: 'Maintained productivity for 30 days',
      icon: <Award className="h-8 w-8" />,
      earned: false,
      date: null
    }
  ];

  const insights = [
    {
      type: 'success',
      title: 'Peak Performance Hours',
      message: 'Your productivity is highest between 10 AM - 12 PM. Consider scheduling important tasks during this time.',
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      type: 'info',
      title: 'Meeting Optimization',
      message: 'You spend 23% of your time in meetings. Consider batching meetings on specific days.',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      type: 'warning',
      title: 'Focus Time Recommendation',
      message: 'Your focus sessions are 15% shorter on Mondays. Try blocking larger time chunks.',
      icon: <Focus className="h-5 w-5" />
    }
  ];

  const getCompletionPercentage = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Personal Analytics</h1>
            <p className="text-xl opacity-80">Your productivity insights and performance metrics</p>
          </div>
          
          <div className="flex gap-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className={`px-4 py-2 rounded-2xl ${
                theme === 'light' 
                  ? 'bg-white border border-gray-300' 
                  : 'bg-gray-800 border border-gray-600'
              }`}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
            <NeumorphicButton variant="secondary" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </NeumorphicButton>
            <NeumorphicButton variant="primary" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </NeumorphicButton>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-6 gap-6 mb-8">
          <NeumorphicCard className="p-6 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <div className="text-2xl font-bold">{performanceStats.tasksCompleted}</div>
            <div className="text-sm opacity-70">Tasks Completed</div>
            <div className="text-xs text-green-600 mt-1">+12% vs last month</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <div className="text-2xl font-bold">{performanceStats.focusHours}h</div>
            <div className="text-sm opacity-70">Focus Time</div>
            <div className="text-xs text-blue-600 mt-1">+8% vs last month</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <div className="text-2xl font-bold">{performanceStats.meetingsAttended}</div>
            <div className="text-sm opacity-70">Meetings</div>
            <div className="text-xs text-orange-600 mt-1">-5% vs last month</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-indigo-600" />
            <div className="text-2xl font-bold">{performanceStats.productivityScore}%</div>
            <div className="text-sm opacity-70">Productivity Score</div>
            <div className="text-xs text-green-600 mt-1">+3% vs last month</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
            <div className="text-2xl font-bold">{performanceStats.conflictsPrevented}</div>
            <div className="text-sm opacity-70">Conflicts Prevented</div>
            <div className="text-xs text-green-600 mt-1">AI saved 4.2h</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Focus className="h-8 w-8 mx-auto mb-3 text-orange-600" />
            <div className="text-2xl font-bold">{performanceStats.timeBlocked}h</div>
            <div className="text-sm opacity-70">Protected Time</div>
            <div className="text-xs text-blue-600 mt-1">97% success rate</div>
          </NeumorphicCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Weekly Progress Chart */}
          <NeumorphicCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Weekly Progress Trends</h3>
              <NeumorphicButton variant="secondary" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Details
              </NeumorphicButton>
            </div>
            
            <div className="space-y-4">
              {weeklyProgress.map((week, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{week.week}</span>
                    <span className="text-sm opacity-70">
                      {week.tasks} tasks • {week.focus}h focus • {week.meetings} meetings
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className={`h-2 rounded-full ${theme === 'light' ? 'bg-green-200' : 'bg-green-900/30'}`}>
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${(week.tasks / 25) * 100}%` }}
                      />
                    </div>
                    <div className={`h-2 rounded-full ${theme === 'light' ? 'bg-blue-200' : 'bg-blue-900/30'}`}>
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(week.focus / 45) * 100}%` }}
                      />
                    </div>
                    <div className={`h-2 rounded-full ${theme === 'light' ? 'bg-purple-200' : 'bg-purple-900/30'}`}>
                      <div 
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${(week.meetings / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NeumorphicCard>

          {/* Focus Patterns */}
          <NeumorphicCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Daily Focus Patterns</h3>
              <NeumorphicButton variant="secondary" size="sm">
                <PieChart className="h-4 w-4 mr-2" />
                Optimize
              </NeumorphicButton>
            </div>
            
            <div className="space-y-3">
              {focusPatterns.map((pattern, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-sm">{pattern.time}</span>
                  <div className="flex-1 mx-4">
                    <div className={`h-4 rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
                      <div 
                        className={`h-full rounded-full ${
                          pattern.productivity >= 90 
                            ? 'bg-green-500' 
                            : pattern.productivity >= 70 
                              ? 'bg-yellow-500' 
                              : 'bg-red-500'
                        }`}
                        style={{ width: `${pattern.productivity}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium">{pattern.productivity}%</span>
                </div>
              ))}
            </div>
            
            <div className={`mt-6 p-4 rounded-2xl ${
              theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
            }`}>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <TrendingUp className="h-4 w-4 inline mr-1" />
                Your peak focus time is 10 AM - 12 PM with 95% productivity
              </p>
            </div>
          </NeumorphicCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Project Performance */}
          <NeumorphicCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Project Performance</h3>
            <div className="space-y-4">
              {topProjects.map((project, index) => (
                <div key={index} className={`p-4 rounded-2xl ${
                  theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{project.name}</h4>
                    <span className="text-sm opacity-70">{project.hours}h spent</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">
                      {project.completed}/{project.total} tasks
                    </span>
                    <span className="text-sm font-medium">
                      {getCompletionPercentage(project.completed, project.total)}%
                    </span>
                  </div>
                  
                  <div className={`h-2 rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                      style={{ width: `${getCompletionPercentage(project.completed, project.total)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </NeumorphicCard>

          {/* Achievements */}
          <NeumorphicCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Achievements & Milestones</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-4 rounded-2xl transition-all ${
                  achievement.earned
                    ? theme === 'light' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-green-900/20 border border-green-800'
                    : theme === 'light'
                      ? 'bg-gray-50 border border-gray-200'
                      : 'bg-gray-800/50 border border-gray-600'
                } ${achievement.earned ? '' : 'opacity-60'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-2xl ${
                      achievement.earned
                        ? theme === 'light' ? 'bg-green-100' : 'bg-green-900/30'
                        : theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'
                    }`}>
                      <div className={achievement.earned ? 'text-green-600' : 'text-gray-500'}>
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{achievement.title}</h4>
                      <p className="text-sm opacity-80">{achievement.description}</p>
                      {achievement.earned && achievement.date && (
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          Earned on {achievement.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NeumorphicCard>
        </div>

        {/* AI Insights */}
        <NeumorphicCard className="p-6">
          <h3 className="text-xl font-bold mb-6">AI-Powered Insights & Recommendations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-2xl border-l-4 ${
                insight.type === 'success'
                  ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
                  : insight.type === 'warning'
                    ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className={
                    insight.type === 'success'
                      ? 'text-green-600'
                      : insight.type === 'warning'
                        ? 'text-orange-600'
                        : 'text-blue-600'
                  }>
                    {insight.icon}
                  </div>
                  <h4 className={`font-bold text-sm ${
                    insight.type === 'success'
                      ? 'text-green-800 dark:text-green-300'
                      : insight.type === 'warning'
                        ? 'text-orange-800 dark:text-orange-300'
                        : 'text-blue-800 dark:text-blue-300'
                  }`}>
                    {insight.title}
                  </h4>
                </div>
                <p className={`text-sm ${
                  insight.type === 'success'
                    ? 'text-green-700 dark:text-green-400'
                    : insight.type === 'warning'
                      ? 'text-orange-700 dark:text-orange-400'
                      : 'text-blue-700 dark:text-blue-400'
                }`}>
                  {insight.message}
                </p>
              </div>
            ))}
          </div>
        </NeumorphicCard>
      </div>
    </div>
  );
};

export default PersonalAnalytics;