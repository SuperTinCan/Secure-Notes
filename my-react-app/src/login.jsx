import "./Credentials.css"

function showPassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = "text"; // Change to text to reveal the password
}

function hidePassword() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = "password"; // Change back to password to hide it
}


function Credentials(){
    return(
        <div className="MainFrame">
            <div>
                <h1 style={{ fontSize: "24px"}}>Login</h1>
            </div>
            
            <form>
                <div className="input-box" id="username-box">
                    <input
                        type="text"
                        id="username"
                        name="username"
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
                        id="password"
                        name="password"
                        placeholder="Password"
                    />

                    <button 
                        type="button" 
                        class="toggle-password"
                        onMouseDown={showPassword}
                        onMouseUp={hidePassword}
                        onMouseLeave={hidePassword}
                    >
                        <img src="/eye.svg" alt="show password icon" style={{width: "100%", height: "100%" }} />
                    </button>
                </div>
            </form>

            <button className="login-box">
                <p>Login</p>
            </button>

            <div className="sign-up">
                <p style={{fontSize: "12px", color: "#ffffff50"}}>New here? Sign up for an account</p>

                <a href="/sign-up" style={{fontSize: "12px", display: "block"}}>
                    Create an account
                </a>
            </div>


            
        </div>
    );
}

export default Credentials