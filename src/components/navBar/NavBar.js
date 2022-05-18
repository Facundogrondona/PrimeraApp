import CartWidget from '../CartWidget/CartWidget'

const NavBar =() => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="/#">
            <CartWidget />
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                    <button type="button" class="btn btn-outline-success">Inicio</button>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Vehiculos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Electronica</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#">Juegos</a>
                        </li>    
                    </ul>
                    <button type="button" class="btn btn-outline-success">Loging</button>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;