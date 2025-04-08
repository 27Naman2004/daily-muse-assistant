
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { processMessage, type Message } from "@/services/chatbotService";

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your Daily Muse Assistant. I can help you with daily planning, time management, and productivity. What would you like assistance with today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom of messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      // Process the user message and get a response
      const botResponse = await processMessage(inputValue);
      
      // Add bot message
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
        <div className="p-4 bg-primary text-primary-foreground">
          <h1 className="text-xl font-semibold">Daily Muse Assistant</h1>
          <p className="text-sm opacity-90">Your AI planning companion</p>
        </div>
        
        <div className="h-[60vh] overflow-y-auto p-4 bg-gray-800">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'
                  }`}
                >
                  <p>{message.content}</p>
                  <div className="text-xs opacity-70 mt-1 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              placeholder="Ask about daily planning..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button type="submit" disabled={isLoading || inputValue.trim() === ''}>
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700 text-white">
        <h2 className="text-lg font-medium mb-2">Example questions you can ask:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Button 
            variant="outline" 
            className="justify-start h-auto py-2 text-left border-gray-600 hover:bg-gray-700"
            onClick={() => setInputValue("How can I plan my day for maximum productivity?")}
          >
            How can I plan my day for maximum productivity?
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-2 text-left border-gray-600 hover:bg-gray-700"
            onClick={() => setInputValue("What's the best way to prioritize my tasks?")}
          >
            What's the best way to prioritize my tasks?
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-2 text-left border-gray-600 hover:bg-gray-700"
            onClick={() => setInputValue("Can you help me create a daily schedule?")}
          >
            Can you help me create a daily schedule?
          </Button>
          <Button 
            variant="outline" 
            className="justify-start h-auto py-2 text-left border-gray-600 hover:bg-gray-700"
            onClick={() => setInputValue("What's a good morning routine for productivity?")}
          >
            What's a good morning routine for productivity?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
