import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import phone_icon from '../Assets/phone.png';
import top_icon from '../Assets/top.png';

const LoginSignup = () => {
  const navigate = useNavigate(); // ✅ move this inside the component

  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="container">
      <div className="topbox">
        <p>Blue House Tech Recharge</p>
        <img src={top_icon} alt="" />
      </div>

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {action === "Sign Up" ? null : <div className="welcome">Welcome Back!</div>}
      {action === "Login" ? null : <div className="welcome">Referred by <span>System</span></div>}

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="user-icon" />
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="email-icon" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        {action === "Login" ? null : (
          <div className="input">
            <img src={phone_icon} alt="phone-icon" />
            <input type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        )}

        <div className="input">
          <img src={password_icon} alt="password-icon" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {action === "Sign Up" ? null : (
          <div className="lower">
            <label className="custom-radio">
              <input type="radio" name="option" />
              <span className="radio-mark"></span>
              Remember Me
            </label>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
          </div>
        )}

        {action === "Login" && email && password && (
        <button className="done" onClick={() => navigate('/dashboard')}>
          Sign In
        </button>
        )}

        {action === "Sign Up" && name && email && phone && password && (
        <button className="done" onClick={() => alert("Signed Up!")}>
          Submit
        </button>
        )}


        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
        </div>
      </div>

      
    </div>
  );
};

export default LoginSignup;
