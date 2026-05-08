import { useState } from 'react';

interface SidebarProps {
  onNavigate?: (page: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
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
      className="w-[260px] h-full flex flex-col"
      style={{ background: '#6B1A35' }}
    >
      {/* Logo Section */}
      <div className="pt-8 pb-12 flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
          style={{
            background: '#FFF0F3',
            border: '0.5px solid #E8C0CC'
          }}
        >
          <span className="text-2xl">🪷</span>
        </div>
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '15px',
            color: '#FFF0F3',
            textAlign: 'center'
          }}
        >
          Amaanitvam
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4">
        {navItems.map((item, index) => (
          <div key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-4 py-3 mb-1 relative group"
              style={{
                fontSize: '13px',
                color: '#FFF0F3',
                opacity: activePage === item.id ? 1 : 0.75,
                borderLeft: activePage === item.id ? '3px solid #D4537E' : '3px solid transparent',
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
      <div
        className="pb-6 text-center px-4"
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
  );
}
