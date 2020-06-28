import React from "react"
import { Link } from "react-router-dom"


const Home = () => {
   return (
      <nav>
         <ul>
            <Link to="/">
               <li>Home</li>
            </Link>

            <Link to="/signup">
               <li>Sign Up</li>
            </Link>

            <Link to="/login">
               <li>Login</li>
            </Link>
         </ul>
      </nav>
   )
}

export default Home
