import React, { useState } from 'react';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import MicroInvesting from './components/MicroInvesting';
import './components/Fintech.css';

function App() {
  const [currentView, setCurrentView] = useState('onboarding'); // 'onboarding', 'dashboard', 'micro-investing'

  const handleOnboardingComplete = () => {
    setCurrentView('dashboard');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'onboarding':
        return <Onboarding onComplete={handleOnboardingComplete} />;
      case 'dashboard':
        return <Dashboard />;
      case 'micro-investing':
        return <MicroInvesting />;
      default:
        return <Onboarding onComplete={handleOnboardingComplete} />;
    }
  };

  return (
    <div className="fintech-container">
      {renderCurrentView()}
    </div>
  );
}

export default App;
