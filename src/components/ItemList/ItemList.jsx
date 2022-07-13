import './ItemList.css';
import Item from '../Item/Item';

function ItemList ({ data }){
    console.log(data);
    return (
        data.map(
            el => <Item key = {el.id} name = {el.title} imagen = {el.img} precio = {el.price} stock = {el.stock}/>
        ) 
    )
};

export default ItemList;