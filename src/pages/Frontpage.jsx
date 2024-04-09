import React from 'react'
import {Link, useNavigate} from"react-router-dom"
const Frontpage = () => {

  return (
    <div className='flex flex-col md:flex-row w-[100]'>
      
        <div className='md:w-[40%] w-screen  bg-amber-200'>
           <div className='absolute md:w-[36%] p-12 flex gap-6 flex-col'>
            <h1 className='text-2xl text-yellow-800 Great Vibes '>dribbble</h1>
            <p className='text-4xl font-bold text-yellow-900 '>Discover the world's top Designer & Creatives</p>
           </div>
          <div className='flex items-center justify-center h-screen border'> 
            <img className='md:h-[35rem] w-screen bg-bottom' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3Cp-p9Gq_pKfINnwM5s1dDvUoRrR7m_5Vq49-df4FcfpoIuVH" alt="" />
          </div> 
        </div>
        <div className='md:w-[60%] flex flex-col items-center justify-center '>
          <h1 className='flex justify-end items-end w-full p-4'>Already a member? <span className='text-purple-700'>Signin</span></h1>
          <div className='text-black flex flex-col w-[63%] gap-9 p-3 '>
            <h1 className='text-3xl font-bold'>Sign up to Dribbble</h1>
            <div className='flex flex-row gap-3'>
              <div>
              <label htmlFor="Name">NAME </label>
              <input className='bg-slate-200 border-xl p-2 rounded-lg w-full' type="text" placeholder='Name'/>
              </div>
              <div>
              <label htmlFor="Username">USERNAME </label>
              <input className='bg-slate-200 border-xl p-2 rounded-lg w-full' type="text" placeholder='Username'/>
              </div>
            </div>
            <div>
            <label htmlFor="Email">EMAIL </label>
            <input className='bg-slate-200 border-xl w-full p-2 rounded-lg' type="email" placeholder='account@gmail.com'/></div>
            <div>
            <label htmlFor="Passwprd">PASSWARD </label>
            <input className='bg-slate-200 border-xl w-full p-2 rounded-lg' type="password" placeholder='6+ characters' /></div>
            <div>
            <input type="checkbox" />
            <label htmlFor=""> creating an account means you're okay with our <span className='text-purple-700 font-bold'> Terms of service.Privacy Policy,</span>and our defult <span className='text-purple-700 font-bold'> Notification settings</span></label>
            </div>
            < Link to ="/signin"className='border bg-pink-600 text-white flex justify-center items-center w-[9rem] p-3 rounded-xl'>Create Account </Link>
          </div>
        </div>
    </div>
  )
}

export default Frontpage