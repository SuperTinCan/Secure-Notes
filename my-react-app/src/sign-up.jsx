import React, { useEffect, useRef, useState } from "react";
import { setUpValidation } from "./validation";
import "./Credentials.css";

function showPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = "text"; // Change to text to reveal the password
}

function hidePassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = "password"; // Change back to password to hide it
}


function signUp(){

    const passRef = useRef(null);
    const repeatPassRef = useRef(null);

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setUpValidation();
    }, [])

    const togglePasswordVisibility = (inputRef) => {
        if (inputRef.current) {
            inputRef.current.type = showPassword ? "password" : "text";
        }
    };

    return(
        <div className="MainFrame">
            <div>
                <h1 style={{ fontSize: "24px"}}>Sign Up</h1>
            </div>

            <form id="form">
                <div className="input-box" id="name-box">
                    <input
                        type="text"
                        id="name-input"
                        name="name"
                        /*
                        value={username}
                        onChange={handleChange}
                        */
                        placeholder="Firstname"
                    />
                </div>
                
                <div className="input-box" id="email-box">
                    <input
                        type="text"
                        id="email-input"
                        name="email"
                        /*
                        value={username}
                        onChange={handleChange}
                        */
                        placeholder="Email"
                    />
                </div>

                <div className="input-box" id="password-box">
                    <input
                        type="password"
                        id="password-input"
                        name="password"
                        ref={passRef}
                        /*
                        value={username}
                        onChange={handleChange}
                        */
                        placeholder="Password"
                    />

                    <button 
                        type="button" 
                        className="toggle-password"
                        onMouseDown={()=>{
                            setShowPassword(true);
                            togglePasswordVisibility(passRef);
                        }}
                        onMouseUp={()=>{
                            setShowPassword(false);
                            togglePasswordVisibility(passRef);
                        }}
                        //onMouseLeave={hidePassword}
                    >
                        <img src="/eye.svg" alt="show password icon" style={{width: "100%", height: "100%" }} />
                    </button>
                </div>

                <div className="input-box" id="repeat-password-box">
                    <input
                        type="password"
                        id="repeat-password-input"
                        name="repeat-password"
                        ref={repeatPassRef}
                        /*
                        value={username}
                        onChange={handleChange}
                        */
                        placeholder="Repeat password"
                    />

                    <button 
                        type="button"
                        className="toggle-password"
                        onMouseDown={()=>{
                            setShowPassword(true);
                            togglePasswordVisibility(repeatPassRef);
                        }}
                        onMouseUp={()=>{
                            setShowPassword(false);
                            togglePasswordVisibility(repeatPassRef);
                        }}
                        //onMouseLeave={hidePassword}
                    >
                        <img src="/eye.svg" alt="show password icon" style={{width: "100%", height: "100%", outline:"none", border:"none" }} />
                    </button>
                </div>

                <button type="submit" className="login-box">
                    <p>Sign Up</p>
                </button>
            </form>

            <div className="sign-up">
                <p style={{fontSize: "12px", color: "#ffffff50"}}>Already have an account?</p>

                <a href="/login" style={{fontSize: "12px", display: "block"}}>
                    Login here
                </a>
            </div>


            
        </div>
    );
}

export default signUp