import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Settings, 
  Users, 
  Plus,
  Trash2,
  Edit,
  CheckCircle,
  Calendar,
  Target,
  Bell,
  Shield,
  TrendingUp,
  UserPlus,
  UserMinus,
  Clock,
  AlertCircle
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<'overview' | 'members' | 'tasks' | 'events' | 'settings'>('overview');

  // Sample admin data
  const teamOverview = {
    totalMembers: 12,
    activeTasks: 23,
    completedThisWeek: 45,
    upcomingEvents: 8,
    teamEfficiency: 94
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      email: 'sarah.chen@company.com',
      role: 'Product Manager',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2 hours ago',
      tasksAssigned: 5,
      tasksCompleted: 23
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      email: 'michael.r@company.com',
      role: 'Senior Developer',
      status: 'active',
      joinDate: '2024-02-01',
      lastActive: 'Online now',
      tasksAssigned: 7,
      tasksCompleted: 31
    },
    {
      id: 3,
      name: 'Emily Watson',
      email: 'emily.watson@company.com',
      role: 'UX Designer',
      status: 'inactive',
      joinDate: '2024-01-20',
      lastActive: '1 day ago',
      tasksAssigned: 3,
      tasksCompleted: 18
    }
  ];

  const taskAssignments = [
    {
      id: 1,
      title: 'Complete Q4 financial analysis',
      assignee: 'Sarah Chen',
      assignedBy: 'Admin',
      priority: 'high',
      dueDate: '2024-12-20',
      status: 'in-progress',
      project: 'Financial Planning',
      estimatedHours: 8
    },
    {
      id: 2,
      title: 'Update user interface components',
      assignee: 'Emily Watson',
      assignedBy: 'Admin',
      priority: 'medium',
      dueDate: '2024-12-18',
      status: 'pending',
      project: 'UI Redesign',
      estimatedHours: 12
    },
    {
      id: 3,
      title: 'API integration testing',
      assignee: 'Michael Rodriguez',
      assignedBy: 'Admin',
      priority: 'high',
      dueDate: '2024-12-22',
      status: 'completed',
      project: 'Backend Development',
      estimatedHours: 6
    }
  ];

  const teamEvents = [
    {
      id: 1,
      title: 'Weekly Team Standup',
      type: 'recurring',
      date: '2024-12-16',
      time: '9:00 AM',
      duration: '30 min',
      attendees: ['Sarah Chen', 'Michael Rodriguez', 'Emily Watson'],
      location: 'Conference Room A',
      createdBy: 'Admin'
    },
    {
      id: 2,
      title: 'Q4 Planning Workshop',
      type: 'meeting',
      date: '2024-12-18',
      time: '2:00 PM',
      duration: '2 hours',
      attendees: ['All Team'],
      location: 'Main Conference Room',
      createdBy: 'Admin'
    }
  ];

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
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
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
            <h1 className="text-4xl font-bold mb-2">Admin Control Panel</h1>
            <p className="text-xl opacity-80">Team management, task assignment, and system administration</p>
          </div>
          
          <div className="flex gap-3">
            <NeumorphicButton variant="primary" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Quick Action
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Reports
            </NeumorphicButton>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: <TrendingUp className="h-4 w-4" /> },
            { id: 'members', label: 'Team Members', icon: <Users className="h-4 w-4" /> },
            { id: 'tasks', label: 'Task Management', icon: <Target className="h-4 w-4" /> },
            { id: 'events', label: 'Event Planning', icon: <Calendar className="h-4 w-4" /> },
            { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`flex items-center px-4 py-3 rounded-2xl font-medium transition-all duration-200 whitespace-nowrap ${
                activeSection === tab.id
                  ? theme === 'light'
                    ? 'bg-[#BFECFF] text-gray-900 shadow-md'
                    : 'bg-[#80CFE8] text-gray-900 shadow-md'
                  : theme === 'light'
                    ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                    : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* Admin Stats */}
            <div className="grid md:grid-cols-5 gap-6">
              <NeumorphicCard className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                <div className="text-2xl font-bold">{teamOverview.totalMembers}</div>
                <div className="text-sm opacity-70">Team Members</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Target className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                <div className="text-2xl font-bold">{teamOverview.activeTasks}</div>
                <div className="text-sm opacity-70">Active Tasks</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <div className="text-2xl font-bold">{teamOverview.completedThisWeek}</div>
                <div className="text-sm opacity-70">Completed This Week</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                <div className="text-2xl font-bold">{teamOverview.upcomingEvents}</div>
                <div className="text-sm opacity-70">Upcoming Events</div>
              </NeumorphicCard>
              
              <NeumorphicCard className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3 text-indigo-600" />
                <div className="text-2xl font-bold">{teamOverview.teamEfficiency}%</div>
                <div className="text-sm opacity-70">Team Efficiency</div>
              </NeumorphicCard>
            </div>

            {/* Quick Actions */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Quick Admin Actions</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <NeumorphicButton variant="primary" className="flex flex-col items-center py-6">
                  <UserPlus className="h-8 w-8 mb-2" />
                  <span>Add Team Member</span>
                </NeumorphicButton>
                
                <NeumorphicButton variant="secondary" className="flex flex-col items-center py-6">
                  <Target className="h-8 w-8 mb-2" />
                  <span>Assign Task</span>
                </NeumorphicButton>
                
                <NeumorphicButton variant="accent" className="flex flex-col items-center py-6">
                  <Calendar className="h-8 w-8 mb-2" />
                  <span>Schedule Event</span>
                </NeumorphicButton>
                
                <NeumorphicButton variant="secondary" className="flex flex-col items-center py-6">
                  <TrendingUp className="h-8 w-8 mb-2" />
                  <span>View Analytics</span>
                </NeumorphicButton>
              </div>
            </NeumorphicCard>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <NeumorphicCard className="p-6">
                <h3 className="text-xl font-bold mb-6">Recent Team Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      theme === 'light' ? 'bg-green-100' : 'bg-green-900/30'
                    }`}>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Michael completed "API Integration Testing"</p>
                      <p className="text-xs opacity-60">2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      theme === 'light' ? 'bg-blue-100' : 'bg-blue-900/30'
                    }`}>
                      <UserPlus className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New team member "Alex Thompson" added</p>
                      <p className="text-xs opacity-60">1 day ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      theme === 'light' ? 'bg-orange-100' : 'bg-orange-900/30'
                    }`}>
                      <Target className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Task "Q4 Analysis" assigned to Sarah</p>
                      <p className="text-xs opacity-60">2 days ago</p>
                    </div>
                  </div>
                </div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6">
                <h3 className="text-xl font-bold mb-6">System Alerts</h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-2xl border-l-4 border-yellow-400 ${
                    theme === 'light' ? 'bg-yellow-50' : 'bg-yellow-900/20'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                        3 tasks due this week need attention
                      </p>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-2xl border-l-4 border-blue-400 ${
                    theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <Bell className="h-5 w-5 text-blue-600" />
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        Team meeting scheduled for tomorrow
                      </p>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-2xl border-l-4 border-green-400 ${
                    theme === 'light' ? 'bg-green-50' : 'bg-green-900/20'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-sm font-medium text-green-800 dark:text-green-300">
                        All systems running normally
                      </p>
                    </div>
                  </div>
                </div>
              </NeumorphicCard>
            </div>
          </div>
        )}

        {/* Members Management */}
        {activeSection === 'members' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Team Member Management</h3>
              <NeumorphicButton variant="primary">
                <UserPlus className="h-4 w-4 mr-2" />
                Add New Member
              </NeumorphicButton>
            </div>

            <NeumorphicCard className="p-6">
              <div className="space-y-4">
                {teamMembers.map(member => (
                  <div key={member.id} className={`p-6 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <div>
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            <p className="text-sm opacity-70">{member.email}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(member.status)}`}>
                            {member.status}
                          </span>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="opacity-70">Role</p>
                            <p className="font-medium">{member.role}</p>
                          </div>
                          <div>
                            <p className="opacity-70">Join Date</p>
                            <p className="font-medium">{member.joinDate}</p>
                          </div>
                          <div>
                            <p className="opacity-70">Tasks Assigned</p>
                            <p className="font-medium">{member.tasksAssigned} active</p>
                          </div>
                          <div>
                            <p className="opacity-70">Tasks Completed</p>
                            <p className="font-medium">{member.tasksCompleted} total</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 ml-4">
                        <NeumorphicButton variant="secondary" size="sm">
                          <Edit className="h-4 w-4" />
                        </NeumorphicButton>
                        <NeumorphicButton variant="accent" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </NeumorphicButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>
        )}

        {/* Task Management */}
        {activeSection === 'tasks' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Task Assignment & Management</h3>
              <NeumorphicButton variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Create & Assign Task
              </NeumorphicButton>
            </div>

            <NeumorphicCard className="p-6">
              <div className="space-y-4">
                {taskAssignments.map(task => (
                  <div key={task.id} className={`p-6 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{task.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm opacity-80">
                          <span>Assigned to: <strong>{task.assignee}</strong></span>
                          <span>Project: <strong>{task.project}</strong></span>
                          <span>Due: <strong>{task.dueDate}</strong></span>
                          <span>Est. Hours: <strong>{task.estimatedHours}h</strong></span>
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
                      <p className="text-sm opacity-70">
                        Assigned by {task.assignedBy}
                      </p>
                      <div className="flex space-x-2">
                        <NeumorphicButton variant="secondary" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </NeumorphicButton>
                        <NeumorphicButton variant="primary" size="sm">
                          <Bell className="h-4 w-4 mr-1" />
                          Remind
                        </NeumorphicButton>
                        <NeumorphicButton variant="accent" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </NeumorphicButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>
        )}

        {/* Event Planning */}
        {activeSection === 'events' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Event Planning & Scheduling</h3>
              <NeumorphicButton variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Create Team Event
              </NeumorphicButton>
            </div>

            <NeumorphicCard className="p-6">
              <div className="space-y-4">
                {teamEvents.map(event => (
                  <div key={event.id} className={`p-6 rounded-2xl ${
                    theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                  }`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                        <div className="grid md:grid-cols-3 gap-4 text-sm opacity-80">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.duration}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {event.attendees.length} attendees
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        event.type === 'recurring'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm opacity-70">
                        <p>Location: {event.location}</p>
                        <p>Created by: {event.createdBy}</p>
                      </div>
                      <div className="flex space-x-2">
                        <NeumorphicButton variant="secondary" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </NeumorphicButton>
                        <NeumorphicButton variant="primary" size="sm">
                          <Bell className="h-4 w-4 mr-1" />
                          Notify
                        </NeumorphicButton>
                        <NeumorphicButton variant="accent" size="sm">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Cancel
                        </NeumorphicButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>
        )}

        {/* Settings */}
        {activeSection === 'settings' && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Admin Settings & Configuration</h3>

            <div className="grid lg:grid-cols-2 gap-8">
              <NeumorphicCard className="p-6">
                <h4 className="text-lg font-bold mb-6">Team Permissions</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Allow members to create tasks</p>
                      <p className="text-sm opacity-70">Members can create and assign tasks to others</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Calendar integration access</p>
                      <p className="text-sm opacity-70">Members can connect external calendars</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Analytics visibility</p>
                      <p className="text-sm opacity-70">Members can view team performance analytics</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full ml-1 shadow-sm"></div>
                    </button>
                  </div>
                </div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6">
                <h4 className="text-lg font-bold mb-6">Notification Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Task assignment notifications</p>
                      <p className="text-sm opacity-70">Notify members when tasks are assigned</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Deadline reminders</p>
                      <p className="text-sm opacity-70">Send automatic reminders before due dates</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly team reports</p>
                      <p className="text-sm opacity-70">Send weekly productivity summaries</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                    }`}>
                      <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                    </button>
                  </div>
                </div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6">
                <h4 className="text-lg font-bold mb-6">Data & Security</h4>
                <div className="space-y-4">
                  <NeumorphicButton variant="secondary" className="w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Export Team Data
                  </NeumorphicButton>
                  <NeumorphicButton variant="primary" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Backup Settings
                  </NeumorphicButton>
                  <NeumorphicButton variant="accent" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Reset All Data
                  </NeumorphicButton>
                </div>
              </NeumorphicCard>

              <NeumorphicCard className="p-6">
                <h4 className="text-lg font-bold mb-6">Integration Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Slack Integration</span>
                    <NeumorphicButton variant="primary" size="sm">Connect</NeumorphicButton>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Microsoft Teams</span>
                    <NeumorphicButton variant="secondary" size="sm">Connected</NeumorphicButton>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Google Workspace</span>
                    <NeumorphicButton variant="primary" size="sm">Connect</NeumorphicButton>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Zoom</span>
                    <NeumorphicButton variant="secondary" size="sm">Connected</NeumorphicButton>
                  </div>
                </div>
              </NeumorphicCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;