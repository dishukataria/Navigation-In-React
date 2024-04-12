import React from 'react'
import Template from '../Components/Template'
import loginImg from '../assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <div className=' bg-red-100 w-screen h-screen flex justify-center' >
      <Template 
      title="WELCOME BACK"
      desc1="description line1"
      desc2="description line2"
      image = {loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
