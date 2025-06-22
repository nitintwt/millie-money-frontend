import React, { useState } from 'react';
import { Sparkle, MessageCircle, TrendingUp, Shield, Zap, ArrowRight, Check, Smartphone, BarChart3, Bell, ChevronDown, ChevronUp } from 'lucide-react';
function Landing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does AI understand my spending habits?",
      answer: "Millie uses advanced natural language processing to understand when you describe expenses in everyday language. Simply say 'I spent $25 on lunch at Subway' and our AI automatically categorizes it, learns your patterns, and provides personalized insights based on your unique spending behavior."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption (256-bit SSL) and follow the same security standards as major financial institutions. Your data is encrypted both in transit and at rest, and we never store your banking credentials. We're also SOC 2 compliant and regularly audited for security."
    },
    {
      question: "Do I need to connect my bank accounts?",
      answer: "No, connecting bank accounts is completely optional. You can use Millie by simply chatting about your expenses. However, connecting accounts allows for automatic transaction import and more comprehensive insights. All connections use read-only access through secure banking APIs."
    },
    {
      question: "What makes Millie different from other budget apps?",
      answer: "Unlike traditional budget apps that require manual categorization and data entry, Millie understands natural language. You can literally have a conversation about your spending. Our AI learns your habits, provides proactive insights, and helps you make better financial decisions without the tedious setup."
    },
    {
      question: "How accurate is the AI categorization?",
      answer: "Our AI achieves 95%+ accuracy in categorizing expenses and continuously improves as it learns your preferences. If it ever makes a mistake, you can easily correct it, and the AI will remember your preference for similar transactions in the future."
    },
    {
      question: "Can I set budgets and financial goals?",
      answer: "Yes! You can set budgets for different categories and financial goals like saving for vacation or paying off debt. Millie will track your progress, send smart alerts when you're approaching limits, and provide personalized recommendations to help you achieve your goals faster."
    },
    {
      question: "Is there a mobile app?",
      answer: "Not currently, But soon :)"
    },
    {
      question: "How much does Millie cost?",
      answer: "Free"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkle className="h-8 w-8 text-black" />
              <span className="text-xl font-semibold text-gray-900">Millie</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <button 
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Chat with AI to
              <span className="block text-gray-600">manage your money</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The first AI budget tracker that understands natural language. Simply tell it what you spent, and let AI handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 text-lg font-medium"
              >
                <span>Start tracking for free</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors text-lg">
                Watch demo →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powered by AI intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of personal finance with our advanced AI that learns your spending patterns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Chat</h3>
              <p className="text-gray-600 leading-relaxed">
                "I spent $25 on lunch at Subway" - that's all you need to say. Our AI understands and categorizes everything automatically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized insights about your spending habits, budget recommendations, and money-saving opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proactive Alerts</h3>
              <p className="text-gray-600 leading-relaxed">
                AI monitors your spending and sends smart alerts before you go over budget or when unusual patterns are detected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Categorization</h3>
              <p className="text-gray-600 leading-relaxed">
                No more manual tagging. AI automatically categorizes transactions and learns from your preferences over time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bank-Level Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Your financial data is encrypted and secured with the same technology used by major banks worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Set financial goals and let AI help you achieve them with personalized recommendations and progress tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple as having a conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform how you manage your money
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect & Chat</h3>
              <p className="text-gray-600 leading-relaxed">
                Link your accounts or simply start chatting about your expenses. "I bought coffee for $4.50 this morning."
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Learns & Organizes</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI automatically categorizes, tracks patterns, and builds your personalized financial profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Smart Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive personalized recommendations, budget alerts, and actionable insights to improve your financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why choose AI-powered budgeting?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Traditional budgeting apps make you work harder. We make budgeting effortless with AI that actually understands you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Save 10+ hours per month</h3>
                    <p className="text-gray-600">No more manual data entry or category tagging</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Improve financial habits</h3>
                    <p className="text-gray-600">AI-driven insights help you make better money decisions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Never miss important patterns</h3>
                    <p className="text-gray-600">Spot trends and anomalies you'd otherwise overlook</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Achieve financial goals faster</h3>
                    <p className="text-gray-600">Personalized recommendations accelerate your progress</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">AI</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">I noticed you spent 23% more on dining out this month. Would you like some money-saving suggestions?</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 justify-end">
                  <div className="bg-black rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-sm text-white">Yes, please help me save money</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">AI</span>
                  </div>
                  <div className="bg-gray-100 rounded-2xl px-4 py-2 max-w-xs">
                    <p className="text-sm text-gray-800">Here are 3 nearby restaurants with great reviews and lower prices. I can also help you set a dining budget goal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Millie and AI-powered budgeting
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="text-black font-medium hover:underline">
              Contact our support team →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your finances?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who've already discovered the power of AI-driven budgeting
          </p>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button 
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Start Free Trial
              </button>
              <p className="text-sm text-gray-500">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkle className="h-6 w-6 text-black" />
              <span className="text-lg font-semibold text-gray-900">Millie</span>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
            <p>&copy; 2025 Millie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing