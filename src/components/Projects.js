import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {

    render() {
        return (
            <div className="container"> 
              <h1 className="text-center bg-primary text-white">Projects</h1>
                <div className="jumbotron">
                  
                <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Contact Manager</CardTitle>
            <CardText>
               Contact manager is a full stack app built on MERN stack which handles all your contacts and keep record of them
            </CardText>
            <CardActions border>
              <a href='' className="btn btn-outline-success btn-block">Github</a>
              <a href='https://contact-keeper-manager.herokuapp.com/register' className="btn btn-outline-primary btn-block">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Github Finder</CardTitle>
            <CardText>
              Github Finder is an app bult on React, you can find and view repos of other github users
            </CardText>
            <CardActions border>
            <a href='' className="btn btn-outline-success btn-block">Github</a>
              <a href="https://githubfinder3098.herokuapp.com/" className="btn btn-outline-primary btn-block">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Todo App</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <a href="" className="btn btn-outline-success btn-block">Github</a>
              <a href="https://thetodoapp3098.herokuapp.com/" className="btn btn-outline-primary btn-block">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

       <br/>
       <hr/>
       <br/>
     
      

      <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Ecommerce App</CardTitle>
            <CardText>
              Ecommerce app is made for mobile and accessories you can purchase and sell on this platform with proper CRUD operation
            </CardText>
            <CardActions border>
              <a href="" className="btn btn-outline-success btn-block">Github</a>
              <a href="" className="btn btn-outline-primary btn-block">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Devzone - A social networking platform</CardTitle>
            <CardText>
              DEvzone is a social networking platform for developers where they can interact and share views with each other
             </CardText>
            <CardActions border>
              <a href="" className="btn btn-outline-success btn-block">Github</a>
              <a href="" className="btn btn-outline-primary btn-block">Live Demo</a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        
        </div>
          
                      
                       
                    </div>
                    </div>
                



               
                
                  
                   

               
                
            
        )
    }
}

export default Projects
