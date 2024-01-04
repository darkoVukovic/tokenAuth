import Auth from './auth';
import React, { useState } from 'react';

function Modal() {
  const [showRegister, setRegister] = useState(false);
  const [showLogin, setLogin] = useState(false);

  const registerBtn = () => { 
    setRegister(true);
    setLogin(false);
  }

  const loginBtn = () => {
    setLogin(true);
    setRegister(false);
  }

  //TODO make google login 
  const googleLogin = () => {
    alert("TODO");
  }

  
  return (
    <div className="auth">
      <div className="modal">
      <button className="googleLogin" onClick={googleLogin}>Google login</button>
        <button className="registerBtn" onClick={registerBtn} >Register</button>
        <button className="loginBtn"    onClick={loginBtn}>Login</button>
      </div>
      {showRegister && <Auth 
        auth={{method:'register'}}
      />}
      {showLogin && <Auth 
        auth= {{method:'login'}}
      />}
    
    </div>
  );
}

export default Modal;
