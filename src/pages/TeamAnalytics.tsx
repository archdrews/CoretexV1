import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Share2,
  BarChart3,
  PieChart,
  Award,
  AlertCircle,
  Zap,
  RefreshCw
} from 'lucide-react';

const TeamAnalytics: React.FC = () => {
  const { theme } = useTheme();
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month');
  const [shareAnalytics, setShareAnalytics] = useState(false);

  // Sample team analytics data
  const teamOverview = {
    totalMembers: 12,
    activeTasks: 47,
    completedTasks: 156,
    teamEfficiency: 94,
    averageFocusTime: 6.2,
    meetingsThisWeek: 23
  };

  const memberPerformance = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      tasksCompleted: 23,
      focusHours: 38,
      efficiency: 96,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Developer',
      tasksCompleted: 31,
      focusHours: 42,
      efficiency: 98,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Watson',
      role: 'UX Designer',
      tasksCompleted: 18,
      focusHours: 35,
      efficiency: 89,
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Marketing Lead',
      tasksCompleted: 26,
      focusHours: 33,
      efficiency: 92,
      avatar: '👨‍💼'
    }
  ];

  const projectProgress = [
    {
      name: 'Q4 Financial Planning',
      completed: 85,
      total: 100,
      teamMembers: 4,
      efficiency: 94,
      dueDate: 'Dec 31, 2024',
      status: 'on-track'
    },
    {
      name: 'Mobile App Redesign',
      completed: 67,
      total: 89,
      teamMembers: 6,
      efficiency: 88,
      dueDate: 'Jan 15, 2025',
      status: 'on-track'
    },
    {
      name: 'API Integration',
      completed: 45,
      total: 52,
      teamMembers: 3,
      efficiency: 96,
      dueDate: 'Dec 20, 2024',
      status: 'at-risk'
    },
    {
      name: 'Documentation Update',
      completed: 34,
      total: 34,
      teamMembers: 2,
      efficiency: 100,
      dueDate: 'Dec 10, 2024',
      status: 'completed'
    }
  ];

  const weeklyTrends = [
    { week: 'Week 1', productivity: 89, tasks: 34, meetings: 12 },
    { week: 'Week 2', productivity: 92, tasks: 38, meetings: 14 },
    { week: 'Week 3', productivity: 96, tasks: 42, meetings: 11 },
    { week: 'Week 4', productivity: 94, tasks: 41, meetings: 15 }
  ];

  const meetingEfficiency = {
    averageDuration: 42, // minutes
    onTimeStart: 89, // percentage
    participationRate: 94, // percentage
    followUpRate: 87, // percentage
    totalMeetings: 23,
    productiveMeetings: 18
  };

  const teamInsights = [
    {
      type: 'success',
      title: 'Excellent Team Collaboration',
      message: 'Cross-team task completion rate increased by 23% this month.',
      impact: 'high'
    },
    {
      type: 'warning',
      title: 'Meeting Overload Alert',
      message: 'Average meeting time per person increased to 8.2h/week. Consider optimization.',
      impact: 'medium'
    },
    {
      type: 'info',
      title: 'Focus Time Opportunity',
      message: 'Team focus blocks are most effective on Tuesday-Thursday mornings.',
      impact: 'medium'
    },
    {
      type: 'success',
      title: 'Productivity Milestone',
      message: 'Team achieved 94% efficiency rate - highest this quarter!',
      impact: 'high'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'on-track':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'at-risk':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getCompletionPercentage = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  const exportReport = () => {
    // Simulate PDF export
    console.log('Exporting team analytics report...');
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Team Analytics Dashboard</h1>
            <p className="text-xl opacity-80">Advanced team performance metrics and insights (Admin Only)</p>
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
            
            <NeumorphicButton 
              variant={shareAnalytics ? "primary" : "secondary"} 
              size="sm"
              onClick={() => setShareAnalytics(!shareAnalytics)}
            >
              <Share2 className="h-4 w-4 mr-2" />
              {shareAnalytics ? 'Sharing Enabled' : 'Share with Team'}
            </NeumorphicButton>
            
            <NeumorphicButton variant="secondary" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </NeumorphicButton>
            
            <NeumorphicButton variant="primary" size="sm" onClick={exportReport}>
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </NeumorphicButton>
          </div>
        </div>

        {/* Share Analytics Banner */}
        {shareAnalytics && (
          <div className={`p-4 rounded-2xl mb-8 border-l-4 border-blue-400 ${
            theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-blue-800 dark:text-blue-300">Analytics Sharing Enabled</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  Team members can now view performance summaries and project insights.
                </p>
              </div>
              <NeumorphicButton variant="accent" size="sm" onClick={() => setShareAnalytics(false)}>
                Disable Sharing
              </NeumorphicButton>
            </div>
          </div>
        )}

        {/* Team Overview Stats */}
        <div className="grid md:grid-cols-6 gap-6 mb-8">
          <NeumorphicCard className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <div className="text-2xl font-bold">{teamOverview.totalMembers}</div>
            <div className="text-sm opacity-70">Team Members</div>
            <div className="text-xs text-green-600 mt-1">+2 this month</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Target className="h-8 w-8 mx-auto mb-3 text-orange-600" />
            <div className="text-2xl font-bold">{teamOverview.activeTasks}</div>
            <div className="text-sm opacity-70">Active Tasks</div>
            <div className="text-xs text-blue-600 mt-1">Well distributed</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <div className="text-2xl font-bold">{teamOverview.completedTasks}</div>
            <div className="text-sm opacity-70">Completed</div>
            <div className="text-xs text-green-600 mt-1">+23% vs last month</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-indigo-600" />
            <div className="text-2xl font-bold">{teamOverview.teamEfficiency}%</div>
            <div className="text-sm opacity-70">Team Efficiency</div>
            <div className="text-xs text-green-600 mt-1">+5% improvement</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <div className="text-2xl font-bold">{teamOverview.averageFocusTime}h</div>
            <div className="text-sm opacity-70">Avg Focus/Day</div>
            <div className="text-xs text-green-600 mt-1">Above target</div>
          </NeumorphicCard>
          
          <NeumorphicCard className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-3 text-teal-600" />
            <div className="text-2xl font-bold">{teamOverview.meetingsThisWeek}</div>
            <div className="text-sm opacity-70">Meetings</div>
            <div className="text-xs text-orange-600 mt-1">Monitor load</div>
          </NeumorphicCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Team Member Performance */}
          <NeumorphicCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Individual Performance</h3>
              <NeumorphicButton variant="secondary" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Detailed View
              </NeumorphicButton>
            </div>
            
            <div className="space-y-4">
              {memberPerformance.map((member, index) => (
                <div key={index} className={`p-4 rounded-2xl ${
                  theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                }`}>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="text-2xl">{member.avatar}</div>
                    <div className="flex-1">
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-sm opacity-70">{member.role}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      member.efficiency >= 95 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : member.efficiency >= 90 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {member.efficiency}% efficiency
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-70">Tasks:</span>
                      <span className="font-medium">{member.tasksCompleted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Focus:</span>
                      <span className="font-medium">{member.focusHours}h</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </NeumorphicCard>

          {/* Weekly Team Trends */}
          <NeumorphicCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Weekly Performance Trends</h3>
              <NeumorphicButton variant="secondary" size="sm">
                <TrendingUp className="h-4 w-4 mr-2" />
                Forecast
              </NeumorphicButton>
            </div>
            
            <div className="space-y-4">
              {weeklyTrends.map((week, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{week.week}</span>
                    <div className="flex space-x-4 text-sm opacity-80">
                      <span>{week.productivity}% productivity</span>
                      <span>{week.tasks} tasks</span>
                      <span>{week.meetings} meetings</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className={`h-3 rounded-full ${theme === 'light' ? 'bg-green-200' : 'bg-green-900/30'}`}>
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${week.productivity}%` }}
                      />
                    </div>
                    <div className={`h-3 rounded-full ${theme === 'light' ? 'bg-blue-200' : 'bg-blue-900/30'}`}>
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(week.tasks / 50) * 100}%` }}
                      />
                    </div>
                    <div className={`h-3 rounded-full ${theme === 'light' ? 'bg-purple-200' : 'bg-purple-900/30'}`}>
                      <div 
                        className="h-full bg-purple-500 rounded-full"
                        style={{ width: `${(week.meetings / 20) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`mt-6 p-4 rounded-2xl ${
              theme === 'light' ? 'bg-green-50' : 'bg-green-900/20'
            }`}>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                  Team productivity improved 7% over the past month
                </p>
              </div>
            </div>
          </NeumorphicCard>
        </div>

        {/* Project Progress Overview */}
        <NeumorphicCard className="p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Project Progress Overview</h3>
            <NeumorphicButton variant="secondary" size="sm">
              <PieChart className="h-4 w-4 mr-2" />
              Project Details
            </NeumorphicButton>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projectProgress.map((project, index) => (
              <div key={index} className={`p-6 rounded-2xl ${
                theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{project.name}</h4>
                    <p className="text-sm opacity-70">Due: {project.dueDate}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">
                      {project.completed}/{project.total} tasks completed
                    </span>
                    <span className="font-medium">
                      {getCompletionPercentage(project.completed, project.total)}%
                    </span>
                  </div>
                  <div className={`h-3 rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
                    <div 
                      className={`h-full rounded-full ${
                        project.status === 'completed' 
                          ? 'bg-green-500' 
                          : project.status === 'at-risk' 
                            ? 'bg-orange-500' 
                            : 'bg-blue-500'
                      }`}
                      style={{ width: `${getCompletionPercentage(project.completed, project.total)}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">
                    {project.teamMembers} team members
                  </span>
                  <span className="font-medium">
                    {project.efficiency}% efficiency
                  </span>
                </div>
              </div>
            ))}
          </div>
        </NeumorphicCard>

        {/* Meeting Efficiency Analysis */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <NeumorphicCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Meeting Efficiency Analysis</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{meetingEfficiency.averageDuration}min</div>
                <p className="text-sm opacity-70">Average Duration</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{meetingEfficiency.onTimeStart}%</div>
                <p className="text-sm opacity-70">On-time Starts</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{meetingEfficiency.participationRate}%</div>
                <p className="text-sm opacity-70">Participation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">{meetingEfficiency.followUpRate}%</div>
                <p className="text-sm opacity-70">Follow-up Rate</p>
              </div>
            </div>
            
            <div className={`p-4 rounded-2xl ${
              theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
            }`}>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <Zap className="h-4 w-4 inline mr-1" />
                {meetingEfficiency.productiveMeetings} of {meetingEfficiency.totalMeetings} meetings this week were rated as highly productive
              </p>
            </div>
          </NeumorphicCard>

          {/* Team Achievements */}
          <NeumorphicCard className="p-6">
            <h3 className="text-xl font-bold mb-6">Team Achievements</h3>
            
            <div className="space-y-4">
              <div className={`p-4 rounded-2xl ${
                theme === 'light' ? 'bg-green-50 border border-green-200' : 'bg-green-900/20 border border-green-800'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    theme === 'light' ? 'bg-green-100' : 'bg-green-900/30'
                  }`}>
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 dark:text-green-300">Efficiency Milestone</h4>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Team achieved 94% efficiency - highest this quarter!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-2xl ${
                theme === 'light' ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-800'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'
                  }`}>
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-800 dark:text-blue-300">Sprint Champion</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                      All sprint goals met ahead of schedule for 3 weeks running
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`p-4 rounded-2xl ${
                theme === 'light' ? 'bg-purple-50 border border-purple-200' : 'bg-purple-900/20 border border-purple-800'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    theme === 'light' ? 'bg-purple-100' : 'bg-purple-900/30'
                  }`}>
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-800 dark:text-purple-300">Collaboration Excellence</h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      Cross-team collaboration increased 23% this month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NeumorphicCard>
        </div>

        {/* AI-Generated Team Insights */}
        <NeumorphicCard className="p-6">
          <h3 className="text-xl font-bold mb-6">AI-Generated Team Insights & Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {teamInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-2xl border-l-4 ${
                insight.type === 'success'
                  ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
                  : insight.type === 'warning'
                    ? 'border-orange-400 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-blue-400 bg-blue-50 dark:bg-blue-900/20'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className={`font-bold ${
                    insight.type === 'success'
                      ? 'text-green-800 dark:text-green-300'
                      : insight.type === 'warning'
                        ? 'text-orange-800 dark:text-orange-300'
                        : 'text-blue-800 dark:text-blue-300'
                  }`}>
                    {insight.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    insight.impact === 'high'
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {insight.impact} impact
                  </span>
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

export default TeamAnalytics;