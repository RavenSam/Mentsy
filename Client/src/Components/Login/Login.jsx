import React, { useState } from "react"

import LoginForm from "./LoginForm"

const Login = () => {
   const [state, setState] = useState({
      email: "",
      password: "",
      rememberMe: false,
   })

   const handleChange = (e) => {
      if (e.target.type === "checkbox") {
         setState({ ...state, rememberMe: e.target.checked })
      } else {
         setState({ ...state, [e.target.name]: e.target.value })
      }
   }

   return <LoginForm handleChange={handleChange} />
}

export default Login
