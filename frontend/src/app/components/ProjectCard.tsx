interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  tag: string;
  variant: 'shiksha' | 'manthan';
  onLearnMore?: () => void;
  className?: string;
}

export function ProjectCard({ emoji, title, description, tag, variant, onLearnMore, className }: ProjectCardProps) {
  const styles = variant === 'shiksha'
    ? {
        bg: '#F0FAF5',
        border: '#E8C0CC',
        topBorder: '#1D9E75',
        titleColor: '#0F6E56',
        descColor: '#085041',
        tagBg: '#E1F5EE',
        tagColor: '#0F6E56',
        linkColor: '#0F6E56'
      }
    : {
        bg: '#FFF0F3',
        border: '#E8C0CC',
        topBorder: '#D4537E',
        titleColor: '#6B1A35',
        descColor: '#6B1A35',
        tagBg: '#FBEAF0',
        tagColor: '#993556',
        linkColor: '#D4537E'
      };

  return (
    <div
      className={`p-6 ${className || 'w-[200px]'}`}
      style={{
        background: styles.bg,
        border: `0.5px solid ${styles.border}`,
        borderTop: `3px solid ${styles.topBorder}`,
        borderRadius: '10px'
      }}
    >
      <div style={{ fontSize: '15px', fontWeight: 600, color: styles.titleColor, marginBottom: '8px', lineHeight: '1.6' }}>
        {emoji} {title}
      </div>
      <div style={{ fontSize: '13px', color: styles.descColor, opacity: 0.8, marginBottom: '16px', lineHeight: '1.6' }}>
        {description}
      </div>
      <span
        className="inline-block px-3 py-1 mb-6"
        style={{
          background: styles.tagBg,
          color: styles.tagColor,
          borderRadius: '999px',
          fontSize: '11px',
          fontWeight: 500,
          lineHeight: '1.6'
        }}
      >
        {tag}
      </span>
      <button
        onClick={onLearnMore}
        className="block w-full text-left transition-opacity hover:opacity-70"
        style={{
          fontSize: '13px',
          color: styles.linkColor,
          fontWeight: 600,
          lineHeight: '1.6',
          marginTop: 'auto'
        }}
      >
        Learn more →
      </button>
    </div>
  );
}
