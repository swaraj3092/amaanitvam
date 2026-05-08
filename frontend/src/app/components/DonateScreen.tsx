import { motion } from 'framer-motion';
import { HeartHandshake, ArrowRight } from 'lucide-react';
import { TopBar } from './TopBar';

export function DonateScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#FFF8F5' }}>
      <TopBar />
      
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 py-12 flex justify-center items-center">
        <motion.div 
          className="max-w-2xl w-full p-8 md:p-12 rounded-3xl relative overflow-hidden"
          style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 20px 40px rgba(107, 26, 53, 0.05)' }}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
              style={{ background: 'linear-gradient(135deg, #D4537E, #6B1A35)' }}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <HeartHandshake size={36} color="white" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Fuel the Change
            </motion.h1>
            
            <motion.p 
              className="text-lg mb-10 max-w-lg"
              style={{ color: '#885164', lineHeight: '1.6' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your contribution directly empowers underprivileged youth through Project Shiksha and Project Manthan. Every donation builds a brighter, self-sustaining future.
            </motion.p>
            
            <motion.div 
              className="w-full space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://amaanitvam.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 group transition-all"
                style={{ background: '#6B1A35', color: 'white', fontSize: '18px', fontWeight: 500 }}
              >
                Donate via Secure Gateway
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-xs" style={{ color: '#D4537E' }}>
                100% Secure. Tax-deductible under 80G.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
