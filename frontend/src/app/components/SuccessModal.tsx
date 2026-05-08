import { X } from 'lucide-react';

interface SuccessModalProps {
  onClose: () => void;
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(107, 26, 53, 0.12)' }}
        onClick={onClose}
      />

      <div
        className="relative w-[480px] mx-4 px-6 pt-6 pb-6"
        style={{
          background: '#FFFFFF',
          border: '0.5px solid #E8C0CC',
          borderRadius: '20px'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6"
          style={{ color: '#6B1A35' }}
        >
          <X size={18} />
        </button>

        {/* Handle bar */}
        <div
          className="w-10 h-1 mx-auto mb-3"
          style={{
            background: '#E8C0CC',
            borderRadius: '999px'
          }}
        />

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mb-6">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#6B1A35' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#6B1A35' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#6B1A35' }}
          />
        </div>

        <div className="flex flex-col items-center pt-6 text-center">
          <div className="text-5xl mb-4">🪷</div>

          <h2
            className="mb-2"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '28px',
              color: '#6B1A35'
            }}
          >
            Thank you!
          </h2>

          <p
            className="mb-2"
            style={{
              fontSize: '14px',
              color: '#D4537E'
            }}
          >
            Amaanitvam will reach out to you soon.
          </p>

          <p
            className="mb-8"
            style={{
              fontSize: '12px',
              color: '#6B1A35',
              opacity: 0.6
            }}
          >
            You're now part of the movement.
          </p>

          <button
            onClick={onClose}
            className="px-7 py-3"
            style={{
              background: 'transparent',
              border: '1px solid #6B1A35',
              color: '#6B1A35',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: '999px'
            }}
          >
            Back to chat
          </button>
        </div>
      </div>
    </div>
  );
}
