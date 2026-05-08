import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface LandingScreenProps {
  onStart: () => void;
}

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center px-6 overflow-y-auto"
      style={{ background: '#FFF8F5' }}
    >
      <motion.div 
        className="flex-1 flex flex-col items-center justify-center py-12 w-full max-w-[400px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: '#FFF0F3', color: '#D4537E', fontSize: '14px', fontWeight: 600, border: '1px solid #E8C0CC' }}
        >
          <Sparkles size={16} />
          <span>Meet Amaani, the AI Guide</span>
        </div>

        <h1
          className="text-center mb-2"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '28px',
            fontWeight: 600,
            color: '#6B1A35',
            lineHeight: '1.2'
          }}
        >
          Amaanitvam Foundation
        </h1>

        <p
          className="text-center mb-8"
          style={{
            fontSize: '14px',
            color: '#D4537E'
          }}
        >
          Humanity in every action
        </p>

        <motion.div 
          className="flex flex-col gap-3 w-full items-center mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-full">
            <ProjectCard
              emoji="📚"
              title="Shiksha"
              description="Education for underprivileged children"
              tag="Education"
              variant="shiksha"
              onLearnMore={onStart}
              className="w-full"
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-full">
            <ProjectCard
              emoji="🌱"
              title="Manthan"
              description="Youth transformation & leadership"
              tag="Youth"
              variant="manthan"
              onLearnMore={onStart}
              className="w-full"
            />
          </motion.div>
        </motion.div>

        <motion.button
          onClick={onStart}
          className="px-8 py-3.5 w-full max-w-[200px]"
          style={{
            background: '#6B1A35',
            color: '#FFF0F3',
            fontSize: '14px',
            fontWeight: 500,
            borderRadius: '999px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Talk to Amaani
        </motion.button>
      </motion.div>

      <motion.div
        className="pb-6"
        style={{ fontSize: '11px', color: '#D4537E', opacity: 0.6 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Powered by AI
      </motion.div>
    </div>
  );
}
