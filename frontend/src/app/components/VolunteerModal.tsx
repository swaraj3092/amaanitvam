import { useState } from 'react';
import { X } from 'lucide-react';

interface VolunteerModalProps {
  onClose: () => void;
  onSubmit: () => void;
}

export function VolunteerModal({ onClose, onSubmit }: VolunteerModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

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
            style={{ background: '#E8C0CC' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#E8C0CC' }}
          />
        </div>

        <h2
          className="mb-2"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 600,
            color: '#6B1A35'
          }}
        >
          Join the movement 🌸
        </h2>

        <p
          className="mb-5"
          style={{
            fontSize: '13px',
            color: '#D4537E'
          }}
        >
          Fill in your details and we'll reach out to you
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pb-2 bg-transparent border-0 border-b outline-none"
              style={{
                borderBottomColor: '#E8C0CC',
                fontSize: '13px',
                color: '#6B1A35'
              }}
            />
            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pb-2 bg-transparent border-0 border-b outline-none"
              style={{
                borderBottomColor: '#E8C0CC',
                fontSize: '13px',
                color: '#6B1A35'
              }}
            />
            <input
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pb-2 bg-transparent border-0 border-b outline-none"
              style={{
                borderBottomColor: '#E8C0CC',
                fontSize: '13px',
                color: '#6B1A35'
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 mt-7"
            style={{
              background: '#C9821A',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: '999px'
            }}
          >
            I want to help →
          </button>
        </form>
      </div>
    </div>
  );
}
