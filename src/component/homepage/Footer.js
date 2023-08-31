import React from 'react';

const Footer = () => {
  return (
    <>
        <div className='flex justify-between p-8'>
      <div className='companyInfo'>
       <h3 className='font-bold mb-2'>COMPANY INFO</h3>
        <p className='cursor-pointer font-serif hover:underline'>About Us</p>
        <p className='cursor-pointer font-serif hover:underline'>FAQs</p>
        <p className='cursor-pointer font-serif hover:underline'>Terms & Conditions</p>
        <p className='cursor-pointer font-serif hover:underline'>Privacy Policy</p>
        <p className='cursor-pointer font-serif hover:underline'>Shipping Policy</p>
      </div>
      <div className='orderInfo'>
       <h3 className='font-bold mb-2'>ORDER INFO</h3>
        <p className='cursor-pointer font-serif hover:underline'>Track Order</p>
        <p className='cursor-pointer font-serif hover:underline'>Create Return/Exchange</p>
        <p className='cursor-pointer font-serif hover:underline'>Shipping Policy</p>
        <p className='cursor-pointer font-serif hover:underline'>Refund Policy</p>
      </div>
      <div className='companyInfo'>
       <h3 className='font-bold mb-2'>CUSTOMER SERVICE</h3>
        <p className='cursor-pointer font-serif hover:underline'>Contact Us</p>
        <p className='cursor-pointer font-serif hover:underline'>support@shopvibe.in</p>
      </div>
      </div>
      <footer className='flex justify-center items-center bg-[#4E148C] p-4 text-[#ffff]' >
        © ShopVibe 2023
      </footer>
    </>
  )
}

export default Footer;