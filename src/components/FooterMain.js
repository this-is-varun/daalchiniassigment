import React,{useState} from 'react'
import "../css/Footer.css"
import Cart from './Cart'
import Listing from './Listing'

//"fa-solid fa-angle-down"
const FooterMain = () => {
  const [newDisplay,setDisplay] = useState('none');
  const [newAngle,setAngle] = useState('fa-solid fa-angle-down');

  const bgChange = (event)=> {
    event.preventDefault();
    if (newDisplay==="none") {
      setDisplay('block');
      setAngle("fa-solid fa-angle-down");
    }else {
      setDisplay("none");
      setAngle("fa-solid fa-angle-up");
    }}
   
  return (
    <>
          <Listing/>
      <Cart newDisplay={newDisplay} />
      <div  className='backdrop_footer'>
          <div className='footer_box'>
              <div className='footer_left'>
                  <div className='footer_btn'>
                      <div className='footer_btn_left'>
                         <p> 1 item(s)</p>
                         <p>Total Rs. 1</p>
                       </div>
                      <div className='footer_btn_right'> 
                      <i
                        onClick={bgChange}
                         className={newAngle} >
                        </i> 
                      </div>
                   </div>
              </div>
              <div  className='footer_middle'>
                  <h3> Login </h3>
              </div>
              <div className='footer_right'>
              <a href="/login"> <i class="fa-solid fa-arrow-right-long"></i></a>
               </div>
          </div>
      </div>
  </>
  )}
export default FooterMain