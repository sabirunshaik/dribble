import React from 'react'
import {Link}from'react-router-dom'
import { useRef,useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
const Signinpg = () => {



  const inputRef=useRef(null)
  const [Image,setImage]=useState('')
  
  const handleimageclick=()=>{
    inputRef.current.click()
  }


  const handleimagechange=(event)=>{
    // const files= event.target.files[0]
    // console.log(files)
    setImage(event.target.files[0])
  }

  return (
    <div>
      <div className='w-full h-32 items-center justify-start flex'>
        
        <img className='text-pink-600 h-36' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-bjo3VyLGBpuPJ_9n-RxVPSy3emmQrN-OL-uebST__GOaddWq5ydNXnP87N38X5ucCk&usqp=CAU" alt="" />
        <Link to='/starter'><MdOutlineArrowBackIos className='h-10 w-10 pl-3 rounded-md bg-gray-100 items-center border ' /></Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-20'>
        <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold'>Welcome! Let's create your profile</h1>
        <p className='text-sm text-slate-500'>let others get to know you better! you can do these better</p>
        </div>
        <div className='flex flex-col gap-8'>
            <label className='font-bold text-xl' htmlFor="">Add an avatar</label>
            <div className='flex items-center gap-20 flex-col md:flex-row'>
            <div  className='h-[9rem] w-[9rem] border border-dashed border-black rounded-full flex justify-center items-center'>

             {Image? (<img className='h-full w-full rounded-full' src={URL.createObjectURL(Image)} alt="" />) : (<img className='h-[9rem] w-[9rem]  rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJ2G9P8T4I5HUBYjPP_fukJ1Fce8a4lkyyhqB7ipNvb8yd1INDw-Q1LALMyrP6lKz0eo&usqp=CAU" alt="" />) }
            <input className='none' type="file" accept='image' ref={inputRef}  onChange={handleimagechange}/>
               
            </div>
            <div className='flex flex-col gap-2 items-start'>
                <button onClick={handleimageclick}   className='border p-2 font-bold cursor-pointer'>choose image</button>
                <p className='text-slate-400'>Or chosse one of our defults </p>
            </div>
            
            
            </div>
            <div className='flex flex-col'>
            <label htmlFor="">Add your Location</label>
            <input className='border-b-2 p-2 none' type="address" />
            </div>
            <Link to = '/selection' className='border p-2 w-40  text-center bg-pink-600 text-white font-bold rounded-xl'>Next</Link>
            </div>
        </div>
    </div>
  )
}

export default Signinpg