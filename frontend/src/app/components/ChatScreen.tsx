import { TopBar } from './TopBar';
import { BotBubble } from './BotBubble';
import { UserBubble } from './UserBubble';
import { QuickChip } from './QuickChip';
import { InputBar } from './InputBar';
import { TypingIndicator } from './TypingIndicator';
import { useChat } from '../hooks/useChat';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ChatScreenProps {
  onVolunteerClick: () => void;
}

export function ChatScreen({ onVolunteerClick }: ChatScreenProps) {
  const { messages, sendMessage, isLoading } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#FFF8F5' }}>
      <TopBar />

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4">
            {msg.role === 'bot' ? (
              <BotBubble message={msg.content} />
            ) : (
              <UserBubble message={msg.content} />
            )}

            {/* Show quick chips only after the first bot message */}
            {index === 0 && msg.role === 'bot' && (
              <div className="relative mt-4">
                <motion.div 
                  className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                  }}
                >
                  <motion.div variants={chipVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <QuickChip label="About us" icon="🪷" onClick={() => sendMessage("Tell me about the foundation")} />
                  </motion.div>
                  <motion.div variants={chipVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <QuickChip label="Shiksha" onClick={() => sendMessage("What is the Shiksha project?")} />
                  </motion.div>
                  <motion.div variants={chipVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <QuickChip label="Manthan" onClick={() => sendMessage("What is the Manthan project?")} />
                  </motion.div>
                  <motion.div variants={chipVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <QuickChip label="Volunteer" onClick={onVolunteerClick} />
                  </motion.div>
                  <motion.div variants={chipVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <QuickChip label="Donate" onClick={() => sendMessage("How can I donate?")} />
                  </motion.div>
                </motion.div>
                <div
                  className="absolute top-0 right-0 h-full w-12 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to left, #FFF8F5, transparent)'
                  }}
                />
              </div>
            )}
          </div>
        ))}
        
        <TypingIndicator visible={isLoading} />
        <div ref={bottomRef} />
      </div>

      <InputBar onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}
