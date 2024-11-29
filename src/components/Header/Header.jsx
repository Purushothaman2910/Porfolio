import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Header({pageRefs = []}) {
  let [isOpen , setIsOpen] = useState(false)
  let navElements = ["Home" , "Experience" , "Skills", "Education"  ,  "Contact"]
  function toggleHeader(){
    setIsOpen((preValue) => !preValue)
  }
  function scrollToview(ref){ 
    if(ref.current){
      ref.current.scrollIntoView({ behavior: "smooth" });
      toggleHeader()
    }
  }
  return (
    <header className='fixed w-full flex min-h-[70px] bg-transparentBgColor rounded-b-[10px] backdrop-blur-md text-textColor font-mono text-xl z-10'>
        <div className='flex items-center justify-evenly md:justify-start gap-2 md:gap-6 flex-grow'>   
            <div className='p-2'>                
                <FaCode size={20}/>         
            </div>
            <span className='font-bold rounded-[4px] text-2xl lg:text-3xl'>Purushothaman.V</span>
        </div>
        <div className='flex flex-grow justify-evenly md:justify-end items-center p-2'>
          <div className='md:mx-4 lg:hidden' onClick={toggleHeader}>            
            {(isOpen)?(<IoClose size={20} />) : (<BsThreeDotsVertical size={20} />) }
          </div>
          <div className={`flex-grow fixed top-[70px] right-[10px] px-6 py-4 rounded-md bg-gradient-to-b from-[rgba(20,217,204,0.7)] to-[rgba(9,9,41,0.7)] lg:from-transparentBgColor lg:to-from-transparentBgColor lg:backdrop-blur-md  lg:block lg:static ${(isOpen)?'block':'hidden'}`}>            
            <ul className="flex flex-col gap-5 lg:flex-row lg:flex-grow lg:justify-evenly">
                {
                  navElements.map((item , i) => (<li className='cursor-pointer' key={i} onClick={()=>scrollToview(pageRefs[i])}>{item}</li>))
                }
            </ul>
          </div>
        </div>
        <div>
        </div>
    </header>
  )
}

export default Header