import './Navbar.css';
import ItemsList from './ItemsListContainer';
import IconCart from './CardWidget';
function NavBar() {
    return (  
        <nav>
            <h1>Logo</h1>
            <ItemsList name= "Home"/>
            <IconCart/>
            <button>Login</button>
        </nav>
    );
}

export default NavBar; 