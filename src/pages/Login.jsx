import React, { useRef, useState } from 'react'
import UserAuth from '../context/AuthContext'
import { NavLink, Navigate } from 'react-router-dom'
// import Image from '../components/login_page_img.png'

export default function LoginPage() {
    const { user, login } = UserAuth()
    const uname = useRef();
    const pwd = useRef();
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            <Navigate to='/home' />
            console.log(email);
            setLogged(false);
            setLogged1(true);
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
        }
    };
    if(user==null)
    return (
        <>
            <div className="login-page">
                
               
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(uname.current.value, pwd.current.value)
                }}
                >
                    <div className="login-div">
                       <h2>
                        Login Page
                        </h2>
                        
                        {logged ?
                            <p className='pmatch'>Wrong Credentials</p>
                            :
                            null
                        }
                        {logged1 ?
                            <p className='pmatch-1'>Logged In!</p>
                            :
                            null
                        }
         
                        <div className="username">
                            {/* <label htmlFor="">Username</label> <br /> */}
                            <input placeholder='Username' type="email" id="uname" ref={uname} required={true} />
                        </div>
                        <div className="password">
                            {/* <label htmlFor="">Password</label> <br /> */}
                            <input placeholder='Password' type="password" id="pwd" ref={pwd} required={true} />
                        </div>
                        
                        <div className="btns">
                            <button type='submit' className='login-submit-btn'>Login</button>
                        </div>
            <div className='login-options'>
                        <NavLink className="td" to='/signup'>Don't have an account?  </NavLink> <br/>
                        <NavLink className="td" to = '/forgotpass'>forgot password?</NavLink>
            </div>
                    </div>
                </form>
            </div>
        </>
    )
    else 
    return <Navigate to ='/home'/>
}
