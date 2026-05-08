import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LandingScreen } from './components/LandingScreen';
import { ChatScreen } from './components/ChatScreen';
import { DesktopLandingScreen } from './components/DesktopLandingScreen';
import { DesktopChatScreen } from './components/DesktopChatScreen';
import { AboutScreen } from './components/AboutScreen';
import { VolunteerModal } from './components/VolunteerModal';
import { SuccessModal } from './components/SuccessModal';
import { useIsMobile } from './components/ui/use-mobile';

type Screen = 'landing' | 'chat' | 'about';
type Modal = 'volunteer' | 'success' | null;

export default function App() {
  const isMobile = useIsMobile();
  const [screen, setScreen] = useState<Screen>('landing');
  const [modal, setModal] = useState<Modal>(null);

  const handleStart = () => {
    setScreen('chat');
  };

  const handleVolunteerClick = () => {
    setModal('volunteer');
  };

  const handleVolunteerSubmit = () => {
    setModal('success');
  };

  const handleCloseModal = () => {
    setModal(null);
  };

  const handleNavigate = (page: string) => {
    switch (page) {
      case 'home':
        setScreen('landing');
        break;
      case 'volunteer':
      case 'donate':
        setModal('volunteer');
        break;
      case 'projects':
        setScreen('chat');
        break;
      case 'about':
        setScreen('about');
        break;
    }
  };

  return (
    <div className="w-full h-screen flex relative overflow-hidden" style={{ background: '#FFF8F5' }}>
      {isMobile ? (
        /* Mobile Layout - No Sidebar */
        <div className="flex-1 h-full">
          {screen === 'landing' && <LandingScreen onStart={handleStart} />}
          {screen === 'chat' && <ChatScreen onVolunteerClick={handleVolunteerClick} />}
          {screen === 'about' && <AboutScreen />}
        </div>
      ) : (
        /* Desktop Layout - Sidebar + Content */
        <>
          <Sidebar onNavigate={handleNavigate} />
          <div className="flex-1 h-full">
            {screen === 'landing' && <DesktopLandingScreen onStart={handleStart} />}
            {screen === 'chat' && <DesktopChatScreen onVolunteerClick={handleVolunteerClick} />}
            {screen === 'about' && <AboutScreen />}
          </div>
        </>
      )}

      {/* Modals */}
      {modal === 'volunteer' && (
        <VolunteerModal onClose={handleCloseModal} onSubmit={handleVolunteerSubmit} />
      )}

      {modal === 'success' && <SuccessModal onClose={handleCloseModal} />}
    </div>
  );
}
