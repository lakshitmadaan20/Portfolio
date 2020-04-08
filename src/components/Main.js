import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import resume from './Resume';
import Resume from './Resume';

const Main = () => {
    return(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route  path='/projects' component={Projects} />
        <Route  path='/resume' component={Resume} />
    </Switch>
    )
}
export default Main;