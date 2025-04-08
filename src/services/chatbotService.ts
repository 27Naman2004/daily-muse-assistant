// ------------------- Google API Call -------------------
const API_KEY = "AIzaSyAIYfZ3GcVQXhkXmJ6IEdn3MbVIF5qN8LU";

const callGoogleAI = async (userMessage: string): Promise<string> => {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=${API_KEY}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: {
        context: `You are a helpful and knowledgeable assistant strictly focused on daily planning, scheduling, routines, time management, and productivity. 
Your job is to guide users with personalized advice about organizing their day, building good habits, avoiding procrastination, and creating effective routines. 
If the user's message is outside this domain (e.g., about news, politics, sports, health, entertainment), politely inform them that you only respond to queries related to daily planning.`,
        messages: [
          {
            author: "user",
            content: userMessage
          }
        ]
      },
      temperature: 0.7,
      candidateCount: 1
    })
  });

  const data = await response.json();
  return data?.candidates?.[0]?.content ?? "Hmm, I couldn’t generate a helpful response right now.";
};

// ------------------- Chat Message Type -------------------
export type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// ------------------- Domain-Specific Chatbot Logic -------------------
export const processMessage = async (message: string): Promise<string> => {
  try {
    const response = await callGoogleAI(message);
    return response;
  } catch (err) {
    console.error("Google API Error:", err);
    return "⚠️ I had trouble generating a response right now. Please try again.";
  }
};
