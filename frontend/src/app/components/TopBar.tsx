import { Menu } from 'lucide-react';

export function TopBar() {
  return (
    <div
      className="h-[60px] flex items-center px-4 justify-between"
      style={{ background: '#FFFFFF', borderBottom: '0.5px solid #E8C0CC' }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: '#FFF0F3', border: '0.5px solid #E8C0CC' }}>
          <span className="text-base">🪷</span>
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
      <Menu size={20} style={{ color: '#6B1A35' }} />
    </div>
  );
}
