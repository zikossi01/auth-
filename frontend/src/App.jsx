import React, { useState, useEffect } from 'react';
import ComingSoon from './components/ComingSoon';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const App = () => {
  const [view, setView] = useState('register'); // Set initial view to 'register'
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const generatedParticles = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 6 + 2;
      generatedParticles.push({
        size,
        left: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 5}s`,
        background: Math.random() > 0.5 ? '#00ffe0' : '#0ff'
      });
    }
    setParticles(generatedParticles);
  }, []);

  const renderParticles = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-floatUp"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            background: p.background,
            animationDuration: p.duration
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes floatUp {
            0% { transform: translateY(100vh) scale(0.5); opacity: 0.2; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }

          .animate-floatUp {
            animation: floatUp linear infinite;
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1.2s ease-out forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 2s ease-out 0.5s forwards;
          }

          .glitch-title::before,
          .glitch-title::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
          }

          .glitch-title::before {
            left: 2px;
            color: #f0f;
            animation: glitchTop 2s infinite linear;
          }

          .glitch-title::after {
            left: -2px;
            color: #0ff;
            animation: glitchBottom 2s infinite linear;
          }

          @keyframes glitchTop {
            0% { clip-path: inset(0 0 90% 0); }
            100% { clip-path: inset(0 0 0% 0); }
          }

          @keyframes glitchBottom {
            0% { clip-path: inset(90% 0 0 0); }
            100% { clip-path: inset(0% 0 0 0); }
          }
        `}
      </style>

      {view === 'register' && <RegisterPage setView={setView} />}
      {view === 'login' && <LoginPage setView={setView} />}
      {view === 'comingSoon' && <ComingSoon setView={setView} />}
    </>
  );
};

export default App;
