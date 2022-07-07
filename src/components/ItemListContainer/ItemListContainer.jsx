import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer () {
    return (
        <div className='titulo'>
            <h1>Mi Tienda</h1>
            <ItemCount/>
        </div>
    )
};

export default ItemListContainer;