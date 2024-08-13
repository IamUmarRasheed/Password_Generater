import React from 'react';
import './App.css';
import Passwordgen from './components/Passwordgen';

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-500 to-blue-800 flex items-center justify-center">
      <Passwordgen />
    </div>
  );
}

export default App;
