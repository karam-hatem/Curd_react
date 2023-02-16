import React from "react";


const Login =()=>{
  console.log("login");
  return(
    <div>
  
      {console.log("login function")}
        <div class="box">
        <h1>Login</h1>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Password"/>
        <button>Login</button>
        <p>Not a member? <span>Sign Up</span></p>
    </div>
  </div>
    )
}
export default Login;