import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  Users, 
  Target,
  ArrowRight,
  ArrowLeft,
  Zap,
  Shield,
  Brain
} from 'lucide-react';

const OnboardingPage: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      title: "Welcome to Coretex!",
      subtitle: "Let's get you set up in under 5 minutes",
      icon: <Zap className="h-8 w-8" />,
      content: (
        <div className="text-center">
          <div className="mb-8">
            <div className={`inline-flex p-6 rounded-full mb-6 ${
              theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
            }`}>
              <Zap className="h-12 w-12 text-gray-800" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Your Unified Life Hub™</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Coretex brings together your calendar, tasks, and focus time into one intelligent workspace. 
              Let's customize it to your workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-bold">Calendar Sync</h3>
              <p className="text-sm opacity-70">Connect all your calendars</p>
            </div>
            <div className="text-center">
              <Brain className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-bold">AI Setup</h3>
              <p className="text-sm opacity-70">Configure smart suggestions</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-bold">Preferences</h3>
              <p className="text-sm opacity-70">Customize your experience</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Connect Your Calendars",
      subtitle: "Import events from all your calendar sources",
      icon: <Calendar className="h-8 w-8" />,
      content: (
        <div>
          <p className="text-lg mb-8 opacity-80">
            Connect your existing calendars to see everything in one place. We support all major platforms.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              { name: 'Google Calendar', connected: false, users: '2.6B users' },
              { name: 'Microsoft Outlook', connected: true, users: '400M users' },
              { name: 'Apple iCloud', connected: false, users: '2B users' },
              { name: 'Exchange Server', connected: false, users: 'Enterprise' }
            ].map((calendar, index) => (
              <div key={index} className={`flex items-center justify-between p-4 rounded-2xl ${
                theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    calendar.connected ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                  <div>
                    <p className="font-medium">{calendar.name}</p>
                    <p className="text-sm opacity-60">{calendar.users}</p>
                  </div>
                </div>
                <NeumorphicButton 
                  variant={calendar.connected ? "secondary" : "primary"} 
                  size="sm"
                >
                  {calendar.connected ? "Connected" : "Connect"}
                </NeumorphicButton>
              </div>
            ))}
          </div>
          
          <div className={`p-4 rounded-2xl ${
            theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
          }`}>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <Shield className="h-4 w-4 inline mr-2" />
              Your calendar data is encrypted and never shared. You can disconnect anytime.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Set Your Working Hours",
      subtitle: "Help us understand your schedule preferences",
      icon: <Clock className="h-8 w-8" />,
      content: (
        <div>
          <p className="text-lg mb-8 opacity-80">
            Define your typical working hours and focus time preferences for smarter scheduling.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4">Working Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Start Time</span>
                  <select className={`px-4 py-2 rounded-2xl ${
                    theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span>End Time</span>
                  <select className={`px-4 py-2 rounded-2xl ${
                    theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span>Time Zone</span>
                  <select className={`px-4 py-2 rounded-2xl ${
                    theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>Pacific Time (PT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Focus Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Best Focus Time</span>
                  <select className={`px-4 py-2 rounded-2xl ${
                    theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>Morning (8-12 PM)</option>
                    <option>Afternoon (12-5 PM)</option>
                    <option>Evening (5-9 PM)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span>Default Focus Duration</span>
                  <select className={`px-4 py-2 rounded-2xl ${
                    theme === 'light' ? 'bg-white border border-gray-300' : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>25 minutes</option>
                    <option>45 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span>Break Reminders</span>
                  <button className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                  }`}>
                    <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Assistant Setup",
      subtitle: "Configure your intelligent productivity partner",
      icon: <Brain className="h-8 w-8" />,
      content: (
        <div>
          <p className="text-lg mb-8 opacity-80">
            Customize how Coretex's AI helps you stay organized and focused.
          </p>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${
              theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold">Smart Task Prioritization</h3>
                  <p className="text-sm opacity-70">AI suggests priority levels based on deadlines and context</p>
                </div>
                <button className={`w-12 h-6 rounded-full transition-colors ${
                  theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                }`}>
                  <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                </button>
              </div>
            </div>
            
            <div className={`p-6 rounded-2xl ${
              theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold">Conflict Detection</h3>
                  <p className="text-sm opacity-70">Automatic alerts for scheduling conflicts and overlaps</p>
                </div>
                <button className={`w-12 h-6 rounded-full transition-colors ${
                  theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                }`}>
                  <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                </button>
              </div>
            </div>
            
            <div className={`p-6 rounded-2xl ${
              theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold">Daily Insights & Suggestions</h3>
                  <p className="text-sm opacity-70">Personalized recommendations for optimal productivity</p>
                </div>
                <button className={`w-12 h-6 rounded-full transition-colors ${
                  theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                }`}>
                  <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                </button>
              </div>
            </div>
            
            <div className={`p-6 rounded-2xl ${
              theme === 'light' ? 'bg-white/50' : 'bg-gray-800/50'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold">Voice Command Recognition</h3>
                  <p className="text-sm opacity-70">Create tasks and events using natural speech</p>
                </div>
                <button className={`w-12 h-6 rounded-full transition-colors ${
                  theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                }`}>
                  <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "You're All Set!",
      subtitle: "Welcome to your new productivity command center",
      icon: <CheckCircle className="h-8 w-8" />,
      content: (
        <div className="text-center">
          <div className="mb-8">
            <div className={`inline-flex p-6 rounded-full mb-6 ${
              theme === 'light' ? 'bg-green-100' : 'bg-green-900/20'
            }`}>
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Setup Complete!</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              Your Coretex workspace is ready. We've loaded some sample data to help you explore the features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <NeumorphicCard hover className="p-6 cursor-pointer">
              <Target className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-bold mb-2">Take the Interactive Tour</h3>
              <p className="text-sm opacity-70">Learn the key features with guided walkthroughs</p>
            </NeumorphicCard>
            
            <NeumorphicCard hover className="p-6 cursor-pointer">
              <Users className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-bold mb-2">Invite Your Team</h3>
              <p className="text-sm opacity-70">Collaborate with colleagues on shared projects</p>
            </NeumorphicCard>
          </div>
          
          <div className={`p-6 rounded-2xl mb-8 ${
            theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
          }`}>
            <h3 className="font-bold mb-2 text-blue-700 dark:text-blue-300">Pro Tip</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Start by adding your most important tasks for this week. Coretex will learn your patterns and suggest optimal scheduling.
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeOnboarding = () => {
    navigate('/dashboard');
  };

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">SmoothStart Onboarding™</h1>
            <span className="text-sm opacity-70">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          
          <div className={`w-full h-2 rounded-full ${
            theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
          }`}>
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
              }`}
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          
          <div className="flex justify-between mt-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  index <= currentStep
                    ? theme === 'light'
                      ? 'bg-[#BFECFF] text-gray-800'
                      : 'bg-[#80CFE8] text-gray-900'
                    : theme === 'light'
                      ? 'bg-gray-200 text-gray-600'
                      : 'bg-gray-700 text-gray-400'
                }`}
              >
                {completedSteps.includes(index) ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <NeumorphicCard className="p-8 mb-8">
          <div className="text-center mb-8">
            <div className={`inline-flex p-4 rounded-2xl mb-4 ${
              theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
            }`}>
              {steps[currentStep].icon}
            </div>
            <h2 className="text-3xl font-bold mb-2">{steps[currentStep].title}</h2>
            <p className="text-xl opacity-80">{steps[currentStep].subtitle}</p>
          </div>
          
          {steps[currentStep].content}
        </NeumorphicCard>

        {/* Navigation */}
        <div className="flex justify-between">
          <NeumorphicButton
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 0}
            className={currentStep === 0 ? 'opacity-50' : ''}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous
          </NeumorphicButton>
          
          {currentStep === steps.length - 1 ? (
            <NeumorphicButton variant="primary" onClick={completeOnboarding} size="lg">
              Enter Dashboard
              <ArrowRight className="h-5 w-5 ml-2" />
            </NeumorphicButton>
          ) : (
            <NeumorphicButton variant="primary" onClick={nextStep}>
              Continue
              <ArrowRight className="h-5 w-5 ml-2" />
            </NeumorphicButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;