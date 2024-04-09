import React from 'react'
import {Link}from'react-router-dom'
import { useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
const Selection = () => {

  const [show,Setshow]=useState('')
  const [show2,Setshow2]=useState('')
  const [show3,Setshow3]=useState('')

  const Showpara = ()=>{
    if (show == false){
      Setshow(true)
    }else{
       Setshow(false)
    }
    
  }
  const Showpara2 = ()=>{
    if (show2 == false){
      Setshow2(true)
    }else{
       Setshow2(false)
    }
    
  }
  const Showpara3 = ()=>{
    if (show3 == false){
      Setshow3(true)
    }else{
       Setshow3(false)
    }
    
  }
  return (
    <>
    <div className='flex   w-full h-32 items-center justify-start'>    
              <img className='text-pink-600 flex items-start justify-start h-36' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-bjo3VyLGBpuPJ_9n-RxVPSy3emmQrN-OL-uebST__GOaddWq5ydNXnP87N38X5ucCk&usqp=CAU" alt="" />
              <Link to='/signin'><MdOutlineArrowBackIos className='h-10 w-10 pl-3 rounded-md bg-gray-100 items-center border ' /></Link>
          </div>
    <div className='flex flex-col items-center justify-start gap-11'>
        
      <div className='flex flex-col items-center justify-center'>
      <h1 className='font-bold text-4xl'>What brings you to Dribbble?</h1>
      <p className='text-slate-400'>Selet the option that is best to discribe you.Don't worry ,you can explore other options later.</p>
      
    </div>
      <div className='flex flex-col md:flex-row gap-3'>
        <div className='flex flex-col items-center . justify-center border  h-[18rem] w-[18rem] p-3 rounded-3xl  '>
          <img  className='h-40 checked:p-0 ' src="https://th.bing.com/th/id/OIP.cxfJ9UgwGOaM4eXtXpY-CwAAAA?pid=ImgDet&w=173&h=130&c=7&dpr=1.3 " alt="" />
          <p className='text-center font-bold   flex mt-auto w-56'>i'm a designer looking to share my work</p>
          {
            show && (<p className='text-slate-500 text-center text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>) 
          }
          <input onClick={Showpara}  className=' appearance-none  h-5 w-5 bg-white border  checked:bg-pink-600 scale-125 rounded-full mt-auto' type="checkbox"/>
         
        </div>
        <div className='flex flex-col items-center justify-center border h-[18rem] w-[18rem] p-3 rounded-3xl '>
          <img className=' h-40' src="https://th.bing.com/th/id/OIP.L8YfPUge8w1u6BdcaztkCgAAAA?pid=ImgDet&w=193&h=114&c=7&dpr=1.3" alt="" />
          <p className='text-center font-bold flex mt-auto w-40'>i'm looking to hire a designer</p>
          {
            show2 && (<p className='text-slate-500 text-center text-xs'>With over 7 millon shots from a vast community of Designers.Dribbble is leading source for design inspiration</p>) 
            
          }
          <input onClick={Showpara2} className=' appearance-none  h-5 w-5 bg-white border  checked:bg-pink-600 scale-125 rounded-full mt-auto' type="checkbox" />
          
          </div>
          <div className='flex flex-col items-center justify-center border    h-[18rem] w-[18rem] p-3 rounded-3xl m-auto'>
          <img className=' h-40' src="https://th.bing.com/th/id/OIP.ebH9NNI3m14sQrX1drBjHgHaEK?pid=ImgDet&w=159&h=89&c=7&dpr=1.3" alt="" />
          <p className='text-center font-bold flex m-auto w-56'>i'm looking for design inspiration</p>
          {
            show3 && (<p className='text-slate-500 text-center text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis</p>) 
          }
          <input onClick={Showpara3} className=' appearance-none  h-5 w-5 bg-white border  checked:bg-pink-600 scale-125 rounded-full mt-auto' type="checkbox"  />
      
        </div>
       
      </div>
      
      <p className='font-bold'>Anything else?You can select multiple</p>
      <Link to = '/successful' className='border p-2 w-40  text-center bg-pink-600 text-white font-bold rounded-xl'>FINISH</Link>
     
    </div>
    </>
  )
}

export default Selection