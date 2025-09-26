import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Filter,
  Clock,
  AlertTriangle,
  MapPin,
  Users,
  Globe
} from 'lucide-react';

const Calendar: React.FC = () => {
  const { theme } = useTheme();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  // Sample calendar data
  const calendars = [
    { id: 1, name: 'Work Calendar', color: '#BFECFF', enabled: true, count: 8 },
    { id: 2, name: 'Personal', color: '#CDC1FF', enabled: true, count: 3 },
    { id: 3, name: 'Team Events', color: '#FFCCEA', enabled: true, count: 2 },
    { id: 4, name: 'Travel', color: '#B8E6B8', enabled: false, count: 1 }
  ];

  const events = [
    {
      id: 1,
      title: 'Team Standup',
      time: '9:00 AM - 9:30 AM',
      calendar: 'Work Calendar',
      color: '#BFECFF',
      location: 'Conference Room A',
      attendees: 8,
      hasConflict: false
    },
    {
      id: 2,
      title: 'Client Presentation',
      time: '2:00 PM - 3:30 PM',
      calendar: 'Work Calendar',
      color: '#BFECFF',
      location: 'Zoom',
      attendees: 12,
      hasConflict: true,
      conflictWith: 'Project Review Meeting'
    },
    {
      id: 3,
      title: 'Lunch with Sarah',
      time: '12:30 PM - 1:30 PM',
      calendar: 'Personal',
      color: '#CDC1FF',
      location: 'Downtown Cafe',
      attendees: 2,
      hasConflict: false
    },
    {
      id: 4,
      title: 'Focus Block - Code Review',
      time: '10:00 AM - 12:00 PM',
      calendar: 'Work Calendar',
      color: '#BFECFF',
      location: 'Do Not Disturb',
      isBlockedTime: true,
      hasConflict: false
    }
  ];

  const timeZones = [
    { name: 'Local Time', zone: 'PST', current: '2:30 PM' },
    { name: 'New York', zone: 'EST', current: '5:30 PM' },
    { name: 'London', zone: 'GMT', current: '10:30 PM' }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">CalendarFuse 360™</h1>
            <p className="text-xl opacity-80">Multi-calendar overlay with intelligent conflict detection</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <NeumorphicButton variant="primary" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Event
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </NeumorphicButton>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="space-y-6">
            
            {/* Calendar Sources */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">Calendar Sources</h3>
              <div className="space-y-3">
                {calendars.map((cal) => (
                  <div key={cal.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={cal.enabled}
                        onChange={() => {}}
                        className="w-4 h-4 rounded"
                      />
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: cal.color }}
                      />
                      <span className="text-sm">{cal.name}</span>
                    </div>
                    <span className="text-xs opacity-60">({cal.count})</span>
                  </div>
                ))}
              </div>
              <NeumorphicButton variant="secondary" size="sm" className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Connect Calendar
              </NeumorphicButton>
            </NeumorphicCard>

            {/* Time Zones */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <Globe className="inline h-5 w-5 mr-2" />
                Time Zones
              </h3>
              <div className="space-y-3">
                {timeZones.map((tz, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{tz.name}</p>
                      <p className="text-xs opacity-60">{tz.zone}</p>
                    </div>
                    <span className="font-mono text-sm">{tz.current}</span>
                  </div>
                ))}
              </div>
            </NeumorphicCard>

            {/* Conflict Alerts */}
            <NeumorphicCard className={`p-6 border-l-4 border-red-400 ${
              theme === 'light' ? 'bg-red-50' : 'bg-red-900/20'
            }`}>
              <h3 className="text-lg font-bold mb-3 text-red-600 dark:text-red-400">
                <AlertTriangle className="inline h-5 w-5 mr-2" />
                Conflicts Detected
              </h3>
              <div className="text-sm space-y-2">
                <div>
                  <p className="font-medium">Today 2:00 PM</p>
                  <p className="opacity-80">Client Presentation overlaps with Project Review</p>
                </div>
                <NeumorphicButton variant="accent" size="sm" className="mt-3">
                  Resolve All
                </NeumorphicButton>
              </div>
            </NeumorphicCard>

          </div>

          {/* Main Calendar Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Calendar Navigation */}
            <NeumorphicCard className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-xl font-bold">March 2025</h2>
                  <button className="p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex space-x-2">
                  {['month', 'week', 'day'].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode as any)}
                      className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                        viewMode === mode
                          ? theme === 'light'
                            ? 'bg-[#BFECFF] text-gray-900'
                            : 'bg-[#80CFE8] text-gray-900'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </NeumorphicCard>

            {/* Calendar Grid (simplified for demo) */}
            <NeumorphicCard className="p-6">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-3 text-center font-medium opacity-60">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                  const date = i - 6 + 1;
                  const isToday = date === 15;
                  const hasEvents = [12, 15, 16, 18, 22].includes(date);
                  
                  return (
                    <div
                      key={i}
                      className={`aspect-square p-2 rounded-2xl text-center text-sm cursor-pointer transition-colors relative ${
                        date < 1 || date > 31
                          ? 'opacity-30'
                          : isToday
                          ? theme === 'light'
                            ? 'bg-[#BFECFF] text-gray-900 font-bold'
                            : 'bg-[#80CFE8] text-gray-900 font-bold'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {date > 0 && date <= 31 && (
                        <>
                          <div>{date}</div>
                          {hasEvents && (
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                              <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60"></div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </NeumorphicCard>

            {/* Today's Events */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Today's Events</h3>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`p-4 rounded-2xl border-l-4 ${
                      event.hasConflict
                        ? 'border-red-400 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-300 dark:border-gray-600'
                    } ${theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'}`}
                    style={{ borderLeftColor: event.color }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{event.title}</h4>
                        <p className="text-sm opacity-70 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </p>
                      </div>
                      {event.hasConflict && (
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm opacity-80">
                      {event.location && (
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </span>
                      )}
                      {event.attendees && (
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} attendees
                        </span>
                      )}
                    </div>
                    
                    {event.hasConflict && (
                      <div className="mt-3 p-2 bg-red-100 dark:bg-red-900/30 rounded-2xl text-sm">
                        <p className="text-red-700 dark:text-red-300">
                          <AlertTriangle className="h-4 w-4 inline mr-1" />
                          Conflicts with: {event.conflictWith}
                        </p>
                        <NeumorphicButton variant="accent" size="sm" className="mt-2">
                          Resolve Conflict
                        </NeumorphicButton>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </NeumorphicCard>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;