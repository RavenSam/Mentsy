import React from "react"
import { Link } from "react-router-dom"
import { Checkbox, FormControlLabel } from "@material-ui/core"
import { Facebook as FacebookIcon, ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons"

import "./Signup.css"

const SignupForm = ({ handleChange }) => {
   return (
      <div id="Signup">
         <Link title="Go Back" to="/" className="arrowBack">
            <ArrowBackIosIcon />
         </Link>

         <div className="container">
            <div className="greeting sm-none">
               <h2>Welcome</h2>
               <h2>Glad to see you</h2>

               <p className="cardSubTitle">Please Sign up now, it is easy and free</p>
            </div>

            <div className="card">
               <div className="cardHead textCenter">
                  <div>
                     <h3 className="cardTitle">Sign Up</h3>
                  </div>
               </div>

               <div className="socialBtn">
                  <a href="/auth/facebook" title="Sign Up With Facebook" className="fb s-btn">
                     <FacebookIcon fontSize="inherit" />
                  </a>

                  <a href="/auth/google" className="gg s-btn" title="Sign Up With Google">
                     <img
                        className="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google Logo"
                     />
                  </a>
               </div>

               <form className="form">
                  <div>
                     <label htmlFor="text">Name</label>
                     <input onChange={handleChange} type="text" name="name" placeholder="Name" />
                  </div>

                  <div>
                     <label htmlFor="email">Email</label>
                     <input onChange={handleChange} type="text" name="email" placeholder="email@exemple.com" />
                  </div>

                  <div>
                     <label htmlFor="password">Password</label>
                     <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                  </div>

                  <div>
                     <label htmlFor="password2">Confirm Password</label>
                     <input onChange={handleChange} type="password" name="password2" placeholder="Confirm Password" />
                  </div>

                  <div className="options">
                     <FormControlLabel
                        control={<Checkbox onChange={handleChange} name="terms" />}
                        label="By signing up you agree with mentsy terms and conditions"
                     />
                  </div>

                  <input type="submit" value="Sign Up" />
               </form>

               <div className="reminder textCenter">
                  <p>
                     Already have an account?{" "}
                     <Link title="Go to The Login Page" to="/login">
                        Login
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignupForm
