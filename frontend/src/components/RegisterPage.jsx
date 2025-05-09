import React, { useState } from 'react';

const RegisterPage = ({ setView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [focusedName, setFocusedName] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || 'Erreur lors de l’inscription');
      }

      setSuccessMessage("Compte créé avec succès !");
      setTimeout(() => setView('login'), 2000); // Redirect after 2s
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-orbitron">
      <div className="bg-white/5 p-10 rounded-xl backdrop-blur-md border border-white/10 text-white w-full max-w-md shadow-[0_0_30px_rgba(0,255,255,0.2)]">
        <h2 className="text-center text-cyan-300 text-2xl mb-6">Créer un compte</h2>

        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-400 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative mb-6">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedName(true)}
              onBlur={() => setFocusedName(name !== '')}
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

          {/* Email Field */}
          <div className="relative mb-6">
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

          {/* Password Field */}
          <div className="relative mb-6">
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

          {/* Confirm Password Field */}
          <div className="relative mb-6">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={() => setFocusedConfirmPassword(true)}
              onBlur={() => setFocusedConfirmPassword(confirmPassword !== '')}
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
              Confirmez le mot de passe
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

        <div className="text-center text-sm mt-6">
          Déjà inscrit ?{' '}
          <button
            className="text-cyan-300 underline"
            onClick={() => setView('login')}
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
