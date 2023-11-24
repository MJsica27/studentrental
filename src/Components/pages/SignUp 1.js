import React, { useState } from 'react';  
import Modal from 'react-modal';
import './SignUp.css';

const SignUp = ({ isOpen, handleClose }) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={handleClose}
    contentLabel="Sign Up Modal"
    className="modal"
    overlayClassName="overlay"
    >
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
            onClick={() => console.log('Go back')}
          >
            ← Back
          </p>

          {}
          <img src="cit.png" alt="Logo" style={{ width: '100px', height: '100px', marginBottom: '20px' }} />

          {}
          <p style={{ margin: '5px', fontSize: '24px', fontWeight: 'bold' }}>Create account</p>

          {}
          <input type="text" placeholder="Firstname" style={{ margin: '10px' }} />

          {}
          <input type="text" placeholder="Lastname" style={{ margin: '10px' }} />

          {}
          <input type="text" placeholder="Email" style={{ margin: '10px' }} />

          {}
          <input type="text" placeholder="Gender" style={{ margin: '10px' }} />

          {}
          <input type="text" placeholder="Address" style={{ margin: '10px' }} />

          {}
          <div style={{ position: 'relative', width: '70%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create Password"
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

          {}
          <div style={{ position: 'relative', width: '70%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
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

          {}
          <button className="continue-btn" onClick={handleClose}>
            Continue
          </button>

          {}
<p style={{ color: 'gray', fontSize: '10px', marginTop: '10px' }}>
  By signing up, I have read and agree to{' '}
  <span
    style={{ color: 'blue', cursor: 'pointer', fontSize: '10px' }}
    onClick={() => window.open('your-terms-and-conditions-url', '_blank')}
  >
    Terms
  </span>
  {' and '}
  <span
    style={{ color: 'blue', cursor: 'pointer', fontSize: '10px' }}
    onClick={() => window.open('https://www.facebook.com/?stype=lo&deoia=1&jlou=Afe7CmG6a_pJvH0lEWWLw8Gx9cQQTYXlh28Puaf5fd7gEbbRSIaquSJGiOGd9O264g2XSRaubhm-_6Nf8y2NMqtjjOWhfScv_6zIQrLZUbOoEQ&smuh=49970&lh=Ac-M7wDKSNQwvIeelms', '_blank')}
  >
    Privacy Policy
  </span>
</p>

        </div>
      </div>
    </Modal>
  );
};

export default SignUp;
