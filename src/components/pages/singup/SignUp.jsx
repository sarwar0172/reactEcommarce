import React from 'react';
import "./singup.css"
function SignUp() {
    return (
        <div className="container">
          <div>
              <form>
      <div className="mb-3">
        <input type="text" class="form-control input" id="exampleInputEmail1" placeholder="First name"
          aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <input type="text" class="form-control input" placeholder="Last name" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <input type="eamil" class="form-control input" placeholder="Enter your email" id="exampleInputPassword1"/>
      </div> <div className="mb-3">
        <input type="text" class="form-control input" placeholder="Phone number" id="exampleInputPassword1"/>
      </div> <div className="mb-3">
        <input type="Password" class="form-control input" placeholder="Enter your password" id="exampleInputPassword1"/>
      </div>
      <div className="mb-3">
        <input type="Password" class="form-control input" placeholder="Confrom your password" id="exampleInputPassword1"/>
      </div>
      <button type="submit" class="btn submit__button">SignUp</button>
      </form>
      </div>
        </div>
    )
}

export default SignUp
