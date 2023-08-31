import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='companyInfo'>
       <h3>COMPANY INFO</h3>
        <p>About Us</p>
        <p>FAQs</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
      </div>
      <div className='orderInfo'>
       <h3>ORDER INFO</h3>
        <p>Track Order</p>
        <p>Create Return/Exchange</p>
        <p>Shipping Policy</p>
        <p>Refund Policy</p>
      </div>
      <div className='companyInfo'>
       <h3>CUSTOMER SERVICE</h3>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Footer;