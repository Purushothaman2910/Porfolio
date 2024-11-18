import React from "react";
import { MainContainer, SubContainer , AboutCard } from "../components";


function About() {
  let educationDetails = [
    {
      heading : "School" ,
      institutionName : "Saru Matric Higher Secondary School" ,
      description : "I completed my schooling at Saru Matriculation Higher Secondary School, where I built a strong academic foundation and developed critical thinking skills. The nurturing environment, supportive faculty, and diverse activities inspired my passion for learning and shaped my career path in technology"
    },
    {
      heading : "Under graduate" ,
      institutionName : "Gobi Arts & Science College" ,
      description : "I completed my undergraduate studies at Gobi Arts and Science College, where I built a strong foundation in my field and honed critical thinking skills. The enriching environment and dedicated faculty fueled my passion for innovation and prepared me for a career in technology."
    }
  ]
  return (
    <MainContainer className="bg-gradient-to-bl from-buttonHighligths to-bgColor">
      <SubContainer className="w-full">
        <div>
          <p className="text-4xl font-mono font-bold text-textColor">
            About Me
          </p>
          <p className="text-lg text-textColor px-3 my-5">
            Hello! I'm Purushothaman, a passionate Full Stack Developer with experience in creating dynamic, responsive web applications.
            With a strong foundation in the MERN stack (MongoDB,Express.js, React.js, and Node.js), I enjoy building seamless user experiences and efficient server-side logic. My journey in web development has equipped me with the skills to handle complex projects, including API integration, database management , and UI/UX design using technologies like Tailwind CSS.
          </p>
        </div>
        <div className="flex gap-5 justify-evenly flex-wrap my-6">
          {
            educationDetails.map(({institutionName , heading , description}) => (<AboutCard heading={heading} institutionName={institutionName} description={description}/>))
          }
        </div>
      </SubContainer>
    </MainContainer>
  );
}

export default About;
