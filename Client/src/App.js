import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

// Pages Components
import { Login,Signup, Home } from "./Components"

// ==================================================================
// App Component
class App extends Component {
   render() {
      return (
      
      
      
         <Switch>
         
            <Route exact path="/" component={Home} />
         
            <Route  path="/login" component={Login} />
			
			<Route path="/Signup" component={Signup} />
            
         
         </Switch>
      )
   }
}

export default App
