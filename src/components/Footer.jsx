import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
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
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p>
                        &copy; 2024 MD Anamul Rain. All right reserved.
                    </p>

                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer