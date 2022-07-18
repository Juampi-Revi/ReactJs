import './ItemDetails.css';


function ItemDetails ({ name, precio, imagen, categoria, stock, detalles }){
    return (
        <div>
            <h2 className='nombre-producto'>{ name }</h2>
            <img className='imagen-producto' src={imagen} alt= { name } />
            <button className='boton-producto'>Mas detalles</button>
            <h3 className='precio-producto'>$ { precio }</h3>
            <h4 className= 'categoria'>{ categoria } </h4>
            <p className='stock-producto'>Stock disponible: { stock }</p>
            <p className='detalles-producto'> { detalles }</p>
        </div>
    )
};

export default ItemDetails;