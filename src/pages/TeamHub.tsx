import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Users, 
  Calendar, 
  CheckCircle,
  Plus,
  MessageSquare,
  Clock,
  Target,
  TrendingUp,
  Bell,
  Settings,
  User,
  MapPin,
  Phone,
  Video
} from 'lucide-react';

const TeamHub: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'overview' | 'calendar' | 'tasks' | 'members'>('overview');

  // Sample team data
  const teamStats = {
    totalMembers: 12,
    activeProjects: 8,
    completedTasks: 47,
    upcomingDeadlines: 3
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: '👩‍💼',
      status: 'available',
      currentTask: 'Q4 Planning Review',
      completedToday: 5,
      focusUntil: null,
      timezone: 'PST'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Senior Developer',
      avatar: '👨‍💻',
      status: 'focus',
      currentTask: 'API Integration',
      completedToday: 3,
      focusUntil: '3:30 PM',
      timezone: 'EST'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'UX Designer',
      avatar: '👩‍🎨',
      status: 'meeting',
      currentTask: 'User Testing Session',
      completedToday: 2,
      focusUntil: null,
      timezone: 'PST'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Marketing Lead',
      avatar: '👨‍💼',
      status: 'offline',
      currentTask: 'Campaign Analysis',
      completedToday: 4,
      focusUntil: null,
      timezone: 'CST'
    }
  ];

  const sharedCalendarEvents = [
    {
      id: 1,
      title: 'Team Standup',
      time: '9:00 AM - 9:30 AM',
      attendees: ['Sarah', 'Michael', 'Emily', 'David'],
      type: 'recurring',
      location: 'Conference Room A'
    },
    {
      id: 2,
      title: 'Q4 Planning Workshop',
      time: '2:00 PM - 4:00 PM',
      attendees: ['Sarah', 'Michael', 'Emily'],
      type: 'meeting',
      location: 'Zoom'
    },
    {
      id: 3,
      title: 'Client Presentation',
      time: 'Tomorrow 10:00 AM',
      attendees: ['Sarah', 'David'],
      type: 'important',
      location: 'Client Office'
    }
  ];

  const teamTasks = [
    {
      id: 1,
      title: 'Complete user research analysis',
      assignee: 'Emily Watson',
      priority: 'high',
      dueDate: 'Today',
      status: 'in-progress',
      project: 'Mobile App Redesign'
    },
    {
      id: 2,
      title: 'Review API documentation',
      assignee: 'Michael Rodriguez',
      priority: 'medium',
      dueDate: 'Tomorrow',
      status: 'pending',
      project: 'Platform Integration'
    },
    {
      id: 3,
      title: 'Update marketing metrics dashboard',
      assignee: 'David Kim',
      priority: 'medium',
      dueDate: 'This week',
      status: 'completed',
      project: 'Analytics Setup'
    },
    {
      id: 4,
      title: 'Finalize Q4 budget proposal',
      assignee: 'Sarah Chen',
      priority: 'high',
      dueDate: 'Friday',
      status: 'in-progress',
      project: 'Financial Planning'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'New Team Member Joining Monday',
      content: 'Please welcome Alex Thompson, our new DevOps Engineer, starting Monday!',
      author: 'Sarah Chen',
      time: '2 hours ago',
      priority: 'info'
    },
    {
      id: 2,
      title: 'Office Closure - Holiday Break',
      content: 'Reminder: Office will be closed Dec 25-Jan 1. Emergency contact info in handbook.',
      author: 'HR Team',
      time: '1 day ago',
      priority: 'important'
    },
    {
      id: 3,
      title: 'Q4 All-Hands Meeting Scheduled',
      content: 'Mark your calendars: Q4 All-Hands meeting on Friday, Dec 15 at 3 PM.',
      author: 'Sarah Chen',
      time: '2 days ago',
      priority: 'info'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'focus':
        return 'bg-orange-500';
      case 'meeting':
        return 'bg-blue-500';
      case 'offline':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
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

  const getStatusColor2 = (status: string) => {
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

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Team Hub Dashboard</h1>
            <p className="text-xl opacity-80">Collaborative workspace with shared calendars & task management</p>
          </div>
          
          <div className="flex gap-3">
            <NeumorphicButton variant="primary" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Task
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Meeting
            </NeumorphicButton>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'calendar', label: 'Shared Calendar' },
            { id: 'tasks', label: 'Team Tasks' },
            { id: 'members', label: 'Team Members' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? theme === 'light'
                    ? 'bg-[#BFECFF] text-gray-900 shadow-md'
                    : 'bg-[#80CFE8] text-gray-900 shadow-md'
                  : theme === 'light'
                    ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                    : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Team Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <NeumorphicCard className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold">{teamStats.totalMembers}</div>
                <div className="text-sm opacity-70">Team Members</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold">{teamStats.activeProjects}</div>
                <div className="text-sm opacity-70">Active Projects</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold">{teamStats.completedTasks}</div>
                <div className="text-sm opacity-70">Tasks Completed</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold">{teamStats.upcomingDeadlines}</div>
                <div className="text-sm opacity-70">Due This Week</div>
              </NeumorphicCard>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Quick Team Status */}
              <NeumorphicCard className="p-6">
                <h3 className="text-xl font-bold mb-6">Team Status Overview</h3>
                <div className="space-y-4">
                  {teamMembers.slice(0, 4).map(member => (
                    <div key={member.id} className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="text-2xl">{member.avatar}</div>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          getStatusColor(member.status)
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{member.name}</p>
                          <span className="text-xs opacity-60">{member.timezone}</span>
                        </div>
                        <p className="text-sm opacity-70 truncate">{member.currentTask}</p>
                        {member.focusUntil && (
                          <p className="text-xs text-orange-600 dark:text-orange-400">
                            Focus until {member.focusUntil}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{member.completedToday}</p>
                        <p className="text-xs opacity-60">tasks today</p>
                      </div>
                    </div>
                  ))}
                </div>
              </NeumorphicCard>

              {/* Announcements */}
              <NeumorphicCard className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">Team Announcements</h3>
                  <NeumorphicButton variant="secondary" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </NeumorphicButton>
                </div>
                <div className="space-y-4">
                  {announcements.slice(0, 3).map(announcement => (
                    <div key={announcement.id} className={`p-4 rounded-2xl ${
                      theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{announcement.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          announcement.priority === 'important'
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}>
                          {announcement.priority}
                        </span>
                      </div>
                      <p className="text-sm opacity-80 mb-2">{announcement.content}</p>
                      <div className="flex justify-between text-xs opacity-60">
                        <span>{announcement.author}</span>
                        <span>{announcement.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </NeumorphicCard>
            </div>

            {/* Upcoming Events */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Upcoming Team Events</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {sharedCalendarEvents.map(event => (
                  <div key={event.id} className={`p-4 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{event.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        event.type === 'important'
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                          : event.type === 'recurring'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm opacity-70 mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </p>
                    <p className="text-sm opacity-70 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </p>
                    <div className="flex items-center text-xs opacity-60">
                      <Users className="h-3 w-3 mr-1" />
                      {event.attendees.length} attendees
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Shared Team Calendar</h3>
              <div className="grid gap-4">
                {sharedCalendarEvents.map(event => (
                  <div key={event.id} className={`p-6 rounded-2xl border-l-4 border-blue-400 ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{event.title}</h4>
                        <p className="text-sm opacity-70 flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <NeumorphicButton variant="secondary" size="sm">
                          <Phone className="h-4 w-4" />
                        </NeumorphicButton>
                        <NeumorphicButton variant="secondary" size="sm">
                          <Video className="h-4 w-4" />
                        </NeumorphicButton>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm opacity-80 mb-4">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees.join(', ')}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        event.type === 'important'
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                          : event.type === 'recurring'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {event.type}
                      </span>
                      <NeumorphicButton variant="primary" size="sm">
                        Join Meeting
                      </NeumorphicButton>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <NeumorphicCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Team Task Board</h3>
                <div className="flex gap-2">
                  <NeumorphicButton variant="secondary" size="sm">
                    Filter
                  </NeumorphicButton>
                  <NeumorphicButton variant="primary" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Assign Task
                  </NeumorphicButton>
                </div>
              </div>
              
              <div className="space-y-4">
                {teamTasks.map(task => (
                  <div key={task.id} className={`p-6 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{task.title}</h4>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="opacity-70">Assigned to: <strong>{task.assignee}</strong></span>
                          <span className="opacity-70">Project: <strong>{task.project}</strong></span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor2(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-70">Due: {task.dueDate}</span>
                      <div className="flex space-x-2">
                        <NeumorphicButton variant="secondary" size="sm">
                          Edit
                        </NeumorphicButton>
                        {task.status !== 'completed' && (
                          <NeumorphicButton variant="primary" size="sm">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Complete
                          </NeumorphicButton>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map(member => (
                <NeumorphicCard key={member.id} className="p-6">
                  <div className="text-center mb-4">
                    <div className="relative inline-block mb-3">
                      <div className="text-4xl">{member.avatar}</div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        getStatusColor(member.status)
                      }`} />
                    </div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm opacity-70 mb-2">{member.role}</p>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      member.status === 'available'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : member.status === 'focus'
                          ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                          : member.status === 'meeting'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-sm opacity-80 mb-1">Current Task</p>
                      <p className="font-medium text-sm">{member.currentTask}</p>
                    </div>
                    
                    {member.focusUntil && (
                      <div className="text-center">
                        <p className="text-sm opacity-80 mb-1">Focus Until</p>
                        <p className="font-medium text-sm text-orange-600 dark:text-orange-400">
                          {member.focusUntil}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <div className="text-center">
                        <p className="font-bold">{member.completedToday}</p>
                        <p className="opacity-70">Tasks Today</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{member.timezone}</p>
                        <p className="opacity-70">Time Zone</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <NeumorphicButton variant="secondary" size="sm" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Chat
                    </NeumorphicButton>
                    <NeumorphicButton variant="primary" size="sm" className="flex-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Schedule
                    </NeumorphicButton>
                  </div>
                </NeumorphicCard>
              ))}
            </div>
            
            <NeumorphicCard className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Team Management</h3>
                <NeumorphicButton variant="primary" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Invite Member
                </NeumorphicButton>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="font-medium">Team Size</p>
                  <p className="text-sm opacity-70">{teamStats.totalMembers} members</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="font-medium">Productivity</p>
                  <p className="text-sm opacity-70">94% efficiency</p>
                </div>
                <div className="text-center">
                  <Settings className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="font-medium">Settings</p>
                  <p className="text-sm opacity-70">Configure team</p>
                </div>
              </div>
            </NeumorphicCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamHub;