import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to generate CAPTCHA
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // First, validate username and password
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
      });

      if (!response.data.success) {
        setError('Invalid username or password');
        return;
      }

      // If username and password are correct, validate CAPTCHA
      if (captchaInput.toLowerCase() !== captcha.toLowerCase()) {
        setError('Invalid CAPTCHA');
        setCaptcha(generateCaptcha()); // Refresh CAPTCHA
        setCaptchaInput('');
        return;
      }

      // If both username/password and CAPTCHA are correct, proceed to dashboard
      navigate('/dashboard', { state: { username } });

    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to log in. Please try again.');
      setCaptcha(generateCaptcha()); // Refresh CAPTCHA on error
      setCaptchaInput('');
    }
  };

  // Initial CAPTCHA generation on component mount
  useState(() => {
    setCaptcha(generateCaptcha());
  }, []);

  return (
    <div className='cont'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='Username'>Username:</label>
          <input
            type="text" className='uname'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='Password'>Password:</label>
          <input
            type="password" className='pass'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label >CAPTCHA:</label>
          <div  className='CAPTCHA' style={{ backgroundColor: '#e2e2e2', padding: '10px', display: 'inline-block', marginBottom: '10px' }}>
            {captcha}
          </div>
          <input
            type="text" className='captcha'
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='lgn' type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signin">Create Account</Link></p>
    </div>
  );
};

export default Login;
