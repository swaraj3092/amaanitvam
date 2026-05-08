import { useState } from 'react';

export interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Namaste 🙏 I'm Amaani, the voice of Amaanitvam Foundation. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history, message: text }),
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'bot', content: data.reply }]);
      } else {
        throw new Error('No reply from server');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [...prev, { role: 'bot', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, sendMessage, isLoading };
}
