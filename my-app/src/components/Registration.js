import React from "react";

const Reg = () => {
    return (
        <>
        
        <div class="container justify-content-center boxx">

<div class="inner-container">
<div class="row justify-content-center " style={{margintop:'170px'}}>
<div class=" col-md-7 ">
<div class="logo" >
<img src="data:image/png;base64,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" alt="" style={{objectfit:'fill'}} />
</div>
<h4><i>Welcome To Case Submission<br/>Portal</i></h4>
</div>

<div class="col-md-5  shadow-lg form-div" >
<div class="card " style={{width:'300px', border:'white'}}>
<div class="row">
<div class="col-md-12 ">
<form action=""/>
<div class="form-group">
<input type="text" class="form-control" id="inputt" placeholder="Email address Or Phone Number"/>

</div>
<div class="form-group mt-3">

<input type="password" class="form-control" id="inputt" placeholder="Password" />

</div>
<br/>
<div class="row">
<div class="col">
<button type="button" class="btn btn-primary btn-md " id="btn-a" ><h4>Log In</h4></button>
</div>
</div>

<a href="a" class="text-decoration-none btnn"  >Forgotten Password?</a>

<br/>
<hr/>


{/* <button type="button" class="btn text-white btnnn" style={{background:'#42b72a',width:'100%'}}><h5>Create New Account</h5></button> */}

</div>
</div>
</div>
</div>
</div>

</div>
</div>




<div class="container justify-content-center boxx mt-4">
<div class="inner-container">
<h4><i className="d-flex justify-content-center ">New User Sign-Up<br/></i></h4>
<br/>
<br/>
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Aadhar No.</label>
    <input type="text" class="form-control" id="inputAddress"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputAddress2"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Role</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      
      <option>Attorney</option>
      <option>Judge</option>
      <option>ADR Professional</option>
      <option>self-representative</option>
      
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
</form>

</div>
</div>










      

        </>
    )
};

export default Reg;