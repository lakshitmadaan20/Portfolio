import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <h3>Jan 2019 - Jul 2019 </h3>
          
        </Cell>
        <Cell col={8}>
          <h2 style={{marginTop:'0px'}}>Brain Mentors</h2>
          <h5>Worked as a full stack developer and on some client side projects such as social networking platform</h5>
          
        </Cell>

        <hr style={{borderTop: '4px solid #fff'}} ></hr>

       
      </Grid>
    )
  }
}

export default Education;