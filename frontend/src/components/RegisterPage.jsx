import React, { useState } from 'react';

const RegisterPage = ({ setView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [focusedName, setFocusedName] = useState(false); // track focus state
  const [focusedEmail, setFocusedEmail] = useState(false); // track focus state
  const [focusedPassword, setFocusedPassword] = useState(false); // track focus state
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false); // track focus state

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-orbitron">
      {/* Container */}
      <div className="bg-white/5 p-10 rounded-xl backdrop-blur-md border border-white/10 text-white w-full max-w-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
        <h2 className="text-center text-cyan-300 text-2xl mb-6">Créer un compte</h2>
        
        {/* Form */}
        <form>
          {/* Full Name Input */}
          <div className="relative mb-6 input-group">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedName(true)}  // set focus state to true
              onBlur={() => setFocusedName(name !== '')}  // reset focus state based on value
              required
              placeholder=" "
              className="w-full p-3 bg-transparent border border-cyan-300 rounded text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="name"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#0f0c29] px-1 text-gray-400 text-sm transition-all pointer-events-none ${
                focusedName || name ? 'top-[-10px] left-2 text-cyan-300 text-xs' : ''
              }`}
            >
              Nom complet
            </label>
          </div>

          {/* Email Input */}
          <div className="relative mb-6 input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedEmail(true)}  // set focus state to true
              onBlur={() => setFocusedEmail(email !== '')}  // reset focus state based on value
              required
              placeholder=" "
              className="w-full p-3 bg-transparent border border-cyan-300 rounded text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="email"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#0f0c29] px-1 text-gray-400 text-sm transition-all pointer-events-none ${
                focusedEmail || email ? 'top-[-10px] left-2 text-cyan-300 text-xs' : ''
              }`}
            >
              Adresse e-mail
            </label>
          </div>

          {/* Password Input */}
          <div className="relative mb-6 input-group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedPassword(true)}  // set focus state to true
              onBlur={() => setFocusedPassword(password !== '')}  // reset focus state based on value
              required
              placeholder=" "
              className="w-full p-3 bg-transparent border border-cyan-300 rounded text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="password"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#0f0c29] px-1 text-gray-400 text-sm transition-all pointer-events-none ${
                focusedPassword || password ? 'top-[-10px] left-2 text-cyan-300 text-xs' : ''
              }`}
            >
              Mot de passe
            </label>
          </div>

          {/* Confirm Password Input */}
          <div className="relative mb-6 input-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusedConfirmPassword(true)}  // set focus state to true
              onBlur={() => setFocusedConfirmPassword(confirmPassword !== '')}  // reset focus state based on value
              required
              placeholder=" "
              className="w-full p-3 bg-transparent border border-cyan-300 rounded text-white outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <label
              htmlFor="confirmPassword"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#0f0c29] px-1 text-gray-400 text-sm transition-all pointer-events-none ${
                focusedConfirmPassword || confirmPassword ? 'top-[-10px] left-2 text-cyan-300 text-xs' : ''
              }`}
            >
              Confirmer le mot de passe
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 p-3 bg-cyan-300 text-[#0f0c29] font-bold rounded hover:bg-cyan-400 transition"
          >
            S'inscrire
          </button>
        </form>

        {/* Footer */}
        <div className="text-center text-sm mt-6">
          Déjà un compte ?{' '}
          <button
            className="text-cyan-300 underline"
            onClick={() => setView('login')}
          >
            Se connecter
          </button>
          <br />
          <button
            className="text-xs text-gray-300 mt-2 underline"
            onClick={() => setView('comingSoon')}
          >
            Revenir à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
