import './CartWidget.css';
import Pantalla from '../Pantalla/Pantalla';

function CartWdiget ({ input }) {
    return (
        <div className = 'contenedor-icono'>
            <i className="bi bi-cart4"/>
            <Pantalla className= 'contador' input = { input }/>
        </div>
    )
};

export default CartWdiget;