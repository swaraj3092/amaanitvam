import { useState } from 'react';

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Chat with Amaani' },
    { id: 'donate', label: 'Donate' },
    { id: 'volunteer', label: 'Volunteer' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    onNavigate?.(id);
  };

  return (
    <div
      className="w-[320px] h-full flex flex-col shadow-xl z-20"
      style={{ background: '#6B1A35' }}
    >
      {/* Logo Section */}
      <div className="pt-10 pb-14 flex flex-col items-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 overflow-hidden"
          style={{
            background: '#FFF0F3',
            border: '0.5px solid #E8C0CC'
          }}
        >
          <img src="/logo.png" alt="Amaanitvam Logo" className="w-full h-full object-cover" />
        </div>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            fontWeight: 600,
            color: '#FFF0F3',
            textAlign: 'center',
            letterSpacing: '0.5px'
          }}
        >
          Amaanitvam
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-6">
        {navItems.map((item, index) => (
          <div key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-5 py-4 mb-2 relative group"
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#FFF0F3',
                opacity: activePage === item.id ? 1 : 0.75,
                borderLeft: activePage === item.id ? '4px solid #D4537E' : '4px solid transparent',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (activePage !== item.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {item.label}
            </button>
            {index < navItems.length - 1 && (
              <div
                className="mx-4 my-2"
                style={{
                  height: '1px',
                  background: '#FFFFFF',
                  opacity: 0.15
                }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="pb-6 px-4 flex flex-col items-center">
        <a 
          href="https://amaanitvam.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mb-4 text-sm hover:underline transition-all flex items-center gap-1"
          style={{ color: '#E8C0CC' }}
        >
          Visit Original Website ↗
        </a>
        <div
          className="text-center"
          style={{
            fontSize: '10px',
            color: '#FFF0F3',
            opacity: 0.4,
            lineHeight: '1.4'
          }}
        >
          Made for Amaanitvam Foundation
        </div>
      </div>
    </div>
  );
}
