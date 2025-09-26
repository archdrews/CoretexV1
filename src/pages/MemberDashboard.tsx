import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Target,
  Bell,
  MessageSquare,
  TrendingUp,
  Users,
  AlertCircle,
  User,
  MapPin
} from 'lucide-react';

const MemberDashboard: React.FC = () => {
  const { theme } = useTheme();

  // Sample member data
  const memberProfile = {
    name: 'Sarah Chen',
    role: 'Product Manager',
    avatar: '👩‍💼',
    team: 'Product Development',
    joinDate: 'January 2024'
  };

  const myTasks = [
    {
      id: 1,
      title: 'Complete Q4 budget analysis',
      assignedBy: 'Admin',
      priority: 'high',
      dueDate: 'Today',
      status: 'in-progress',
      project: 'Financial Planning',
      estimatedTime: '4h'
    },
    {
      id: 2,
      title: 'Review user feedback report',
      assignedBy: 'Emily Watson',
      priority: 'medium',
      dueDate: 'Tomorrow',
      status: 'pending',
      project: 'Product Research',
      estimatedTime: '2h'
    },
    {
      id: 3,
      title: 'Update team documentation',
      assignedBy: 'Admin',
      priority: 'low',
      dueDate: 'This week',
      status: 'pending',
      project: 'Documentation',
      estimatedTime: '1h'
    },
    {
      id: 4,
      title: 'Prepare monthly presentation',
      assignedBy: 'Self',
      priority: 'high',
      dueDate: 'Friday',
      status: 'completed',
      project: 'Reporting',
      estimatedTime: '3h'
    }
  ];

  const teamUpdates = [
    {
      id: 1,
      type: 'task_assigned',
      message: 'New task assigned: "Review user feedback report"',
      author: 'Emily Watson',
      time: '2 hours ago',
      priority: 'normal'
    },
    {
      id: 2,
      type: 'meeting_scheduled',
      message: 'Team standup meeting scheduled for tomorrow 9 AM',
      author: 'Admin',
      time: '4 hours ago',
      priority: 'important'
    },
    {
      id: 3,
      type: 'announcement',
      message: 'Q4 planning workshop moved to Conference Room B',
      author: 'Admin',
      time: '1 day ago',
      priority: 'normal'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Daily Standup',
      time: '9:00 AM - 9:30 AM',
      type: 'meeting',
      attendees: ['Team'],
      location: 'Conference Room A'
    },
    {
      id: 2,
      title: 'Q4 Planning Workshop',
      time: '2:00 PM - 4:00 PM',
      type: 'workshop',
      attendees: ['All hands'],
      location: 'Conference Room B'
    },
    {
      id: 3,
      title: 'Client Presentation',
      time: 'Tomorrow 10:00 AM',
      type: 'presentation',
      attendees: ['Sarah', 'David'],
      location: 'Zoom'
    }
  ];

  const myStats = {
    tasksCompleted: 23,
    tasksInProgress: 3,
    focusHoursWeek: 18,
    teamMeetings: 12
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'pending':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'task_assigned':
        return <Target className="h-4 w-4" />;
      case 'meeting_scheduled':
        return <Calendar className="h-4 w-4" />;
      case 'announcement':
        return <Bell className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{memberProfile.avatar}</div>
            <div>
              <h1 className="text-4xl font-bold">Welcome, {memberProfile.name}!</h1>
              <p className="text-xl opacity-80">{memberProfile.role} • {memberProfile.team}</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <NeumorphicButton variant="primary" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              Team Chat
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              My Calendar
            </NeumorphicButton>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Personal Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <NeumorphicCard className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold">{myStats.tasksCompleted}</div>
                <div className="text-sm opacity-70">Tasks Completed</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold">{myStats.tasksInProgress}</div>
                <div className="text-sm opacity-70">In Progress</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold">{myStats.focusHoursWeek}h</div>
                <div className="text-sm opacity-70">Focus This Week</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold">{myStats.teamMeetings}</div>
                <div className="text-sm opacity-70">Team Meetings</div>
              </NeumorphicCard>
            </div>

            {/* My Tasks */}
            <NeumorphicCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">My Tasks</h3>
                <div className="flex space-x-2">
                  <select className={`px-3 py-2 rounded-2xl text-sm ${
                    theme === 'light' 
                      ? 'bg-white border border-gray-300' 
                      : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>All Tasks</option>
                    <option>High Priority</option>
                    <option>Due Today</option>
                    <option>In Progress</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                {myTasks.map(task => (
                  <div key={task.id} className={`p-6 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{task.title}</h4>
                        <div className="flex flex-wrap gap-3 text-sm opacity-80">
                          <span>Assigned by: <strong>{task.assignedBy}</strong></span>
                          <span>Project: <strong>{task.project}</strong></span>
                          <span>Due: <strong>{task.dueDate}</strong></span>
                          <span>Est. Time: <strong>{task.estimatedTime}</strong></span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      {task.status === 'completed' ? (
                        <span className="text-green-600 dark:text-green-400 text-sm flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Completed
                        </span>
                      ) : (
                        <div className="flex space-x-2">
                          <NeumorphicButton variant="primary" size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Mark Complete
                          </NeumorphicButton>
                          <NeumorphicButton variant="secondary" size="sm">
                            Update Progress
                          </NeumorphicButton>
                        </div>
                      )}
                      <NeumorphicButton variant="secondary" size="sm">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Ask Question
                      </NeumorphicButton>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>

            {/* Today's Schedule */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Today's Schedule</h3>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className={`p-4 rounded-2xl border-l-4 border-blue-400 ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold">{event.title}</h4>
                        <p className="text-sm opacity-70 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        event.type === 'presentation'
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                          : event.type === 'workshop'
                            ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm opacity-80">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees.join(', ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Profile Summary */}
            <NeumorphicCard className="p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{memberProfile.avatar}</div>
                <h3 className="font-bold text-lg">{memberProfile.name}</h3>
                <p className="text-sm opacity-70 mb-2">{memberProfile.role}</p>
                <p className="text-sm opacity-70">Member since {memberProfile.joinDate}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Team</span>
                  <span className="font-medium">{memberProfile.team}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Tasks Completed</span>
                  <span className="font-medium">{myStats.tasksCompleted}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-70">Focus Hours</span>
                  <span className="font-medium">{myStats.focusHoursWeek}h this week</span>
                </div>
              </div>
            </NeumorphicCard>

            {/* Team Updates & Notifications */}
            <NeumorphicCard className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Team Updates</h3>
                <Bell className="h-5 w-5 opacity-60" />
              </div>
              <div className="space-y-3">
                {teamUpdates.map(update => (
                  <div key={update.id} className={`p-3 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`p-1 rounded-full mt-1 ${
                        update.priority === 'important'
                          ? theme === 'light' ? 'bg-red-100' : 'bg-red-900/30'
                          : theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'
                      }`}>
                        {getUpdateIcon(update.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium mb-1">{update.message}</p>
                        <div className="flex justify-between text-xs opacity-60">
                          <span>{update.author}</span>
                          <span>{update.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <NeumorphicButton variant="secondary" size="sm" className="w-full mt-4">
                View All Updates
              </NeumorphicButton>
            </NeumorphicCard>

            {/* Quick Actions */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <NeumorphicButton variant="primary" size="sm" className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  Start Focus Session
                </NeumorphicButton>
                <NeumorphicButton variant="secondary" size="sm" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </NeumorphicButton>
                <NeumorphicButton variant="secondary" size="sm" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Ask Team Question
                </NeumorphicButton>
                <NeumorphicButton variant="accent" size="sm" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View My Analytics
                </NeumorphicButton>
              </div>
            </NeumorphicCard>

            {/* Team Performance Summary */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">Team Performance</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">94%</div>
                  <p className="text-sm opacity-70">Team Efficiency</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center text-sm">
                  <div>
                    <div className="font-bold">45</div>
                    <p className="opacity-70">Tasks Done</p>
                  </div>
                  <div>
                    <div className="font-bold">8</div>
                    <p className="opacity-70">Active Projects</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center text-sm">
                    <span className="opacity-70">Your Contribution</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Above Average</span>
                  </div>
                </div>
              </div>
            </NeumorphicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;