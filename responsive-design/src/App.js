
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

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render() {
    const { navLinks, isMenuOpen } = this.state;
    return (

      <div className="App" >
        <div className="main-header">
          <NavBar
            links={navLinks}
            isMenuOpen={isMenuOpen}
            toggleMenu={this.toggleMenu}
          />
          <Header />
        </div>
        <Services />
      </div >
    );
  }

}

export default App;
