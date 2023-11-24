import React, { useState } from 'react';
import './App.css';
import SignUpPage from './SignUpPage';
import { Link } from 'react-router-dom';

const App = () => {     
  const [showPassword, setShowPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = () => {
    console.log('Logging in...');
    return <Link to="/login" />;
  };

  const handleFacebookLogin = () => {
    console.log('Logging in with Facebook...');
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google...');
  };

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = () => {
    setShowSignUp(false); 
  };
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {}
      <div className="left-side">
        {}
        <img src="login.png" alt="Your Image" />
      </div>

      {}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {}
        <p
          style={{
            margin: '5px',
            fontSize: '15px',
            alignSelf: 'flex-start',
            marginLeft: '10px',
            marginTop: '10px',
            cursor: 'pointer',
          }}
           onClick={handleBack} 
        >
          ← Back
        </p>

        
        <img src="cit.png" alt="Logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />
        <p style={{ margin: '5px', fontSize: '24px', fontWeight: 'bold' }}>Sign In</p>

        <input type="text" placeholder="Email" style={{ margin: '10px' }} />

        <div style={{ position: 'relative', width: '70%' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            style={{
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              boxSizing: 'border-box',
            }}
          />
          <button onClick={togglePasswordVisibility} className="password-toggle-btn">
            {showPassword ? '👁️' : '🔒'}
          </button>
        </div>

        <button onClick={handleLogin} style={{ margin: '10px' }}>
          Log in
        </button>

        <hr style={{ width: '80%', margin: '10px' }} />

        <button
          onClick={() => window.open('https://www.facebook.com/', '_blank')}
          style={{
            margin: '10px',
            backgroundColor: '#ffffff',
            color: '#333333',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src="fb.png" alt="Facebook Logo" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          Continue with Facebook
        </button>

        <button
         onClick={() => window.open('https://accounts.google.com/v3/signin/identifier?flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=en-GB&ifkv=ASKXGp0NS0lCg2GKStzZJtpNQLJkCtX_uvuKgwa28pJvlQcgGjGF4THv1wikERGTWGK6AefpzxWYtQ&dsh=S268797462%3A1700722633916428&theme=glif', '_blank')}
          style={{
            margin: '10px',
            backgroundColor: '#ffffff',
            color: '#333333',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src="google.png" alt="Google Logo" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
          Continue with Google
        </button>

        <p style={{ margin: '10px' }}>
          Don't have an account?{' '}
          <span onClick={handleSignUp} style={{ color: 'blue', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>

        {showSignUp && <SignUpPage handleClose={() => setShowSignUp(false)} />}
      </div>
    </div>
  );
};

export default App;