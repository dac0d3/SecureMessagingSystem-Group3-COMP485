import '../css/loginSignup.css';
import React, {useState} from 'react';


const LoginSignup = () => {
    
    const [signup,login] = useState(true);
    

    
    return (
        
        
// Signup container to be displayed when the user does not have an account (default)
// It has a login button that will be used to switch to the login container
// The signup button will be used to sign up the user into the application
// The username, email and password fields are used to get the user's details     
        <>
        {signup? (
        <div className = "signup-container">
            <div className = "header">
                <div className = "text">Sign Up</div>
                <div className = "underline"></div>
            </div>
            
            <div className = "inputs">
                <div className = "input">
                    <input type = "text" placeholder = "  Username" />
                    
                </div>
                <div className = "input">
                    <input type = "email" placeholder = "  Email" />
                </div>
                <div className = "input">
                    <input type = "password" placeholder = "  Password" />
                </div>
                
                
            </div>

            <div className = "submit-container">
                <div className = "login" onClick = {()=>login(!signup)} >Login</div>
                <div className = "signup" >Sign Up</div>
            </div>
               
    
        </div>

        ):(
// Login container to be displayed if login is clicked on the signup container if the user already 
// has an account. It has a forgot password link that will be used to reset the password
// The login button will be used to login the user into the application
// The signup button will be used to switch to the signup container

        <div className = "login-container">
            <div className = "header">
                <div className = "text">Login</div>
                <div className = "underline"></div>
            </div>
            
            <div className = "inputs">
                <div className = "input">
                    <input type = "text" placeholder = "  Username" />
                    
                </div>

                <div className = "input">
                    <input type = "password" placeholder = "  Password" />
                </div>
                
                
            </div>

            <div className = "forgot-password">
                Forgot Password? <span>Click here! </span>
            </div>

            <div className = "submit-container">
                <div className = "signup" onClick = {()=>login(!signup)} >Sign Up</div>
                <div className = "login">Login</div>
            </div>
        </div>
        )}
        </>
    );
}

export default LoginSignup;