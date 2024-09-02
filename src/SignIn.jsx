import React from 'react';
import './SignIn.css';


const SignIn = () => {
  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form>
        <div>
          <label><b>Email:</b></label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label><b>Password:</b></label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
