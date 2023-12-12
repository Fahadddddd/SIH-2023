import React from 'react';
import {useNavigate} from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div id="header">
    <div className="container">
    <div className="row justify-content-between">
    <div className="col-md-4">
    <h1 id = "logo">E-Portal For Case Management</h1>
    </div>
    <div className="col-md-4 navbarr">
    <ul id="menu" className="float-md-right menuu ">
    {/* <li ><a href="#banner" className="active" >Law Firm List</a></li> */}
    <li> <button className='btnnav' onClick={()=>navigate('/List')} >Law Firm List</button></li>
    <li> <button className='btnnav' onClick={()=>navigate('/ADR')} >ADR Session</button></li>
    {/* <li><a href="#Missions">E-vault</a></li> */}
    <li> <button className='btnnav' onClick={()=>navigate('/Evault')} >E-vault</button></li>
    
    
    </ul>
    </div>
    </div>
    </div>
    </div>

        <div className='main'>
            <div className='main-text'>
                <h4 style={{fontfamily: '-webkit-body'}}>
                    Virtual <span style={{color: 'white'}}>ADR</span> and <span style={{color: 'white'}} >Evault Portal</span>
                </h4>
                <h2 className='text-body'>
                 Governed by the Indian Courts E-Filing Authority, the Portal serves as a site for virtal Alternative Dispute Resolution , It Also Provides Evault For Disposed Cases . 
                </h2>  

                <div className='btnn d-flex justify-content-between'>
                    <button onClick={()=>navigate('/Registration')} style={{color: 'white'}} className='btn btn-primary btnmain'>
                        Enter The Portal
                    </button>

                    <button className='btn btn-primary btnmain'>
                        <a style={{color: 'white'}} href="x"> See Your Meetings </a>
                    </button>
                </div>
            </div>
            

        </div>

        <div className='sec-main row align-content-center'>
            
            <div className='col-md-4 d-flex justify-content-center'>

                <i class="fa fa-globe fa-2x iconn" aria-hidden="true"></i>
                <h5 style={{color:'white'}}> File Your Case <br/> From Anywhere </h5>
            </div>

            <div className='col-md-4 d-flex justify-content-center'>

                <i class="fa fa-video-camera fa-2x iconn" aria-hidden="true"></i>
                <h5 style={{color:'white'}}> Virtual Alternative <br/> Dispute Resolution </h5>
            </div>

            <div className='col-md-4 d-flex justify-content-center'>

                <i class="fa fa-file fa-2x iconn" aria-hidden="true"></i>
                <h5 style={{color:'white'}}> E-Vault For <br/> Disposed Case Documents </h5>
            </div>


        </div>

        <div className="features-main">
                <div className="titlee">
                    <h2  style={{color:'#244f8f' , fontFamily:'-webkit-body'}}>
                        PUBLIC NOTICES
                        <br/>
                        <br/>
                        <br/>
                    </h2>
                </div>

                <div className="txt">
                    
                    <h5>There are currently no upcoming scheduled meetings or public notices.</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <div className="txt">                   
                    <a className="noticee" href><h5>Go To Notices Section For More public notices.</h5></a>
                    <br/>
                    <br/>
                    <br/>

                </div>

                <div className="txt">                   
                    <h5 style={{color: 'steelblue'}}>Guide Through The Portal</h5>
                    <br/>
                    
                </div>

                <div className="videoo">
                    
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yXWw0_UfSFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                

            </div>

            <footer id='foot'>
            <div className='img d-flex'>
                <div class="card" style={{width: '21.5rem'}}>
                    <img class="card-img-top imggg" src="https://as1.ftcdn.net/v2/jpg/02/59/14/28/1000_F_259142843_DMIYHaNmzRMJfcKil0dNSWgpijFsxVj1.jpg" alt=""/>
                </div>

                <div class="card" style={{width: '21rem'}}>
                    <img class="card-img-top imggg" src="https://media.istockphoto.com/id/1008159054/photo/law-and-justice.jpg?s=612x612&w=0&k=20&c=cJEnc4NBJ4WwCm53FDHBquLSQA_TIPmTeayveA7U4_g=" alt=""/>
                </div>

                <div class="card" style={{width: '21rem'}}>
                    <img class="card-img-top imggg" src="https://media.istockphoto.com/id/1164306206/photo/the-calcutta-high-court-is-the-oldest-high-court-in-india.jpg?s=612x612&w=0&k=20&c=lDyC38FATp-Vrim7EoS3MU_mkvC3c5G6V6T2kHZs2CI=" alt=""/>
                </div>

                <div class="card" style={{width: '21rem'}}>
                    <img  class="card-img-top imggg" src="https://media.istockphoto.com/id/1333702287/photo/law-icon-rotating-wheel-concept.jpg?s=612x612&w=0&k=20&c=qFTQfU2XOeDx0noCbjJMQwi-A0Y1mUK_JGJ6n9S8M_0=" alt=""/>
                </div>

                <div class="card" style={{width: '21rem'}}>
                    <img  class="card-img-top imggg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomkvLgyiu3B6LASK2PmNALV6-PHcqfShITY2JqNAhi-azwhclkhBfkj1iz7OWxxJdOWE&usqp=CAU" alt=""/>
                </div>
            </div>

            <div className='row foot-down'>
                <div className='col-md-4 d-flex justify-content-center'>
                    <h3 className='foot-logo'>
                        Indian Court <br/> E-Filling Authority
                    </h3>
                </div>
                <div className='col-md-5'>
                    <div className='linkk'>
                        <h5 className='foot-logo stylee'><a style={{color: 'white' , paddingleft: '18px'}} href='a'>Privacy Policy</a></h5>
                        <h5 className='foot-logo'><a style={{color: 'white'}} href='h'>Help Desk</a></h5>
                    </div>
                    
                    <br/>
                    <h6 className='foot-logo'>
                    © 2023 Indian Courts E-Filing Authority, All Rights Reserved.
                    </h6>

                </div>
            </div>
        </footer>
        
        </>
        

    )
};

export default Home