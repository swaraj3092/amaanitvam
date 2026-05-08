import { motion } from 'framer-motion';
import { Heart, Users, Globe2, Sparkles } from 'lucide-react';
import { TopBar } from './TopBar';

export function AboutScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <div className="w-full h-full flex justify-center" style={{ background: '#FFF8F5' }}>
      <div className="w-full h-full flex flex-col px-4 md:px-8 lg:px-16 overflow-y-auto">
        <div className="sticky top-0 z-10">
          <TopBar />
        </div>

        <motion.div 
          className="max-w-4xl mx-auto w-full py-12 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-4 font-bold" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>
              Empowering Communities,<br/>Transforming Lives
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#D4537E' }}>
              Amaanitvam Foundation is dedicated to driving sustainable social change through education, leadership, and grassroots empowerment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-3xl"
              style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: '#FFF0F3' }}>
                <Sparkles size={24} style={{ color: '#6B1A35' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#6B1A35' }}>Our Vision</h3>
              <p style={{ color: '#885164', lineHeight: '1.6' }}>
                To create a world where every individual, regardless of their background, has access to quality education, leadership opportunities, and the resources needed to realize their full potential.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-8 rounded-3xl"
              style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ background: '#FFF0F3' }}>
                <Heart size={24} style={{ color: '#6B1A35' }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#6B1A35' }}>Our Mission</h3>
              <p style={{ color: '#885164', lineHeight: '1.6' }}>
                We actively bridge the gap in underprivileged communities by launching targeted initiatives like Project Shiksha and Project Manthan to foster long-term, self-sustaining growth.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>
              Core Initiatives
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl flex items-start gap-4 transition-transform hover:-translate-y-1" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="mt-1"><Users size={24} style={{ color: '#D4537E' }} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#6B1A35' }}>Project Shiksha</h4>
                  <p style={{ color: '#885164' }}>Providing accessible, high-quality education to children in marginalized communities to ensure they have the foundational knowledge to succeed.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl flex items-start gap-4 transition-transform hover:-translate-y-1" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="mt-1"><Globe2 size={24} style={{ color: '#D4537E' }} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#6B1A35' }}>Project Manthan</h4>
                  <p style={{ color: '#885164' }}>A dedicated youth leadership program designed to mentor the next generation of changemakers, teaching them critical thinking and community organization.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
