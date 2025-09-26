import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Brain, 
  Plus, 
  Clock, 
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  Timer,
  Archive
} from 'lucide-react';

const Prioritize: React.FC = () => {
  const { theme } = useTheme();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Q4 financial report',
      description: 'Finalize numbers and prepare presentation for board meeting',
      quadrant: 'urgent-important',
      priority: 'high',
      estimatedTime: '4h',
      dueDate: 'Today',
      aiSuggestion: true
    },
    {
      id: 2,
      title: 'Schedule annual team retreat',
      description: 'Research venues and coordinate with team for next quarter',
      quadrant: 'important-not-urgent',
      priority: 'medium',
      estimatedTime: '2h',
      dueDate: 'Next week',
      aiSuggestion: false
    },
    {
      id: 3,
      title: 'Respond to client emails',
      description: 'Follow up on pending proposals and questions',
      quadrant: 'urgent-not-important',
      priority: 'low',
      estimatedTime: '1h',
      dueDate: 'Today',
      aiSuggestion: false
    },
    {
      id: 4,
      title: 'Update LinkedIn profile',
      description: 'Add recent achievements and skills',
      quadrant: 'neither',
      priority: 'low',
      estimatedTime: '30min',
      dueDate: 'Someday',
      aiSuggestion: false
    },
    {
      id: 5,
      title: 'Review team performance metrics',
      description: 'Analyze productivity data and identify improvement areas',
      quadrant: 'important-not-urgent',
      priority: 'high',
      estimatedTime: '3h',
      dueDate: 'This week',
      aiSuggestion: true
    },
    {
      id: 6,
      title: 'Organize desk and office space',
      description: 'Declutter and reorganize workspace for better productivity',
      quadrant: 'neither',
      priority: 'low',
      estimatedTime: '1h',
      dueDate: 'Someday',
      aiSuggestion: false
    }
  ]);

  const quadrants = [
    {
      id: 'urgent-important',
      title: 'Urgent & Important',
      subtitle: 'Do First',
      icon: <AlertCircle className="h-6 w-6" />,
      color: theme === 'light' ? 'bg-red-50 border-red-200' : 'bg-red-900/20 border-red-800',
      textColor: 'text-red-700 dark:text-red-300'
    },
    {
      id: 'important-not-urgent',
      title: 'Important, Not Urgent',
      subtitle: 'Schedule',
      icon: <Target className="h-6 w-6" />,
      color: theme === 'light' ? 'bg-green-50 border-green-200' : 'bg-green-900/20 border-green-800',
      textColor: 'text-green-700 dark:text-green-300'
    },
    {
      id: 'urgent-not-important',
      title: 'Urgent, Not Important',
      subtitle: 'Delegate',
      icon: <ArrowRight className="h-6 w-6" />,
      color: theme === 'light' ? 'bg-yellow-50 border-yellow-200' : 'bg-yellow-900/20 border-yellow-800',
      textColor: 'text-yellow-700 dark:text-yellow-300'
    },
    {
      id: 'neither',
      title: 'Neither Urgent nor Important',
      subtitle: 'Eliminate',
      icon: <Archive className="h-6 w-6" />,
      color: theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-gray-900/20 border-gray-800',
      textColor: 'text-gray-600 dark:text-gray-400'
    }
  ];

  const getTasksByQuadrant = (quadrantId: string) => {
    return tasks.filter(task => task.quadrant === quadrantId);
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

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Smart Prioritize™</h1>
            <p className="text-xl opacity-80">AI-powered Eisenhower Matrix for intelligent task prioritization</p>
          </div>
          
          <div className="flex gap-3">
            <NeumorphicButton variant="primary" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" size="sm">
              <Brain className="h-4 w-4 mr-2" />
              AI Suggestions
            </NeumorphicButton>
          </div>
        </div>

        {/* AI Insights Bar */}
        <NeumorphicCard className="p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-2xl ${
              theme === 'light' ? 'bg-[#CDC1FF]' : 'bg-[#A99BEF]'
            }`}>
              <Brain className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">AI Insights & Suggestions</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-blue-700 dark:text-blue-300">Focus Recommendation</span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400">Start with "Complete Q4 financial report" - high impact, due today</p>
                </div>
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-orange-50' : 'bg-orange-900/20'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <Timer className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    <span className="font-medium text-orange-700 dark:text-orange-300">Time Optimization</span>
                  </div>
                  <p className="text-orange-600 dark:text-orange-400">Block 9-11 AM for deep work on important tasks</p>
                </div>
                <div className={`p-3 rounded-2xl ${
                  theme === 'light' ? 'bg-green-50' : 'bg-green-900/20'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-green-700 dark:text-green-300">Progress</span>
                  </div>
                  <p className="text-green-600 dark:text-green-400">2 high-priority tasks moved to "Do First" quadrant</p>
                </div>
              </div>
            </div>
          </div>
        </NeumorphicCard>

        {/* Eisenhower Matrix */}
        <div className="grid lg:grid-cols-2 gap-8">
          {quadrants.map((quadrant) => (
            <NeumorphicCard key={quadrant.id} className={`p-6 border-2 ${quadrant.color}`}>
              
              {/* Quadrant Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-2xl ${quadrant.textColor}`}>
                    {quadrant.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${quadrant.textColor}`}>
                      {quadrant.title}
                    </h3>
                    <p className={`text-sm opacity-70 ${quadrant.textColor}`}>
                      {quadrant.subtitle}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  theme === 'light' ? 'bg-white/80' : 'bg-black/20'
                } ${quadrant.textColor}`}>
                  {getTasksByQuadrant(quadrant.id).length} tasks
                </span>
              </div>

              {/* Tasks in Quadrant */}
              <div className="space-y-4">
                {getTasksByQuadrant(quadrant.id).map((task) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-2xl transition-all hover:scale-105 cursor-pointer ${
                      theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-bold">{task.title}</h4>
                          {task.aiSuggestion && (
                            <div className={`px-2 py-1 rounded-full text-xs ${
                              theme === 'light' ? 'bg-[#CDC1FF] text-gray-800' : 'bg-[#A99BEF] text-gray-900'
                            }`}>
                              AI
                            </div>
                          )}
                        </div>
                        <p className="text-sm opacity-70 mb-3">{task.description}</p>
                        
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className={`px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                            {task.priority} priority
                          </span>
                          <span className={`px-2 py-1 rounded-full ${
                            theme === 'light' ? 'bg-blue-100 text-blue-800' : 'bg-blue-900/30 text-blue-300'
                          }`}>
                            <Clock className="h-3 w-3 inline mr-1" />
                            {task.estimatedTime}
                          </span>
                          <span className={`px-2 py-1 rounded-full ${
                            theme === 'light' ? 'bg-purple-100 text-purple-800' : 'bg-purple-900/30 text-purple-300'
                          }`}>
                            Due: {task.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex space-x-2">
                        <button className={`p-2 rounded-2xl text-xs hover:opacity-80 ${
                          theme === 'light' ? 'bg-gray-100 hover:bg-gray-200' : 'bg-gray-700 hover:bg-gray-600'
                        }`}>
                          Edit
                        </button>
                        <button className={`p-2 rounded-2xl text-xs hover:opacity-80 ${
                          theme === 'light' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-green-900/30 text-green-300 hover:bg-green-800/30'
                        }`}>
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      </div>
                      <button className="text-xs opacity-60 hover:opacity-80">Move to...</button>
                    </div>
                  </div>
                ))}

                {/* Add Task to Quadrant */}
                <button className={`w-full p-4 border-2 border-dashed rounded-2xl text-center transition-colors hover:border-solid ${
                  theme === 'light' 
                    ? 'border-gray-300 hover:border-gray-400 hover:bg-gray-50' 
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800/50'
                }`}>
                  <Plus className="h-5 w-5 mx-auto mb-1 opacity-60" />
                  <span className="text-sm opacity-60">Add task to {quadrant.subtitle}</span>
                </button>
              </div>
            </NeumorphicCard>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <NeumorphicCard hover className="p-6 text-center cursor-pointer">
            <Brain className="h-8 w-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold mb-2">Auto-Categorize</h3>
            <p className="text-sm opacity-70">Let AI suggest the best quadrant for new tasks</p>
          </NeumorphicCard>
          
          <NeumorphicCard hover className="p-6 text-center cursor-pointer">
            <Target className="h-8 w-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
            <h3 className="font-bold mb-2">Focus Session</h3>
            <p className="text-sm opacity-70">Start a timed focus block on high-priority tasks</p>
          </NeumorphicCard>
          
          <NeumorphicCard hover className="p-6 text-center cursor-pointer">
            <CheckCircle className="h-8 w-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
            <h3 className="font-bold mb-2">Bulk Actions</h3>
            <p className="text-sm opacity-70">Complete, move, or delete multiple tasks at once</p>
          </NeumorphicCard>
        </div>
      </div>
    </div>
  );
};

export default Prioritize;