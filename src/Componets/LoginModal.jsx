// 📁 components/LoginModal.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isVisible, closeLoginForm, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Oddiy tekshiruv
    if (username === 'admin' && password === '123456') {
      onLoginSuccess();        // 🔥 isLoggedIn = true
      closeLoginForm();        // 🔒 Modalni yopamiz
      navigate('/crm');        // 🚀 CRM sahifasiga yo‘naltiramiz
    } else {
      alert('Login yoki parol noto‘g‘ri!');
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            id="login-backdrop"
            onClick={closeLoginForm}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            id="login-form"
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-11/12 max-w-md shadow-lg z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Login</h2>
              <button
                id="close-btn"
                onClick={closeLoginForm}
                className="text-gray-500 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                className="w-full mb-3 p-2 border rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
