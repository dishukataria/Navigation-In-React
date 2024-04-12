import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => 
{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"", password:""
    })
    const[showPassword, setShowPassword] = useState(false);

    function changehandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    
    function submitHandler(event){
        console.log("clicked");
        event.preventDefault();
        setIsLoggedIn(true);
        navigate("/dashboard");
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className='flex mb-1'>
                    <p>
                        Email Address<sup>*</sup>
                    </p>

                    <input
                        required
                        type="email"
                        value = {formData.email}
                        onChange={changehandler}
                        placeholder="Enter email"
                        name="email"
                    />
                </label>

                <label className='flex'>
                    <p>
                        Password<sup>*</sup>
                    </p>

                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        value = {formData.password}
                        onChange={changehandler}
                        placeholder="Enter password"
                        name="password"
                    />
                    {/* //toggle between true and false */}
                    <span onClick={()=> setShowPassword((prev)=>!prev)}> 
                        {showPassword ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible />)}
                    </span>
                </label>
                    <Link to='#'>
                        <p className=' text-stone-600'>
                            forgot Password
                        </p>
                    </Link>
                <div className='flex justify-center'>
                    <button className='border border-yellow-950 bg-gray-300 p-1'>Sign In</button>
                </div>
            </form>
        
        </div>
  )
}

export default LoginForm
