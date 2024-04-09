import React from 'react'
import Signin from './Signinpg'
import austin from '../assets/austin.png'
import { FaBars } from "react-icons/fa6";

import { FaInstagramSquare,FaFacebookSquare,FaTwitterSquare, } from "react-icons/fa";
const Successful = () => {
 
  return (
    <>
    <div>
      <nav className='flex items-center justify-between border-b-2 p-3 shadow-xl w-full'>
        <div className='flex gap-6 items-end p-3'>
          <div className='flex flex-row items-center justify-center gap-5 '>
          <div className='md:hidden'><FaBars  /></div>
          <img className='h-9 w-full'  src="https://th.bing.com/th?id=OIP.x4VHYox5QsnXR-_rGSJLRgHaB0&w=350&h=86&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
           </div>
           <ul className='md:flex hidden gap-5 '>
          <li>Inspiration</li>
          <li>Find Work</li>
          <li>Learn Design</li>
          <li>Go Pro</li>
          <li>Hire Designers</li>
          </ul>
        </div>

        <div className='flex gap-3 items-center justify-center'>
          
  <form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-black">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
           <input type="search" id="default-search" className="flex  md:w-full w-1 p-2 ps-10 text-sm items-center justify-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-blue-500b bg-grey-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-black " placeholder="Search ..." required />
         </div>
    </form>
    <svg className="w-6 h-6 dark:text-gray-400 text-white k" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
</svg>
    <div className='h-10 w-10 rounded-full border-black border-2'>
      <img className='h-9 w-9 rounded-full' src={austin} alt="" />
    </div>
          <button className='p-3 border h rounded-xl bg-pink-600 text-white font-bold mr-2'>Submit</button>
        </div>
      </nav>
      <section className='flex flex-col items-center justify-center text-center  h-screen gap-4'>
        <div className='flex flex-col items-center justify-center gap-5 w-[50rem] '>
        <h1 className='text-4xl font-bold'>Please verify your email....</h1>
         <img src="data:image/png;base64,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" alt="" />
        <p className='text-slate-600 text-l'>Please verify your email address.We've senta confirmation email to:</p>
        <p className='font-bold text-xl'>account@gamil.com</p>
        <p className='text-slate-600 text-l'>click the confirmation linkin the email to begin using Dribbble.</p>
        <p className='text-slate-600 text-l'>Didn't receive the email?Check your Spam folder ,it may have caught by a filter. if you still don't see it,you can <span className='text-pink-600 font-bold'>resend the confirmation email</span></p>
        <p  className='text-slate-600 text-lg'>Wrong email address?<span className='text-pink-600 font-bold'>Change it.</span></p>
        </div>
      </section>
      <section className=' h-full flex  flex-col md:flex-row  gap-8 bg-slate-200 p-10'>
       <div className=' flex flex-col w-[19rem] gap-4 border'>
       <h1 className='text-pink-600 text-3xl font-serif font-bold'>dribbble</h1>
       <p className='text-lg font-semibold text-slate-500'>Dribbble is the world's leading community for creatives to share, grow,and get hired</p>
       <div className='flex gap-3'><FaInstagramSquare/><FaFacebookSquare/><FaTwitterSquare/></div>
       </div>
       <div className=' flex flex-col w-[12rem] gap-4 border' >
        <h1 className='font-bold'>For designers</h1>
        <ul className='flex flex-col gap-2'>
         <li>Go pro!</li>
         <li>Explore design work</li>
         <li>Design blog</li>
         <li>Overtime podcast</li>
         <li>Playoffs</li>
         <li>Weekly Warm-up</li>
         <li>Refer a friend</li>
         <li>Code of conduct</li>
        </ul>
       </div>
       <div className=' flex flex-col w-[12rem] gap-4 border' >
        <h1 className='font-bold'>Hire designers</h1>
        <ul className='flex flex-col gap-2'>
         <li>post a job opening</li>
         <li>post a freelance project</li>
         <li>search a designers</li>
        </ul>
        <h1 className='font-bold'>Brand</h1>
        <ul>
          <li>Advertise with us</li>
        </ul>
       </div>
       <div className=' flex flex-col w-[12rem] gap-4 border' >
        <h1 className='font-bold'>Company</h1>
        <ul className='flex flex-col gap-2'>
         <li>About</li>
         <li>Careers</li>
         <li>Support</li>
         <li>Media kit</li>
         <li>Testimonials</li>
         <li>API</li>
         <li>Terms of service</li>
         <li>privacy policy</li>
         <li>Cookie policy</li>
        </ul>
       </div>
       <div className=' flex flex-col w-[12rem] gap-4 border' >
        <h1 className='font-bold'>Directories</h1>
        <ul className='flex flex-col gap-2'>
         <li>Design job</li>
         <li>Designers for hire</li>
         <li>Freelance designers for hire</li>
         <li>Tags</li>
         <li>Places</li>
        </ul>
        <h1 className='font-bold'>Design assets</h1>
        <ul>
          <li>Dribbble Marketplace</li>
          <li>Creative Market</li>
          <li>Fontspring</li>
          <li>Font squirel</li>
        </ul>
       </div>
       <div className=' flex flex-col w-[12rem] gap-4 border' >
        <h1 className='font-bold'>Design Resources</h1>
        <ul className='flex flex-col gap-2'>
         <li>Freelancing</li>
         <li>Design Hiring</li>
         <li>Design Portfolio</li>
         <li>Design Education</li>
         <li>Creative process</li>
         <li>Design industry Trends</li>
        
        </ul>
       </div>
      </section>
    </div >
    </>
  )
}

export default Successful