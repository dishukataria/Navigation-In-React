import React from 'react';
import { AiOutlineEye} from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const[formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        createPassword:"",
        confirmPassword:"",
    })
    const navigate = useNavigate();
    const[showPassword1, setShowPassword1] = useState(false);
    const[showPassword2, setShowPassword2] = useState(false);

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
      {/* student instructor tab */}
      <div>
        <button>
            Student
        </button>
        <button>
            Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}
            <div>
                <label className='flex mb-1'>
                    <p>
                        First Name<sup>*</sup>
                    </p>

                    <input
                    required
                    type="text"
                    value = {formData.firstname}
                    onChange={changehandler}
                    placeholder="Enter first name"
                    name="firstname"
                    />
                </label>

                <label className='flex mb-1'>
            <p>
                Last Name<sup>*</sup>
            </p>

            <input
            required
            type="text"
            value = {formData.lastname}
            onChange={changehandler}
            placeholder="Enter first name"
            name="lastname"
            />
                </label>
            </div>
        {/* Email address input */}
            <div>
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
            </div>

        {/* createpassword and confirm password  */}
            <div>
                <label className='flex mb-1'>
                    <p>
                        create Password<sup>*</sup>
                    </p>

                    <input
                        required
                        type={showPassword1 ? ("text") : ("password")}
                        value = {formData.createPassword}
                        onChange={changehandler}
                        placeholder="Enter password"
                        name="createPassword"
                    />
                    {/* //toggle between true and false */}
                    <span onClick={()=> setShowPassword1((prev)=>!prev)}> 
                        {showPassword1 ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                    </span>
                </label>

                <label className='flex mb-1'>
                    <p>
                        Confirm Password<sup>*</sup>
                    </p>

                    <input
                        required
                        type={showPassword2 ? ("text") : ("password")}
                        value = {formData.confirmPassword}
                        onChange={changehandler}
                        placeholder="Confirm password"
                        name="confirmPassword"
                    />
                    {/* //toggle between true and false */}
                    <span className='confirmPassword' onClick={()=> setShowPassword2((prev)=>!prev)}> 
                        {showPassword2 ? (<AiOutlineEye/>) : (<AiOutlineEyeInvisible/>)}
                    </span>
                </label>
            </div>

            <div className='flex justify-center'>
                <button className='border border-yellow-950 bg-gray-300 p-1'>Create Account</button>
            </div>
      </form>
    </div>
  )
}

export default SignupForm
