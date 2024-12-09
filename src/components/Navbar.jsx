import React from "react";
import logoImage from "../../public/home1.png";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import {Link} from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false)
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfolio"
    },
    {
      id: 4,
      text: "Experience"
    },
    {
      id: 5,
      text: "Service"
    },
    {
      id: 6,
      text: "Contacts"
    }
  ]
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={logoImage} className="h-12 w-12 rounded-full border-emerald-500 border" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer"> MD <samp className="text-green-600 ">Anamul</samp> Rain
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div className="">
            <ul className="hidden md:flex space-x-10">
             {navItems.map(({id,text})=>(
                <li className="hover:scale-110 duration-200 hover:text-green-700 cursor-pointer" key={id}>
                  <Link to={text} 
                  smooth="true" 
                  duration={500} 
                  offset={-70} actionclass="active">{text}</Link>
                  </li>
              ))}
            </ul>
             <div onClick={()=> setMenu(!menu)} className="md:hidden">
               {menu ? <IoCloseSharp size={24}/> :<TiThMenu size={24}/>}
          </div>
          </div>
        </div>
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
             {
              navItems.map(({id,text})=>(
                <li className="hover:scale-105 duration-200 hover:text-green-700 cursor-pointer" key={id}>
                  <Link 
                  onClick={()=> setMenu(!menu)}
                  to={text} 
                  smooth="true" 
                  duration={500} 
                  offset={-70} actionclass="active">{text}</Link>
                  </li>
              ))
             }
          </ul>
        </div>
        )}

      </div>
    </>
  );
}

export default Navbar;
