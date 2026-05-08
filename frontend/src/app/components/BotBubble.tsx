import { Volume2, VolumeX } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BotBubbleProps {
  message: string;
  timestamp?: string;
}

export function BotBubble({ message, timestamp }: BotBubbleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const displayTime = timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const toggleSpeech = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); 
      // Strip markdown and emojis
      const cleanMessage = message
        .replace(/\*\*/g, '')
        .replace(/\*/g, '')
        .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1FA00}-\u{1FAFF}]/gu, '')
        .trim();
        
      const utterance = new SpeechSynthesisUtterance(cleanMessage);
      
      const voices = window.speechSynthesis.getVoices();
      
      // Try to find an Indian Male voice (like Microsoft Ravi, Google UK English Male, or any generic en-IN)
      const indianVoice = voices.find(v => 
        (v.lang === 'en-IN' && (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('ravi'))) ||
        v.name.toLowerCase().includes('indian english male')
      ) || voices.find(v => v.lang === 'en-IN') || voices.find(v => v.lang.startsWith('en'));
      
      if (indianVoice) {
         utterance.voice = indianVoice;
      }
      
      utterance.pitch = 1.0; 
      utterance.rate = 0.95;
      
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = (e) => {
        console.error("Speech Synthesis Error: ", e);
        setIsPlaying(false);
      };
      
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const formatMarkdown = (text: string) => {
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/\n/g, '<br/>');
    return { __html: formatted };
  };

  return (
    <motion.div 
      className="flex gap-2 items-start mb-4"
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden" style={{ background: '#FFF0F3', border: '0.5px solid #E8C0CC' }}>
        <img src="/logo.png" alt="Bot" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col" style={{ maxWidth: '75%' }}>
        <div
          className="px-3.5 py-2.5"
          style={{
            background: '#FFFFFF',
            border: '0.5px solid #E8C0CC',
            borderRadius: '16px 16px 16px 4px',
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#3A0A1A'
          }}
          dangerouslySetInnerHTML={formatMarkdown(message)}
        />
        <div className="mt-2 flex items-center gap-2">
          <div
            style={{
              fontSize: '10px',
              color: '#6B1A35',
              opacity: 0.35
            }}
          >
            {displayTime}
          </div>
          <button 
            onClick={toggleSpeech} 
            className="flex items-center justify-center transition-opacity hover:opacity-100"
            style={{ color: '#D4537E', opacity: isPlaying ? 1 : 0.5 }}
            title={isPlaying ? "Stop Voice" : "Play Voice"}
          >
            {isPlaying ? <VolumeX size={12} /> : <Volume2 size={12} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
