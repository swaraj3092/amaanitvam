import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { LandingScreen } from './components/LandingScreen';
import { ChatScreen } from './components/ChatScreen';
import { DesktopLandingScreen } from './components/DesktopLandingScreen';
import { DesktopChatScreen } from './components/DesktopChatScreen';
import { AboutScreen } from './components/AboutScreen';
import { DonateScreen } from './components/DonateScreen';
import { VolunteerScreen } from './components/VolunteerScreen';
import { useIsMobile } from './components/ui/use-mobile';

type Screen = 'landing' | 'chat' | 'about' | 'donate' | 'volunteer';

export default function App() {
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<Screen>('landing');

  const handleStart = () => {
    setScreen('chat');
  };

  const handleNavigate = (page: string) => {
    switch (page) {
      case 'home':
        setScreen('landing');
        break;
      case 'donate':
        setScreen('donate');
        break;
      case 'volunteer':
        setScreen('volunteer');
        break;
      case 'projects':
        setScreen('chat');
        break;
      case 'about':
        setScreen('about');
        break;
    }
  };

  useEffect(() => {
    const handleNav = (e: any) => handleNavigate(e.detail);
    window.addEventListener('navigate', handleNav);
    return () => window.removeEventListener('navigate', handleNav);
  }, []);

  return (
    <div className="w-full h-screen flex relative overflow-hidden" style={{ background: '#FFF8F5' }}>
      {isMobile ? (
        /* Mobile Layout - No Sidebar */
        <div className="flex-1 h-full">
          {screen === 'landing' && <LandingScreen onStart={handleStart} />}
          {screen === 'chat' && <ChatScreen onVolunteerClick={() => setScreen('volunteer')} />}
          {screen === 'about' && <AboutScreen />}
          {screen === 'donate' && <DonateScreen />}
          {screen === 'volunteer' && <VolunteerScreen />}
        </div>
      ) : (
        /* Desktop Layout - Sidebar + Content */
        <>
          <Sidebar onNavigate={handleNavigate} />
          <div className="flex-1 h-full">
            {screen === 'landing' && <DesktopLandingScreen onStart={handleStart} />}
            {screen === 'chat' && <DesktopChatScreen onVolunteerClick={() => setScreen('volunteer')} />}
            {screen === 'about' && <AboutScreen />}
            {screen === 'donate' && <DonateScreen />}
            {screen === 'volunteer' && <VolunteerScreen />}
          </div>
        </>
      )}
    </div>
  );
}
