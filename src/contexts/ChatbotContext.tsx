import React, { createContext, useContext, useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'opportunity_match' | 'documentation';
}

export interface OpportunityMatch {
  id: string;
  title: string;
  description: string;
  category: string;
  reward: string;
  skills: string[];
  matchScore: number;
}

export interface DocumentationResult {
  title: string;
  content: string;
  url: string;
  section: string;
}

interface ChatbotContextType {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  toggleChatbot: () => void;
  closeChatbot: () => void;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
  getOpportunityMatches: (query: string) => Promise<OpportunityMatch[]>;
  getDocumentation: (query: string) => Promise<DocumentationResult[]>;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm your AI assistant for TeamMove. I can help you discover opportunities that match your skills and provide Cedra documentation assistance. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeChatbot = useCallback(() => {
    setIsOpen(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: '1',
        content: "Hi! I'm your AI assistant for TeamMove. I can help you discover opportunities that match your skills and provide Cedra documentation assistance. What would you like to know?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      }
    ]);
  }, []);

  // Mock opportunity matching logic
  const getOpportunityMatches = useCallback(async (query: string): Promise<OpportunityMatch[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock opportunity data based on query
    const allOpportunities: OpportunityMatch[] = [
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
      },
      {
        id: '3',
        title: 'AI-Powered Analytics Dashboard',
        description: 'Create analytics dashboard with AI insights for contest participants',
        category: 'AI/ML',
        reward: '$12,000 - $18,000',
        skills: ['Python', 'Machine Learning', 'Data Visualization', 'React'],
        matchScore: 82
      },
      {
        id: '4',
        title: 'Move Smart Contract Security Audit Tool',
        description: 'Develop automated security analysis tools for Move smart contracts',
        category: 'Security',
        reward: '$18,000 - $30,000',
        skills: ['Move', 'Security', 'Static Analysis', 'Rust'],
        matchScore: 90
      },
      {
        id: '5',
        title: 'Community Governance Interface',
        description: 'Build user-friendly interface for community governance and voting',
        category: 'Governance',
        reward: '$10,000 - $15,000',
        skills: ['React', 'Web3', 'Governance', 'UI/UX'],
        matchScore: 75
      }
    ];

    // Simple keyword matching for demo purposes
    const queryLower = query.toLowerCase();
    const matchedOpportunities = allOpportunities.filter(opp => 
      opp.title.toLowerCase().includes(queryLower) ||
      opp.description.toLowerCase().includes(queryLower) ||
      opp.skills.some(skill => skill.toLowerCase().includes(queryLower)) ||
      opp.category.toLowerCase().includes(queryLower)
    );

    // Sort by match score and return top 3
    return matchedOpportunities
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3);
  }, []);

  // Mock documentation search
  const getDocumentation = useCallback(async (query: string): Promise<DocumentationResult[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock documentation data
    const allDocs: DocumentationResult[] = [
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
      },
      {
        title: 'Smart Contract Development',
        content: 'Learn how to write, test, and deploy smart contracts on the Cedra network using the Move programming language.',
        url: '/docs/development/smart-contracts',
        section: 'Development'
      },
      {
        title: 'Contest Submission Guidelines',
        content: 'Complete guide on how to submit your project for Cedra contests and what judges look for in winning submissions.',
        url: '/docs/contests/submission-guidelines',
        section: 'Contests'
      },
      {
        title: 'Move SDK Reference',
        content: 'Complete API reference for the Move SDK, including all available functions and their parameters.',
        url: '/docs/sdk/reference',
        section: 'SDK'
      }
    ];

    // Simple keyword matching
    const queryLower = query.toLowerCase();
    const matchedDocs = allDocs.filter(doc => 
      doc.title.toLowerCase().includes(queryLower) ||
      doc.content.toLowerCase().includes(queryLower) ||
      doc.section.toLowerCase().includes(queryLower)
    );

    return matchedDocs.slice(0, 3);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Determine if this is an opportunity search or documentation query
      const isOpportunityQuery = content.toLowerCase().includes('opportunity') || 
                                content.toLowerCase().includes('contest') ||
                                content.toLowerCase().includes('project') ||
                                content.toLowerCase().includes('job') ||
                                content.toLowerCase().includes('work');

      const isDocumentationQuery = content.toLowerCase().includes('documentation') ||
                                  content.toLowerCase().includes('docs') ||
                                  content.toLowerCase().includes('guide') ||
                                  content.toLowerCase().includes('tutorial') ||
                                  content.toLowerCase().includes('how to');

      let botResponse: ChatMessage;

      if (isOpportunityQuery) {
        const matches = await getOpportunityMatches(content);
        botResponse = {
          id: (Date.now() + 1).toString(),
          content: matches.length > 0 
            ? `I found ${matches.length} opportunity(ies) that match your query:`
            : "I couldn't find any opportunities matching your query. Try asking about 'Move development', 'DeFi projects', or 'AI/ML contests'.",
          sender: 'bot',
          timestamp: new Date(),
          type: 'opportunity_match'
        };
      } else if (isDocumentationQuery) {
        const docs = await getDocumentation(content);
        botResponse = {
          id: (Date.now() + 1).toString(),
          content: docs.length > 0
            ? `Here are ${docs.length} documentation resource(s) that might help:`
            : "I couldn't find specific documentation for your query. Try asking about 'Move basics', 'Cedra architecture', or 'smart contracts'.",
          sender: 'bot',
          timestamp: new Date(),
          type: 'documentation'
        };
      } else {
        // General response
        const responses = [
          "I can help you find opportunities that match your skills or provide Cedra documentation assistance. What specific area are you interested in?",
          "I'm here to help with opportunity discovery and documentation. Try asking about 'Move development opportunities' or 'Cedra smart contract guides'.",
          "I can assist with finding relevant contests and projects, or help you understand Cedra documentation. What would you like to explore?",
          "Let me know if you're looking for specific opportunities or need help with Cedra documentation. I'm here to help!"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        botResponse = {
          id: (Date.now() + 1).toString(),
          content: randomResponse,
          sender: 'bot',
          timestamp: new Date(),
          type: 'text'
        };
      }

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [getOpportunityMatches, getDocumentation]);

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        messages,
        isLoading,
        toggleChatbot,
        closeChatbot,
        sendMessage,
        clearMessages,
        getOpportunityMatches,
        getDocumentation
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};
