import './NavBar.css';

const NavBar = ({ links }) => {

    return (
        <nav>
            <img  src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="start bootstrap logo"/>
            <ul>
                {links.map( link => <li>{link}</li>)}
            </ul>
        </nav>
    )
}

export default NavBar;