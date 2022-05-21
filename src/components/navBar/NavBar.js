import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar =() => {
    return (
        <header className="headerPrincipal">
		<div className="container">
			<h1 className="headerPrincipal-titulo">
            <img className="logo" src='./img/logo.jpg' alt="Fruto y Fruta"/>
			</h1>

			<nav className="headerPrincipal-nav">
				<a className="headerPrincipal-nav-link" href='/#'>Home</a>
				<a className="headerPrincipal-nav-link" href='/#'>Nuetras Viandas</a>
				<a className="headerPrincipal-nav-link" href='/#'>Quienes somos</a>
				<a className="headerPrincipal-nav-link" href='/#'>Contactos</a>
				<a className="headerPrincipal-nav-link headerPrincipal-nav-link-app" href='/#'>Loging</a>
			</nav>
            <CartWidget/>
		</div>  
	</header>
    )
}


export default NavBar;