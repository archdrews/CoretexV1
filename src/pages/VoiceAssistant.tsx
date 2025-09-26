import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  MessageSquare,
  Clock,
  Calendar,
  CheckCircle,
  Zap,
  Settings,
  Play,
  Pause,
  Send,
  User,
  Bot
} from 'lucide-react';

const VoiceAssistant: React.FC = () => {
  const { theme } = useTheme();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample conversation history
  const [conversations, setConversations] = useState([
    {
      id: 1,
      type: 'user' as const,
      content: 'Schedule a meeting with John tomorrow at 3 PM',
      timestamp: '2:45 PM',
      processed: true
    },
    {
      id: 2,
      type: 'assistant' as const,
      content: 'Perfect! I\'ve scheduled your meeting with John for tomorrow at 3:00 PM. I\'ve also sent him a calendar invitation. Would you like me to add any agenda items?',
      timestamp: '2:45 PM',
      action: 'meeting_created',
      details: {
        title: 'Meeting with John',
        date: 'Tomorrow',
        time: '3:00 PM',
        participants: ['John']
      }
    },
    {
      id: 3,
      type: 'user' as const,
      content: 'Add "Discuss Q4 budget" to the agenda',
      timestamp: '2:46 PM',
      processed: true
    },
    {
      id: 4,
      type: 'assistant' as const,
      content: 'Done! I\'ve added "Discuss Q4 budget" to the meeting agenda. The updated invitation has been sent to John.',
      timestamp: '2:46 PM',
      action: 'agenda_updated'
    }
  ]);

  // Quick commands
  const quickCommands = [
    'Schedule a meeting with...',
    'Add task: Complete project report',
    'Block time for focus work',
    'What\'s on my calendar today?',
    'Create a reminder for...',
    'Start focus session'
  ];

  // Voice recognition commands examples
  const commandExamples = [
    {
      category: 'Calendar',
      icon: <Calendar className="h-5 w-5" />,
      examples: [
        '"Schedule lunch with Sarah next Friday at noon"',
        '"Block 2 hours for deep work tomorrow morning"',
        '"What meetings do I have this week?"',
        '"Move my 3 PM meeting to 4 PM"'
      ]
    },
    {
      category: 'Tasks',
      icon: <CheckCircle className="h-5 w-5" />,
      examples: [
        '"Add task: Review quarterly budget"',
        '"Mark project alpha as completed"',
        '"Set priority high for client presentation"',
        '"Create checklist for team onboarding"'
      ]
    },
    {
      category: 'Focus',
      icon: <Zap className="h-5 w-5" />,
      examples: [
        '"Start 25-minute focus session"',
        '"Enable do not disturb until 5 PM"',
        '"Set focus block for project work"',
        '"Block distractions for the next hour"'
      ]
    }
  ];

  // Voice notes
  const [voiceNotes] = useState([
    {
      id: 1,
      content: 'Remember to follow up with client about contract renewal',
      timestamp: '1:30 PM',
      duration: '15s',
      converted: false
    },
    {
      id: 2,
      content: 'Ideas for team building activity: escape room, cooking class, or hiking trip',
      timestamp: '11:45 AM',
      duration: '23s',
      converted: true
    },
    {
      id: 3,
      content: 'Need to research new project management tools for the team',
      timestamp: 'Yesterday',
      duration: '18s',
      converted: false
    }
  ]);

  const handleMicToggle = () => {
    if (isListening) {
      setIsListening(false);
      // Simulate processing
      if (transcript) {
        setIsProcessing(true);
        setTimeout(() => {
          processVoiceInput(transcript);
          setTranscript('');
          setIsProcessing(false);
        }, 1500);
      }
    } else {
      setIsListening(true);
      setTranscript('');
    }
  };

  const processVoiceInput = (input: string) => {
    const userMessage = {
      id: conversations.length + 1,
      type: 'user' as const,
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      processed: true
    };

    // Simple AI response simulation
    let response = '';
    let action = undefined;
    let details = undefined;

    if (input.toLowerCase().includes('schedule') || input.toLowerCase().includes('meeting')) {
      response = 'I\'ve analyzed your request and found a perfect time slot. I\'ll create the meeting and send invitations to all participants.';
      action = 'meeting_created';
    } else if (input.toLowerCase().includes('task') || input.toLowerCase().includes('add')) {
      response = 'Task created successfully! I\'ve added it to your priority queue and categorized it appropriately.';
      action = 'task_created';
    } else if (input.toLowerCase().includes('focus') || input.toLowerCase().includes('block')) {
      response = 'Focus session ready! I\'ll block distractions and notify you when it\'s time for a break.';
      action = 'focus_started';
    } else {
      response = 'I\'ve processed your request and completed the necessary actions. Is there anything else you\'d like me to help with?';
    }

    const assistantMessage = {
      id: conversations.length + 2,
      type: 'assistant' as const,
      content: response,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action,
      details
    };

    setConversations(prev => [...prev, userMessage, assistantMessage]);
  };

  const sendQuickCommand = (command: string) => {
    setTranscript(command);
    setIsProcessing(true);
    setTimeout(() => {
      processVoiceInput(command);
      setTranscript('');
      setIsProcessing(false);
    }, 1000);
  };

  // Simulate real-time transcription
  useEffect(() => {
    if (isListening) {
      const phrases = [
        'Schedule a meeting...',
        'Schedule a meeting with the team...',
        'Schedule a meeting with the team for next week...',
        'Schedule a meeting with the team for next week at 2 PM'
      ];
      
      let currentPhrase = 0;
      const interval = setInterval(() => {
        if (currentPhrase < phrases.length) {
          setTranscript(phrases[currentPhrase]);
          currentPhrase++;
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isListening]);

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">VoiceFlow Assistant™</h1>
          <p className="text-xl opacity-80">Voice-to-text productivity commands and hands-free task management</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Voice Interface */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Voice Control Panel */}
            <NeumorphicCard className="p-8 text-center">
              <div className="mb-8">
                <button
                  onClick={handleMicToggle}
                  disabled={isProcessing}
                  className={`inline-flex items-center justify-center w-32 h-32 rounded-full text-white transition-all duration-300 ${
                    isListening 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse shadow-lg shadow-red-500/50' 
                      : isProcessing
                        ? 'bg-yellow-500 animate-spin'
                        : 'bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl'
                  } ${isProcessing ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {isProcessing ? (
                    <div className="flex flex-col items-center">
                      <Zap className="h-8 w-8 mb-1" />
                      <span className="text-xs">Processing</span>
                    </div>
                  ) : isListening ? (
                    <div className="flex flex-col items-center">
                      <MicOff className="h-8 w-8 mb-1" />
                      <span className="text-xs">Stop</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Mic className="h-8 w-8 mb-1" />
                      <span className="text-xs">Speak</span>
                    </div>
                  )}
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  {isListening ? 'Listening...' : isProcessing ? 'Processing...' : 'Ready to listen'}
                </h3>
                <p className="opacity-70">
                  {isListening 
                    ? 'Speak your command clearly' 
                    : isProcessing 
                      ? 'Analyzing your request'
                      : 'Tap the microphone and speak your command'
                  }
                </p>
              </div>

              {/* Live Transcript */}
              {(transcript || isListening) && (
                <NeumorphicCard className={`p-4 max-w-md mx-auto ${
                  theme === 'light' ? 'bg-blue-50' : 'bg-blue-900/20'
                }`}>
                  <p className="text-blue-700 dark:text-blue-300 font-medium">
                    {transcript || (isListening ? 'Listening for your voice...' : '')}
                  </p>
                </NeumorphicCard>
              )}
            </NeumorphicCard>

            {/* Quick Commands */}
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-6">Quick Commands</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {quickCommands.map((command, index) => (
                  <button
                    key={index}
                    onClick={() => sendQuickCommand(command)}
                    disabled={isListening || isProcessing}
                    className={`p-4 text-left rounded-2xl transition-all ${
                      isListening || isProcessing
                        ? 'opacity-50 cursor-not-allowed'
                        : theme === 'light'
                          ? 'bg-white/50 hover:bg-[#BFECFF]/50 hover:scale-105'
                          : 'bg-gray-800/50 hover:bg-[#80CFE8]/30 hover:scale-105'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{command}</span>
                      <Send className="h-4 w-4 opacity-60" />
                    </div>
                  </button>
                ))}
              </div>
            </NeumorphicCard>

            {/* Conversation History */}
            <NeumorphicCard className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Recent Conversations</h3>
                <NeumorphicButton variant="secondary" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Clear History
                </NeumorphicButton>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {conversations.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-lg ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}>
                      <div className={`p-2 rounded-full ${
                        message.type === 'user'
                          ? theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                          : theme === 'light' ? 'bg-[#CDC1FF]' : 'bg-[#A99BEF]'
                      }`}>
                        {message.type === 'user' ? 
                          <User className="h-4 w-4" /> : 
                          <Bot className="h-4 w-4" />
                        }
                      </div>
                      
                      <div className={`p-4 rounded-2xl ${
                        message.type === 'user'
                          ? theme === 'light' 
                            ? 'bg-[#BFECFF] text-gray-800'
                            : 'bg-[#80CFE8] text-gray-900'
                          : theme === 'light'
                            ? 'bg-white'
                            : 'bg-gray-800'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        
                        {message.action && (
                          <div className={`mt-3 p-2 rounded-2xl text-xs ${
                            theme === 'light' ? 'bg-green-50 text-green-700' : 'bg-green-900/20 text-green-300'
                          }`}>
                            <CheckCircle className="h-3 w-3 inline mr-1" />
                            Action completed: {message.action.replace('_', ' ')}
                          </div>
                        )}
                        
                        <p className="text-xs opacity-60 mt-2">{message.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Voice Command Examples */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">Voice Command Examples</h3>
              <div className="space-y-6">
                {commandExamples.map((category, index) => (
                  <div key={index}>
                    <h4 className="flex items-center font-medium text-sm mb-3">
                      <span className={`p-2 rounded-2xl mr-2 ${
                        theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                      }`}>
                        {category.icon}
                      </span>
                      {category.category}
                    </h4>
                    <div className="space-y-2 text-xs opacity-80 ml-8">
                      {category.examples.map((example, i) => (
                        <p key={i}>{example}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </NeumorphicCard>

            {/* Voice Notes */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <Volume2 className="inline h-5 w-5 mr-2" />
                Quick Voice Notes
              </h3>
              <div className="space-y-3">
                {voiceNotes.map((note) => (
                  <div
                    key={note.id}
                    className="p-3 rounded-2xl bg-white/50 dark:bg-gray-800/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm flex-1">{note.content}</p>
                      <div className="flex space-x-1">
                        <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                          <Play className="h-3 w-3" />
                        </button>
                        {!note.converted && (
                          <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                            <CheckCircle className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs opacity-60">
                      <span>{note.timestamp}</span>
                      <span>{note.duration}</span>
                    </div>
                    {note.converted && (
                      <div className="mt-2">
                        <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded-full">
                          Converted to task
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <NeumorphicButton variant="secondary" size="sm" className="w-full mt-4">
                <Mic className="h-4 w-4 mr-2" />
                New Voice Note
              </NeumorphicButton>
            </NeumorphicCard>

            {/* Settings */}
            <NeumorphicCard className="p-6">
              <h3 className="text-lg font-bold mb-4">
                <Settings className="inline h-5 w-5 mr-2" />
                Voice Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Voice activation</span>
                  <button className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                  }`}>
                    <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-transcribe notes</span>
                  <button className={`w-12 h-6 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                  }`}>
                    <div className="w-5 h-5 bg-white rounded-full ml-6 shadow-sm"></div>
                  </button>
                </div>

                <div>
                  <label className="text-sm block mb-2">Language</label>
                  <select className={`w-full p-2 rounded-2xl text-sm ${
                    theme === 'light' 
                      ? 'bg-white border border-gray-300' 
                      : 'bg-gray-800 border border-gray-600'
                  }`}>
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </NeumorphicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;