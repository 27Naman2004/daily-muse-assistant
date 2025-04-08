const API_KEY = "YOUR_API_KEY"; // Make sure this is still active and has access!

const callGoogleAI = async (userMessage: string): Promise<string> => {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=${API_KEY}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: {
          context: `You are a daily planning assistant. You help users with their schedules, routines, exam preparation plans, time management strategies, and productivity.`,
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

    if (!response.ok) {
      const err = await response.text();
      throw new Error(`API Error: ${response.status} ${err}`);
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content;

    return reply ?? "🤖 The assistant could not generate a response. Please rephrase your question.";
  } catch (error) {
    console.error("Google API Call Failed:", error);
    return "⚠️ I had trouble generating a response right now. Please try again.";
  }
};
