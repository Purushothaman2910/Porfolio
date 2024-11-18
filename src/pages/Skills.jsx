import React from 'react'
import { MainContainer , SkillsDeatilsContainer, SubContainer } from '../components'
import { JavaScriptImage , ReactLogo ,NodeJs ,Tailwindogo , MongoDbImage } from '../assets'

function Skills() {
  let Skills =  [
    {
      title : "Javascript" ,
      image : (JavaScriptImage) ,
      description : "Proficient in JavaScript, with expertise in creating dynamic, responsive web applications. Skilled in ES6+ features, DOM manipulation, and event-driven programming. Experienced in both front-end and back-end JavaScript frameworks, enhancing application performance and user experience"
    },
    {
      title : "NodeJs" ,
      image : (NodeJs) ,
      description : "Proficient in Node.js with experience in building server-side applications, managing APIs, implementing authentication, and handling databases using frameworks like Express. Adept in using asynchronous programming, RESTful services, and integrating MongoDB with Mongoose for full stack development"
    },
    {
      title : "ReactJs" ,
      image : (ReactLogo) ,
      description : "Proficient in React.js, experienced in building interactive and high-performance user interfaces. Skilled in component-based architecture, state management, and React Hooks. Expertise in integrating APIs, optimizing rendering, and enhancing user experience with modern front-end techniques"
    },
    {
      title : "Tailwind CSS" ,
      image : (Tailwindogo) ,
      description : "Proficient in Tailwind CSS, with expertise in creating responsive and visually appealing web designs. Skilled in leveraging utility-first classes to build custom layouts efficiently. Experienced in integrating Tailwind with React, ensuring clean and maintainable code while optimizing for performance"
    },
    {
      title : "Mongo DB" ,
      image : (MongoDbImage) ,
      description : "Proficient in MongoDB, skilled in designing and managing NoSQL databases. Experienced in creating efficient data models, performing complex queries, and optimizing database performance. Expertise in aggregation pipelines, indexing, and handling large datasets in a scalable environment"
    }
  ]
  return (
    <MainContainer className='bg-gradient-to-br from-bgColor to-transparentBgColor'>
      <SubContainer>
      <p className="text-4xl font-mono font-bold text-textColor">
           My skills
      </p>
      {
        Skills.map((item)=>(<SkillsDeatilsContainer {...item} />))
      }
      </SubContainer>
    </MainContainer>
  )
}

export default Skills