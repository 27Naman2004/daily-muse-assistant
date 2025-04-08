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
    keywords: ["create", "schedule", "make", "planner"],
    response: "I'd be happy to help you create a daily schedule! Here's a template you can follow:\n\n• 6:00-7:00 AM: Morning routine (exercise, meditation)\n• 7:00-8:00 AM: Breakfast and preparation\n• 8:00-10:00 AM: Deep work on highest priority tasks\n• 10:00-10:15 AM: Short break\n• 10:15-12:00 PM: Continue work on important tasks\n• 12:00-1:00 PM: Lunch and short walk\n• 1:00-3:00 PM: Meetings and collaborative work\n• 3:00-3:15 PM: Short break\n• 3:15-5:00 PM: Complete remaining tasks, plan for tomorrow\n• 5:00-6:00 PM: Personal development\n• 6:00-9:00 PM: Dinner and personal time\n• 9:00-10:00 PM: Wind down routine\n\nWould you like me to customize this further for your specific needs?"
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
  },
  {
    keywords: ["task", "to-do", "todo", "checklist"],
    response: "For effective task management, try maintaining a master task list and then selecting 3-5 priority tasks for each day. Use the 1-3-5 rule: plan to accomplish one big thing, three medium things, and five small things each day. Would you like help organizing your tasks for today?"
  },
  {
    keywords: ["work from home", "remote work", "wfh"],
    response: "When working from home, establishing boundaries is crucial. Create a dedicated workspace, follow a regular schedule, take intentional breaks, and have a clear start and end to your workday. Would you like more specific tips for your remote work situation?"
  },
  {
    keywords: ["break", "rest", "pause"],
    response: "Strategic breaks improve productivity! Try the 52/17 rule (52 minutes of work followed by a 17-minute break) or the Pomodoro Technique (25 minutes of work followed by a 5-minute break). During breaks, move your body, rest your eyes from screens, and briefly change your environment."
  },
  {
    keywords: ["balance", "work life", "burnout", "overwhelm"],
    response: "Work-life balance starts with clear boundaries. Schedule personal activities with the same commitment as work tasks, learn to say no, practice time-boxing (allocating specific time slots for activities), and regularly reassess your priorities. What specific area of balance are you struggling with?"
  },
  {
    keywords: ["goal", "objective", "achievement"],
    response: "Effective goal setting follows the SMART framework: Specific, Measurable, Achievable, Relevant, and Time-bound. Break larger goals into smaller milestones, track your progress, and celebrate small wins. What goal would you like to work toward?"
  },
  {
    keywords: ["weekly", "review", "reflect"],
    response: "A weekly review is essential for continuous improvement. Set aside 30-60 minutes each week to review accomplishments, identify what worked and what didn't, clear inboxes, update your task list, and set priorities for the coming week. I recommend doing this on Friday afternoon or Sunday evening."
  }
];

// Check if message contains keywords
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
    "recipe", "cook", "medical", "health condition", "diagnosis",
    "weather", "news", "travel", "hotel", "flight", "vacation",
    "car", "vehicle", "repair", "programming", "code", "software",
    "history", "war", "celebrity", "gossip", "fashion", "shopping",
    "pets", "animals", "chemistry", "physics", "math", "science",
    "language", "translate", "geography", "country", "entertainment"
  ];
  
  const lowercaseMessage = message.toLowerCase();
  
  // First check if message contains any planning-related keywords
  const containsPlanningKeywords = domainResponses.some(item => 
    matchesKeywords(message, item.keywords)
  );
  
  // If it contains planning keywords, it's in our domain
  if (containsPlanningKeywords) return false;
  
  // Otherwise, check if it contains off-topic keywords or seems unrelated to planning
  return nonPlanningKeywords.some(keyword => lowercaseMessage.includes(keyword));
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
      
      // If the message appears to be asking for a personalized plan or schedule
      if (message.toLowerCase().includes("my schedule") || 
          message.toLowerCase().includes("plan for me") || 
          message.toLowerCase().includes("help me plan") ||
          (message.toLowerCase().includes("create") && message.toLowerCase().includes("plan"))) {
        
        resolve("I'd be happy to help you create a personalized daily plan! To provide the most helpful schedule, I need to know:\n\n1. What time do you typically wake up and go to sleep?\n2. What are your main priorities for the day?\n3. Do you have any fixed commitments or meetings?\n4. When are you typically most productive?\n\nOnce you provide this information, I can suggest a detailed schedule tailored to your specific needs.");
        return;
      }
      
      // Default response if no specific match but still in domain
      resolve("That's an interesting question about daily planning. While organizing your day, it's important to prioritize tasks, schedule breaks, and maintain a healthy work-life balance. For effective planning, consider using the time-blocking method, setting clear priorities with techniques like the Eisenhower Matrix, and building consistent routines. Would you like more specific advice on a particular aspect of daily planning?");
    }, 1000);
  });
};
