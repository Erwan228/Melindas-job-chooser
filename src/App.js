import React, { useState } from 'react';
import Home from './Home';
import Filter from './Filter';
import Result from './Result';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const changeView = (view) => {
    setCurrentView(view)
  }

  return (
    <div className="App">
      {currentView === 'home' && <Home changeView={changeView} currentView={currentView} />}
      {currentView === 'settings' && <Filter />}
      {currentView === 'profile' && <Result />}
    </div>
  );
}

export default App;
