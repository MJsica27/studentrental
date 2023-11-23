// SignUpPage.js
import React from 'react';
import SignUp from './SignUp';

const SignUpPage = ({ handleClose }) => {
  return (
    <div>
     
      <SignUp isOpen={true} handleClose={handleClose} />
    </div>
  );
};

export default SignUpPage;