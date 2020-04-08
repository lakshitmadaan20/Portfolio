import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <h3>2015 - 2017</h3>
          
        </Cell>
        <Cell col={8}>
          <h2 style={{marginTop:'0px'}}>High School(CBSE)</h2>
          <h3>Name: NKBPS</h3>
          <h4>Percentage: 84%</h4>
        </Cell>

        <hr style={{borderTop: '4px solid #fff'}} ></hr>

        <Cell col={4}>
          <h3>2017 - current</h3>
        </Cell>
        <Cell col={8}>
          <h2 style={{marginTop:'0px'}}>Btech CSE</h2>
          <h3>Institution: HMRITM</h3>
          <h4>CGPA: 8</h4>
        </Cell>
      </Grid>
    )
  }
}

export default Education;