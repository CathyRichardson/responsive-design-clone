import './NavBar.css';

const NavBar = ({ links, isMenuOpen, toggleMenu }) => {

    return (
        <div>
            <nav>
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="start bootstrap logo" />
                <ul>
                    {links.map(link => <li>{link}</li>)}
                </ul>
                <a onClick={toggleMenu}>Menu<img src="https://icon-library.com/images/hamburger-menu-icon-transparent/hamburger-menu-icon-transparent-1.jpg" /></a>
            </nav>
            <menu className={isMenuOpen ?  'menu-visible' : 'menu-hidden'}>
                {links.map(link => <li>{link}</li>)}
            </menu>
        </div>

    )
}

export default NavBar;

