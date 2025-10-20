import React, { useState, useRef, useEffect } from 'react';
import { useChatbot, ChatMessage, OpportunityMatch, DocumentationResult } from '../contexts/ChatbotContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  ExternalLink, 
  Clock,
  Star,
  BookOpen,
  Briefcase,
  RotateCcw,
  ChevronDown
} from 'lucide-react';

const Chatbot: React.FC = () => {
  const { 
    isOpen, 
    messages, 
    isLoading, 
    toggleChatbot, 
    closeChatbot, 
    sendMessage,
    clearMessages
  } = useChatbot();
  
  const [inputValue, setInputValue] = useState('');
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { label: "Find Move opportunities", query: "Move development opportunities" },
    { label: "DeFi projects", query: "DeFi contest projects" },
    { label: "Cedra documentation", query: "Cedra getting started guide" },
    { label: "Smart contracts", query: "Move smart contract development" }
  ];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current;
      const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
      
      if (isNearBottom || messages.length <= 2) {
        setTimeout(() => {
          messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [messages]);

  // Handle scroll behavior
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
    
    // Show/hide scroll to bottom button
    setShowScrollToBottom(!isNearBottom && messages.length > 3);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScrollToBottom(false);
  };

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    const message = inputValue.trim();
    setInputValue('');
    setShowQuickActions(false);
    await sendMessage(message);
  };

  const handleQuickAction = async (query: string) => {
    setInputValue(query);
    setShowQuickActions(false);
    await sendMessage(query);
  };

  const handleClearConversation = () => {
    clearMessages();
    setShowQuickActions(true);
    setShowScrollToBottom(false);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderMessage = (message: ChatMessage) => {
    const isUser = message.sender === 'user';
    
    return (
      <div key={message.id} className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
        {!isUser && (
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarImage src="/teamMov-logo.png" />
            <AvatarFallback className="bg-electric-blue text-white">
              <Bot className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        )}
        
        <div className={`max-w-[80%] ${isUser ? 'order-first' : ''}`}>
          <div
            className={`rounded-2xl px-4 py-3 ${
              isUser
                ? 'bg-electric-blue text-white ml-auto'
                : 'bg-muted text-foreground'
            }`}
          >
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          </div>
          
          <div className={`flex items-center gap-1 mt-1 text-xs text-muted-foreground ${isUser ? 'justify-end' : 'justify-start'}`}>
            <Clock className="w-3 h-3" />
            <span>{formatTime(message.timestamp)}</span>
          </div>
        </div>
        
        {isUser && (
          <Avatar className="w-8 h-8 flex-shrink-0">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  };

  const renderOpportunityMatch = (message: ChatMessage) => {
    // Extract opportunity data from message content
    const opportunities: OpportunityMatch[] = [
      {
        id: '1',
        title: 'Move SDK Development',
        description: 'Create a comprehensive Move SDK for smart contract development with TypeScript bindings',
        category: 'Development',
        reward: '$15,000 - $25,000',
        skills: ['Move', 'TypeScript', 'SDK Development', 'Smart Contracts'],
        matchScore: 95
      },
      {
        id: '2',
        title: 'DeFi Contest Platform',
        description: 'Build a decentralized contest platform for DeFi projects on Cedra',
        category: 'DeFi',
        reward: '$20,000 - $35,000',
        skills: ['React', 'Move', 'DeFi', 'Web3'],
        matchScore: 88
      }
    ];

    return (
      <div key={message.id} className="flex gap-3 justify-start">
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarImage src="/teamMov-logo.png" />
          <AvatarFallback className="bg-electric-blue text-white">
            <Bot className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        
        <div className="max-w-[80%]">
          <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
            <p className="text-sm mb-3">{message.content}</p>
            
            <div className="space-y-3">
              {opportunities.map((opp) => (
                <Card key={opp.id} className="border-border hover:border-electric-blue/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold">{opp.title}</CardTitle>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-muted-foreground">{opp.matchScore}%</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs w-fit">
                      {opp.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {opp.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-electric-blue">
                        {opp.reward}
                      </span>
                      <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {opp.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {opp.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{opp.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{formatTime(message.timestamp)}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderDocumentation = (message: ChatMessage) => {
    const docs: DocumentationResult[] = [
      {
        title: 'Getting Started with Move',
        content: 'Move is a programming language for writing safe smart contracts. It was originally developed at Facebook for the Diem blockchain project.',
        url: '/docs/move/getting-started',
        section: 'Basics'
      },
      {
        title: 'Cedra Network Architecture',
        content: 'Cedra is a Move-based blockchain that provides high throughput and low latency for decentralized applications.',
        url: '/docs/cedra/architecture',
        section: 'Network'
      }
    ];

    return (
      <div key={message.id} className="flex gap-3 justify-start">
        <Avatar className="w-8 h-8 flex-shrink-0">
          <AvatarImage src="/teamMov-logo.png" />
          <AvatarFallback className="bg-electric-blue text-white">
            <Bot className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
        
        <div className="max-w-[80%]">
          <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
            <p className="text-sm mb-3">{message.content}</p>
            
            <div className="space-y-3">
              {docs.map((doc) => (
                <Card key={doc.title} className="border-border hover:border-electric-blue/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-sm font-semibold flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-electric-blue" />
                        {doc.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {doc.section}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {doc.content}
                    </p>
                    <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{formatTime(message.timestamp)}</span>
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 max-lg:bottom-4 max-lg:right-4 max-sm:bottom-4 max-sm:right-4 w-14 h-14 rounded-full bg-gradient-to-r from-electric-blue to-electric-blue-200 hover:from-electric-blue-50 hover:to-electric-blue text-white shadow-lg hover:shadow-xl glow-electric hover:glow-electric-strong z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="chatbot-container fixed bottom-6 right-6 w-96 h-[calc(100vh-3rem)] max-h-[600px] min-h-[400px] z-50 max-lg:bottom-4 max-lg:right-4 max-lg:w-80 max-lg:h-[calc(100vh-2rem)] max-sm:bottom-0 max-sm:right-0 max-sm:left-0 max-sm:top-0 max-sm:w-full max-sm:h-full max-sm:rounded-none">
      <Card className="h-full flex flex-col shadow-2xl border-border overflow-hidden max-sm:rounded-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/teamMov-logo.png" />
              <AvatarFallback className="bg-electric-blue text-white">
                <Bot className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm font-semibold">AI Assistant</CardTitle>
              <p className="text-xs text-muted-foreground">TeamMove Discovery</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {messages.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClearConversation}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                title="Clear conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeChatbot}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0 min-h-0">
          {/* Messages Area */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 chatbot-scrollbar relative min-h-0"
            onScroll={handleScroll}
          >
            {messages.map((message) => {
              if (message.type === 'opportunity_match') {
                return renderOpportunityMatch(message);
              } else if (message.type === 'documentation') {
                return renderDocumentation(message);
              } else {
                return renderMessage(message);
              }
            })}
            
            {/* Quick Actions */}
            {showQuickActions && messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction(action.query)}
                      className="text-xs h-8 hover:bg-electric-blue/10 hover:border-electric-blue/50"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src="/teamMov-logo.png" />
                  <AvatarFallback className="bg-electric-blue text-white">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted text-foreground rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-electric-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-muted-foreground">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
            
            {/* Scroll to Bottom Button */}
            {showScrollToBottom && (
              <Button
                onClick={scrollToBottom}
                className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-electric-blue hover:bg-electric-blue-50 text-white shadow-lg z-10 max-sm:bottom-6 max-sm:right-6"
                size="icon"
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          {/* Input Area */}
          <div className="border-t border-border p-4 flex-shrink-0 max-sm:pb-6">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about opportunities or documentation..."
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue max-sm:text-base"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                disabled={!inputValue.trim() || isLoading}
                className="bg-electric-blue hover:bg-electric-blue-50 text-white max-sm:px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  Opportunities
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Documentation
                </span>
              </div>
              <span>Powered by AI</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
