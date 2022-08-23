import React, { useRef } from "react";
import Home from "./Home";
import './LoginPage.css';

const LoginPage =() =>{
    const email=useRef()
    const password=useRef()

    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    
    const handleSubmit=()=>{
        if( email.current.value=="alok.raj123456@gmail.com"&& password.current.value=="123456"){
            localStorage.setItem("emailData","alok.raj123456@gmail.com")
            localStorage.setItem("passwordData","123456")
        }
    }
   
    return(
        <div>
            {
                getEmail&&getPassword?
                <Home/>:
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="E-mail" ref={email} />
                </div>
                <div>
                    <input type="password" placeholder="Password" ref={password} />
                </div>
                <button>Login</button>
            </form>
            }
        </div>
    );
}
export default LoginPage;