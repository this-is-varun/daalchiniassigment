import React from 'react'
import "../css/Order.css"

const Order = () => {
  return (
    <>
    <div className='backdrop_order'>
        <div className='order_box'>
            <h3>Order Placed Successfully !</h3>
        </div>
    </div>

    <div className='order_end'>
    <div className='order_end_left'>
    <a href="/">
    <i class="fa-solid fa-arrow-left"></i>
    </a>
    </div>

    <div className='order_end_right'>
    <p>Back to Home</p>
    </div>

     </div>
    </>
  )}

export default Order
