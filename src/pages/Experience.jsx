import React from 'react'
import {MainContainer , SubContainer, ProjectsCard} from '../components'


function Experience() {
  let projects = [
    {
      projectName : "Tectovia (Quiz App)", 
      coreFeatures : ["realtime quiz" , "dedicated user dashboards" , "Completely free"] , 
      otherFeatures : ["Deployed in AWS" , "providing free paltform for quiz"] , 
      link:"https://tectovia.in/"      
    } ,
    {
      projectName : "Nucaza innovations Pvt. Ltd.", 
      coreFeatures : ["Official website of the company" , "Single page application"] , 
      otherFeatures : ["Real tme mail communicatioin" , "A complete SPA"] , 
      link:"https://nucazainnovations.com/"      
    }
  ]
  return (
    <MainContainer className="bg-gradient-to-bl from-transparentBgColor to-bgColor">
      <SubContainer>
        <div className="min-h-fit">
          <p className="text-4xl font-mono font-bold text-textColor">
            Experience
          </p>
          <div className="p-[20px] flex flex-col gap-4">
            <p className="text-textColor text-2xl">
              <span className="text-5xl font-bold"> 0.5 </span> years at Nucaza
              Innovations Pvt.Ltd
            </p>
            <p className="text-textColor text-xl">
              <span className="font-bold">Full stack developer</span> in Nucaza
              Innovations Pvt.Ltd Worked as a Web Developer at The Nucaza
              Innovations Pvt.Ltd for 6 months, focusing on building dynamic
              client-side applications using React.js and developing server-side
              functionalities with Node.js to deliver seamless and efficient web
              solutions.
            </p>
          </div>
        </div>
        <div className="min-h-fit">
          <p className="text-4xl font-mono font-bold text-textColor">
            Achievements
          </p>
          <p className="text-textColor text-xl p-4">
            Our Tectovia Team's School Management System project proposal has been selected and funded in
            the 'DST', supported by 'NSTEDB', Department of Science and
            Technology, Govt. of India
          </p>
        </div>
        <div className="min-h-fit">
          <p className="text-4xl font-mono font-bold text-textColor">
            Projects
          </p>
          <div className="flex flex-wrap content-evenly justify-evenly my-5">
            {projects.map((projectDeatils) => (
              <ProjectsCard {...projectDeatils} />
            ))}
          </div>
        </div>
      </SubContainer>
    </MainContainer>
  );
}

export default Experience