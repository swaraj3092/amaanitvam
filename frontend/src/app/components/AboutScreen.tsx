import { motion } from 'framer-motion';
import { Target, BookOpen, Laptop, GraduationCap, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <div className="w-full h-full flex flex-col" style={{ background: '#FFF8F5' }}>
      <TopBar />
      
      <div className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-16 pb-16">
        <motion.div 
          className="max-w-5xl mx-auto w-full pt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20 relative">
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

          {/* WHAT WE FIGHT FOR Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="text-center mb-10">
              <h3 className="text-sm tracking-widest uppercase mb-3 font-semibold" style={{ color: '#D4537E' }}>Our Mission</h3>
              <h2 className="text-4xl font-bold" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>WHAT WE FIGHT FOR</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-8 rounded-3xl" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 10px 30px rgba(107, 26, 53, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900">
                  <BookOpen size={24} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#6B1A35' }}>SCHOOL SUPPLIES</h3>
                <ul className="space-y-3" style={{ color: '#885164', fontSize: '14px' }}>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Books and stationery kits</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>School uniforms and shoes</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Backpacks and essentials</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Learning materials</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 10px 30px rgba(107, 26, 53, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900">
                  <Laptop size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#6B1A35' }}>DIGITAL LITERACY</h3>
                <ul className="space-y-3" style={{ color: '#885164', fontSize: '14px' }}>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Computer training programs</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Internet and online safety</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Coding basics for kids</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Technology access initiatives</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC', boxShadow: '0 10px 30px rgba(107, 26, 53, 0.05)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gray-900">
                  <GraduationCap size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#6B1A35' }}>SCHOLARSHIPS</h3>
                <ul className="space-y-3" style={{ color: '#885164', fontSize: '14px' }}>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Higher education scholarships</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>After-school tutoring</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Career guidance sessions</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4537E]"></div>Mentorship programs</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Our Stories & Initiatives Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>Our Stories & Initiatives</h2>
              <p className="mt-2" style={{ color: '#885164' }}>Discover our ongoing education projects making a real difference in children's lives.</p>
            </div>

            <div className="space-y-6">
              {/* Project Pravah */}
              <div className="p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ background: '#22C55E' }}>ONGOING</div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>PROJECT PRAVAH</h3>
                  <div className="flex items-center gap-1 text-sm mb-4" style={{ color: '#D4537E' }}>
                    <MapPin size={14} /> Hisar, Haryana, India
                  </div>
                  <p className="mb-6" style={{ color: '#885164', lineHeight: '1.6' }}>
                    Launching Project Pravah in Hisar by Amaanitvam Foundation — empowering children through education and care. Creating opportunities, spreading awareness, and building a brighter future.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: '#FFF0F3', color: '#D4537E' }}>23+ Children</span>
                  </div>
                </div>
              </div>

              {/* Project Manthan */}
              <div className="p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ background: '#22C55E' }}>ONGOING</div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>Project Manthan</h3>
                  <div className="flex items-center gap-1 text-sm mb-4" style={{ color: '#D4537E' }}>
                    <MapPin size={14} /> Okhala Delhi
                  </div>
                  <p className="mb-6" style={{ color: '#885164', lineHeight: '1.6' }}>
                    We started with just 4 children and a big dream. Project Manthan provides free education and guidance to help every child learn, grow, and build a brighter future.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: '#FFF0F3', color: '#D4537E' }}>60+ Children</span>
                  </div>
                </div>
              </div>

              {/* Project Shiksha */}
              <div className="p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ background: '#22C55E' }}>ONGOING</div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>Project Shiksha</h3>
                  <div className="flex items-center gap-1 text-sm mb-4" style={{ color: '#D4537E' }}>
                    <MapPin size={14} /> Houz Khas Delhi
                  </div>
                  <p className="mb-6" style={{ color: '#885164', lineHeight: '1.6' }}>
                    Project Shiksha is an educational initiative by Amaanitvam Foundation that provides free learning support to underprivileged children, helping them build knowledge, confidence, and a better future.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: '#FFF0F3', color: '#D4537E' }}>45+ Children</span>
                  </div>
                </div>
              </div>

              {/* Clothes Donation Drive */}
              <div className="p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ background: '#3B82F6' }}>COMPLETED</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>Clothes Donation Drive | Shyam Lal College eve</h3>
                  <div className="flex items-center gap-1 text-sm mb-4" style={{ color: '#D4537E' }}>
                    <MapPin size={14} /> Shyam lal college Shahdara Delhi
                  </div>
                  <p className="mb-6" style={{ color: '#885164', lineHeight: '1.6' }}>
                    Amaanitvam Foundation organized its Second Clothes Donation Drive on 14 October 2025 in collaboration with Shyam Lal College (Evening), NSS, and Viksit Bharat @2047 Society to support underprivileged communities.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: '#FFF0F3', color: '#D4537E' }}>30+ Children</span>
                  </div>
                </div>
              </div>

              {/* Ramjas College Stall */}
              <div className="p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center" style={{ background: '#FFFFFF', border: '1px solid #E8C0CC' }}>
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ background: '#3B82F6' }}>COMPLETED</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#6B1A35', fontFamily: 'var(--font-heading)' }}>Ramjas College Stall Handcrafted Items & Poster Sale</h3>
                  <div className="flex items-center gap-1 text-sm mb-4" style={{ color: '#D4537E' }}>
                    <MapPin size={14} /> Ramjas College vishwavidyala Delhi
                  </div>
                  <p className="mb-6" style={{ color: '#885164', lineHeight: '1.6' }}>
                    Our team set up a two-day stall at Ramjas College on 14th and 15th November, where children and volunteers sold handcrafted items and posters in collaboration with Dakshi Society to support social causes.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1.5 rounded-full text-sm font-medium" style={{ background: '#FFF0F3', color: '#D4537E' }}>25+ Children</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
