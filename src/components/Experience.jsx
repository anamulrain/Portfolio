import React from 'react'
import mongodb from "../../public/mongodb.png"
import express from "../../public/express.png"
import python from "../../public/python.jpeg"
import react from "../../public/react.png"
import nodejs from "../../public/nodejs.png"
import css from "../../public/css.png"
import html from "../../public/html.png"

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: express,
            name: "Express"
        },
        {
            id: 3,
            logo: python,
            name: "Python"
        },
        {
            id: 4,
            logo: react,
            name: "Reactjs"
        },
        {
            id: 5,
            logo: nodejs,
            name: "Nodejs"
        },
        {
            id: 6,
            logo: css,
            name: "CSS"
        },
        {
            id: 7,
            logo: html,
            name: "HTML"
        },

    ]
  return (
    <>
    <div name="Experience" className='max-w-screen-2xl mx-auto px-4 md:px-20 my-10'>
        <div>
            <h1 className="text-xl md:text-3xl font-semibold mb-5">Experience</h1>
            <p className='text-sm md:text-md text-justify '>I'm freshly graduates and also have completed MERN and I am a fresher with all of these.</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 my-5">
                {
                    cardItem.map(({id,logo,name}) => (
                        <div key={id} className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] w-[150px] h-[150px] cursor-pointer">
                            <img src={logo} className="w-[100px] rounded-full" alt="" />
                            <div>
                                <div className='font-semibold text-sm md:text-xl mb-2 '>{name}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    <br />
    <hr />
    </>
  )
}

export default Experience