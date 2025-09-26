import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  User, 
  Mail, 
  Bell, 
  Shield, 
  Download,
  Trash2,
  Edit,
  Save,
  Camera,
  Globe,
  Moon,
  Sun,
  Lock,
  Key,
  Calendar,
  Clock,
  Smartphone,
  Monitor
} from 'lucide-react';

const AccountSettings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState<'profile' | 'notifications' | 'privacy' | 'preferences' | 'data'>('profile');

  // Sample user data
  const [userProfile, setUserProfile] = useState({
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    role: 'Product Manager',
    department: 'Product Development',
    phone: '+1 (555) 123-4567',
    timezone: 'Pacific Standard Time',
    avatar: '👩‍💼',
    joinDate: 'January 15, 2024'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    taskAssignments: true,
    deadlineReminders: true,
    meetingInvites: true,
    teamUpdates: true,
    focusSessionReminders: false,
    weeklyReports: true,
    emailDigest: true,
    pushNotifications: true,
    conflictAlerts: true
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'team',
    activityTracking: true,
    analyticsSharing: false,
    calendarSharing: true,
    statusSharing: true,
    twoFactorAuth: false
  });

  const [appPreferences, setAppPreferences] = useState({
    defaultView: 'dashboard',
    theme: theme,
    language: 'English',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12-hour',
    startOfWeek: 'Monday',
    defaultFocusDuration: 25,
    autoBreakReminders: true,
    compactMode: false
  });

  const connectedApps = [
    { name: 'Google Calendar', connected: true, lastSync: '2 minutes ago' },
    { name: 'Microsoft Outlook', connected: false, lastSync: null },
    { name: 'Slack', connected: true, lastSync: '1 hour ago' },
    { name: 'Microsoft Teams', connected: false, lastSync: null },
    { name: 'Zoom', connected: true, lastSync: '30 minutes ago' }
  ];

  const toggleNotification = (key: keyof typeof notificationSettings) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePrivacySetting = (key: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Save changes logic here
  };

  const exportData = () => {
    // Export user data logic
    console.log('Exporting user data...');
  };

  const deleteAccount = () => {
    // Account deletion logic
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
    }
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
            <p className="text-xl opacity-80">Manage your profile, preferences, and privacy settings</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <NeumorphicCard className="p-6">
              <nav className="space-y-2">
                {[
                  { id: 'profile', label: 'Profile & Account', icon: <User className="h-5 w-5" /> },
                  { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
                  { id: 'privacy', label: 'Privacy & Security', icon: <Shield className="h-5 w-5" /> },
                  { id: 'preferences', label: 'App Preferences', icon: <Monitor className="h-5 w-5" /> },
                  { id: 'data', label: 'Data & Export', icon: <Download className="h-5 w-5" /> }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id as any)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-left transition-all ${
                      activeSection === item.id
                        ? theme === 'light'
                          ? 'bg-[#BFECFF] text-gray-900'
                          : 'bg-[#80CFE8] text-gray-900'
                        : theme === 'light'
                          ? 'hover:bg-[#BFECFF]/50 text-gray-700'
                          : 'hover:bg-[#80CFE8]/30 text-[#F5F5F5]'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </NeumorphicCard>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Profile & Account Settings */}
            {activeSection === 'profile' && (
              <div className="space-y-6">
                <NeumorphicCard className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold">Profile Information</h3>
                    <NeumorphicButton 
                      variant={editMode ? "primary" : "secondary"} 
                      size="sm"
                      onClick={editMode ? handleSaveProfile : () => setEditMode(true)}
                    >
                      {editMode ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                      {editMode ? 'Save Changes' : 'Edit Profile'}
                    </NeumorphicButton>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="relative">
                      <div className="text-6xl">{userProfile.avatar}</div>
                      {editMode && (
                        <button className={`absolute bottom-0 right-0 p-2 rounded-full ${
                          theme === 'light' ? 'bg-[#BFECFF] shadow-md' : 'bg-[#80CFE8] shadow-md'
                        }`}>
                          <Camera className="h-4 w-4 text-gray-800" />
                        </button>
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">{userProfile.name}</h2>
                      <p className="text-lg opacity-80">{userProfile.role}</p>
                      <p className="text-sm opacity-60">Member since {userProfile.joinDate}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={userProfile.name}
                        onChange={(e) => setUserProfile(prev => ({...prev, name: e.target.value}))}
                        disabled={!editMode}
                        className={`w-full px-4 py-3 rounded-2xl border transition-colors ${
                          editMode
                            ? theme === 'light'
                              ? 'bg-white border-[#BFECFF] focus:border-[#BFECFF] focus:ring-2 focus:ring-[#BFECFF]/20'
                              : 'bg-gray-800 border-[#80CFE8] focus:border-[#80CFE8] focus:ring-2 focus:ring-[#80CFE8]/20'
                            : theme === 'light'
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-gray-700 border-gray-600'
                        } ${!editMode ? 'cursor-not-allowed' : ''}`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={userProfile.email}
                        onChange={(e) => setUserProfile(prev => ({...prev, email: e.target.value}))}
                        disabled={!editMode}
                        className={`w-full px-4 py-3 rounded-2xl border transition-colors ${
                          editMode
                            ? theme === 'light'
                              ? 'bg-white border-[#BFECFF] focus:border-[#BFECFF] focus:ring-2 focus:ring-[#BFECFF]/20'
                              : 'bg-gray-800 border-[#80CFE8] focus:border-[#80CFE8] focus:ring-2 focus:ring-[#80CFE8]/20'
                            : theme === 'light'
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-gray-700 border-gray-600'
                        } ${!editMode ? 'cursor-not-allowed' : ''}`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Role</label>
                      <input
                        type="text"
                        value={userProfile.role}
                        onChange={(e) => setUserProfile(prev => ({...prev, role: e.target.value}))}
                        disabled={!editMode}
                        className={`w-full px-4 py-3 rounded-2xl border transition-colors ${
                          editMode
                            ? theme === 'light'
                              ? 'bg-white border-[#BFECFF] focus:border-[#BFECFF] focus:ring-2 focus:ring-[#BFECFF]/20'
                              : 'bg-gray-800 border-[#80CFE8] focus:border-[#80CFE8] focus:ring-2 focus:ring-[#80CFE8]/20'
                            : theme === 'light'
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-gray-700 border-gray-600'
                        } ${!editMode ? 'cursor-not-allowed' : ''}`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Department</label>
                      <input
                        type="text"
                        value={userProfile.department}
                        onChange={(e) => setUserProfile(prev => ({...prev, department: e.target.value}))}
                        disabled={!editMode}
                        className={`w-full px-4 py-3 rounded-2xl border transition-colors ${
                          editMode
                            ? theme === 'light'
                              ? 'bg-white border-[#BFECFF] focus:border-[#BFECFF] focus:ring-2 focus:ring-[#BFECFF]/20'
                              : 'bg-gray-800 border-[#80CFE8] focus:border-[#80CFE8] focus:ring-2 focus:ring-[#80CFE8]/20'
                            : theme === 'light'
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-gray-700 border-gray-600'
                        } ${!editMode ? 'cursor-not-allowed' : ''}`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={userProfile.phone}
                        onChange={(e) => setUserProfile(prev => ({...prev, phone: e.target.value}))}
                        disabled={!editMode}
                        className={`w-full px-4 py-3 rounded-2xl border transition-colors ${
                          editMode
                            ? theme === 'light'
                              ? 'bg-white border-[#BFECFF] focus:border-[#BFECFF] focus:ring-2 focus:ring-[#BFECFF]/20'
                              : 'bg-gray-800 border-[#80CFE8] focus:border-[#80CFE8] focus:ring-2 focus:ring-[#80CFE8]/20'
                            : theme === 'light'
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-gray-700 border-gray-600'
                        } ${!editMode ? 'cursor-not-allowed' : ''}`}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Timezone</label>
                      <select
                        value={userProfile.timezone}
                        onChange={(e) => setUserProfile(prev => ({...prev, timezone: e.target.value}))}
                        disabled={!editMode}
                        className={`w-full px-4 py-3 rounded-2xl border transition-colors ${
                          editMode
                            ? theme === 'light'
                              ? 'bg-white border-[#BFECFF] focus:border-[#BFECFF] focus:ring-2 focus:ring-[#BFECFF]/20'
                              : 'bg-gray-800 border-[#80CFE8] focus:border-[#80CFE8] focus:ring-2 focus:ring-[#80CFE8]/20'
                            : theme === 'light'
                              ? 'bg-gray-100 border-gray-300'
                              : 'bg-gray-700 border-gray-600'
                        } ${!editMode ? 'cursor-not-allowed' : ''}`}
                      >
                        <option value="Pacific Standard Time">Pacific Standard Time</option>
                        <option value="Eastern Standard Time">Eastern Standard Time</option>
                        <option value="Central Standard Time">Central Standard Time</option>
                        <option value="Mountain Standard Time">Mountain Standard Time</option>
                      </select>
                    </div>
                  </div>
                </NeumorphicCard>

                {/* Connected Apps */}
                <NeumorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-6">Connected Applications</h3>
                  <div className="space-y-4">
                    {connectedApps.map((app, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 rounded-2xl ${
                        theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
                      }`}>
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            app.connected ? 'bg-green-500' : 'bg-gray-400'
                          }`} />
                          <div>
                            <p className="font-medium">{app.name}</p>
                            <p className="text-sm opacity-60">
                              {app.connected ? `Last sync: ${app.lastSync}` : 'Not connected'}
                            </p>
                          </div>
                        </div>
                        <NeumorphicButton 
                          variant={app.connected ? "secondary" : "primary"} 
                          size="sm"
                        >
                          {app.connected ? 'Disconnect' : 'Connect'}
                        </NeumorphicButton>
                      </div>
                    ))}
                  </div>
                </NeumorphicCard>
              </div>
            )}

            {/* Notification Settings */}
            {activeSection === 'notifications' && (
              <NeumorphicCard className="p-6">
                <h3 className="text-xl font-bold mb-6">Notification Preferences</h3>
                <div className="space-y-6">
                  {Object.entries(notificationSettings).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm opacity-70">
                          {key === 'taskAssignments' && 'Get notified when tasks are assigned to you'}
                          {key === 'deadlineReminders' && 'Receive reminders before task deadlines'}
                          {key === 'meetingInvites' && 'Get notified about new meeting invitations'}
                          {key === 'teamUpdates' && 'Receive updates about team activities'}
                          {key === 'focusSessionReminders' && 'Get reminded to start focus sessions'}
                          {key === 'weeklyReports' && 'Receive weekly productivity summaries'}
                          {key === 'emailDigest' && 'Get daily email digest of activities'}
                          {key === 'pushNotifications' && 'Enable push notifications on mobile'}
                          {key === 'conflictAlerts' && 'Get alerts about calendar conflicts'}
                        </p>
                      </div>
                      <button 
                        onClick={() => toggleNotification(key as keyof typeof notificationSettings)}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          value 
                            ? theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                            : theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'
                        }`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                          value ? 'translate-x-6' : 'translate-x-1'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </NeumorphicCard>
            )}

            {/* Privacy & Security */}
            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <NeumorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-6">Privacy Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block font-medium mb-2">Profile Visibility</label>
                      <select 
                        value={privacySettings.profileVisibility}
                        onChange={(e) => setPrivacySettings(prev => ({...prev, profileVisibility: e.target.value}))}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          theme === 'light' 
                            ? 'bg-white border-gray-300' 
                            : 'bg-gray-800 border-gray-600'
                        }`}
                      >
                        <option value="public">Public</option>
                        <option value="team">Team Only</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                    
                    {Object.entries(privacySettings).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-sm opacity-70">
                            {key === 'activityTracking' && 'Allow Coretex to track your activity for insights'}
                            {key === 'analyticsSharing' && 'Share anonymous usage data to improve the product'}
                            {key === 'calendarSharing' && 'Allow team members to see your availability'}
                            {key === 'statusSharing' && 'Share your work status with team members'}
                            {key === 'twoFactorAuth' && 'Add an extra layer of security to your account'}
                          </p>
                        </div>
                        <button 
                          onClick={() => togglePrivacySetting(key as keyof typeof privacySettings)}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            value 
                              ? theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                              : theme === 'light' ? 'bg-gray-300' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </NeumorphicCard>

                <NeumorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-6">Security</h3>
                  <div className="space-y-4">
                    <NeumorphicButton variant="secondary" className="w-full justify-start">
                      <Lock className="h-5 w-5 mr-3" />
                      Change Password
                    </NeumorphicButton>
                    
                    <NeumorphicButton variant="secondary" className="w-full justify-start">
                      <Key className="h-5 w-5 mr-3" />
                      Setup Two-Factor Authentication
                    </NeumorphicButton>
                    
                    <NeumorphicButton variant="secondary" className="w-full justify-start">
                      <Smartphone className="h-5 w-5 mr-3" />
                      Manage Active Sessions
                    </NeumorphicButton>
                  </div>
                </NeumorphicCard>
              </div>
            )}

            {/* App Preferences */}
            {activeSection === 'preferences' && (
              <NeumorphicCard className="p-6">
                <h3 className="text-xl font-bold mb-6">Application Preferences</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">Default View</label>
                    <select 
                      value={appPreferences.defaultView}
                      onChange={(e) => setAppPreferences(prev => ({...prev, defaultView: e.target.value}))}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                    >
                      <option value="dashboard">Dashboard</option>
                      <option value="calendar">Calendar</option>
                      <option value="tasks">Tasks</option>
                      <option value="focus">Focus Mode</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Language</label>
                    <select 
                      value={appPreferences.language}
                      onChange={(e) => setAppPreferences(prev => ({...prev, language: e.target.value}))}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                    >
                      <option value="English">English</option>
                      <option value="Spanish">Español</option>
                      <option value="French">Français</option>
                      <option value="German">Deutsch</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Date Format</label>
                    <select 
                      value={appPreferences.dateFormat}
                      onChange={(e) => setAppPreferences(prev => ({...prev, dateFormat: e.target.value}))}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Time Format</label>
                    <select 
                      value={appPreferences.timeFormat}
                      onChange={(e) => setAppPreferences(prev => ({...prev, timeFormat: e.target.value}))}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                    >
                      <option value="12-hour">12-hour</option>
                      <option value="24-hour">24-hour</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Start of Week</label>
                    <select 
                      value={appPreferences.startOfWeek}
                      onChange={(e) => setAppPreferences(prev => ({...prev, startOfWeek: e.target.value}))}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                    >
                      <option value="Monday">Monday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Default Focus Duration (minutes)</label>
                    <input
                      type="number"
                      value={appPreferences.defaultFocusDuration}
                      onChange={(e) => setAppPreferences(prev => ({...prev, defaultFocusDuration: parseInt(e.target.value)}))}
                      min="15"
                      max="120"
                      step="5"
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        theme === 'light' 
                          ? 'bg-white border-gray-300' 
                          : 'bg-gray-800 border-gray-600'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4">Theme & Display</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        <span className="font-medium">Theme</span>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={theme === 'dark' ? toggleTheme : undefined}
                          className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                            theme === 'light'
                              ? theme === 'light' 
                                ? 'bg-[#BFECFF] text-gray-900' 
                                : 'bg-gray-200 text-gray-700'
                              : 'hover:bg-gray-700 text-gray-300'
                          }`}
                        >
                          Light
                        </button>
                        <button 
                          onClick={theme === 'light' ? toggleTheme : undefined}
                          className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                            theme === 'dark'
                              ? theme === 'dark' 
                                ? 'bg-[#80CFE8] text-gray-900' 
                                : 'bg-gray-200 text-gray-700'
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          Dark
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </NeumorphicCard>
            )}

            {/* Data & Export */}
            {activeSection === 'data' && (
              <div className="space-y-6">
                <NeumorphicCard className="p-6">
                  <h3 className="text-xl font-bold mb-6">Data Management</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20">
                      <div>
                        <h4 className="font-medium">Export Personal Data</h4>
                        <p className="text-sm opacity-70">Download all your personal data in JSON format</p>
                      </div>
                      <NeumorphicButton variant="primary" size="sm" onClick={exportData}>
                        <Download className="h-4 w-4 mr-2" />
                        Export Data
                      </NeumorphicButton>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-green-50 dark:bg-green-900/20">
                      <div>
                        <h4 className="font-medium">Backup Settings</h4>
                        <p className="text-sm opacity-70">Create a backup of your current settings and preferences</p>
                      </div>
                      <NeumorphicButton variant="secondary" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Backup
                      </NeumorphicButton>
                    </div>
                  </div>
                </NeumorphicCard>

                <NeumorphicCard className="p-6 border-l-4 border-red-400">
                  <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">Danger Zone</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20">
                      <h4 className="font-medium text-red-800 dark:text-red-300 mb-2">Delete Account</h4>
                      <p className="text-sm text-red-600 dark:text-red-400 mb-4">
                        Permanently delete your account and all associated data. This action cannot be undone.
                      </p>
                      <NeumorphicButton variant="accent" size="sm" onClick={deleteAccount}>
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Account
                      </NeumorphicButton>
                    </div>
                  </div>
                </NeumorphicCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;