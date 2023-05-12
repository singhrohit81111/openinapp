import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { useAuth0 } from '@auth0/auth0-react';
import './homestyle.scss';

export default function Hom2() {
  const {loginWithRedirect}=useAuth0();
  const handleClick=()=>{
    loginWithRedirect();
  }
  return (
    <div className="hom20">
      <div className="hom2">
        <div className="hom21">
          <div className="hom211">Sign In</div>
          <div className="hom212">Sign in to your account</div>
        </div>

        <div className="hom22">
          <button onClick={handleClick}>
            <span className="hs1"><FaGoogle /></span>
            <span className="hs2">Sign in with Google</span>
          </button>
        </div>

        <div className="hom23">
          <form className='fm'>
            <label for="in1">Email address</label>
            <input type="email" id="in1" />
            <label for="in2">Password</label>
            <input type="password" id="in2" />
            <a href="#">Forget Password?</a>
            <button>Sign in</button>
          </form>
        </div>

        <div className="hom24">
          <span className="hs3">Don't have an account?</span>
          <span className="hs4"><a href="#">Register here</a></span>
        </div>
      </div>
    </div>
  )
}
