import React, { useState } from 'react';
import './Nav.css'; // Import the CSS file

const PriceDetails = () => {
  const [mrp, setMrp] = useState(1904);
  const [discountRate, setDiscountRate] = useState(20);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [finalPrice, setFinalPrice] = useState(calculateFinalPrice(1904, 20, 0));

  function calculateFinalPrice(mrp, discountRate, couponDiscount) {
    const discount = (mrp * discountRate) / 100;
    const discountedPrice = mrp - discount;
    return discountedPrice - couponDiscount;
  }

  const applyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setCouponDiscount(10);
    } else {
      setCouponDiscount(0);
      alert('Invalid coupon code');
    }
    setFinalPrice(calculateFinalPrice(mrp, discountRate, couponDiscount));
  };

  return (
    <div className="price-details">
      <h2>Price Details</h2>
      <p>MRP: <span className="original-price">${mrp}</span></p>
      <p>Discount: {discountRate}%</p>
      <p>Discounted Price: <span className="discounted-price">₹{calculateFinalPrice(mrp, discountRate, 0)}</span></p>
      <p>Coupon Discount: ₹{couponDiscount}</p>
      <p>Final Price: <span className="final-price">₹{finalPrice}</span></p>
      
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="coupon-input"
      />
      <button onClick={applyCoupon} className="apply-coupon-btn">Apply Coupon</button>
      <button className='apply-coupons-btn'>BUY NOW</button>
    </div>
  );
};

export default PriceDetails;
