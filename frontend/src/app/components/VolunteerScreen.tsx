import { motion } from 'framer-motion';
import { Users, Send } from 'lucide-react';
import { TopBar } from './TopBar';

export function VolunteerScreen() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#FFF8F5' }}>
      <TopBar />
      
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 py-12 flex justify-center items-start">
        <motion.div 
          className="max-w-2xl w-full p-8 md:p-12 rounded-3xl relative overflow-hidden mt-8"
          style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 20px 40px rgba(107, 26, 53, 0.05)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
              style={{ background: '#FFF0F3' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <Users size={30} style={{ color: '#D4537E' }} />
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-3 text-center"
              style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join the Movement 🌸
            </motion.h1>
            
            <motion.p 
              className="text-base mb-8 text-center"
              style={{ color: '#885164' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Fill in your details to become an Amaanitvam Volunteer. We will reach out to you with upcoming ground initiatives!
            </motion.p>
            
            <motion.div 
              className="w-full space-y-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="https://www.amaanitvam.org/ways-to-help/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl flex items-center justify-center gap-2 group transition-all"
                style={{ background: '#C9821A', color: 'white', fontSize: '16px', fontWeight: 600 }}
              >
                Join the Movement via Official Site
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
