import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
function About() {
  return (
    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
        <h1 className="text-xl md:text-3xl font-semibold mb-5">About</h1>
        <h2 className="mb-2 text-xl md:text-2xl">LET ME INTRODUCE MYSELF</h2>
        <p className="text-sm md:text-md justify-center text-justify">
          I am MD Anamul Rain, an undergraduate from ISMT College, affiliated
          with the University of Sunderland, UK. I have completed the CCNA
          course, which has provided me with a strong foundation in networking
          principles and practices. Additionally, I have honed my development
          skills by mastering the MERN stack from Broadway Infosys, comprising MongoDB, 
          Express.js, React.js, and Node.js. This combination of networking and full-stack
          development expertise allows me to approach technical challenges with
          a well-rounded perspective, creating efficient and scalable solutions.
          I am passionate about leveraging my diverse skill set to innovate and
          excel in the tech industry.
        </p>
        <br />
        <h1 className='text-sm md:text-xl font-semibold text-green-800'>Education & Training</h1>
        <span className='text-sm md:text-md'>
            <PiStudentBold className='text-xl md:text-3xl mt-2 mb-1'/>Bachlor's in Computer Systems Engineering(Bsc.IT), 
            ISMT College affiliated to University of Sunderland
            Comppleted in Sept 2023
        </span>
        <span className='text-sm md:text-md'>
            <PiCertificate className='text-xl md:text-3xl mt-2 mb-1'/> MERN Stack From Broadway Infosys, Completed in Nov 2024 <br />
            CCNA From Broadway Infosys, Completed in Nov 2021
        </span>
        <br />
        <br />
        <h1 className='text-sm md:text-xl font-semibold text-green-800'>Profoessional Skills & Technical Skills</h1>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 md:ml-40 md:mt-5 flex-col md:flex-row font-semibold text-sm md:text-md'>Profoessional Skills
                <li>Communication</li>
                <li>Team Work</li>
                <li>Creativity</li>
                <li>Interpresonal</li>
                <li>Problem-solving</li>
            </div>
            <div className='md:w-1/2 md:ml-40 md:mt-5 flex-col md:flex-row font-semibold text-sm md:text-md'>Technical Skills
                <li>MongoDB</li>
                <li>Nodejs</li>
                <li>Express</li>
                <li>React</li>
                <li>Html</li>
                <li>Css</li>
                <li>Networking</li>
            </div>
        </div>
        <br />
        <h1 className='text-sm md:text-xl font-semibold text-green-800'>Mission Statement</h1>
        <span className='text-sm md:text-md text-justify'>My Mission is to leverage my skills and creativity to deliver innovative in web development
         solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth,
         always seeking new challanges and oppurtinuities to expand my horizons.
        </span>
    </div>
    <hr />
    </>
  )
}

export default About