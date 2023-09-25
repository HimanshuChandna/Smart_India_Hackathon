import React from 'react'
import './LoginSignup.css'



const LoginSignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs"></div>
        <div className="input">
          {/* <img src={user_icon} alt=""/> */}
          <input type="text" placeholder='Name'/>
        </div>
        <div className="input">
          {/* <img src={email_icon} alt=""/> */}
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          {/* <img src={password_icon} alt=""/> */}
          <input type="password" placeholder='Password'/>
        </div>
    
      <div className="forget-password">Forget Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div> 
    </div>
  )
}

export default LoginSignup
