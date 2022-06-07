import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar =() => {
    return (
        <header className="headerPrincipal">
		<nav className="container">
		<Link to='/'>
				<h1 className="headerPrincipal-titulo">
				<img className="logo" src='./img/logo.jpg' alt="Fruto y Fruta"/>
				</h1>
		</Link>
			<div className="headerPrincipal-nav">
				<NavLink to='/' className="headerPrincipal-nav-link" >Home</NavLink>
				<NavLink to='/category/principal' className="headerPrincipal-nav-link">Platos principales</NavLink>
				<NavLink to='/category/postre' className="headerPrincipal-nav-link">Postres</NavLink>
				<NavLink to='/' className="headerPrincipal-nav-link">Contacto</NavLink>
				<NavLink to='/'className="headerPrincipal-nav-link">Loging</NavLink>
			</div>
            <CartWidget/>
		</nav>  
	</header>
    )
}


export default NavBar;