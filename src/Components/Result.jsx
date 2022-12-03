import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import image from "../Assets/wheel.png"

function Result() {
  const coupons = [
    { code: 'XAXPDF20', name: 'on Best Seller', offer: 'Flat 20% off' },
    { code: 'AIUXH499', name: 'on ₹5000 purchase', offer: 'Blanc 50ml ₹499' },
    { code: 'FRGFEEBX', name: 'on purchase of ₹6000', offer: 'Free Gift Box' },
    { code: 'XAVBM500', name: 'on Sneakers', offer: 'Flat ₹500 off' },
    { code: 'BNMIL999', name: 'on Best Seller', offer: 'EDT NOIR ₹999' },
    { code: 'VBGH5000', name: 'on purchase of ₹15000', offer: '₹5,000 Voucher' },
  ]
  const [couponCode, setCouponCode] = useState("");
  const [offerName, setOfferName] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate()
  const handleClick = (e) => {
    navigator.clipboard.writeText(couponCode)
    navigate("/")
  }
  let randomItem = Math.floor(Math.random() * coupons.length)
  const fetchData = () => {
    setCouponCode(coupons[randomItem].code)
    setOfferName(coupons[randomItem].offer)
    setName(coupons[randomItem].name)
  }
  useEffect(() => {
    fetchData()
  }, [coupons]);
  return (
    <div className='flex flex-col md:flex-row gap-10 md:gap-40'>
      <div className="flex items-center justify-center">
        <img src={image} alt="" className='h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72' />
      </div>
      <div className="flex flex-col items-center justify-center px-10">
        <div className="row px-5 mb-4">
          <span className="md:text-3xl font-bold">Congrats! You Won:</span>
        </div>
        <div className="row mb-4 flex flex-col justify-center items-center gap-1 md:gap-3">
          <span className='text-lg md:text-4xl font-bold leading-normal'>
            {offerName}
          </span>
          <span className='text-lg md:text-4xl font-bold leading-normal'>
            {name}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-white font-bold text-md md:text-lg py-2 px-4 bg-custombgGray rounded-l-xl">
            {couponCode}
          </p>
          <button className="block w-20 py-2 px-4 rounded-r-xl text-white font-medium bg-darkGreen" onClick={() => { navigator.clipboard.writeText(couponCode); }}>Copy</button>
        </div>
        {/* copy btn */}
        <div>
          <button
            onClick={handleClick}
            type="submit"
            className="bg-darkGreen text-white text-md px-4 py-2 rounded-3xl w-full font-medium"
          >
            Close Panel & Copy
          </button>
        </div>
        {/* msg */}
        <div className="flex flex-col items-center justify-center md:flex-row mt-2 p-0 m-0 gap-2">
          <span className="text-[9px] italic">
            *You can claim your coupon for 10 minutes only!
          </span>
        </div>
      </div>
    </div>
  )
}

export default Result