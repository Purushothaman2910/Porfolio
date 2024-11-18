import React from 'react'

function AboutCardContainer({children}) {
  return (
    <div className="min-h-[400px] min-w-[300px] max-w-[400px] rounded-lg bg-transparentBgColor shadow-bgColor shadow-md backdrop-blur-3xl text-[#cdcde8] p-4 text-xl font-mono my-4 duration-[1s] hover:-translate-y-5">
        {children}
    </div>
  )
}

export default AboutCardContainer