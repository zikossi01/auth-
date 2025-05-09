import React, { useState } from 'react';

const LoginPage = ({ setView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here, for example:
    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-orbitron overflow-hidden">
      <div className="bg-white/5 p-10 rounded-xl backdrop-blur-md border border-white/10 text-white w-full max-w-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
        <h2 className="text-center text-cyan-300 text-2xl mb-6">Connexion à 404.js</h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6 input-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedEmail(true)}
              onBlur={() => setFocusedEmail(email !== '')}
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

          <div className="relative mb-6 input-group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedPassword(true)}
              onBlur={() => setFocusedPassword(password !== '')}
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

          <button
            type="submit"
            className="w-full mt-2 p-3 bg-cyan-300 text-[#0f0c29] font-bold rounded hover:bg-cyan-400 transition"
          >
            Se connecter
          </button>
        </form>

        <div className="text-center text-sm mt-6">
          Nouveau chez 404.js ?{' '}
          <button
            className="text-cyan-300 underline"
            onClick={() => setView('register')}
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;