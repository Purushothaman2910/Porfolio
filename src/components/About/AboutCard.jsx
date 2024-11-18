import React from 'react'
import AboutCardContainer from './AboutCardContainer'

function Dots({className}){
    return(
        <div className={`${className} h-[15px] w-[15px] rounded-full`}></div>
    )
}

function Lines({text}){
    return(
        <>
        <span>&gt;</span><p>{text}</p>
        </>
    )
}

function AboutCard({heading , institutionName , description}) {
        return (
          <AboutCardContainer>
            <div className="w-full border-b border-b-[#cdcde8]">
              <div className="flex justify-between items-center py-1">
                <div className="flex gap-3">
                  <Dots className='bg-accentColor' />
                  <Dots className='bg-buttonHighligths' />
                  <Dots className='bg-textColor' />
                </div>
                <div className="inline mx-2 font-bold text-xl md:text-2xl ">{heading}</div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <Lines text={institutionName} />
              <Lines text={description} />
            </div>
          </AboutCardContainer>
        );
}

export default AboutCard