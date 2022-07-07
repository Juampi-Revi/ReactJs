import './Navbar.css';
import CartWdiget from '../CartWidget/CartWidget';

function Navbar (){
    return (
        <nav>
            <img src ='' alt = ''/>
            <ul>
                <li>Productos</li>
                <li>¿Quienes Somos?</li>
                <li>Promociones</li>
                <li>Contacto</li>
            </ul>
            <CartWdiget/>
        </nav>
    )
};

export default Navbar;