import { Menu, Printer, Trash2, Settings, Home, MessageSquare, Info, Heart, Users } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useIsMobile } from './ui/use-mobile';
import { motion, AnimatePresence } from 'framer-motion';

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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

  const nav = (page: string) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Chat with Amaani', icon: MessageSquare },
    { id: 'about', label: 'About', icon: Info },
    { id: 'donate', label: 'Donate', icon: Heart },
    { id: 'volunteer', label: 'Volunteer', icon: Users },
  ];

  return (
    <div
      className="h-[60px] shrink-0 flex items-center px-4 justify-between relative"
      style={{ background: '#FFFFFF', borderBottom: '0.5px solid #E8C0CC', zIndex: 50 }}
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

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-[100] border border-pink-100 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
                  <div className="px-4 py-2 text-xs font-bold tracking-wider text-pink-400 uppercase">
                    Navigation
                  </div>
                  {navItems.map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => nav(item.id)}
                      className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-pink-50 text-gray-700 transition-colors"
                    >
                      <item.icon size={16} className="text-pink-600" /> 
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                  <div className="h-px bg-pink-100 my-2"></div>

              <div className="px-4 py-2 text-xs font-bold tracking-wider text-pink-400 uppercase">
                Settings
              </div>
              <button 
                onClick={() => { setIsOpen(false); window.print(); }}
                className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-pink-50 text-gray-700 transition-colors"
              >
                <Printer size={16} className="text-gray-500" /> 
                <span className="font-medium">Export Chat</span>
              </button>
              <button 
                onClick={() => { setIsOpen(false); alert('Voice options are automatically managed by your device settings.'); }}
                className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-pink-50 text-gray-700 transition-colors"
              >
                <Settings size={16} className="text-gray-500" /> 
                <span className="font-medium">Voice Settings</span>
              </button>
              
              <div className="h-px bg-pink-100 my-2"></div>
              
              <button 
                onClick={handleClearChat}
                className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-red-50 text-red-600 transition-colors group"
              >
                <Trash2 size={16} className="group-hover:text-red-700" /> 
                <span className="font-medium group-hover:text-red-700">Clear Chat</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
