import React, { useState }  from 'react'
import "../css/Listing.css"
import Item from './Item'

  const Listing = () => {
    
  
  const data = [{
                sn:1,
                name:"Mom's style Ajwain Paratha",
                img : 'item1.png',
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:10,
                oldrate:50,
                count:0,
                price:0
               },
               {
                sn:2,
                name:"Roasted Cereal-Wheat Jowar Bajra",
                img : "item2.png",
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:15,
                oldrate:60,
                count:0,
                price:0

               },{
                sn:3,
                name:"Chhole Bhature",
                img : "item3.jpg",
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:50,
                oldrate:120,
                count:0,
                price:0

               },{
                sn:4,
                name:"Doughy, butter-brushed naan",
                img : "item4.jpg",
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:100,
                oldrate:50,
                count:0,
                price:0

               },{
                sn:5,
                name:"Crisp papadum - South Indian",
                img : "item5.jpg",
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:40,
                oldrate:50,
                count:0,
                price:0

               },{
                sn:6,
                name:"Hari mutter ka nimona (green peas daal)",
                img : "item6.jpg",
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:50,
                oldrate:70,
                count:0
               },{
                sn:7,
                name:"Thayir sadam ",
                img : "item7.jpg",
                discription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo officia ipsam beatae optio, dolores rerum iste quasi necessitatibus minima veniam",
                rate:100,
                oldrate:150,
                count:0,
                price:0
               },
          ]
    const dataToStore = JSON.parse(JSON.stringify(data));
    let object = {};
    dataToStore.map((obj)=>{
      object[obj.sn] = obj;
    })

    localStorage.setItem('cartItems',JSON.stringify(object));

  return (
    <>
      <div className='backdrop_listing'>
      {
        data.map((items,index)=>{
          return(<Item data={items} key={index}/>)
           
        })
      }
         
      </div>
      <div className='footer_cover'></div>
    </>
  )
}

export default Listing
