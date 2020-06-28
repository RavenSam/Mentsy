import React from "react"
import { Link } from "react-router-dom"
import { Checkbox, FormControlLabel } from "@material-ui/core"
import { Facebook as FacebookIcon, ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons"

import "./login.css"

const LoginForm = ({ handleChange }) => {
   return (
      <div id="Login">
         <Link title="Return Back" to="/" className="arrowBack">
            <ArrowBackIosIcon />
         </Link>

         <div className="container">
            <div className="greeting sm-none">
               <h2>Hey</h2>
               <h2>Glad to see you</h2>

               <p className="cardSubTitle">to keep connected with us please login width your personal info</p>
            </div>

            <div className="card">
               <div className="cardHead textCenter">
                  <div>
                     <h3 className="cardTitle">login</h3>
                  </div>
                  <p className="cardSubTitle">Please login to continue</p>
               </div>

               <form className="form">
                  <div>
                     <label htmlFor="email">Your Email</label>
                     <input onChange={handleChange} type="text" name="email" placeholder="email@exemple.com" />
                  </div>
                  <div>
                     <label htmlFor="password">Your Password</label>
                     <input onChange={handleChange} type="password" name="password" placeholder="password" />
                  </div>
                  <input type="submit" value="login" />
               </form>

               <div className="options">
                  <FormControlLabel
                     control={<Checkbox onChange={handleChange} name="rememberMe" />}
                     label="Remember Me"
                  />

                  <a href="/#">Forgot Password?</a>
               </div>

               <hr />

               <div className="socialLogin">
                  <div className="choice textCenter">
                     <p>or login with your social account</p>
                  </div>

                  <a href="http://localhost:5000/auth/google" className="btn-google" title="Login With Google">
                     <div className="btn-content">
                        <div className="logo">
                           <img
                              className="google-icon"
                              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                              alt="Google Logo"
                           />
                        </div>
                        <p>Sign in with Google</p>
                     </div>
                  </a>

                  <a href="http://localhost:5000/auth/facebook" className="btn-fb" title="Login With Facebook">
                     <div className="btn-content">
                        <div className="logo">
                           <FacebookIcon fontSize="inherit" />
                        </div>
                        <p>Sign in with Facebook</p>
                     </div>
                  </a>
               </div>

               <div className="reminder textCenter">
                  <p>
                     Don't have an account?{" "}
                     <Link title="Go To The Login Page" to="/signup">
                        Sign Up
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginForm
