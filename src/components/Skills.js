import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}> <h4>MERN Stack</h4>  <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
          <div style={{display: 'flex'}}> <h4>UI</h4>  <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
          <div style={{display: 'flex'}}> <h4>C/C++</h4>  <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
          <div style={{display: 'flex'}}><h4>Blockchain
            </h4>  <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;