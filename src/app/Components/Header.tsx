'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

export default function Header() {

  
  function handleMenu() {
    const save: HTMLElement | null = document.getElementById('dil');
    if (save) {
      save.classList.toggle('hidden');
    }
  }
  

  return (
    <header>
        <div className='flex items-center bg-[#044e83] h-20 justify-between px-6 '>
          <Link href={'/'}><Image src="/asset 0.png" alt='Singh Logo'width={100}height={100} className='w-[70px] mt-12 z-10'></Image></Link>
           <h1 className='text-[#dfd5d5] mr-3 font-bold text-[23px] hover:text-[orange] hover:underline'>Tuition Free Program</h1>

           <ul className= 'hidden md:flex gap-6'>
           <Link href={'/'}><li className='text-white text-[23px] sm:text-[20px] hover:text-[orange]'>Home</li></Link>
           <Link href={'/apply'}><li className='md:text-white text-[23px] sm:text-[20px] hover:text-[orange]'>Apply</li></Link>
           <Link href={'/jobs'}><li className='text-white text-[23px] sm:text-[20px] hover:text-[orange]'>Jobs</li></Link>
           <Link href={'/result'}><li className='text-white text-[23px] sm:text-[20px] hover:text-[orange]'>Result</li></Link>
           <Link href={'/courses'}><li className='text-white text-[23px] sm:text-[20px] hover:text-[orange]'>Courses</li></Link>
           </ul>

           <button onClick={handleMenu} className='sm:text-white text-[25px] md:hidden text-white'>
           <IoMenuSharp />
           </button>

    {/* .............................Menu Div............................... */}
    
       <div id='dil' className='fixed inset-0 bg-[#044e83] z-10 md:hidden'>

        <div className='flex justify-between bg-[#044e83] px-2'>

          <Image src="/asset 0.png" alt='Singh Logo'width={100}height={100} className='w-[50px] mt-1 z-20'></Image>

           <button onClick={handleMenu} className='text-white text-[20px] mr-6'>
             <RxCross1 />
           </button>

        </div>{/* Inset header */}

          
        <li className='text-white list-s list-none py-5 border-b-2 hover:bg-slate-500 px-3'>Home</li>
        <li className='text-white list-s list-none py-5 border-b-2 hover:bg-slate-500 px-3'>Apply</li>
        <li className='text-white list-s list-none py-5 border-b-2 hover:bg-slate-500 px-3'>Jobs</li>
        <li className='text-white list-s list-none py-5 border-b-2 hover:bg-slate-500 px-3'>Result</li>
        <li className='text-white list-s list-none py-5 border-b-2 hover:bg-slate-500 px-3'>Courses</li>


       </div>{/* Inset Div */}

        </div> {/* Main Div */}

    </header>
    
  )
}

