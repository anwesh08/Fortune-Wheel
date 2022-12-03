import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../Assets/wheel.png'

function Login() {
   const [content, setContent] = useState("Try Your Luck");
   const navigate = useNavigate()
   const submitHandler = (e) => {
      e.preventDefault();
      setContent("Loading....")
      setTimeout(() => {
         navigate("/spinwheel")
      }, 1500)
   }
   return (
      <div className='flex flex-col md:flex-row gap-10 md:gap-24 lg:gap-40'>
         <div className="flex items-center justify-center md:shrink-0">
            <img src={image} alt="" className='absolute -top-16 mb-10 h-56 w-56 md:top-auto md:absolute md:-left-40 md:h-72 md:w-72 lg:relative lg:h-96 lg:w-96' />
         </div>
         <div className="flex flex-col items-start justify-center w-[250px] md:w-[350px]">
            <div className="row mb-3">
               <span className="text-3xl font-bold">This is how EngageBud looks like in action!</span>
            </div>
            <div className="row sm:flex-col">
               <form className='' onSubmit={submitHandler}>
                  <div className="mb-4 bg-white rounded-md border-b-2 border-gray-700 flex items-center">
                     <i class="fa-regular fa-envelope px-3 "></i>
                     <div className="row">
                        <label htmlFor="form-label">
                           <span className='py-1.5 px-2 font-semibold text-gray-400'>Email</span>
                        </label>
                        <input
                           type="email"
                           className='form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white rounded transition ease-in-out m-0 focus:text-lightGray focus:bg-white focus:border-blue-600 focus:outline-none'
                           placeholder='user@mail.com'
                           required
                        />
                     </div>
                  </div>
                  <div className="mb-4 bg-white rounded-md border-b-2 border-gray-700 flex items-center">
                     <i class="fa-solid fa-phone px-3"></i>
                     <div className="row">
                        <label className="form-label">
                           <span className='py-1.5 px-2 font-semibold text-gray-400'>Phone Number</span>
                        </label>
                        <input
                           type="phone number"
                           placeholder="+91-98765XXXXX"
                           className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white rounded transition ease-in-out m-0 focus:text-lightGray focus:bg-white focus:outline-none"
                           required
                        />
                     </div>
                  </div>
                  <div className="mb-4 px-3 py-0.5 md:px-4 md:py-1 flex items-center justify-center border-2 border-black rounded-md">
                     <input
                        type="checkbox"
                        className="w-8 h-8 rounded accent-black"
                        required
                     />
                     <span className="px-4 text-[9px] md:text-[10px] font-semibold">
                        <p>I agreed to receiving recurring automated messages at the number I have provided.</p>
                        <p>Consent is not a condition to purchase.</p>
                     </span>
                  </div>
                  <button
                     type="submit"
                     className="bg-darkGreen hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-3xl w-full"
                  >{content}</button>
               </form>
               <div className="flex flex-col items-center justify-center md:flex-row mt-2 gap-1">
                  <span className="text-[6px] md:text-[8px] italic">
                     *You can spin the wheel only once!
                  </span>
                  <span className="text-[6px] md:text-[8px] italic">
                     *If you win, you can claim the coupon for 10 minutes only!
                  </span>
               </div>
               {/* dont feel lucky */}
               <div className="mt-2 items-center justify-end flex gap-1">
                  <span className="font-bold text-lg">No, I don't feel lucky</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login