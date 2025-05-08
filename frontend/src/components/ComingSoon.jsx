import React from 'react';

const ComingSoon = ({ setView }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-black via-zinc-900 to-neutral-900 relative text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Particles logic */}
      </div>
      <div className="z-10 p-10 text-center bg-black/70 border-2 border-cyan-300 rounded-xl shadow-[0_0_20px_#00ffe088,0_0_40px_#00ffe044] animate-fadeInUp">
        <h1
          data-text="Coming Soon"
          className="text-4xl font-bold relative text-cyan-300 tracking-wide glitch-title"
        >
          Coming Soon
        </h1>
        <p className="text-gray-300 mt-5 text-lg animate-fadeIn opacity-0">
          We’re working hard behind the scenes to bring you something amazing.
        </p>
        <button
          onClick={() => setView('login')}
          className="btn relative z-10 mt-8 px-8 py-3 rounded-full bg-cyan-300 text-black font-medium shadow-[0_0_10px_#00ffe0] hover:after:scale-125 transition-transform"
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
