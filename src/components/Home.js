import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';


class Landing extends Component {

  render() {  
  return (
      <div className="landing-grid">
       <div className="container">
         <img src="https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/48428150_2054689787910336_887564642509914112_n.jpg?_nc_cat=108&_nc_sid=7aed08&_nc_ohc=oCP5kDA3UokAX9BkdPx&_nc_ht=scontent.fdel6-1.fna&oh=c7853a206654e188100a03c591f9d840&oe=5EB2C2AC" alt="avatar" className="avatar-img" />
         <hr style={{borderTop: '5px dotted'}} />
         <div className="jumbotron">
           <h1>Hello, I am Lakshit Madaan</h1>
           <h2>Full Stack Developer</h2>
            <div className="social-links">

            <a className="nav-link" href="https://www.linkedin.com/in/lakshit-madaan-589b3316b/">
             <i class="fab fa-linkedin"></i>
            </a>
            
            <a className="nav-link" href="https://www.facebook.com/lakshit.madaan">
             <i class="fab fa-facebook-f"></i>
            </a>
            
            <a className="nav-link" href="https://github.com/lakshitmadaan20"> 
              <i class="fab fa-github"></i>
            </a>
            </div>
            <hr style={{
              borderTop:'5px dotted'
            }}/>
            <div className="container">
           <Link className="btn btn-block btn-primary" to='./about'>
               View My Work
            </Link>
          </div>
         </div>
        
       </div>
      </div>
      )
  
  }
}

export default Landing;