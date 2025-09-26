import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { Calendar, Brain, Target, Shield, Users, Clock, ChevronRight, Star, Check } from 'lucide-react';

const LandingPage: React.FC = () => {
  const { theme } = useTheme();

  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "One Place for Everything",
      description: "Unify your tasks, calendar, and priorities in a single, intelligent workspace."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Smarter Scheduling",
      description: "AI-powered conflict detection and automatic priority suggestions."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Deep Focus",
      description: "Distraction blocking and focused work sessions with analytics."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Confidence & Clarity",
      description: "Always know what's next with intelligent task prioritization."
    }
  ];

  const steps = [
    {
      title: "Seamless Setup",
      description: "Connect your calendars and import tasks in under 5 minutes."
    },
    {
      title: "AI-Powered Clarity",
      description: "Our AI organizes and prioritizes everything automatically."
    },
    {
      title: "Proactive Partner",
      description: "Get suggestions, conflict alerts, and focus time recommendations."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      content: "Coretex reduced my app-switching by 80%. I finally have clarity on my priorities.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Executive & Parent",
      content: "Managing work and family schedules used to be chaos. Now it's seamless.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Healthcare Consultant",
      content: "The conflict detection saved me from double-booking three times this week alone.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How secure is my data with Coretex?",
      answer: "We use enterprise-grade encryption and never sell your personal data. Your privacy is our priority."
    },
    {
      question: "Which calendar apps does Coretex integrate with?",
      answer: "Google Calendar, Outlook, Apple Calendar, and most major calendar platforms."
    },
    {
      question: "Does Coretex have voice control features?",
      answer: "Yes! Our VoiceFlow Assistant lets you create tasks and schedule events hands-free."
    },
    {
      question: "Can I use dark mode?",
      answer: "Absolutely. Coretex supports both light and dark themes for comfortable use any time of day."
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master Your Time.<br />
            <span className={`bg-gradient-to-r ${
              theme === 'light' 
                ? 'from-[#059669] via-[#7C3AED] to-[#DC2626]' 
                : 'from-[#10B981] via-[#8B5CF6] to-[#EF4444]'
            } bg-clip-text text-transparent`}>
              Simplify Your Life.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-80">
            The AI-powered productivity hub that eliminates app fatigue and brings clarity to corporate professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <NeumorphicButton size="lg" variant="primary">
                Start Free Trial
              </NeumorphicButton>
            </Link>
            <Link to="/about">
              <NeumorphicButton size="lg" variant="primary">
                See How It Works
              </NeumorphicButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Everything You Need in One Place
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <NeumorphicCard key={index} hover className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  theme === 'light' ? 'bg-[#FEF3C7]' : 'bg-[#FCD34D]'
                }`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <NeumorphicCard key={index} className="p-8 text-center relative">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-xl font-bold mb-6 ${
                  theme === 'light' ? 'bg-[#E879F9] text-white' : 'bg-[#A855F7] text-white'
                }`}>
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="opacity-80 text-lg">{step.description}</p>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 opacity-30" />
                )}
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Loved by Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <NeumorphicCard key={index} className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="opacity-70">{testimonial.role}</p>
                </div>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <NeumorphicCard key={index} className="p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="opacity-80">{faq.answer}</p>
              </NeumorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <NeumorphicCard className="p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Master Your Productivity?
            </h2>
            <p className="text-xl mb-8 opacity-80">
              Join thousands of professionals who've simplified their workflow with Coretex.
            </p>
            <Link to="/dashboard">
              <NeumorphicButton size="lg" variant="primary">
                Start Your Free Trial Today
              </NeumorphicButton>
            </Link>
          </NeumorphicCard>
        </div>
      </section>

      {/* Footer */}
      <footer className={`px-4 py-12 border-t ${
        theme === 'light' ? 'border-[#BFECFF]/30' : 'border-[#80CFE8]/20'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 opacity-80">
                <li><Link to="/dashboard" className="hover:opacity-100">Dashboard</Link></li>
                <li><Link to="/calendar" className="hover:opacity-100">Calendar</Link></li>
                <li><Link to="/focus" className="hover:opacity-100">Focus Mode</Link></li>
                <li><Link to="/pricing" className="hover:opacity-100">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 opacity-80">
                <li><Link to="/about" className="hover:opacity-100">About</Link></li>
                <li><a href="#" className="hover:opacity-100">Contact</a></li>
                <li><a href="#" className="hover:opacity-100">Careers</a></li>
                <li><a href="#" className="hover:opacity-100">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-100">Security</a></li>
                <li><a href="#" className="hover:opacity-100">GDPR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#" className="hover:opacity-100">Twitter</a></li>
                <li><a href="#" className="hover:opacity-100">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-100">YouTube</a></li>
                <li><a href="#" className="hover:opacity-100">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="opacity-60">© 2025 Coretex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;