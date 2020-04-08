import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills';

class About extends React.Component {
    render() {
       return (
          <div>
             <Grid>
                <Cell col={6}>
                   <div style={{textAlign: 'center'}}>
                      <img  src="https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/48428150_2054689787910336_887564642509914112_n.jpg?_nc_cat=108&_nc_ohc=Tcla8kOQZkEAX8sKxo2&_nc_ht=scontent.fdel6-1.fna&oh=68e8504476d07608c9a330bebc81b596&oe=5E92E6D4" 
                       style={{height: '200px'}}
                      />

                   </div>

                   <h2 style={{paddingTop: '2em'}}>Lakshit Madaan</h2>
                   <h4 style={{color: 'grey'}}>Full Stack web Developer</h4>
                   <hr style={{borderTop: '3px solid #0000CD'}} ></hr>
                   <p>Strong decision-maker with more than one year of experience in software engineering and application development.Ready to work closely with both teams and customers to identify most efficient and beneficial solutions for process improvement. Skilled worker with proven ability to perform variety of tasks, including maintenance, customer service etc.Ability to multitask,Skilled in operating basic hand tools. Excellent work performance and attendance record.
                            Dedicated Developer with perseverance and goal-driven work ethic excelling in increasing sales and building customer relationship,achieve product expertise, and create key client relationships.
                            Worked on Various Projects such as Weather App, Todo App, A social networking platform etc and currently working on implementing blockchain with web.
                         </p>
                   <hr style={{borderTop: '3px solid #0000CD'}} ></hr>
                   <h5>Address</h5>
                   <p>590 Nimri Colony ashok Vihar P-4</p>
                   <p>New Delhi-52</p>
                   <h5>Phone <i className="fa fa-phone"></i> </h5>
                   <p>+91 8377057734</p>
                   <h5>Email <i class="fa fa-envelope" aria-hidden="true"></i> </h5>
                   <p>lakshitmadaan@gmail.com</p>
                   <hr style={{borderTop: '3px solid #0000CD'}} ></hr>
                   <div className="list-group">
  <h4 type="button" className="list-group-item list-group-item-action active">
    Technical Skills
  </h4>
  <button type="button" className="list-group-item list-group-item-action">Javascript</button>
  <button type="button" className="list-group-item list-group-item-action">React.js</button>
  <button type="button" className="list-group-item list-group-item-action">Node.js</button>
  <button type="button" className="list-group-item list-group-item-action">MongoDb</button>
  <button type="button" className="list-group-item list-group-item-action">Exprss.js</button>
  <button type="button" className="list-group-item list-group-item-action" >HTML</button>
  <button type="button" className="list-group-item list-group-item-action" >CSS</button>
  <button type="button" className="list-group-item list-group-item-action">Axios/Ajax</button>
  <button type="button" className="list-group-item list-group-item-action">Blockchain</button>
  <button type="button" className="list-group-item list-group-item-action">Ethereum</button>

  <hr style={{borderTop: '3px solid #0000CD'}} ></hr>
  <h4>Achievements</h4>
   <ul>
      <li>First Author on paper 'Working principle,Application areas of blockchain' published in IEEE</li>
   </ul>
</div>
                  
                </Cell>

                <Cell className="" col={6}>
                   <div className="jumbotron">
                      <h1 className="text-center bg-secondary">Education</h1>
                      <div className="text-center container"> 
                        <Education/>
                        <br/>
                        <h1 className="text-center bg-secondary">Experince</h1>
                        <Experience/>
                        <br/>
                        <div>
                           <h1 className="text-center bg-secondary">Certifications</h1>
                           <Skills progress={90}/>
                        </div>
                      </div>
                   </div>
                </Cell>
             </Grid>
          </div>
       )
    }
 }
 export default About;
 