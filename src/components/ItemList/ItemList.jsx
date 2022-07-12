import './ItemList.css';
import Item from '../Item/Item';

function ItemList ({ data }){
    console.log(data);
    return (
        data.map(
            el => <Item key = {data.id} name = {data.title} imagen = {data.imagen} precio = {data.precio} stock = {data.stock}/>
        ) 
    )
};

export default ItemList;