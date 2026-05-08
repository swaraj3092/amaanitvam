interface QuickChipProps {
  label: string;
  icon?: string;
  onClick?: () => void;
}

export function QuickChip({ label, icon, onClick }: QuickChipProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 whitespace-nowrap flex items-center gap-1"
      style={{
        background: '#FFFFFF',
        border: '1px solid #D4537E',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 500,
        color: '#6B1A35'
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
