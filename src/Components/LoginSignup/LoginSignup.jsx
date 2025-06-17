import React, { useState } from "react";
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import phone_icon from '../Assets/phone.png'
import top_icon from '../Assets/top.png'

const LoginSignup = () => {

    const [action,setAction] = useState("Login");
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

            {action==="Sign Up"?<div></div>:<div className="welcome">Welcome Back!</div>}

            {action==="Login"?<div></div>:<div className="welcome">Referred by <span>System</span></div>}

            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt="user-icon" />
                    <input type="text" placeholder="Your Name"/>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="email-icon" />
                    <input type="email" placeholder="Email"/>
                </div>

                {action==="Login"?<div></div>:<div className="input">
                    <img src={phone_icon} alt="phone-icon" />
                    <input type="tel" placeholder="Mobile Number"/>
                </div>}
                
                <div className="input">
                    <img src={password_icon} alt="password-icon" />
                    <input type="password" placeholder="Password"/>
                </div>
                
                {action==="Sign Up"?<div></div>:
                <div className="lower"><div>
                    <label class="custom-radio">
                        <input type="radio" name="option"/>
                        <span class="radio-mark"></span>
                        Remember Me
                    </label></div>
                    <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
                </div>
                }
                

                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>


        </div>
    )
}

export default LoginSignup