import React from 'react';
import {MdEmail} from 'react-icons/md';
import {MdCall} from 'react-icons/md';

const Footer = () => {
  return (
    <>
        <div className='flex justify-between px-8 py-12 bg-[#9466c6] text-[#ffff]'>
      <div className='companyInfo'>
       <h3 className='font-bold mb-2'>COMPANY INFO</h3>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>About Us</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>FAQs</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Terms & Conditions</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Privacy Policy</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Shipping Policy</p>
      </div>
      <div className='orderInfo'>
       <h3 className='font-bold mb-2'>ORDER INFO</h3>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Track Order</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Create Return/Exchange</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Shipping Policy</p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000]'>Refund Policy</p>
      </div>
      <div className='companyInfo'>
       <h3 className='font-bold mb-2'>CONTACT US</h3>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000] flex items-center relative'>
        <MdEmail className = "absolute left-[-30px] w-5 h-5" />
        <span>support@shopvibe.in</span>
        </p>
        <p className='cursor-pointer font-serif hover:underline hover:text-[#000] flex items-center relative'>
        <MdCall className = "absolute left-[-30px] w-5 h-5" />
        <span>98765432100</span>
        </p>
      </div>
      </div>
      <footer className='flex justify-center items-center bg-[#4E148C] p-4 text-[#ffff]' >
        © ShopVibe 2023
      </footer>
    </>
  )
}

export default Footer;