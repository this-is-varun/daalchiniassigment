import React,{useState,useEffect} from 'react'
import "../css/Item.css"
 
const Item = (props) => {

   const [newBtn,setBtn] = useState('none');
   const [newBtnx,setBtnx] = useState('block');
   const [newCount,setCount] = useState( props.data.count);
   const [cartItems, setCartItems] = useState({});
   
   useEffect(()=>{
     let cartItems = JSON.parse(localStorage.getItem('cartItems'));
     setCartItems(cartItems);
   },[]);


   const countchange=(event)=>{
    event.preventDefault();

    if(props.data.count===0){
      setBtn('block');
      setBtnx('none');
      setCount(props.data.count++);
     }
   }
   const increment=(event)=>{
    event.preventDefault();
    cartItems[props.data.sn].count = props.data.count;
    cartItems[props.data.sn].price = props.data.rate * props.data.count;
     

    localStorage.setItem('cartItems',JSON.stringify(cartItems));

       if(props.data.count>10){
         return
       }else{
        setCount(props.data.count++);
        }     
   }
   
   const decrement=(event,{cartItems})=>{
    event.preventDefault();
    cartItems[props.data.sn].count = props.data.count;
    cartItems[props.data.sn].price = props.data.rate * props.data.count;
     

    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    if(props.data.count<1){
      setBtn('none');
      setBtnx('block');
        }else{
        setCount(props.data.count--)
        }
   }


 

   
   
  

  return (
    <>
      <div className='item_box'>
      
          <div className="item_left">
          <img src={require(`../img/${props.data.img}`)} alt="" />
          </div>
          <div className='item_right'>
              <div className='item_right_top'>
                <h3>{props.data.name}</h3>
                <p> {props.data.discription}</p>
               </div>
              <div className='item_right_bottom'>
                  <div className='line'> <span>₹</span>{props.data.rate}   <del> <span>₹</span>{props.data.oldrate}</del> </div>
                  <div  className='line'>
                   <button onClick={countchange} style={{display:newBtnx}} >ADD</button>
                   
                   <div class="quantity"  >
    <a href="#" class="quantity__minus" onClick={decrement} style={{display:newBtn}} ><span  >-</span></a>

    <input name="quantity" type="text" class="quantity__input" style={{display:newBtn}} value={props.data.count}/>
    <a href="#" class="quantity__plus" onClick={increment} style={{display:newBtn}}><span>+</span></a>
  </div>

                    </div>
                

              </div>
          </div>
      </div>
      
      <hr />

    </>
  )
}

export default Item