// App.js
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
    setShowSignUp(false); // Close the SignUp modal
    // Add any additional logic to navigate back to the login page if needed
  };
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side for the picture */}
      <div className="left-side">
        {/* Add your picture here */}
        <img src="login.png" alt="Your Image" />
      </div>

      {/* Right side for login */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* "← Back" link */}
        <p
          style={{
            margin: '5px',
            fontSize: '15px',
            alignSelf: 'flex-start',
            marginLeft: '10px',
            marginTop: '10px',
            cursor: 'pointer',
          }}
           onClick={handleBack} // Pass the handleBack function
        >
          ← Back
        </p>

        {/* Logo image */}
        <img src="cit.png" alt="Logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />

        {/* Sign In text */}
        <p style={{ margin: '5px', fontSize: '24px', fontWeight: 'bold' }}>Sign In</p>

        {/* Email input */}
        <input type="text" placeholder="Email" style={{ margin: '10px' }} />

        {/* Password input with toggle button */}
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

        {/* Login button */}
        <button onClick={handleLogin} style={{ margin: '10px' }}>
          Log in
        </button>

        {/* Thin line */}
        <hr style={{ width: '80%', margin: '10px' }} />

        {/* Continue with Facebook button */}
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

        {/* Continue with Google button */}
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

        {/* Sign Up text */}
        <p style={{ margin: '10px' }}>
          Don't have an account?{' '}
          <span onClick={handleSignUp} style={{ color: 'blue', cursor: 'pointer' }}>
            Sign Up
          </span>
        </p>

        {/* Render SignUpPage component conditionally */}
        {showSignUp && <SignUpPage handleClose={() => setShowSignUp(false)} />}
      </div>
    </div>
  );
};

export default App;