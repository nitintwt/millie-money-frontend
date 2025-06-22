import React, { useState } from 'react';
import { ArrowLeft, Send, TrendingUp, TrendingDown, User, Sparkle } from 'lucide-react';

const Dashboard= ({ onBack }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI budget assistant. You can tell me about your expenses like 'I spent $25 on lunch at Subway' and I'll track everything for you.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage= {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "Got it! I've recorded your expense and categorized it automatically. Your spending is looking good today!",
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">My Accounts</h1>
              <p className="text-sm text-gray-500">Track your expenses with AI</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Spending Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Spent Today */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Spent Today</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">11%</span>
                <TrendingDown className="h-3 w-3 text-green-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900">$64.30</p>
              <p className="text-sm text-gray-500">Yesterday $72.50</p>
            </div>
          </div>

          {/* Spent This Week */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Spent This Week</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-red-600 font-medium">18%</span>
                <TrendingUp className="h-3 w-3 text-red-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900">$410.60</p>
              <p className="text-sm text-gray-500">Last Week $498.00</p>
            </div>
          </div>

          {/* Spent This Month */}
          <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Spent This Month</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">41%</span>
                <TrendingDown className="h-3 w-3 text-green-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900">$1,025.90</p>
              <p className="text-sm text-gray-500">Last Month $2,045.00</p>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'ai' && (
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkle className="h-4 w-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tell me about your expenses... (e.g., 'I spent $25 on lunch')"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 px-1">
              Try: "I bought coffee for $4.50" or "Spent $120 on groceries at Whole Foods"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;