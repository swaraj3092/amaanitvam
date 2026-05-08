import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';
import { TopBar } from './TopBar';

export function AboutScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#FFF8F5' }}>
      <TopBar />
      
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 pb-16">
        <motion.div 
          className="max-w-4xl mx-auto w-full pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <h3 className="text-sm tracking-widest uppercase mb-3 font-semibold" style={{ color: '#D4537E' }}>
              About Us
            </h3>
            <h1 className="text-5xl md:text-6xl mb-6 font-bold" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>
              WHO WE <span style={{ color: '#D4537E' }}>ARE</span>
            </h1>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-0.5 w-12" style={{ background: '#D4537E' }}></div>
              <div className="w-2 h-2 rotate-45" style={{ background: '#D4537E' }}></div>
              <div className="h-0.5 w-12" style={{ background: '#D4537E' }}></div>
            </div>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#6B1A35', lineHeight: '1.6' }}>
              "Humanity is Everything – together we create opportunities, spread kindness, and turn hope into action for those who need it most."
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* What We Do Section */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-10 rounded-3xl transition-transform hover:-translate-y-1"
              style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 10px 30px rgba(107, 26, 53, 0.05)' }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center" style={{ background: '#FFF0F3' }}>
                  <Heart size={28} style={{ color: '#D4537E' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>What We Do</h3>
                  <p style={{ color: '#885164', lineHeight: '1.6' }}>
                    We actively bridge the gap in underprivileged communities by launching targeted initiatives. Our focus is on long-term, self-sustaining growth that empowers individuals rather than just offering temporary relief. Through dedicated on-ground volunteering, we transform hope into measurable action.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Our Initiatives (Stories/Programs) */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-10 rounded-3xl transition-transform hover:-translate-y-1"
              style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 10px 30px rgba(107, 26, 53, 0.05)' }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center" style={{ background: '#FFF0F3' }}>
                  <BookOpen size={28} style={{ color: '#D4537E' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>Our Stories & Initiatives</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg" style={{ color: '#6B1A35' }}>Project Shiksha</h4>
                      <p style={{ color: '#885164', lineHeight: '1.5' }}>Providing accessible, high-quality education and foundational knowledge to children in marginalized communities.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg" style={{ color: '#6B1A35' }}>Project Manthan</h4>
                      <p style={{ color: '#885164', lineHeight: '1.5' }}>A dedicated youth leadership program designed to mentor the next generation of changemakers and community organizers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
