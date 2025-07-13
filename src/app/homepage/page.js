// IN this homespage information (everything )
"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Image, 
  FileText, 
  Settings, 
  Globe, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Download, 
  Star, 
  MessageCircle,
  Satellite,
  Map,
  CloudRain,
  GraduationCap,
  Shield,
  Phone,
  Bot,
  Menu,
  X,
  Volume2,
  VolumeX,
  Upload,
  ChevronDown,
  Activity,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Zap,
  Wifi,
  WifiOff
} from 'lucide-react';

const AkashGyaanChatbot = () => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m AkashGyaan, your AI assistant for MOSDAC. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'gu', name: 'ગુજરાતી' }
  ];

  const dashboardStats = [
    { icon: Users, label: 'Active Users', value: '2,847', change: '+12%' },
    { icon: MessageCircle, label: 'Queries Today', value: '1,234', change: '+8%' },
    { icon: Download, label: 'Downloads', value: '567', change: '+15%' },
    { icon: Star, label: 'Satisfaction', value: '94%', change: '+2%' }
  ];

  const popularProducts = [
    { name: 'INSAT-3D Weather Data', downloads: 1245, trend: 'up' },
    { name: 'SCATSAT-1 Ocean Data', downloads: 987, trend: 'up' },
    { name: 'RISAT-2 SAR Images', downloads: 756, trend: 'down' },
    { name: 'Oceansat-2 Data', downloads: 634, trend: 'up' }
  ];

  const quickActions = [
    { icon: Satellite, label: 'Satellite Data', action: 'satellite' },
    { icon: Map, label: 'Map Services', action: 'map' },
    { icon: CloudRain, label: 'Weather Info', action: 'weather' },
    { icon: GraduationCap, label: 'Learning Mode', action: 'education' }
  ];

  const integrations = [
    { name: 'Bhuvan', icon: Map, status: 'connected' },
    { name: 'IMD', icon: CloudRain, status: 'connected' },
    { name: 'NRSC', icon: Satellite, status: 'connected' },
    { name: 'WhatsApp', icon: Phone, status: 'connected' },
    { name: 'Telegram', icon: MessageCircle, status: 'connected' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        type: 'user',
        content: message,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, newMessage]);
      setMessage('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          type: 'bot',
          content: 'I understand you\'re looking for information. Let me help you with that. Based on your query, I can provide relevant satellite data and insights.',
          timestamp: new Date()
        };
        setChatHistory(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
  };

  const handleFileUpload = (type) => {
    fileInputRef.current?.click();
  };

  const handleQuickAction = (action) => {
    const actionMessages = {
      satellite: 'Show me the latest satellite imagery',
      map: 'I need map services information',
      weather: 'What\'s the current weather data?',
      education: 'Switch to educational mode'
    };
    
    setMessage(actionMessages[action]);
  };

  const ChatInterface = () => (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">AkashGyaan</h2>
            <p className="text-sm text-gray-500 flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Online
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isVoiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-3 py-1 rounded-md border border-gray-300 text-sm"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <div className="flex space-x-2 overflow-x-auto">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => handleQuickAction(action.action)}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
            >
              <action.icon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-2 top-2 flex space-x-1">
              <button
                onClick={() => handleFileUpload('image')}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <Image className="w-4 h-4 text-gray-500" />
              </button>
              <button
                onClick={() => handleFileUpload('pdf')}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <FileText className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
          <button
            onClick={handleVoiceToggle}
            className={`p-2 rounded-lg transition-all duration-200 ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*,.pdf"
        onChange={(e) => console.log('File selected:', e.target.files)}
      />
    </div>
  );

  const Dashboard = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm text-gray-600">
            {isOnline ? 'Online' : 'Offline'} Mode
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${index % 2 === 0 ? 'bg-blue-100' : 'bg-purple-100'}`}>
                <stat.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500">{stat.change}</span>
              <span className="text-gray-500 ml-1">from last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Products */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Satellite Products</h3>
        <div className="space-y-4">
          {popularProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Satellite className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.downloads} downloads</p>
                </div>
              </div>
              <div className={`flex items-center space-x-1 ${product.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <TrendingUp className={`w-4 h-4 ${product.trend === 'down' ? 'rotate-180' : ''}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Portal Integrations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-center mb-2">
                <integration.icon className="w-8 h-8 text-blue-500" />
              </div>
              <p className="font-medium text-gray-800 text-sm">{integration.name}</p>
              <div className="flex items-center justify-center mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                <span className="text-xs text-gray-500">Connected</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 relative`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div className="animate-fade-in">
                <h1 className="text-xl font-bold text-gray-800">AkashGyaan</h1>
                <p className="text-sm text-gray-500">MOSDAC AI Assistant</p>
              </div>
            )}
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          {[
            { id: 'chat', icon: MessageCircle, label: 'Chat' },
            { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === item.id ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
        >
          {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800 capitalize">{activeTab}</h2>
              {!isOnline && (
                <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                  <WifiOff className="w-4 h-4" />
                  <span>Offline Mode</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Activity className="w-4 h-4" />
                <span>System Status: Active</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'chat' && <ChatInterface />}
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'settings' && (
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Language Preferences</h4>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                  </select>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h4 className="font-medium text-gray-800 mb-3">Voice Settings</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" checked={isVoiceEnabled} onChange={(e) => setIsVoiceEnabled(e.target.checked)} />
                      <span>Enable Voice Responses</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked />
                      <span>Voice Recognition</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AkashGyaanChatbot;