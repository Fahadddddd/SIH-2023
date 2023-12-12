import React from 'react'
import {useNavigate} from "react-router-dom";

const List = () => {
    const navigate = useNavigate();
  return (
    <>
        <h4 className='list-head'>List Of Verified Law Firms And Attorneys In India</h4>

        <div className='container pt-5'>
        <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Firm Test 1</div>
        <p><b>Address:</b><br/>Test Address, Test City - Kolkata </p>
        <button className='btnlist'>Contact Firm</button>
        {/* Address:Test Address, Test City - 300076 */}
    </div>
    <span class="badge bg-primary rounded-pill">4⭐</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Firm Test 2</div>
      <p><b>Address:</b><br/>Test Address Second, Test City - Delhi </p>
      <button className='btnlist'>Contact Firm</button>
    </div>
    <span class="badge bg-primary rounded-pill">3.5⭐</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Firm Test 3</div>
      <p><b>Address:</b><br/>Test Address Third, Test City - Mumbai </p>
      <button className='btnlist'>Contact Firm</button>
    </div>
    <span class="badge bg-primary rounded-pill">3⭐</span>
  </li>
</ol>

    <button style={{margin: '32px'}} onClick={()=>navigate('/Evault')} className='btnlist'>Add Your Firm</button>

        </div>
    
    
    </>
  )
}

export default List