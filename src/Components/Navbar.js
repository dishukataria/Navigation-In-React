import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
const Navbar = (props)=>{
    const isloggedin = props.isloggedin;
    const setIsLoggedIn = props.setIsLoggedIn;
        return(
            <div className='flex justify-evenly bg-black relative'>
                <Link to="/">
                    <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img>
                </Link>  

                <nav>
                    <ul className='flex gap-3 text-white'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/ ">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex ml-20 gap-3 text-white">
                    {
                        !isloggedin && // jab login nahi hoga tabh ye show hoga
                        <Link to="/Login">
                            <button>
                                Login
                            </button>
                        </Link>
                    }
                    { 
                        !isloggedin &&
                        <Link to="/Signup">
                            <button>
                                Signup
                            </button>
                        </Link>
                    }
                    { 
                        isloggedin && //jabh login hoga tabh ye show nahi hoga
                        <Link to="/">
                            <button onClick={()=>{
                                setIsLoggedIn(false);
                                //toaster
                                    }}>
                                Logout
                            </button>
                        </Link>
                    }
                    { 
                        isloggedin &&
                        <Link to="/Dashboard">
                            <button>
                                Dashboard
                            </button>
                        </Link>
                    }
                </div>
            </div>
        )
}
export default Navbar;