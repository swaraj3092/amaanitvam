import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

interface DesktopLandingScreenProps {
  onStart: () => void;
}

export function DesktopLandingScreen({ onStart }: DesktopLandingScreenProps) {
  return (
    <div className="w-full h-full flex flex-row overflow-hidden" style={{ background: '#FFF8F5' }}>
      {/* Left Column: Hero Text */}
      <motion.div 
        className="w-1/2 h-full flex flex-col justify-center px-16 lg:px-24"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-sm"
          style={{ background: '#FFF0F3', border: '1.5px solid #D4537E' }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl">🪷</span>
        </motion.div>
        
        <h1
          className="text-5xl xl:text-6xl font-bold text-[#6B1A35] leading-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Empowering<br />Humanity,<br />Together.
        </h1>
        
        <p className="text-base xl:text-lg text-[#D4537E] opacity-80 mb-10 max-w-md leading-relaxed font-medium">
          Amaanitvam Foundation is dedicated to youth transformation and child education. Meet Amaani, our AI guide, to learn about our impact, volunteer, or donate.
        </p>
        
        <motion.button
          onClick={onStart}
          className="w-max px-10 py-4 text-base font-semibold text-[#FFF0F3] bg-[#6B1A35] rounded-full shadow-lg flex items-center gap-3"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(107, 26, 53, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          Talk to Amaani <span className="text-xl">🪷</span>
        </motion.button>
      </motion.div>

      {/* Right Column: Featured Projects */}
      <motion.div 
        className="w-1/2 h-full bg-[#FFF0F3] flex flex-col justify-center px-12 xl:px-20 relative overflow-hidden shadow-inner" 
        style={{ borderLeft: '1px solid #E8C0CC' }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {/* Decorative Background Blob */}
        <motion.div 
          className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-white opacity-40 blur-3xl pointer-events-none" 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <h2 className="text-2xl xl:text-3xl font-bold text-[#6B1A35] mb-8 relative z-10">
          Our Core Initiatives
        </h2>
        
        <div className="flex flex-col gap-6 w-full max-w-lg relative z-10">
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <ProjectCard
              emoji="📚"
              title="Shiksha"
              description="Providing quality education and resources for underprivileged children to build a brighter future."
              tag="Education"
              variant="shiksha"
              onLearnMore={onStart}
              className="w-full min-h-[220px] shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            />
          </motion.div>
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <ProjectCard
              emoji="🌱"
              title="Manthan"
              description="Empowering the youth through leadership training and community transformation programs."
              tag="Youth"
              variant="manthan"
              onLearnMore={onStart}
              className="w-full min-h-[220px] shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between"
            />
          </motion.div>
        </div>
        
        <div className="absolute bottom-6 right-8 text-xs text-[#D4537E] font-semibold opacity-50 tracking-wider">
          POWERED BY AI
        </div>
      </motion.div>
    </div>
  );
}
