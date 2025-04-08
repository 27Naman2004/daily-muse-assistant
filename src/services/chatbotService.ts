
// Predefined responses for our domain-specific chatbot
const domainResponses = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! I'm your Daily Planning Assistant. I can help you organize your day, set reminders, create schedules, and answer questions about time management and productivity. How can I assist you with your daily planning today?"
  },
  {
    keywords: ["plan", "schedule", "day", "organize"],
    response: "Planning your day effectively is essential for productivity! I recommend starting with your most important tasks first, scheduling breaks, and being realistic about what you can accomplish. Would you like help creating a specific schedule?"
  },
  {
    keywords: ["productivity", "efficient", "focus", "distraction"],
    response: "To boost productivity, try techniques like the Pomodoro Method (25 minutes of focused work followed by a 5-minute break), time-blocking your calendar, or creating a dedicated workspace free from distractions. Which approach sounds most interesting to you?"
  },
  {
    keywords: ["meeting", "calendar", "appointment"],
    response: "Effective meeting management is key to a productive day. Try scheduling meetings in blocks, leaving buffer time between them, and having clear agendas. Would you like tips on how to organize your meeting schedule?"
  },
  {
    keywords: ["procrastination", "delay", "avoid", "putting off"],
    response: "Procrastination affects everyone! Try breaking larger tasks into smaller steps, using the 'two-minute rule' (if it takes less than two minutes, do it now), or setting up a reward system. What specific task are you procrastinating on?"
  },
  {
    keywords: ["morning", "routine", "wake up"],
    response: "A solid morning routine can set you up for daily success! Consider incorporating exercise, mindfulness, planning your day's priorities, and avoiding email/social media for the first hour. Would you like help designing a morning routine?"
  },
  {
    keywords: ["evening", "night", "wind down", "bedtime"],
    response: "Evening routines are crucial for next-day preparation and quality sleep. Try reviewing your day's accomplishments, preparing your to-do list for tomorrow, and disconnecting from screens an hour before bed. Need more specific evening routine suggestions?"
  },
  {
    keywords: ["priority", "important", "urgent"],
    response: "Prioritizing effectively means understanding the difference between urgent and important tasks. Try using the Eisenhower Matrix: divide tasks into (1) urgent and important, (2) important but not urgent, (3) urgent but not important, and (4) neither. Focus on categories 1 and 2. Would you like help categorizing your tasks?"
  },
  {
    keywords: ["time block", "timeblock", "time management"],
    response: "Time blocking is a powerful planning technique where you schedule specific blocks of time for different types of work. This helps maintain focus and prevents multitasking. Start by identifying your high-energy periods and scheduling your most demanding tasks during those times."
  },
  {
    keywords: ["habit", "routine", "consistency"],
    response: "Building consistent habits is the foundation of effective daily planning. Start small, link new habits to existing ones (habit stacking), track your progress, and design your environment to support your habits. Which specific habit are you trying to develop?"
  }
];

// Function to check if message contains keywords
const matchesKeywords = (message: string, keywords: string[]): boolean => {
  const lowercaseMessage = message.toLowerCase();
  return keywords.some(keyword => lowercaseMessage.includes(keyword));
};

// Check if a message is outside our domain
const isOutsideDomain = (message: string): boolean => {
  // List of non-planning related topics
  const nonPlanningKeywords = [
    "politics", "sports", "movie", "music", "religion", "dating", 
    "games", "gaming", "cryptocurrency", "invest", "stocks",
    "recipe", "cook", "medical", "health condition", "diagnosis"
  ];
  
  const lowercaseMessage = message.toLowerCase();
  return nonPlanningKeywords.some(keyword => lowercaseMessage.includes(keyword)) && 
         !domainResponses.some(item => matchesKeywords(message, item.keywords));
};

export type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export const processMessage = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Check if the message is outside our domain
      if (isOutsideDomain(message)) {
        resolve("I'm sorry, but I'm specialized in daily planning and productivity topics. I can't provide information on that subject. Is there something about planning your day, managing your schedule, or improving productivity that I can help with?");
        return;
      }
      
      // Check for domain-specific responses
      for (const item of domainResponses) {
        if (matchesKeywords(message, item.keywords)) {
          resolve(item.response);
          return;
        }
      }
      
      // Default response if no specific match but still in domain
      resolve("That's an interesting question about daily planning. While organizing your day, it's important to prioritize tasks, schedule breaks, and maintain a healthy work-life balance. Would you like more specific advice on a particular aspect of daily planning?");
    }, 1000);
  });
};
