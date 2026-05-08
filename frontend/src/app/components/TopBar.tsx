import { Menu, Printer, Trash2, Settings } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearChat = () => {
    if (window.confirm('Are you sure you want to clear this conversation?')) {
      window.location.reload();
    }
  };

  return (
    <div
      className="h-[60px] flex items-center px-4 justify-between relative"
      style={{ background: '#FFFFFF', borderBottom: '0.5px solid #E8C0CC' }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden" style={{ background: '#FFF0F3', border: '0.5px solid #E8C0CC' }}>
          <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: '#6B1A35', lineHeight: '1.2' }}>
            Amaani
          </div>
          <div style={{ fontSize: '11px', color: '#D4537E', lineHeight: '1.2' }}>
            Amaanitvam Foundation
          </div>
        </div>
      </div>
      
      <div className="relative" ref={menuRef}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-pink-50 transition-colors"
        >
          <Menu size={20} style={{ color: '#6B1A35' }} />
        </button>

        {isOpen && (
          <div 
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-pink-100"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
          >
            <button 
              onClick={() => { setIsOpen(false); window.print(); }}
              className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-pink-50 text-gray-700 transition-colors"
            >
              <Printer size={16} /> Export Chat
            </button>
            <button 
              onClick={() => { setIsOpen(false); alert('Voice options are automatically managed by your device settings.'); }}
              className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-pink-50 text-gray-700 transition-colors"
            >
              <Settings size={16} /> Voice Settings
            </button>
            <div className="h-px bg-pink-100 my-1"></div>
            <button 
              onClick={handleClearChat}
              className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-red-50 text-red-600 transition-colors"
            >
              <Trash2 size={16} /> Clear Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
