import React from "react";

function CoreFeatures({feature = ""}){
  return(
    <span
    className="inline-block border px-2 py-[1px] m-1 text-sm font-semibold rounded-xl 
    duration-[0.5s]
    hover:text-bgColor hover:bg-textColor"
    >
    {feature}
  </span>
  )
}

function ProjectsCard({projectName = "", coreFeatures = [] , otherFeatures = [] , link="#"}) {
  return (
    <div className="w-[300px] min-h-[400px] bg-bgColor rounded-lg text-[#cdcde8] p-4 projectCardLayout my-5">
      <div className="flex items-center justify-center">
        <p className="text-2xl font-bold font-sans">{projectName}</p>
      </div>
      <div className=" featuresContainer">
        <div className="flex flex-col">
          <p className="text-sm font-bold mx-1 my-2">Core features</p>
          <div className="flex flex-wrap content-evenly">
            {coreFeatures.map((feature)=> <CoreFeatures feature={feature} />)}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold mx-1 my-2">Other features</p>
          <ul className="list-disc px-4 flex flex-col flex-wrap justify-start">
            {otherFeatures.map((feature)=> (<li>{feature}</li>))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a href={link} className="border border-[#cdcde8] rounded px-6">Visit</a>
      </div>
    </div>
  );
}

export default ProjectsCard;
