import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { theme } = useTheme();

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Clarity Over Chaos",
      description: "We believe productivity shouldn't come at the cost of peace of mind. Our goal is to bring clarity to the chaos of modern work life."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human-Centered AI",
      description: "Technology should adapt to you, not the other way around. We design AI that enhances human capabilities rather than replacing them."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Continuous Innovation",
      description: "We're constantly learning from our users and iterating to create better solutions for the evolving workplace."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy First",
      description: "Your data is yours. We build with privacy by design and never compromise on security or data ownership."
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Coretex
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to eliminate app fatigue and restore clarity to the lives of busy professionals. 
            Coretex isn't just another productivity tool—it's your intelligent productivity partner.
          </p>
        </section>

        {/* Mission Section */}
        <section>
          <NeumorphicCard className="p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-90 mb-8">
                In today's hyper-connected world, corporate professionals are drowning in a sea of apps, notifications, 
                and competing priorities. The average knowledge worker switches between 10+ applications daily, 
                losing precious mental energy and focus.
              </p>
              <p className="text-xl leading-relaxed opacity-90">
                Coretex exists to change that. We've created an AI-powered productivity hub that consolidates 
                your essential tools, intelligently prioritizes your tasks, and gives you back control over your time and attention.
              </p>
            </div>
          </NeumorphicCard>
        </section>

        {/* Target Audience */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Built for Modern Professionals</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Coretex is designed specifically for corporate professionals who juggle complex work-life demands 
              and need more than just another task manager.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Busy Executives",
                description: "Managing multiple teams, stakeholder meetings, and strategic initiatives while maintaining work-life balance.",
                image: "👔"
              },
              {
                title: "Project Managers",
                description: "Coordinating complex projects across departments, tracking deliverables, and managing competing deadlines.",
                image: "📊"
              },
              {
                title: "Working Parents",
                description: "Balancing professional responsibilities with family commitments and personal time management.",
                image: "👨‍👩‍👧‍👦"
              },
              {
                title: "Consultants",
                description: "Managing multiple clients, travel schedules, and project deliverables across different time zones.",
                image: "💼"
              },
              {
                title: "Sales Leaders",
                description: "Tracking prospects, managing team performance, and balancing customer relationships with internal meetings.",
                image: "📈"
              },
              {
                title: "Healthcare Professionals",
                description: "Managing patient schedules, administrative tasks, and continuing education while maintaining work-life balance.",
                image: "🏥"
              }
            ].map((persona, index) => (
              <NeumorphicCard key={index} hover className="p-6 text-center">
                <div className="text-4xl mb-4">{persona.image}</div>
                <h3 className="text-xl font-bold mb-3">{persona.title}</h3>
                <p className="opacity-80">{persona.description}</p>
              </NeumorphicCard>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              These core principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <NeumorphicCard key={index} hover className="p-8">
                <div className={`inline-flex p-3 rounded-2xl mb-6 ${
                  theme === 'light' ? 'bg-[#BFECFF]' : 'bg-[#80CFE8]'
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="opacity-80 text-lg">{value.description}</p>
              </NeumorphicCard>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section>
          <NeumorphicCard className="p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose prose-xl max-w-none opacity-90">
                <p className="mb-6">
                  Coretex was born from a simple observation: despite having more productivity tools than ever before, 
                  professionals are more overwhelmed than ever. Our founder, after switching between 15+ different apps 
                  in a single morning, realized that the problem wasn't a lack of tools—it was too many of them.
                </p>
                <p className="mb-6">
                  We spent months interviewing hundreds of corporate professionals, from Fortune 500 executives to 
                  startup founders, understanding their daily workflows and pain points. What we discovered was 
                  universal: everyone was drowning in app fatigue, context switching, and decision paralysis.
                </p>
                <p className="mb-6">
                  That's when we set out to build something different. Not another productivity app, but a productivity 
                  hub that brings everything together intelligently. Using advanced AI, we created a system that doesn't 
                  just store your tasks and events—it understands them, prioritizes them, and helps you make better 
                  decisions about your time.
                </p>
                <p>
                  Today, thousands of professionals use Coretex to reclaim their time, reduce stress, and focus on what 
                  matters most. We're just getting started.
                </p>
              </div>
            </div>
          </NeumorphicCard>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <NeumorphicCard className="p-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 opacity-80">
              Join the productivity revolution and see why professionals choose Coretex to transform their workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeumorphicButton size="lg" variant="primary">
                Start Your Free Trial
              </NeumorphicButton>
              <NeumorphicButton size="lg" variant="secondary">
                Schedule a Demo
              </NeumorphicButton>
            </div>
          </NeumorphicCard>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;