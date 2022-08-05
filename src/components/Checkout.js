import React from 'react'
import '../css/Checkout.css'
import Cart from './Cart'

const Checkout = () => {
  return (
    <>
<div className='backdrop_checkout'>
    <div className='checkout_title'>
        <div className='checkout_left'>
        <a href="/">       
         <i class="fa-solid fa-arrow-left"></i>
        </a>
         </div>

        <div className='checkout_right'>
        <h3>Checkout</h3>
        </div>
    </div>

      <div className='checkout_container'>
      <div className='address'>
      <p id='title_in_fade' >PICK UP</p>
      <hr />
      <div className='address_value'>
      <p>Test</p>
      <p>Daalchini office Noida Uttrapradesh</p>
      <p>Order Expire within 30 min</p> 
      </div>
           
      </div>

      <div className='checkout_cart_title'>
        <p id='title_in_fade'>CART DETAILS</p>
        <hr />
      </div>
      
      <div className='checkout_cart'>
      <div className='cart_headline'> 
    <div className='cart_headline_coloum1'> <p>Items</p> </div>
    <div className='cart_headline_coloum2'> <p>Qty</p> </div>
    <div className='cart_headline_coloum3'> <p>Amount</p></div>
     </div>

<br />
     <div className='cart_headline'> 
    <div className='cart_headline_coloum1'> <p>Mom's style Ajwaini Paratha</p> </div>
    
       <div className='cart_headline_coloum2'>  
       <div className='item_count_input_btn'>

     <p>-</p>  
     <input type="number" /> 
     <p>+</p>

       </div>
       </div>
    
    <div className='cart_headline_coloum3'> 
    <p>Rs 1</p>
    </div>
     </div>
     <br /><hr />

     <div className='cart_Pay'> 
    <div className='cart_Pay_coloum1'> <p>Total</p> </div>
    <div className='cart_Pay_coloum2'>  </div>
    <div className='cart_Pay_coloum3'> <p>Rs 1</p></div>
     </div>
       </div>
      </div>

      <div className='pay'>
             <div className='pay_left'>
             <h3>Select Payment</h3>
             </div>
             <div className='pay_right'>   
<a href="/order">             <i class="fa-solid fa-arrow-right"></i>
</a>
 
              </div>



      </div>
 

</div>
    
    </>
  )
}

export default Checkout
