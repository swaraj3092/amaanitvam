interface TypingIndicatorProps {
  visible: boolean;
}

export function TypingIndicator({ visible }: TypingIndicatorProps) {
  if (!visible) return null;

  return (
    <div className="flex gap-2 items-start mb-4">
      <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden" style={{ background: '#FFF0F3', border: '0.5px solid #E8C0CC' }}>
        <img src="/logo.png" alt="Bot typing" className="w-full h-full object-cover" />
      </div>
      <div
        style={{
          background: '#FFFFFF',
          border: '0.5px solid #E8C0CC',
          borderRadius: '16px 16px 16px 4px',
          padding: '10px 14px',
          display: 'flex',
          gap: '6px',
          alignItems: 'center'
        }}
      >
        <div
          className="typing-dot"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#D4537E',
            animation: 'typingPulse 1s ease-in-out infinite',
            animationDelay: '0s'
          }}
        />
        <div
          className="typing-dot"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#D4537E',
            animation: 'typingPulse 1s ease-in-out infinite',
            animationDelay: '0.2s'
          }}
        />
        <div
          className="typing-dot"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#D4537E',
            animation: 'typingPulse 1s ease-in-out infinite',
            animationDelay: '0.4s'
          }}
        />
      </div>

      <style>{`
        @keyframes typingPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
