import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConductPage from './pages/ConductPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'gokul',
      headerLinks: [
        { title: 'Home' , path: '/reactportfolio' },
        { title: 'About' , path: '/about' },
        { title: 'Conduct' , path: '/conduct' }
      ],
      home: {
        title: 'web developer',
        subTitle: 'passinate to code',
        text: 'check it out my projects'
      },
      about: {
        title: 'About',
      },
      conduct: {
        title: 'Lets talk',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg-transparent expand='lg' >
            <Navbar.Brand className='navbar-brand'>Gokul</Navbar.Brand>

            <Navbar.Toggle className='border-0' aria-controls='Navbar-Toggle' />
            <Navbar.Collapse id='Navbar-Toggle' >
              <Nav className="navbar ml-auto">
                <Link className="nav-link" to="/reactportfolio">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/conduct">Conduct</Link>
                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/reactportfolio" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/conduct" render={() => <ConductPage title={this.state.conduct.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}


export default App;
