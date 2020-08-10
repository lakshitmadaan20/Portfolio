import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src="images/pic.jpeg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       					<span>
                      <a href = "mailto: dikshita.jindal2201@gmail.com">Send Email  <i className="fa fa-envelope"></i> </a>
                    </span>
                    <br/>
                    <span className="address">
                    <a href="tel:8700416194">Make a Phone call  <i className="fa fa-phone"></i> </a>
                    </span>
                    <br/>
                    <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <a href={resumeData.website} >{resumeData.website}</a>
       					   </p>
                    <a href="images/dikshufrappresume.pdf" download>
                       <Button size="huge" color="green">Resume   <i className="fa fa-download"></i> </Button>
                    </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}