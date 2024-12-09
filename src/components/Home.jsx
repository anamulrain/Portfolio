import React from 'react'
import homeImage from "../../public/aboutimg1.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
       <div className="flex flex-col md:flex-row">
         <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className='text-xl'>Welcome To My Profile</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
                <h1>Hello, I'm a</h1>
                {/* <span className="text-green-800">Developer</span> */}
                    <ReactTyped
                        className="text-green-800"
                        strings={["Developer", "Programmer", "Coder", "Desiginer"]}
                        typeSpeed={50}
                        backSpeed={60}
                        loop = {true}
                    />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>A full-stack developer skilled in both front-end and back-end
          technologies. Proficient in the MERN stack, I design and develop user
          interfaces, manage databases, and handle server-side logic to create
          efficient and scalable web applications. My expertise ensures
          comprehensive solutions to complex tech challenges.</p>
            <br />
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                     <div className='space-y-2'>
                        <h1 className="font-semibold">Avaliable on</h1>
                        <ul className='flex space-x-5'>
                            <li>
                                <a href="https://www.facebook.com/" target={"_blank"}>
                                <FaFacebookSquare className='text-2xl cursor-pointer'/></a>
                                </li>
                            <li>
                                <a href="https://www.instagram.com/anamulrain1431?utm_source=qr&igsh=ZXVvams5Zm95ZHFi" target={"_blank"}>
                                <FaSquareInstagram className='text-2xl cursor-pointer'/></a>
                                </li>
                            <li>
                                <a href="https://www.linkedin.com/in/md-anamul-rain-5b116b227" target={"_blank"}>
                                <FaLinkedin className='text-2xl cursor-pointer'/></a>
                                </li>
                            <li>
                                <a href="https://www.github.com/anamulrain" target={"_blank"}>
                                <FaSquareGithub className='text-2xl cursor-pointer'/></a>
                                </li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h1 className="font-semibold">Currently working on</h1>
                        <div className='flex space-x-5'>
                            <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                            <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                            <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                            <IoLogoNodejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                        </div>
                    </div>
            </div>
         </div>
         <div className="md:w-1/2 md:ml-40 md:mt-20 order-1">
            <img src={homeImage} className="rounded-full md:w-[400px] md:h-[400px] border border-green-600 " alt="" />
         </div>
       </div>
    </div>
    <hr />
    </>
  )
}

export default Home