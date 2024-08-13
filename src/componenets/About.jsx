import React from 'react'

const About = () => {
  return (
    <div name = 'about' className = 'w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className = 'max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className = 'pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-gray-800'>About</p>
            </div>

            <p className = 'text-xl mt-20'>
            As a dedicated front-end developer entering my fourth year at the University of Calgary, I have honed my skills in creating visually appealing and user-friendly web applications. 
            </p>

            <br/>

            <p className = 'text-xl'>
            My expertise spans a variety of programming languages and technologies, including Python, Java, HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. Additionally, I have a solid understanding of data structures, which enhances my ability to write efficient and effective code. With a passion for continuous learning and a commitment to excellence, I am eager to contribute to innovative projects and collaborate with like-minded professionals in the tech industry.
            </p>
        </div>
    </div>
  )
}

export default About