import React from 'react'
import frameimage from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className='flex gap-5 mt-5'>
      <div className='flex-row'>
        <h1 className='flex justify-center text-2xl'>
          {title}
        </h1>
        <p className='flex flex-col text-cyan-900'>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {
          formType === "signup" ?
          (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
          (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
        }

        <div className='flex justify-center'>
          <div></div>
          <div>OR</div>
          <div></div>
        </div>
        <div className='flex justify-center'>
          <button className=' border border-yellow-950 bg-gray-300 p-1 '>
            <p>Sign Up with Google</p>
          </button>
        </div>
      </div>

      <div className='flex flex-wrap'>
        <div className='relative'>
          <img src={frameimage}
          alt='pattern'
          width = {210}
          height={210}
          loading='lazy'/>
        </div>

        <div className='absolute'>
          <img src={image}
          alt='Students'
          width = {200}
          height={200}
          loading='lazy' />
        </div>
        
      </div>
    </div>
  )
}

export default Template
