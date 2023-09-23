import React from 'react'

export const ShippingLogin = () => {
  return (
    <div>

        <div class="sign-in-window">

            <img src="https://dnk.cept.gov.in/customers.web/static/img/IPlogo.png" alt="logo" class="logo"></img>
            <h4>Register</h4>
        <form class="shipping-sign-form">
        <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Username</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">By registering, I agree to these terms and conditions</label>
            </div>
            <div class="shipping-submit-btn">
             <button type="submit" class="btn btn-primary" id="shipping-submit-btn">REGISTER</button>
            </div>
        </form>

        <p>Already have an account? <span><a href="/">Login</a></span></p>

        </div>

    </div>
  )
}
