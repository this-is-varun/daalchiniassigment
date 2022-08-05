import React from 'react'
import '../css/Login.css';
import Listing from './Listing';
 
const Login = () => {
  return (
    <>
       <Listing/>
       <div className='black_shade'>
         
       </div>
      <div className='backdrop_login'>
      <div className='login_title'>
      <div className='title_left'>
      <a href="/">      
          <i class="fa-solid fa-arrow-left"></i>
      </a>
      </div>
     <div className='title_right'>
     <h2>Login</h2>
       </div>
   </div> 
      <div className='login_box'>
      <input type="text" placeholder='Enter your phone number'/>
      <br />
      <button>  
      <a href="/checkout">  <h3>SUBMIT</h3>  </a>
     </button>
      <a href="/"> <p>Will do it later</p> </a>
      </div>
</div>
    </>
  )}

export default Login
