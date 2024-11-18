import React from 'react'

function SkillsDeatilsContainer({image , title , description }) {
  return (
    <div className='flex flex-col gap-5 px-[4%] py-[2%] my-[2%] text-textColor'>        
    <div>
        <div className="flex gap-4 items-center h-fit w-full">
              <img
                src={image}
                alt="Your Image"
                className={`h-[50px] object-cover`}
              />
        <p className="text-2xl font-mono font-bold ">
            {title}
        </p>
    </div>
</div>
    <p className='text-lg'>
    {description}
    </p>
</div>
  )
}

export default SkillsDeatilsContainer