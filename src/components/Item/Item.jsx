import './Item.css';

function Item ({ name, imagen, precio, stock, }){
    return(
        <div className='card-producto' >
            <h2 className='nombre-producto'>{ name }</h2>
            <img className='imagen-producto' src={imagen} alt= { name } />
            <button className='boton-producto'>Mas detalles</button>
            <h3 className='precio-producto'>$ { precio }</h3>
            <p className='stock-producto'>Stock disponible: { stock }</p>
        </div>
    )
};

export default Item;