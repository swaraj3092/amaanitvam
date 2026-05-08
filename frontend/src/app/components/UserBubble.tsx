import { motion } from 'framer-motion';

interface UserBubbleProps {
  message: string;
  timestamp?: string;
}

export function UserBubble({ message, timestamp }: UserBubbleProps) {
  const displayTime = timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.div 
      className="flex justify-end mb-4"
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="flex flex-col items-end" style={{ maxWidth: '65%' }}>
        <div
          className="px-3.5 py-2.5"
          style={{
            background: '#6B1A35',
            border: '0.5px solid #6B1A35',
            borderRadius: '16px 16px 4px 16px',
            fontSize: '13px',
            lineHeight: '1.6',
            color: '#FFF0F3'
          }}
        >
          {message}
        </div>
        <div
          className="mt-2 text-right"
          style={{
            fontSize: '10px',
            lineHeight: '1.6',
            color: '#6B1A35',
            opacity: 0.35
          }}
        >
          {displayTime}
        </div>
      </div>
    </motion.div>
  );
}
