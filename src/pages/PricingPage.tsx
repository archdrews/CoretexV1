import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import NeumorphicCard from '../components/NeumorphicCard';
import NeumorphicButton from '../components/NeumorphicButton';
import { Check, Star } from 'lucide-react';

const PricingPage: React.FC = () => {
  const { theme } = useTheme();

  const plans = [
    {
      name: "Individual Plan",
      price: "$12",
      period: "per month",
      description: "Perfect for personal productivity",
      features: [
        "Core productivity features",
        "Personal analytics dashboard",
        "Up to 3 calendar integrations",
        "VoiceFlow Assistant",
        "FocusGuard Mode",
        "Smart task prioritization",
        "Email support"
      ],
      popular: false,
      variant: "primary" as const
    },
    {
      name: "Team Plan",
      price: "$8",
      period: "per user/month",
      billing: "Minimum 3 users",
      description: "Collaborate and stay aligned",
      features: [
        "Everything in Individual",
        "Team collaboration features",
        "Shared calendars & tasks",
        "Team analytics dashboard",
        "Admin controls",
        "Unlimited calendar integrations",
        "Priority email support",
        "Team meeting optimization"
      ],
      popular: true,
      variant: "secondary" as const
    },
    {
      name: "Enterprise Plan",
      price: "$15",
      period: "per user/month",
      billing: "Minimum 10 users",
      description: "Advanced features for large teams",
      features: [
        "Everything in Team Plan",
        "Advanced analytics & reporting",
        "Custom integrations",
        "SSO & advanced security",
        "Dedicated account manager",
        "Priority phone support",
        "Custom training sessions",
        "SLA guarantee"
      ],
      popular: false,
      variant: "accent" as const
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
            Choose the perfect plan for your productivity needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <NeumorphicCard key={index} className={`relative p-8 ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold ${
                  theme === 'light' ? 'bg-[#FFCCEA] text-gray-800' : 'bg-[#EBAFCC] text-gray-900'
                }`}>
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg opacity-70 ml-1">{plan.period}</span>
                </div>
                {plan.billing && (
                  <p className="text-sm opacity-60 mb-2">{plan.billing}</p>
                )}
                <p className="opacity-80">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <NeumorphicButton 
                variant={plan.variant} 
                className="w-full"
                size="lg"
              >
                Start Free Trial
              </NeumorphicButton>
            </NeumorphicCard>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-3">Can I change my plan anytime?</h3>
              <p className="opacity-80">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </NeumorphicCard>

            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-3">Is there a free trial?</h3>
              <p className="opacity-80">All plans come with a 14-day free trial. No credit card required to start.</p>
            </NeumorphicCard>

            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="opacity-80">We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.</p>
            </NeumorphicCard>

            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-3">Can I cancel anytime?</h3>
              <p className="opacity-80">Yes, you can cancel your subscription at any time. Your data remains accessible until the end of your billing period.</p>
            </NeumorphicCard>

            <NeumorphicCard className="p-6">
              <h3 className="text-xl font-bold mb-3">Do you offer discounts for nonprofits or education?</h3>
              <p className="opacity-80">Yes, we offer special pricing for educational institutions and nonprofit organizations. Contact us for details.</p>
            </NeumorphicCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <NeumorphicCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-80">
              Join thousands of professionals who have transformed their productivity with Coretex.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeumorphicButton size="lg" variant="primary">
                Start Free Trial
              </NeumorphicButton>
              <NeumorphicButton size="lg" variant="secondary">
                Contact Sales
              </NeumorphicButton>
            </div>
          </NeumorphicCard>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;