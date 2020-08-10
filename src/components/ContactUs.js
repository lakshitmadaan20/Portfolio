import React, { Component } from 'react';
import {Container, Card} from 'semantic-ui-react'

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row">
        <div className="twelve columns collapsed">
          <h1 style={{textAlign:'center', color: "white", fontFamily:'sans'}}>Certifications</h1>
          <br/>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio1 && resumeData.portfolio1.map((item)=>{
              return(
                <Container textAlign="center">
                     <a href={`${item.link}`}>
                <div className="columns portfolio-item">
                  <div  className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                   
                  </div>
                </div>
              </a>
                </Container>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}