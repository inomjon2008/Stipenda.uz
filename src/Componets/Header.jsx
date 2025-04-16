import React, { useState } from 'react';
import logo from "../assets/logo_blue.2af8415.png"

const Header = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const closeLoginForm = (event) => {
    if (event.target.id === 'login-backdrop') {
      setIsLoginFormVisible(false);
    }
  };

  return (
    <header className="flex flex-wrap justify-around items-center px-4 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img className="w-14 h-14" src={logo} alt="Logo" />
        <h2 className="text-2xl md:text-3xl font-bold">stipendiya.edu.uz</h2>
      </div>

      <button
        onClick={toggleLoginForm}
        className="mt-4 md:mt-0 w-32 h-10 bg-blue-700 text-white rounded-2xl"
      >
        Login
      </button>

      {isLoginFormVisible && (
        <>
          <div
            id="login-backdrop"
            onClick={closeLoginForm}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>

          <div
            id="login-form"
            className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-11/12 max-w-md shadow-lg z-50"
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
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full mb-3 p-2 border rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded-md"
              />
              <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
