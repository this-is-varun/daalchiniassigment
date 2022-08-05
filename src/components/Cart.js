import React,{useEffect, useState}  from 'react'
 import "../css/Cart.css"
  
const Cart = (props) => {
   const [cartItems, setCartItems] = useState({});
   useEffect(()=>{
      let cartItems = JSON.parse(localStorage.getItem('cartItems'));
      setCartItems(cartItems);
      console.log(cartItems);
    },[]);
        
   return (
    <>
              {Object.values(cartItems).map((cartItem, i) => {
                        return (
                           <>
                          <tr key={i}>
                                <td scope="row">{cartItem.name}</td>
                                <td>{cartItem.rate}</td>
                                <td>{cartItem.price}</td>
                            </tr>
                           </>
                           );})}


            

                           {Object.values(cartItems).map((cartItem, i) => {
                        return (
               
                  <div>
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
        <div className='backdrop_cart' style={{display:props.newDisplay}} >
        <div className='black_shade_cart'>
       </div>
       <div className='cart_box'> 
       <div className='cart_title'>
       <div className='cart_title_left'>  </div>
       <div className='cart_title_middle'> <h2>Cart Details   </h2></div>
        <div className='cart_title_right'> 
       <i   class="fa-solid fa-xmark"></i></div>
    </div>
    

    <div className='cart_headline'> 
    <div className='cart_headline_coloum1'> <p>Items</p> </div>
    <div className='cart_headline_coloum2'> <p>Qty</p> </div>
    <div className='cart_headline_coloum3'> <p>Amount</p></div>
     </div>

<br />
     <div  className='cart_headline'> 
    <div className='cart_headline_coloum1'> <p>{cartItem.name} </p> </div>
    
       <div className='cart_headline_coloum2'>  
       <div className='item_count_input_btn'>

     <p>-</p>  
     <input type="number" value={cartItem.count} /> 
     <p>+</p>
       </div>
       </div>
    
    <div className='cart_headline_coloum3'> 
    <p> {cartItem.price}</p>
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
                  </div>
               
            );})}
    </>
  )
}

export default Cart
