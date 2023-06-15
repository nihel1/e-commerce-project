import React from 'react';
import {shop} from "../assets/index";



export const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-10 px-7 font-titleFont flex flex-row justify-between'>
      <div className=' flex flex-col gap-7'>
        <div className='flex flex-col gap-7'>
          <img className=' h-10 w-20' src={shop} alt="" />
          <p className='text-white text-sm tracking-wide'>store.com</p>
          <img src={'/img/payement.jpg'} className='w-90 rounded-full' alt="" />
        </div>
        <div className='flex flex-row gap-3'>
          
        
          
    
  
        </div>
      </div>
      <div className="">
        <h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
        <p>MBD.RM, MUSCAT OMAN</p>
        <p>Mobile: 960305666</p>
        <p>Phone: 70502099</p>
        <p>Email: e-commerce.shop@gmail.com</p>
      </div>
      <div>
        <h2 className='text-xl text-white 300 mb-3'>Profile</h2>
        <p>My Account</p>
        <p>Checkout</p>
        <p>Order tracking</p>
        <p>help & support</p>

      </div>
    </div>
  )
}
