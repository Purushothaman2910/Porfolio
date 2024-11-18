import React from 'react'
import { MainContainer, SubContainer } from '../components'
import { FaGithub } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  let icons = [
    {
      icon : (<FaGithub size={30} color='#FFFF'/>) ,
      link : "https://github.com/Purushothaman2910" ,
      target :"_blank" ,
      download : false ,
      text: "Visit GitHub"
    },
    {
      icon : (<BiSolidUserDetail size={30} color='#FFFF'/>) ,
      link : "./Purushothaman_Resume.pdf" ,
      target :"_blank" ,
      download : true ,
      text: "Download Resume"
    },
    {
      icon : (<FaPhoneAlt size={30} color='#FFFF'/>) ,
      link : "#" ,
      target :"_blank" ,
      download : false ,
      text: "9345698619"
    },
    {
      icon : (<IoMail size={30} color='#FFFF'/>) ,
      link : "#" ,
      target :"_blank" ,
      download : false ,
      text: "velusamypurushothaman@gmail.com"
    },
    {
      icon : (<FaLinkedin size={30} color='#FFFF'/>) ,
      link : "https://www.linkedin.com/in/purushothamanvelusamy" ,
      target :"_blank" ,
      download : false ,
      text: "Visit LinkedIn"
    }
  ]
  return (
    <MainContainer className="bg-bgColor p-5">
      <SubContainer className='backdrop-blur-xl w-full md:min-w-[75%] rounded-xl shadow-2xl shadow-buttonHighligths border flex flex-col items-start justify-evenly px-[10%]'>
        <p className='text-4xl font-mono font-bold text-textColor underline'>Contact Me</p>
        {
          icons.map(({icon,text,link,download,target})=>(
            <div className='flex gap-10'>
              <span>{icon}</span>
              <a className='text-xl md:text-2xl text-textColor break-all ' href={link} download={download} target={target}>{text}</a>
            </div>
          ))
        }
      </SubContainer>
    </MainContainer>
  )
}

export default Contact