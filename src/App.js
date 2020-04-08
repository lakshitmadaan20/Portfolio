import React from 'react';
import Main from './components/Main';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import './App.css'
import {Link} from 'react-router-dom';




function App() {
  return (
       
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color " title="Lakshit" scroll>
            <Navigation>
                <Link to='/'>Home</Link>
                
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>Resume</Link>
               
            </Navigation>
        </Header>
        <Drawer title="Lakshit">
        <Navigation>
                <Link to='/'>Home</Link>
            
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>Resume</Link>
               
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
      
   
  );
}

export default App;
