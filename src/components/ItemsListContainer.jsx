import './Navbar.css';
function ItemsList(props) {
    return (  
        <ul>
            <li>
                <a href="/#">{props.name}</a>
            </li>
            <li>
                <a href="/#">Productos</a>
            </li>
            <li>
                <a href="/#">Contacto</a>
            </li>
        </ul>
    );
}

export default ItemsList; ;