import './ItemDetailsContainer.css';
import ItemDetails from '../ItemDetails/ItemDetails';

function ItemDetailsContainer ( { data } ){
    const producto = data.filter((prod)=> prod.id === 1 );
    console.log(producto);
    return (
        producto.map(
            el => <ItemDetails key = {el.id} name = {el.title} imagen = {el.img} precio = {el.price} stock = {el.stock} detalles = {el.detalles} categoria = {el.categoria}/>
        ) 
    )
};

export default ItemDetailsContainer;