import React, { Component } from 'react';
import {Button , Icon} from 'semantic-ui-react'
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.name}>
                    <a href={item.url}>
                    <Button size="huge" color={item.color}>
                      <Icon name={item.name} /> {item.header}
                    </Button>
                    </a>
                  </li>
                )
              })
            }
            </ul>
           
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}