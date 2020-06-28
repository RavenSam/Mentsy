import React, { useState } from "react"

import SignupForm from "./SignupForm"

const Signup = () => {
   const [state, setState] = useState({
      email: "",
      name: "",
      password: "",
      password2: "",
      terms: false,
   })

   const handleChange = (e) => {
      if (e.target.type === "checkbox") {
         setState({ ...state, terms: e.target.checked })
      } else {
         setState({ ...state, [e.target.name]: e.target.value })
      }
   }

   return <SignupForm handleChange={handleChange} />
}

export default Signup
