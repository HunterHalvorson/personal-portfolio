import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
    
  return (
    <div name = 'home' className = 'h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className = 'max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className = 'flex flex-col justify-center h-full'>
                <h2 className = 'text-4xl sm:text-7xl font-bold text-white'>I'm a Front End Developer</h2>
                <p className = 'text-gray-500 py-4 max-w-md'>Welcome to my portfolio! I'm a passionate front-end developer with expertise in Python, Java, HTML, CSS, JavaScript, Tailwind, and Bootstrap. Currently in my fourth year at the University of Calgary, I'm dedicated to creating dynamic and user-friendly web experiences.</p>

                <div>
                    <button className = ' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        <Link to = 'portfolio' smooth duration={500}>
                            Portfolio 
                        </Link>
                        <span className = 'group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size = {25} className = 'ml-1'/></span>
                    </button>
                </div>
            </div>

            <div>
                <img src='/hunterr.png' alt="my profile" className='rounded-lg mx-auto w-1/3 md:w-1/2 px-10'/>
            </div>
        </div>
    </div>
  )
}

export default Home