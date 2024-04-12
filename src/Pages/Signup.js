import React from 'react'
import signupimg from '../assets/signup.png'
import Template from '../Components/Template';

const Signup = ({setIsLoggedIn}) => {
  return (
    <div className=' bg-red-100 w-screen h-screen flex justify-center' >
      <Template
      title="welcome back to signup"
      desc1="description1"
      desc2="description2"
      image = {signupimg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
      
 
  )
}

export default Signup
