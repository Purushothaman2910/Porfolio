import React from "react";
import { Myimage } from "../assets";
import { MainContainer, SubContainer } from "../components";


function Home() {
  return (
      <MainContainer className='bg-gradient-to-br from-bgColor to-buttonHighligths'>  
        <SubContainer className='flex flex-col gap-4 justify-center items-center px-4' >
          <div className="flex justify-center h-fit w-full">
            <img
              src={Myimage}
              alt="Your Image"
              className="block h-[50vh] w-auto rounded-full outline outline-offset-4 object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-3xl text-textColor font-bold">I'm Purushothaman</p>
            <p className="text-3xl text-textColor font-bold">I am a full stack developer</p>
          </div>
          <div>
            <p className="text-textColor text-md px-3 text-center">
              Hi, I'm a MERN Stack Developer dedicated to building dynamic, user-focused web applications. 
              With expertise in MongoDB, Express, React, and Node.js, I bring modern solutions to life—whether 
              it's a full-scale eCommerce platform or a sleek portfolio site. Let’s collaborate to create engaging 
              digital experiences that stand out!
            </p>
          </div>
        </SubContainer>
      </MainContainer>
  );
}

export default Home;
