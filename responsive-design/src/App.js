import logo from './logo.svg';
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      navLinks: ['services', 'portfolio', 'about', 'team', 'contact'],
      isMenuOpen: false,
    }

  }

  render() {
    const {navLinks, isMenuOpen} = this.state;
    return (

      <div className="App" >
        <NavBar links={navLinks}/>
        <Header />
        <Services />
      </div >
    );
  }

}

export default App;
