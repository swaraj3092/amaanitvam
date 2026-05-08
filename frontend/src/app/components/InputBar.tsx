import { ArrowUp, Paperclip } from 'lucide-react';
import { useState } from 'react';

interface InputBarProps {
  onSend?: (message: string) => void;
  isLoading?: boolean;
}

export function InputBar({ onSend, isLoading }: InputBarProps) {
  const [text, setText] = useState('');
  const maxLength = 500;

  const handleSend = () => {
    if (text.trim() && onSend && !isLoading) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div
      className="h-[72px] flex items-center px-4"
      style={{ background: '#FFF8F5', borderTop: '0.5px solid #E8C0CC' }}
    >
      <div
        className="flex-1 h-11 flex items-center px-4 gap-3 relative"
        style={{
          background: '#FFFFFF',
          border: '0.5px solid #E8C0CC',
          borderRadius: '999px'
        }}
      >
        <button className="shrink-0" disabled={isLoading}>
          <Paperclip
            size={18}
            style={{ color: '#6B1A35', opacity: 0.4 }}
          />
        </button>
        <input
          type="text"
          placeholder={isLoading ? "Amaani is typing..." : "Ask Amaani anything..."}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={maxLength}
          disabled={isLoading}
          className="flex-1 bg-transparent border-none outline-none disabled:opacity-50"
          style={{
            fontSize: '13px',
            color: '#6B1A35'
          }}
        />
        <div
          className="shrink-0"
          style={{
            fontSize: '10px',
            color: '#6B1A35',
            opacity: 0.3
          }}
        >
          {text.length}/{maxLength}
        </div>
        <button
          onClick={handleSend}
          disabled={!text.trim() || isLoading}
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 disabled:opacity-50"
          style={{ background: '#6B1A35' }}
        >
          <ArrowUp size={20} style={{ color: '#FFF0F3' }} />
        </button>
      </div>
    </div>
  );
}
