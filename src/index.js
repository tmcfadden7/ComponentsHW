import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';

class Nav extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route path = '/Contact' component = {Contact} />
          <Route path = '/Footer' component = {Footer} />
          <Route path = '/Home' component = {Home} />
          <Route path = '/Main' component = {Main} />
          <Route path = '/' component = {Navbar} />
          <Route path = '/Projects' component = {Projects} />
          <Route path = '/Resume' component = {Resume} />
          <Route path = '/SocialLinks' component= {SocialLinks} />
        </div>
      </BrowserRouter>
    )
  }
}


ReactDOM.render( <Nav />, document.getElementById('root'));
registerServiceWorker();
