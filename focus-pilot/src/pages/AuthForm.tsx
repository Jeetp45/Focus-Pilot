import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
    const requestBody = isRegistering
      ? { username, email, password }
      : { email, password };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    const data = await res.json();
    if (res.ok) {
      login(data.token, data.user);
      navigate('/');
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900'>
      <form
        onSubmit={handleSubmit}
        className='bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm space-y-4'
      >
        <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-white'>
          {isRegistering ? 'Register to FocusPilot' : 'Login to FocusPilot'}
        </h2>
        {isRegistering && (
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            className='w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white'
          />
        )}
        <input
          className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          className='w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button
          className='w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-semibold py-2 px-4 rounded-md transition'
          type='submit'
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>
        <p className='text-center text-sm text-gray-600 dark:text-gray-400'>
          {isRegistering
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <button
            className='text-blue-500 hover:underline hover:cursor-pointer'
            type='button'
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
