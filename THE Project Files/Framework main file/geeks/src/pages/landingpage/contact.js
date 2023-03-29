import React from 'react';
import thi from "./any.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import {Telephone} from "react-bootstrap-icons";
import{Envelope} from "react-bootstrap-icons";
import{Geo } from "react-bootstrap-icons";
import { useState } from 'react';
function Contact(){
   
    return(
        <div class={thi.main}>
            <Navbar></Navbar>
           
            
            
               {/* main row */ }
            
            <div class="row shadow-lg p-5 mb-5 bg-body rounded">
              
              <h4 class={thi.outer}>contact us
               <h5 class={thi.send}>any question?just send us a message</h5>
               </h4>
                <div class="row shadow-lg p-5  mb-5 bg- rounded" >
                        
             <div class="row ">
                {/* main col */ }
                    <div class="col-4 " >
                       <h3 class={thi.col1}>
                        <h2 class={thi.cont}   >  contact information</h2>
                                
                       <div class="row">
                            {/* telephone col */ }
                        <div class="col-2">
                           <h4 class={thi.Tele}><Telephone/></h4> 
                        </div>
                      
                               
                        <div class="col-3">
                           <h5 class={thi.Tele2}>+01002230333</h5> 
                        </div>
                        {/* email co */ }
                        <div class="col-2">
                           <h4 class={thi.email}><Envelope/> 
                      
                           </h4> 
                        </div>

                        <div class="col-3">
                           <h5 class={thi.email2}  >geeks@gmail.com
                           </h5> 
                        </div>
                         {/* location col */ }
                        <div class="col-2">
                                <h4 class={thi.location}>
                                <a href='https://goo.gl/maps/16x65ym2sMUahk869' target="blank"><Geo/> </a>
                                </h4> 
                            
                        </div>
                                      
                      
                        </div>
                       
                       </h3>
                        
                       
                     </div>
            
                     
                   
                <div class="col-sm-3">
                  <h2 class={thi.col2} >   send us !
                   {/* form  section  */}

                     <form method='post' >
                        {/* firstname section  */}
                        <div class="row">
                         <div class="col">
                           <h2 class={thi.firstname}>
                          <input type="text" class="form-control" placeholder="First name" />
                          </h2>
                       </div>
                         {/* lastname section  */}
                         <div class="col"> 
                         <h2 class={thi.firstname}>  
                           <input type="text" class="form-control" placeholder="Last name"/>
                           </h2>
                            </div>
                                    </div>

               <div class="row">
                         <div class="col">
                            {/* lastname section  */}
                           <h2 class={thi.firstname}>  
                          <input type="text" class="form-control" placeholder="Email" />
                          </h2>
                       </div>
                         <div class="col"> 
                          {/* phone number section  */}
                         <h2 class={thi.firstname}>  
                           <input type="text" class="form-control" placeholder="phone number" />
                           </h2>
                            </div>
                                    </div>

                                    <div class="form-group">
                                    <label for="exampleFormControlTextarea1" class={thi.message1}>Message</label>
                                       <div class ={thi.message2}>
                                        <textarea class="form-control"  rows="2"></textarea>
                                        </div>
                                    </div> 
                                    <div class={thi.submit} >
                                    <button type="submit" class="btn btn-primary mb-2">Submit</button>
                             </div>
                            </form>
                     </h2>

                       {/*col for first name */}
                     

                          </div>
                </div>
                
               </div>
                        
          </div>
          </div>
          
    )
}
export default Contact;