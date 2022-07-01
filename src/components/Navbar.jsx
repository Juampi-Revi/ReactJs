import './Navbar.css';
function NavBar() {
    return (  
        <nav>
            <h1>Logo</h1>
            <ul>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="/#">Productos</a>
                </li>
                <li>
                    <a href="/#">Contacto</a>
                </li>
            </ul>
            <a href="/#">
                <span></span>
            </a>
        </nav>
    );
}

export default NavBar; ;