import React from 'react'
import mongodb from "../../public/mongodb.png"
import express from "../../public/express.png"
import python from "../../public/python.jpeg"
import react from "../../public/react.png"
import nodejs from "../../public/nodejs.png"
import css from "../../public/css.png"


function Portfolio() {
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
        }
    ]
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
        <div>
            <h1 className="text-xl md:text-3xl font-semibold mb-5">Portfolio</h1>
            <span className="underline">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
                {
                    cardItem.map(({id,logo,name}) => (
                        <div key={id} className="md:w-[280px] md:h-350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
                            <img src={logo} className="w-[120px] h-[120px] rounded-full p-1 border-[2px]" alt="" />
                            <div>
                                <div className='font-semibold text-sm md:text-xl mb-2 '>{name}</div>
                                <p className='px-2 text-gray-700 text-sm md:text-md text-justify mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nesciunt temporibus voluptas cumque iure? Ipsa obcaecati</p>
                            </div>
                            <div className='justify-around space-x-3'>
                                <button className="bg-green-800 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1 mb-2 rounded">Video</button>
                                <button className="bg-green-800 hover:bg-green-600 text-white text-sm font-semibold px-4 py-1 mb-2 rounded">SourceCode</button>
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

export default Portfolio